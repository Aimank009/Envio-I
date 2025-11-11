  @genType
module ChronoGrid = {
  module AutoClaimFailed = Types.MakeRegister(Types.ChronoGrid.AutoClaimFailed)
  module AutoClaimSkipped = Types.MakeRegister(Types.ChronoGrid.AutoClaimSkipped)
  module BetPlaced = Types.MakeRegister(Types.ChronoGrid.BetPlaced)
  module GlobalLiquidityAdded = Types.MakeRegister(Types.ChronoGrid.GlobalLiquidityAdded)
  module GridCreated = Types.MakeRegister(Types.ChronoGrid.GridCreated)
  module MaxBetAmountUpdated = Types.MakeRegister(Types.ChronoGrid.MaxBetAmountUpdated)
  module OwnershipTransferred = Types.MakeRegister(Types.ChronoGrid.OwnershipTransferred)
  module TimeperiodCreated = Types.MakeRegister(Types.ChronoGrid.TimeperiodCreated)
  module TimeperiodFinalized = Types.MakeRegister(Types.ChronoGrid.TimeperiodFinalized)
  module TimeperiodSettled = Types.MakeRegister(Types.ChronoGrid.TimeperiodSettled)
  module WinningsClaimedEqual = Types.MakeRegister(Types.ChronoGrid.WinningsClaimedEqual)
  module WrapperSet = Types.MakeRegister(Types.ChronoGrid.WrapperSet)
}

  @genType
module ChronoGridWrapper = {
  module BetPlacedWithSession = Types.MakeRegister(Types.ChronoGridWrapper.BetPlacedWithSession)
  module Deposited = Types.MakeRegister(Types.ChronoGridWrapper.Deposited)
  module EIP712DomainChanged = Types.MakeRegister(Types.ChronoGridWrapper.EIP712DomainChanged)
  module RelayerUpdated = Types.MakeRegister(Types.ChronoGridWrapper.RelayerUpdated)
  module Withdrawn = Types.MakeRegister(Types.ChronoGridWrapper.Withdrawn)
}

@genType /** Register a Block Handler. It'll be called for every block by default. */
let onBlock: (
  Envio.onBlockOptions<Types.chain>,
  Envio.onBlockArgs<Types.handlerContext> => promise<unit>,
) => unit = (
  EventRegister.onBlock: (unknown, Internal.onBlockArgs => promise<unit>) => unit
)->Utils.magic
