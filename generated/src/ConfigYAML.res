
type hyperSyncConfig = {endpointUrl: string}
type hyperFuelConfig = {endpointUrl: string}

@genType.opaque
type rpcConfig = {
  syncConfig: InternalConfig.sourceSync,
}

@genType
type syncSource = HyperSync(hyperSyncConfig) | HyperFuel(hyperFuelConfig) | Rpc(rpcConfig)

@genType.opaque
type aliasAbi = Ethers.abi

type eventName = string

type contract = {
  name: string,
  abi: aliasAbi,
  addresses: array<string>,
  events: array<eventName>,
}

type configYaml = {
  syncSource,
  startBlock: int,
  confirmedBlockThreshold: int,
  contracts: dict<contract>,
  lowercaseAddresses: bool,
}

let publicConfig = ChainMap.fromArrayUnsafe([
  {
    let contracts = Js.Dict.fromArray([
      (
        "ChronoGrid",
        {
          name: "ChronoGrid",
          abi: Types.ChronoGrid.abi,
          addresses: [
            "0x454Cf0d4df0DFc5bbaE5CfD969edc8498c7c796C",
          ],
          events: [
            Types.ChronoGrid.AutoClaimFailed.name,
            Types.ChronoGrid.AutoClaimSkipped.name,
            Types.ChronoGrid.BetPlaced.name,
            Types.ChronoGrid.GlobalLiquidityAdded.name,
            Types.ChronoGrid.GlobalLiquidityUpdated.name,
            Types.ChronoGrid.GridCreated.name,
            Types.ChronoGrid.MaxBetAmountUpdated.name,
            Types.ChronoGrid.OwnershipTransferred.name,
            Types.ChronoGrid.TimeperiodCreated.name,
            Types.ChronoGrid.TimeperiodFinalized.name,
            Types.ChronoGrid.TimeperiodSettled.name,
            Types.ChronoGrid.WinningsClaimedEqual.name,
            Types.ChronoGrid.WrapperSet.name,
          ],
        }
      ),
      (
        "ChronoGridWrapper",
        {
          name: "ChronoGridWrapper",
          abi: Types.ChronoGridWrapper.abi,
          addresses: [
            "0x3D3288E7BE46cc997DC0F73D20F800D4AfD479C6",
          ],
          events: [
            Types.ChronoGridWrapper.BetPlacedWithSession.name,
            Types.ChronoGridWrapper.Deposited.name,
            Types.ChronoGridWrapper.EIP712DomainChanged.name,
            Types.ChronoGridWrapper.FinalBalance.name,
            Types.ChronoGridWrapper.RelayerUpdated.name,
            Types.ChronoGridWrapper.Withdrawn.name,
          ],
        }
      ),
    ])
    let chain = ChainMap.Chain.makeUnsafe(~chainId=999)
    (
      chain,
      {
        confirmedBlockThreshold: 200,
        syncSource: HyperSync({endpointUrl: "https://999.hypersync.xyz"}),
        startBlock: 0,
        contracts,
        lowercaseAddresses: false
      }
    )
  },
])

@genType
let getGeneratedByChainId: int => configYaml = chainId => {
  let chain = ChainMap.Chain.makeUnsafe(~chainId)
  if !(publicConfig->ChainMap.has(chain)) {
    Js.Exn.raiseError(
      "No chain with id " ++ chain->ChainMap.Chain.toString ++ " found in config.yaml",
    )
  }
  publicConfig->ChainMap.get(chain)
}
