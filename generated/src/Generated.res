@val external require: string => unit = "require"

let registerContractHandlers = (
  ~contractName,
  ~handlerPathRelativeToRoot,
  ~handlerPathRelativeToConfig,
) => {
  try {
    require(`../${Path.relativePathToRootFromGenerated}/${handlerPathRelativeToRoot}`)
  } catch {
  | exn =>
    let params = {
      "Contract Name": contractName,
      "Expected Handler Path": handlerPathRelativeToConfig,
      "Code": "EE500",
    }
    let logger = Logging.createChild(~params)

    let errHandler = exn->ErrorHandling.make(~msg="Failed to import handler file", ~logger)
    errHandler->ErrorHandling.log
    errHandler->ErrorHandling.raiseExn
  }
}

let makeGeneratedConfig = () => {
  let chains = [
    {
      let contracts = [
        {
          Config.name: "ChronoGrid",
          abi: Types.ChronoGrid.abi,
          addresses: [
            "0x35b5585aE3eA66015e3A6499a4f72Bf66927bdBa"->Address.Evm.fromStringOrThrow
,
          ],
          events: [
            (Types.ChronoGrid.AutoClaimFailed.register() :> Internal.eventConfig),
            (Types.ChronoGrid.AutoClaimSkipped.register() :> Internal.eventConfig),
            (Types.ChronoGrid.BetPlaced.register() :> Internal.eventConfig),
            (Types.ChronoGrid.GlobalLiquidityAdded.register() :> Internal.eventConfig),
            (Types.ChronoGrid.GlobalLiquidityUpdated.register() :> Internal.eventConfig),
            (Types.ChronoGrid.GridCreated.register() :> Internal.eventConfig),
            (Types.ChronoGrid.MaxBetAmountUpdated.register() :> Internal.eventConfig),
            (Types.ChronoGrid.OwnershipTransferred.register() :> Internal.eventConfig),
            (Types.ChronoGrid.TimeperiodCreated.register() :> Internal.eventConfig),
            (Types.ChronoGrid.TimeperiodFinalized.register() :> Internal.eventConfig),
            (Types.ChronoGrid.TimeperiodSettled.register() :> Internal.eventConfig),
            (Types.ChronoGrid.WinningsClaimedEqual.register() :> Internal.eventConfig),
            (Types.ChronoGrid.WrapperSet.register() :> Internal.eventConfig),
          ],
          startBlock: None,
        },
        {
          Config.name: "ChronoGridWrapper",
          abi: Types.ChronoGridWrapper.abi,
          addresses: [
            "0x43e3A4d6f27DB8b06Ff88AbC59C07DCc5c42C1Dd"->Address.Evm.fromStringOrThrow
,
          ],
          events: [
            (Types.ChronoGridWrapper.BetPlacedWithSession.register() :> Internal.eventConfig),
            (Types.ChronoGridWrapper.Deposited.register() :> Internal.eventConfig),
            (Types.ChronoGridWrapper.EIP712DomainChanged.register() :> Internal.eventConfig),
            (Types.ChronoGridWrapper.FinalBalance.register() :> Internal.eventConfig),
            (Types.ChronoGridWrapper.RelayerUpdated.register() :> Internal.eventConfig),
            (Types.ChronoGridWrapper.UpdatedPnl.register() :> Internal.eventConfig),
            (Types.ChronoGridWrapper.Withdrawn.register() :> Internal.eventConfig),
          ],
          startBlock: None,
        },
      ]
      let chain = ChainMap.Chain.makeUnsafe(~chainId=999)
      {
        Config.maxReorgDepth: 200,
        startBlock: 0,
        id: 999,
        contracts,
        sources: NetworkSources.evm(~chain, ~contracts=[{name: "ChronoGrid",events: [Types.ChronoGrid.AutoClaimFailed.register(), Types.ChronoGrid.AutoClaimSkipped.register(), Types.ChronoGrid.BetPlaced.register(), Types.ChronoGrid.GlobalLiquidityAdded.register(), Types.ChronoGrid.GlobalLiquidityUpdated.register(), Types.ChronoGrid.GridCreated.register(), Types.ChronoGrid.MaxBetAmountUpdated.register(), Types.ChronoGrid.OwnershipTransferred.register(), Types.ChronoGrid.TimeperiodCreated.register(), Types.ChronoGrid.TimeperiodFinalized.register(), Types.ChronoGrid.TimeperiodSettled.register(), Types.ChronoGrid.WinningsClaimedEqual.register(), Types.ChronoGrid.WrapperSet.register()],abi: Types.ChronoGrid.abi}, {name: "ChronoGridWrapper",events: [Types.ChronoGridWrapper.BetPlacedWithSession.register(), Types.ChronoGridWrapper.Deposited.register(), Types.ChronoGridWrapper.EIP712DomainChanged.register(), Types.ChronoGridWrapper.FinalBalance.register(), Types.ChronoGridWrapper.RelayerUpdated.register(), Types.ChronoGridWrapper.UpdatedPnl.register(), Types.ChronoGridWrapper.Withdrawn.register()],abi: Types.ChronoGridWrapper.abi}], ~hyperSync=Some("https://999.hypersync.xyz"), ~allEventSignatures=[Types.ChronoGrid.eventSignatures, Types.ChronoGridWrapper.eventSignatures]->Belt.Array.concatMany, ~shouldUseHypersyncClientDecoder=true, ~rpcs=[], ~lowercaseAddresses=false)
      }
    },
  ]

  Config.make(
    ~shouldRollbackOnReorg=true,
    ~shouldSaveFullHistory=false,
    ~multichain=if (
      Env.Configurable.isUnorderedMultichainMode->Belt.Option.getWithDefault(
        Env.Configurable.unstable__temp_unordered_head_mode->Belt.Option.getWithDefault(
          true,
        ),
      )
    ) {
      Unordered
    } else {
      Ordered
    },
    ~chains,
    ~enableRawEvents=false,
    ~batchSize=?Env.batchSize,
    ~preloadHandlers=true,
    ~lowercaseAddresses=false,
    ~shouldUseHypersyncClientDecoder=true,
  )
}

