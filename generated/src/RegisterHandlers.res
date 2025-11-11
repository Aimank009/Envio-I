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

%%private(
  let makeGeneratedConfig = () => {
    let chains = [
      {
        let contracts = [
          {
            InternalConfig.name: "ChronoGrid",
            abi: Types.ChronoGrid.abi,
            addresses: [
              "0x454Cf0d4df0DFc5bbaE5CfD969edc8498c7c796C"->Address.Evm.fromStringOrThrow
,
            ],
            events: [
              (Types.ChronoGrid.AutoClaimFailed.register() :> Internal.eventConfig),
              (Types.ChronoGrid.AutoClaimSkipped.register() :> Internal.eventConfig),
              (Types.ChronoGrid.BetPlaced.register() :> Internal.eventConfig),
              (Types.ChronoGrid.GlobalLiquidityAdded.register() :> Internal.eventConfig),
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
            InternalConfig.name: "ChronoGridWrapper",
            abi: Types.ChronoGridWrapper.abi,
            addresses: [
              "0x3D3288E7BE46cc997DC0F73D20F800D4AfD479C6"->Address.Evm.fromStringOrThrow
,
            ],
            events: [
              (Types.ChronoGridWrapper.BetPlacedWithSession.register() :> Internal.eventConfig),
              (Types.ChronoGridWrapper.Deposited.register() :> Internal.eventConfig),
              (Types.ChronoGridWrapper.EIP712DomainChanged.register() :> Internal.eventConfig),
              (Types.ChronoGridWrapper.RelayerUpdated.register() :> Internal.eventConfig),
              (Types.ChronoGridWrapper.Withdrawn.register() :> Internal.eventConfig),
            ],
            startBlock: None,
          },
        ]
        let chain = ChainMap.Chain.makeUnsafe(~chainId=999)
        {
          InternalConfig.confirmedBlockThreshold: 200,
          startBlock: 0,
          id: 999,
          contracts,
          sources: NetworkSources.evm(~chain, ~contracts=[{name: "ChronoGrid",events: [Types.ChronoGrid.AutoClaimFailed.register(), Types.ChronoGrid.AutoClaimSkipped.register(), Types.ChronoGrid.BetPlaced.register(), Types.ChronoGrid.GlobalLiquidityAdded.register(), Types.ChronoGrid.GridCreated.register(), Types.ChronoGrid.MaxBetAmountUpdated.register(), Types.ChronoGrid.OwnershipTransferred.register(), Types.ChronoGrid.TimeperiodCreated.register(), Types.ChronoGrid.TimeperiodFinalized.register(), Types.ChronoGrid.TimeperiodSettled.register(), Types.ChronoGrid.WinningsClaimedEqual.register(), Types.ChronoGrid.WrapperSet.register()],abi: Types.ChronoGrid.abi}, {name: "ChronoGridWrapper",events: [Types.ChronoGridWrapper.BetPlacedWithSession.register(), Types.ChronoGridWrapper.Deposited.register(), Types.ChronoGridWrapper.EIP712DomainChanged.register(), Types.ChronoGridWrapper.RelayerUpdated.register(), Types.ChronoGridWrapper.Withdrawn.register()],abi: Types.ChronoGridWrapper.abi}], ~hyperSync=Some("https://999.hypersync.xyz"), ~allEventSignatures=[Types.ChronoGrid.eventSignatures, Types.ChronoGridWrapper.eventSignatures]->Belt.Array.concatMany, ~shouldUseHypersyncClientDecoder=true, ~rpcs=[], ~lowercaseAddresses=false)
        }
      },
    ]

    Config.make(
      ~shouldRollbackOnReorg=true,
      ~shouldSaveFullHistory=false,
      ~isUnorderedMultichainMode=true,
      ~chains,
      ~enableRawEvents=false,
      ~batchSize=?Env.batchSize,
      ~preloadHandlers=true,
      ~lowercaseAddresses=false,
      ~shouldUseHypersyncClientDecoder=true,
    )
  }

  let config: ref<option<Config.t>> = ref(None)
)

let registerAllHandlers = () => {
  let configWithoutRegistrations = makeGeneratedConfig()
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

  let generatedConfig = {
    // Need to recreate initial config one more time,
    // since configWithoutRegistrations called register for event
    // before they were ready
    ...makeGeneratedConfig(),
    registrations: Some(EventRegister.finishRegistration()),
  }
  config := Some(generatedConfig)
  generatedConfig
}

let getConfig = () => {
  switch config.contents {
  | Some(config) => config
  | None => registerAllHandlers()
  }
}

let getConfigWithoutRegistrations = makeGeneratedConfig
