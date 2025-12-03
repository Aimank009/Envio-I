module ContractType = {
  @genType
  type t = 
    | @as("ChronoGrid") ChronoGrid
    | @as("ChronoGridWrapper") ChronoGridWrapper

  let name = "CONTRACT_TYPE"
  let variants = [
    ChronoGrid,
    ChronoGridWrapper,
  ]
  let config = Internal.makeEnumConfig(~name, ~variants)
}

module EntityType = {
  @genType
  type t = 
    | @as("ChronoGridWrapper_BetPlacedWithSession") ChronoGridWrapper_BetPlacedWithSession
    | @as("ChronoGridWrapper_Deposited") ChronoGridWrapper_Deposited
    | @as("ChronoGridWrapper_EIP712DomainChanged") ChronoGridWrapper_EIP712DomainChanged
    | @as("ChronoGridWrapper_FinalBalance") ChronoGridWrapper_FinalBalance
    | @as("ChronoGridWrapper_RelayerUpdated") ChronoGridWrapper_RelayerUpdated
    | @as("ChronoGridWrapper_UpdatedPnl") ChronoGridWrapper_UpdatedPnl
    | @as("ChronoGridWrapper_Withdrawn") ChronoGridWrapper_Withdrawn
    | @as("ChronoGrid_AutoClaimFailed") ChronoGrid_AutoClaimFailed
    | @as("ChronoGrid_AutoClaimSkipped") ChronoGrid_AutoClaimSkipped
    | @as("ChronoGrid_BetPlaced") ChronoGrid_BetPlaced
    | @as("ChronoGrid_GlobalLiquidityAdded") ChronoGrid_GlobalLiquidityAdded
    | @as("ChronoGrid_GlobalLiquidityUpdated") ChronoGrid_GlobalLiquidityUpdated
    | @as("ChronoGrid_GridCreated") ChronoGrid_GridCreated
    | @as("ChronoGrid_MaxBetAmountUpdated") ChronoGrid_MaxBetAmountUpdated
    | @as("ChronoGrid_OwnershipTransferred") ChronoGrid_OwnershipTransferred
    | @as("ChronoGrid_TimeperiodCreated") ChronoGrid_TimeperiodCreated
    | @as("ChronoGrid_TimeperiodFinalized") ChronoGrid_TimeperiodFinalized
    | @as("ChronoGrid_TimeperiodSettled") ChronoGrid_TimeperiodSettled
    | @as("ChronoGrid_WinningsClaimedEqual") ChronoGrid_WinningsClaimedEqual
    | @as("ChronoGrid_WrapperSet") ChronoGrid_WrapperSet
    | @as("dynamic_contract_registry") DynamicContractRegistry

  let name = "ENTITY_TYPE"
  let variants = [
    ChronoGridWrapper_BetPlacedWithSession,
    ChronoGridWrapper_Deposited,
    ChronoGridWrapper_EIP712DomainChanged,
    ChronoGridWrapper_FinalBalance,
    ChronoGridWrapper_RelayerUpdated,
    ChronoGridWrapper_UpdatedPnl,
    ChronoGridWrapper_Withdrawn,
    ChronoGrid_AutoClaimFailed,
    ChronoGrid_AutoClaimSkipped,
    ChronoGrid_BetPlaced,
    ChronoGrid_GlobalLiquidityAdded,
    ChronoGrid_GlobalLiquidityUpdated,
    ChronoGrid_GridCreated,
    ChronoGrid_MaxBetAmountUpdated,
    ChronoGrid_OwnershipTransferred,
    ChronoGrid_TimeperiodCreated,
    ChronoGrid_TimeperiodFinalized,
    ChronoGrid_TimeperiodSettled,
    ChronoGrid_WinningsClaimedEqual,
    ChronoGrid_WrapperSet,
    DynamicContractRegistry,
  ]
  let config = Internal.makeEnumConfig(~name, ~variants)
}

let allEnums = ([
  ContractType.config->Internal.fromGenericEnumConfig,
  EntityType.config->Internal.fromGenericEnumConfig,
])