let configWithoutRegistrations = makeGeneratedConfig()

let registerAllHandlers = () => {
  EventRegister.startRegistration(
    ~ecosystem=configWithoutRegistrations.ecosystem,
    ~multichain=configWithoutRegistrations.multichain,
    ~preloadHandlers=configWithoutRegistrations.preloadHandlers,
  )

  registerContractHandlers(
    ~contractName="ChronoGrid",
    ~handlerPathRelativeToRoot="src/EventHandlers.ts",
    ~handlerPathRelativeToConfig="src/EventHandlers.ts",
  )
  registerContractHandlers(
    ~contractName="ChronoGridWrapper",
    ~handlerPathRelativeToRoot="src/EventHandlers.ts",
    ~handlerPathRelativeToConfig="src/EventHandlers.ts",
  )

  EventRegister.finishRegistration()
}

let initialSql = Db.makeClient()
let storagePgSchema = Env.Db.publicSchema
let makeStorage = (~sql, ~pgSchema=storagePgSchema, ~isHasuraEnabled=Env.Hasura.enabled) => {
  PgStorage.make(
    ~sql,
    ~pgSchema,
    ~pgHost=Env.Db.host,
    ~pgUser=Env.Db.user,
    ~pgPort=Env.Db.port,
    ~pgDatabase=Env.Db.database,
    ~pgPassword=Env.Db.password,
    ~onInitialize=?{
      if isHasuraEnabled {
        Some(
          () => {
            Hasura.trackDatabase(
              ~endpoint=Env.Hasura.graphqlEndpoint,
              ~auth={
                role: Env.Hasura.role,
                secret: Env.Hasura.secret,
              },
              ~pgSchema=storagePgSchema,
              ~userEntities=Entities.userEntities,
              ~responseLimit=Env.Hasura.responseLimit,
              ~schema=Db.schema,
              ~aggregateEntities=Env.Hasura.aggregateEntities,
            )->Promise.catch(err => {
              Logging.errorWithExn(
                err->Utils.prettifyExn,
                `EE803: Error tracking tables`,
              )->Promise.resolve
            })
          },
        )
      } else {
        None
      }
    },
    ~onNewTables=?{
      if isHasuraEnabled {
        Some(
          (~tableNames) => {
            Hasura.trackTables(
              ~endpoint=Env.Hasura.graphqlEndpoint,
              ~auth={
                role: Env.Hasura.role,
                secret: Env.Hasura.secret,
              },
              ~pgSchema=storagePgSchema,
              ~tableNames,
            )->Promise.catch(err => {
              Logging.errorWithExn(
                err->Utils.prettifyExn,
                `EE804: Error tracking new tables`,
              )->Promise.resolve
            })
          },
        )
      } else {
        None
      }
    },
    ~isHasuraEnabled,
  )
}

let codegenPersistence = Persistence.make(
  ~userEntities=Entities.userEntities,
  ~allEnums=Enums.allEnums,
  ~storage=makeStorage(~sql=initialSql),
  ~sql=initialSql,
)

%%private(let indexer: ref<option<Indexer.t>> = ref(None))
let getIndexer = () => {
  switch indexer.contents {
  | Some(indexer) => indexer
  | None =>
    let i = {
      Indexer.registrations: registerAllHandlers(),
      // Need to recreate initial config one more time,
      // since configWithoutRegistrations called register for event
      // before they were ready
      config: makeGeneratedConfig(),
      persistence: codegenPersistence,
    }
    indexer := Some(i)
    i
  }
}
