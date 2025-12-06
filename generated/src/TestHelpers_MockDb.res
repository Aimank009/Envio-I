
/***** TAKE NOTE ******
This file module is a hack to get genType to work!

In order for genType to produce recursive types, it needs to be at the 
root module of a file. If it's defined in a nested module it does not 
work. So all the MockDb types and internal functions are defined here in TestHelpers_MockDb
and only public functions are recreated and exported from TestHelpers.MockDb module.

the following module:
```rescript
module MyModule = {
  @genType
  type rec a = {fieldB: b}
  @genType and b = {fieldA: a}
}
```

produces the following in ts:
```ts
// tslint:disable-next-line:interface-over-type-literal
export type MyModule_a = { readonly fieldB: b };

// tslint:disable-next-line:interface-over-type-literal
export type MyModule_b = { readonly fieldA: MyModule_a };
```

fieldB references type b which doesn't exist because it's defined
as MyModule_b
*/

open Belt

let mockEventRegisters = Utils.WeakMap.make()

/**
A raw js binding to allow deleting from a dict. Used in store delete operation
*/
let deleteDictKey: (dict<'a>, string) => unit = %raw(`
    function(dict, key) {
      delete dict[key]
    }
  `)

let config = Generated.configWithoutRegistrations
EventRegister.startRegistration(
  ~ecosystem=config.ecosystem,
  ~multichain=config.multichain,
  ~preloadHandlers=config.preloadHandlers,
)

/**
The mockDb type is simply an InMemoryStore internally. __dbInternal__ holds a reference
to an inMemoryStore and all the the accessor methods point to the reference of that inMemory
store
*/
@genType.opaque
type inMemoryStore = InMemoryStore.t

@genType
type rec t = {
  __dbInternal__: inMemoryStore,
  entities: entities,
  rawEvents: storeOperations<InMemoryStore.rawEventsKey, InternalTable.RawEvents.t>,
  dynamicContractRegistry: entityStoreOperations<InternalTable.DynamicContractRegistry.t>,
  processEvents: array<Types.eventLog<unknown>> => promise<t>,
}

// Each user defined entity will be in this record with all the store or "mockdb" operators
@genType
and entities = {
    @as("ChronoGridWrapper_BetPlacedWithSession") chronoGridWrapper_BetPlacedWithSession: entityStoreOperations<Entities.ChronoGridWrapper_BetPlacedWithSession.t>,
    @as("ChronoGridWrapper_Deposited") chronoGridWrapper_Deposited: entityStoreOperations<Entities.ChronoGridWrapper_Deposited.t>,
    @as("ChronoGridWrapper_EIP712DomainChanged") chronoGridWrapper_EIP712DomainChanged: entityStoreOperations<Entities.ChronoGridWrapper_EIP712DomainChanged.t>,
    @as("ChronoGridWrapper_FinalBalance") chronoGridWrapper_FinalBalance: entityStoreOperations<Entities.ChronoGridWrapper_FinalBalance.t>,
    @as("ChronoGridWrapper_RelayerUpdated") chronoGridWrapper_RelayerUpdated: entityStoreOperations<Entities.ChronoGridWrapper_RelayerUpdated.t>,
    @as("ChronoGridWrapper_UpdatedPnl") chronoGridWrapper_UpdatedPnl: entityStoreOperations<Entities.ChronoGridWrapper_UpdatedPnl.t>,
    @as("ChronoGridWrapper_Withdrawn") chronoGridWrapper_Withdrawn: entityStoreOperations<Entities.ChronoGridWrapper_Withdrawn.t>,
    @as("ChronoGrid_AutoClaimFailed") chronoGrid_AutoClaimFailed: entityStoreOperations<Entities.ChronoGrid_AutoClaimFailed.t>,
    @as("ChronoGrid_AutoClaimSkipped") chronoGrid_AutoClaimSkipped: entityStoreOperations<Entities.ChronoGrid_AutoClaimSkipped.t>,
    @as("ChronoGrid_BetPlaced") chronoGrid_BetPlaced: entityStoreOperations<Entities.ChronoGrid_BetPlaced.t>,
    @as("ChronoGrid_GlobalLiquidityAdded") chronoGrid_GlobalLiquidityAdded: entityStoreOperations<Entities.ChronoGrid_GlobalLiquidityAdded.t>,
    @as("ChronoGrid_GlobalLiquidityUpdated") chronoGrid_GlobalLiquidityUpdated: entityStoreOperations<Entities.ChronoGrid_GlobalLiquidityUpdated.t>,
    @as("ChronoGrid_GridCreated") chronoGrid_GridCreated: entityStoreOperations<Entities.ChronoGrid_GridCreated.t>,
    @as("ChronoGrid_MaxBetAmountUpdated") chronoGrid_MaxBetAmountUpdated: entityStoreOperations<Entities.ChronoGrid_MaxBetAmountUpdated.t>,
    @as("ChronoGrid_OwnershipTransferred") chronoGrid_OwnershipTransferred: entityStoreOperations<Entities.ChronoGrid_OwnershipTransferred.t>,
    @as("ChronoGrid_TimeperiodCreated") chronoGrid_TimeperiodCreated: entityStoreOperations<Entities.ChronoGrid_TimeperiodCreated.t>,
    @as("ChronoGrid_TimeperiodFinalized") chronoGrid_TimeperiodFinalized: entityStoreOperations<Entities.ChronoGrid_TimeperiodFinalized.t>,
    @as("ChronoGrid_TimeperiodSettled") chronoGrid_TimeperiodSettled: entityStoreOperations<Entities.ChronoGrid_TimeperiodSettled.t>,
    @as("ChronoGrid_WinningsClaimedEqual") chronoGrid_WinningsClaimedEqual: entityStoreOperations<Entities.ChronoGrid_WinningsClaimedEqual.t>,
    @as("ChronoGrid_WrapperSet") chronoGrid_WrapperSet: entityStoreOperations<Entities.ChronoGrid_WrapperSet.t>,
  }
// User defined entities always have a string for an id which is used as the
// key for entity stores
@genType
and entityStoreOperations<'entity> = storeOperations<string, 'entity>
// all the operator functions a user can access on an entity in the mock db
// stores refer to the the module that MakeStore functor outputs in IO.res
@genType
and storeOperations<'entityKey, 'entity> = {
  getAll: unit => array<'entity>,
  get: 'entityKey => option<'entity>,
  set: 'entity => t,
  delete: 'entityKey => t,
}

/**
a composable function to make the "storeOperations" record to represent all the mock
db operations for each entity.
*/
let makeStoreOperatorEntity = (
  ~inMemoryStore: InMemoryStore.t,
  ~makeMockDb,
  ~getStore: InMemoryStore.t => InMemoryTable.Entity.t<'entity>,
  ~getKey: 'entity => Types.id,
): storeOperations<Types.id, 'entity> => {
  let {getUnsafe, values, set} = module(InMemoryTable.Entity)

  let get = id => {
    let store = inMemoryStore->getStore
    if store.table->InMemoryTable.hasByHash(id) {
      getUnsafe(store)(id)
    } else {
      None
    }
  }

  let getAll = () =>
    inMemoryStore
    ->getStore
    ->values

  let delete = entityId => {
    let cloned = inMemoryStore->InMemoryStore.clone
    let table = cloned->getStore

    table->set(
      {
        entityId,
        entityUpdateAction: Delete,
        checkpointId: 0,
      },
      ~shouldSaveHistory=false,
    )

    cloned->makeMockDb
  }

  let set = entity => {
    let cloned = inMemoryStore->InMemoryStore.clone
    let table = cloned->getStore
    let entityId = entity->getKey

    table->set(
      {
        entityId,
        entityUpdateAction: Set(entity),
        checkpointId: 0,
      },
      ~shouldSaveHistory=false,
    )

    cloned->makeMockDb
  }

  {
    getAll,
    get,
    set,
    delete,
  }
}

let makeStoreOperatorMeta = (
  ~inMemoryStore: InMemoryStore.t,
  ~makeMockDb,
  ~getStore: InMemoryStore.t => InMemoryTable.t<'key, 'value>,
  ~getKey: 'value => 'key,
): storeOperations<'key, 'value> => {
  let {get, values, set} = module(InMemoryTable)

  let get = id => get(inMemoryStore->getStore, id)

  let getAll = () => inMemoryStore->getStore->values->Array.map(row => row)

  let set = metaData => {
    let cloned = inMemoryStore->InMemoryStore.clone
    cloned->getStore->set(metaData->getKey, metaData)
    cloned->makeMockDb
  }

  // TODO: Remove. Is delete needed for meta data?
  let delete = key => {
    let cloned = inMemoryStore->InMemoryStore.clone
    let store = cloned->getStore
    store.dict->deleteDictKey(key->store.hash)
    cloned->makeMockDb
  }

  {
    getAll,
    get,
    set,
    delete,
  }
}

/**
Accessor function for getting the internal inMemoryStore in the mockDb
*/
let getInternalDb = (self: t) => self.__dbInternal__

let getEntityOperations = (mockDb: t, ~entityName: string): entityStoreOperations<
  Internal.entity,
> => {
  mockDb.entities
  ->Utils.magic
  ->Utils.Dict.dangerouslyGetNonOption(entityName)
  ->Utils.Option.getExn("Mocked operations for entity " ++ entityName ++ " not found")
}

/**
A function composer for simulating the writing of an inMemoryStore to the external db with a mockDb.
Runs all set and delete operations currently cached in an inMemory store against the mockDb
*/
let executeRowsEntity = (
  mockDb: t,
  ~inMemoryStore: InMemoryStore.t,
  ~entityConfig: Internal.entityConfig,
) => {
   let getInMemTable = (inMemoryStore: InMemoryStore.t) =>
    inMemoryStore->InMemoryStore.getInMemTable(~entityConfig)

  let inMemTable = getInMemTable(inMemoryStore)

  inMemTable.table
  ->InMemoryTable.values
  ->Array.forEach(row => {
    let mockDbTable = mockDb->getInternalDb->getInMemTable
    switch row.entityRow {
    | Updated({latest: {entityUpdateAction: Set(entity)}})
    | InitialReadFromDb(AlreadySet(entity)) =>
      let key = (entity: Internal.entity).id
      mockDbTable->InMemoryTable.Entity.initValue(
        ~allowOverWriteEntity=true,
        ~key,
        ~entity=Some(entity),
      )
    | Updated({latest: {entityUpdateAction: Delete, entityId}}) =>
      mockDbTable.table.dict->deleteDictKey(entityId)
    | InitialReadFromDb(NotSet) => ()
    }
  })
}

let executeRowsMeta = (
  mockDb: t,
  ~inMemoryStore: InMemoryStore.t,
  ~getInMemTable: InMemoryStore.t => InMemoryTable.t<'key, 'entity>,
  ~getKey: 'entity => 'key,
) => {
  let mockDbTable = mockDb->getInternalDb->getInMemTable
  inMemoryStore
  ->getInMemTable
  ->InMemoryTable.values
  ->Array.forEach(row => {
    mockDbTable->InMemoryTable.set(getKey(row), row)
  })
}

/**
The internal make function which can be passed an in memory store and
instantiate a "MockDb". This is useful for cloning or making a MockDb
out of an existing inMemoryStore
*/
let rec makeWithInMemoryStore: InMemoryStore.t => t = (inMemoryStore: InMemoryStore.t) => {
  let rawEvents = makeStoreOperatorMeta(
    ~inMemoryStore,
    ~makeMockDb=makeWithInMemoryStore,
    ~getStore=db => db.rawEvents,
    ~getKey=({chainId, eventId}) => {
      chainId,
      eventId: eventId->BigInt.toString,
    },
  )

  let dynamicContractRegistry = makeStoreOperatorEntity(
    ~inMemoryStore,
    ~getStore=db =>
      db
      ->InMemoryStore.getInMemTable(
        ~entityConfig=InternalTable.DynamicContractRegistry.config,
      )
      ->(
        Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
          InternalTable.DynamicContractRegistry.t,
        >
      ),
    ~makeMockDb=makeWithInMemoryStore,
    ~getKey=({chainId, contractAddress}) => {
      InternalTable.DynamicContractRegistry.makeId(~chainId, ~contractAddress)
    },
  )

  let entities = {
      chronoGridWrapper_BetPlacedWithSession: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGridWrapper_BetPlacedWithSession)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGridWrapper_BetPlacedWithSession.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGridWrapper_Deposited: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGridWrapper_Deposited)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGridWrapper_Deposited.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGridWrapper_EIP712DomainChanged: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGridWrapper_EIP712DomainChanged)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGridWrapper_EIP712DomainChanged.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGridWrapper_FinalBalance: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGridWrapper_FinalBalance)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGridWrapper_FinalBalance.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGridWrapper_RelayerUpdated: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGridWrapper_RelayerUpdated)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGridWrapper_RelayerUpdated.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGridWrapper_UpdatedPnl: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGridWrapper_UpdatedPnl)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGridWrapper_UpdatedPnl.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGridWrapper_Withdrawn: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGridWrapper_Withdrawn)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGridWrapper_Withdrawn.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGrid_AutoClaimFailed: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGrid_AutoClaimFailed)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGrid_AutoClaimFailed.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGrid_AutoClaimSkipped: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGrid_AutoClaimSkipped)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGrid_AutoClaimSkipped.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGrid_BetPlaced: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGrid_BetPlaced)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGrid_BetPlaced.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGrid_GlobalLiquidityAdded: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGrid_GlobalLiquidityAdded)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGrid_GlobalLiquidityAdded.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGrid_GlobalLiquidityUpdated: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGrid_GlobalLiquidityUpdated)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGrid_GlobalLiquidityUpdated.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGrid_GridCreated: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGrid_GridCreated)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGrid_GridCreated.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGrid_MaxBetAmountUpdated: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGrid_MaxBetAmountUpdated)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGrid_MaxBetAmountUpdated.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGrid_OwnershipTransferred: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGrid_OwnershipTransferred)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGrid_OwnershipTransferred.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGrid_TimeperiodCreated: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGrid_TimeperiodCreated)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGrid_TimeperiodCreated.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGrid_TimeperiodFinalized: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGrid_TimeperiodFinalized)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGrid_TimeperiodFinalized.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGrid_TimeperiodSettled: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGrid_TimeperiodSettled)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGrid_TimeperiodSettled.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGrid_WinningsClaimedEqual: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGrid_WinningsClaimedEqual)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGrid_WinningsClaimedEqual.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
      chronoGrid_WrapperSet: {
        makeStoreOperatorEntity(
          ~inMemoryStore,
          ~makeMockDb=makeWithInMemoryStore,
          ~getStore=db => db->InMemoryStore.getInMemTable(
            ~entityConfig=module(Entities.ChronoGrid_WrapperSet)->Entities.entityModToInternal,
          )->(
            Utils.magic: InMemoryTable.Entity.t<Internal.entity> => InMemoryTable.Entity.t<
              Entities.ChronoGrid_WrapperSet.t,
            >
          ),
          ~getKey=({id}) => id,
        )
      },
  }

  let mockDb = {
    __dbInternal__: inMemoryStore,
    entities,
    rawEvents,
    dynamicContractRegistry,
    processEvents: %raw(`null`),
  }
  (mockDb->Utils.magic)["processEvents"] = makeProcessEvents(mockDb, ~chainId=?None)
  mockDb
}
and makeProcessEvents = (mockDb: t, ~chainId=?) => async (
  events: array<Types.eventLog<unknown>>,
) => {
  if events->Utils.Array.isEmpty {
    mockDb
  } else {
    let itemsWithContractRegister = []

    let registrations = EventRegister.finishRegistration()
    let registrations = if (
      registrations.hasEvents || !(registrations.onBlockByChainId->Utils.Dict.isEmpty)
    ) {
      registrations
    } else {
      Generated.registerAllHandlers()
    }

    let config = Generated.makeGeneratedConfig()
    let indexer: Indexer.t = {
      registrations,
      config,
      persistence: Generated.codegenPersistence,
    }

    let processingChainId = ref(chainId)
    let latestFetchedBlockNumber = ref(0)
    let newItems = events->Array.map(event => {
      let event = event->Internal.fromGenericEvent
      let eventConfig = switch mockEventRegisters->Utils.WeakMap.get(event) {
      | Some(register) => register()
      | None =>
        Js.Exn.raiseError(
          "Events must be created using the mock API (e.g. createMockEvent) to be processed by mockDb.processEvents",
        )
      }
      let chainId = switch chainId {
      | Some(chainId) => chainId
      | None => event.chainId
      }

      switch processingChainId.contents {
      | Some(prevItemChainId) =>
        if prevItemChainId !== chainId {
          Js.Exn.raiseError(
            `Processing events on multiple chains is not supported yet. Got chainId ${chainId->Belt.Int.toString} but expected ${prevItemChainId->Belt.Int.toString}`,
          )
        }
      | None => processingChainId.contents = Some(chainId)
      }

      let chain = config->Config.getChain(~chainId)
      let item = Internal.Event({
        eventConfig,
        event,
        chain,
        logIndex: event.logIndex,
        timestamp: event.block->Types.Block.getTimestamp,
        blockNumber: event.block->Types.Block.getNumber,
      })
      latestFetchedBlockNumber.contents = Pervasives.max(
        latestFetchedBlockNumber.contents,
        event.block->Types.Block.getNumber,
      )
      if eventConfig.contractRegister->Option.isSome {
        itemsWithContractRegister->Js.Array2.push(item)->ignore
      }
      item
    })

    let processingChainId = switch processingChainId.contents {
    | Some(chainId) => chainId
    | None =>
      Js.Exn.raiseError("No events provided to processEvents. Please provide at least one event.")
    }
    let processingChain = config->Config.getChain(~chainId=processingChainId)

    let chainFetcher = ChainFetcher.makeFromConfig(
      config.chainMap->ChainMap.get(processingChain),
      ~config,
      ~registrations=indexer.registrations,
      ~targetBufferSize=5000,
    )

    //Deep copy the data in mockDb, mutate the clone and return the clone
    //So no side effects occur here and state can be compared between process
    //steps
    let mockDbClone = mockDb->cloneMockDb

    //Construct a new instance of an in memory store to run for the given event
    let inMemoryStore = InMemoryStore.make(~entities=Entities.allEntities)
    let loadManager = LoadManager.make()
    let persistence = {
      ...indexer.persistence,
      storage: makeMockStorage(mockDb),
      storageStatus: Ready({
        cleanRun: false,
        cache: Js.Dict.empty(),
        chains: [],
        reorgCheckpoints: [],
        checkpointId: 0,
      }),
    }
    let indexer = {
      ...indexer,
      persistence,
    }

    let newItemsWithDcs = if itemsWithContractRegister->Utils.Array.notEmpty {
      await ChainFetcher.runContractRegistersOrThrow(
        ~itemsWithContractRegister,
        ~chain=processingChain,
        ~config,
      )
    } else {
      itemsWithContractRegister
    }

    let updatedFetchState = ref(chainFetcher.fetchState)

    switch newItemsWithDcs {
    | [] => ()
    | _ =>
      updatedFetchState :=
        updatedFetchState.contents->FetchState.registerDynamicContracts(newItemsWithDcs)
    }

    updatedFetchState :=
      updatedFetchState.contents
      ->FetchState.handleQueryResult(
        ~latestFetchedBlock={
          blockNumber: latestFetchedBlockNumber.contents,
          blockTimestamp: 0,
        },
        ~query={
          partitionId: (updatedFetchState.contents.partitions->Array.getUnsafe(0)).id,
          fromBlock: 0,
          selection: {eventConfigs: [], dependsOnAddresses: false},
          addressesByContractName: Js.Dict.empty(),
          target: FetchState.Head,
          indexingContracts: Js.Dict.empty(),
        },
        ~newItems,
      )
      ->Result.getExn

    // Handle query for the rest partitions without items
    // to catch up the latest fully fetched block
    for idx in 1 to updatedFetchState.contents.partitions->Array.length - 1 {
      let partition = updatedFetchState.contents.partitions->Array.getUnsafe(idx)
      updatedFetchState :=
        updatedFetchState.contents
        ->FetchState.handleQueryResult(
          ~latestFetchedBlock={
            blockNumber: latestFetchedBlockNumber.contents,
            blockTimestamp: 0,
          },
          ~query={
            partitionId: partition.id,
            fromBlock: 0,
            selection: {eventConfigs: [], dependsOnAddresses: false},
            addressesByContractName: Js.Dict.empty(),
            target: FetchState.Head,
            indexingContracts: Js.Dict.empty(),
          },
          ~newItems=[],
        )
        ->Result.getExn
    }

    let batch = Batch.prepareUnorderedBatch(
      ~checkpointIdBeforeBatch=0,
      ~chainsBeforeBatch=ChainMap.fromArrayUnsafe([
        (
          processingChain,
          (
            {
              fetchState: updatedFetchState.contents,
              reorgDetection: chainFetcher.reorgDetection,
              progressBlockNumber: chainFetcher.committedProgressBlockNumber,
              sourceBlockNumber: chainFetcher.currentBlockHeight,
              totalEventsProcessed: chainFetcher.numEventsProcessed,
            }: Batch.chainBeforeBatch
          ),
        ),
      ]),
      ~batchSizeTarget=newItems->Array.length,
    )

    inMemoryStore->InMemoryStore.setBatchDcs(~batch, ~shouldSaveHistory=false)

    // Create a mock chains state where the processing chain is ready (simulating "Live" mode)
    let chains = Js.Dict.empty()
    chains->Js.Dict.set(processingChainId->Int.toString, {Internal.isReady: true})

    try {
      await batch->EventProcessing.preloadBatchOrThrow(
        ~loadManager,
        ~persistence,
        ~inMemoryStore,
        ~chains,
      )
      await batch->EventProcessing.runBatchHandlersOrThrow(
        ~inMemoryStore,
        ~loadManager,
        ~indexer,
        ~shouldSaveHistory=false,
        ~shouldBenchmark=false,
        ~chains,
      )
    } catch {
    | EventProcessing.ProcessingError({message, exn, item}) =>
      exn
      ->ErrorHandling.make(~msg=message, ~logger=item->Logging.getItemLogger)
      ->ErrorHandling.logAndRaise
    }

    //In mem store can still contatin raw events and dynamic contracts for the
    //testing framework in cases where either contract register or loaderHandler
    //is None
    mockDbClone->writeFromMemoryStore(~inMemoryStore)
    mockDbClone
  }
}
and makeMockStorage = (mockDb: t): Persistence.storage => {
  {
    isInitialized: () => Js.Exn.raiseError("Not used yet"),
    initialize: (~chainConfigs as _=?, ~entities as _=?, ~enums as _=?) =>
      Js.Exn.raiseError("Not used yet"),
    resumeInitialState: () => Js.Exn.raiseError("Not used yet"),
    loadByIdsOrThrow: (
      type item,
      ~ids,
      ~table: Table.table,
      ~rowsSchema as _: S.t<array<item>>,
    ) => {
      let operations = mockDb->getEntityOperations(~entityName=table.tableName)
      ids
      ->Array.keepMap(id => operations.get(id))
      ->(Utils.magic: array<Internal.entity> => array<item>)
      ->Promise.resolve
    },
    loadByFieldOrThrow: (
      ~fieldName,
      ~fieldSchema as _,
      ~fieldValue,
      ~operator,
      ~table,
      ~rowsSchema as _,
    ) => {
      let mockDbTable =
        mockDb.__dbInternal__.entities->InMemoryStore.EntityTables.get(~entityName=table.tableName)
      let index = TableIndices.Index.makeSingle(
        ~fieldName,
        ~fieldValue,
        ~operator=switch operator {
        | #"=" => Eq
        | #">" => Gt
        | #"<" => Lt
        },
      )
      mockDbTable
      ->InMemoryTable.Entity.values
      ->Array.keep(entity => {
        index->TableIndices.Index.evaluate(
          ~fieldName,
          ~fieldValue=entity->Utils.magic->Js.Dict.unsafeGet(fieldName),
        )
      })
      ->Promise.resolve
    },
    setOrThrow: (~items as _, ~table as _, ~itemSchema as _) => Js.Exn.raiseError("Not used yet"),
    setEffectCacheOrThrow: (~effect as _, ~items as _, ~initialize as _) => Promise.resolve(),
    dumpEffectCache: () => Js.Exn.raiseError("Not used yet"),
  }
}
and /**
Deep copies the in memory store data and returns a new mockDb with the same
state and no references to data from the passed in mockDb
*/
cloneMockDb = (self: t) => {
  let clonedInternalDb = self->getInternalDb->InMemoryStore.clone
  clonedInternalDb->makeWithInMemoryStore
}
and /**
Simulates the writing of processed data in the inMemoryStore to a mockDb. This function
executes all the rows on each "store" (or pg table) in the inMemoryStore
*/
writeFromMemoryStore = (mockDb: t, ~inMemoryStore: InMemoryStore.t) => {
  //INTERNAL STORES/TABLES EXECUTION
  mockDb->executeRowsMeta(
    ~inMemoryStore,
    ~getInMemTable=inMemStore => {inMemStore.rawEvents},
    ~getKey=(entity): InMemoryStore.rawEventsKey => {
      chainId: entity.chainId,
      eventId: entity.eventId->BigInt.toString,
    },
  )

  Generated.codegenPersistence.allEntities->Array.forEach(entityConfig => {
    mockDb->executeRowsEntity(~inMemoryStore, ~entityConfig)
  })
}

/**
The constructor function for a mockDb. Call it and then set up the inital state by calling
any of the set functions it provides access to. A mockDb will be passed into a processEvent 
helper. Note, process event helpers will not mutate the mockDb but return a new mockDb with
new state so you can compare states before and after.
*/
@genType
let //Note: It's called createMockDb over "make" to make it more intuitive in JS and TS

createMockDb = () => makeWithInMemoryStore(InMemoryStore.make(~entities=Entities.allEntities))
