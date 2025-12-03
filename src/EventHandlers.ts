/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  ChronoGrid,
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
  ChronoGridWrapper,
  ChronoGridWrapper_BetPlacedWithSession,
  ChronoGridWrapper_Deposited,
  ChronoGridWrapper_EIP712DomainChanged,
  ChronoGridWrapper_FinalBalance,
  ChronoGridWrapper_RelayerUpdated,
  ChronoGridWrapper_UpdatedPnl,
  ChronoGridWrapper_Withdrawn,
} from "../generated";



import {
  insertAutoClaimFailed,
  insertAutoClaimSkipped,
  insertBetPlaced,
  insertGlobalLiquidityAdded,
  insertGlobalLiquidityUpdated,
  insertGridCreated,
  insertMaxBetAmountUpdated,
  insertOwnershipTransferred,
  insertTimeperiodCreated,
  insertTimeperiodFinalized,
  insertTimeperiodSettled,
  insertWinningsClaimedEqual,
  insertWrapperSet,
  insertBetPlacedWithSession,
  insertDeposited,
  insertEIP712DomainChanged,
  insertFinalBalance,
  insertRelayerUpdated,
  insertUpdatedPnl,
  insertWithdrawn,
} from "./supabaseClient";

ChronoGrid.AutoClaimFailed.handler(async ({ event, context }) => {
  const entity: ChronoGrid_AutoClaimFailed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    gridId: event.params.gridId,
    timeperiodId: event.params.timeperiodId,
    reason: event.params.reason,
  };

  console.log('⚠️  AutoClaimFailed:', {
    id: entity.id,
    user: entity.user,
    gridId: entity.gridId,
    timeperiodId: entity.timeperiodId.toString(),
    reason: entity.reason,
  });

  context.ChronoGrid_AutoClaimFailed.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertAutoClaimFailed({
    id: entity.id,
    user: entity.user,
    gridId: entity.gridId,
    timeperiodId: entity.timeperiodId.toString(),
    reason: entity.reason,
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (AutoClaimFailed):', err.message));
});

ChronoGrid.AutoClaimSkipped.handler(async ({ event, context }) => {
  const entity: ChronoGrid_AutoClaimSkipped = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    gridId: event.params.gridId,
    timeperiodId: event.params.timeperiodId,
  };

  console.log('⏭️  AutoClaimSkipped:', {
    id: entity.id,
    user: entity.user,
    gridId: entity.gridId,
    timeperiodId: entity.timeperiodId.toString(),
  });

  context.ChronoGrid_AutoClaimSkipped.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertAutoClaimSkipped({
    id: entity.id,
    user: entity.user,
    gridId: entity.gridId,
    timeperiodId: entity.timeperiodId.toString(),
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (AutoClaimSkipped):', err.message));
});

ChronoGrid.BetPlaced.handler(async ({ event, context }) => {
  // Cast to any to access new fields that aren't in the generated types yet
  const params = event.params as any;
  
  const entity: ChronoGrid_BetPlaced = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    gridId: event.params.gridId,
    timeperiodId: event.params.timeperiodId,
    amountPaid: event.params.amountPaid,
    sharesReceived: event.params.sharesReceived,
    pricePerShare: event.params.pricePerShare,
    bAtEntry: event.params.bAtEntry,
    totalshare: params.totalshare,
    priceMin: params.price_min,
    priceMax: params.price_max,
  };

  console.log('🎰 BetPlaced (ChronoGrid):', {
    id: entity.id,
    user: entity.user,
    gridId: entity.gridId,
    timeperiodId: entity.timeperiodId.toString(),
    amountPaid: entity.amountPaid.toString(),
    sharesReceived: entity.sharesReceived.toString(),
    pricePerShare: entity.pricePerShare.toString(),
    bAtEntry: entity.bAtEntry.toString(),
    totalshare: entity.totalshare.toString(),
    priceMin: entity.priceMin.toString(),
    priceMax: entity.priceMax.toString(),
  });

  context.ChronoGrid_BetPlaced.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertBetPlaced({
    id: entity.id,
    user: entity.user,
    gridId: entity.gridId,
    timeperiodId: entity.timeperiodId.toString(),
    amountPaid: entity.amountPaid.toString(),
    sharesReceived: entity.sharesReceived.toString(),
    pricePerShare: entity.pricePerShare.toString(),
    bAtEntry: entity.bAtEntry.toString(),
    totalshare: entity.totalshare.toString(),
    priceMin: entity.priceMin.toString(),
    priceMax: entity.priceMax.toString(),
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (BetPlaced):', err.message));
});

ChronoGrid.GlobalLiquidityAdded.handler(async ({ event, context }) => {
  const entity: ChronoGrid_GlobalLiquidityAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
    newTotal: event.params.newTotal,
  };

  console.log('💧 GlobalLiquidityAdded:', {
    id: entity.id,
    amount: entity.amount.toString(),
    newTotal: entity.newTotal.toString(),
  });

  context.ChronoGrid_GlobalLiquidityAdded.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertGlobalLiquidityAdded({
    id: entity.id,
    amount: entity.amount.toString(),
    newTotal: entity.newTotal.toString(),
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (GlobalLiquidityAdded):', err.message));
});

ChronoGrid.GlobalLiquidityUpdated.handler(async ({ event, context }) => {
  const entity: any = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newTotal: event.params.newTotal,
  };

  
  console.log('💧 GlobalLiquidityUpdated:', {
    id: entity.id,
    newTotal: entity.newTotal.toString(),
  });

  context.ChronoGrid_GlobalLiquidityUpdated.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertGlobalLiquidityUpdated({
    id: entity.id,
    newTotal: entity.newTotal.toString(),
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (GlobalLiquidityUpdated):', err.message));
});

ChronoGrid.GridCreated.handler(async ({ event, context }) => {
  const entity: ChronoGrid_GridCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gridId: event.params.gridId,
    timeperiodId: event.params.timeperiodId,
    priceMin: event.params.priceMin,
    priceMax: event.params.priceMax,
  };

  console.log('🎯 GridCreated:', {
    id: entity.id,
    gridId: entity.gridId,
    timeperiodId: entity.timeperiodId.toString(),
    priceMin: entity.priceMin.toString(),
    priceMax: entity.priceMax.toString(),
  });

  context.ChronoGrid_GridCreated.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertGridCreated({
    id: entity.id,
    gridId: entity.gridId,
    timeperiodId: entity.timeperiodId.toString(),
    priceMin: entity.priceMin.toString(),
    priceMax: entity.priceMax.toString(),
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (GridCreated):', err.message));
});

ChronoGrid.MaxBetAmountUpdated.handler(async ({ event, context }) => {
  const entity: ChronoGrid_MaxBetAmountUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldAmount: event.params.oldAmount,
    newAmount: event.params.newAmount,
  };

  console.log('⚙️  MaxBetAmountUpdated:', {
    id: entity.id,
    oldAmount: entity.oldAmount.toString(),
    newAmount: entity.newAmount.toString(),
  });

  context.ChronoGrid_MaxBetAmountUpdated.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertMaxBetAmountUpdated({
    id: entity.id,
    oldAmount: entity.oldAmount.toString(),
    newAmount: entity.newAmount.toString(),
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (MaxBetAmountUpdated):', err.message));
});

ChronoGrid.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: ChronoGrid_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  console.log('👑 OwnershipTransferred:', {
    id: entity.id,
    previousOwner: entity.previousOwner,
    newOwner: entity.newOwner,
  });

  context.ChronoGrid_OwnershipTransferred.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertOwnershipTransferred({
    id: entity.id,
    previousOwner: entity.previousOwner,
    newOwner: entity.newOwner,
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (OwnershipTransferred):', err.message));
});

ChronoGrid.TimeperiodCreated.handler(async ({ event, context }) => {
  const entity: ChronoGrid_TimeperiodCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    timeperiodId: event.params.timeperiodId,
    startTime: event.params.startTime,
    endTime: event.params.endTime,
    referencePrice: event.params.referencePrice,
    allocatedLiquidity: event.params.allocatedLiquidity,
  };

  console.log('⏰ TimeperiodCreated:', {
    id: entity.id,
    timeperiodId: entity.timeperiodId.toString(),
    startTime: entity.startTime.toString(),
    endTime: entity.endTime.toString(),
    referencePrice: entity.referencePrice.toString(),
    allocatedLiquidity: entity.allocatedLiquidity.toString(),
  });

  context.ChronoGrid_TimeperiodCreated.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertTimeperiodCreated({
    id: entity.id,
    timeperiodId: entity.timeperiodId.toString(),
    startTime: entity.startTime.toString(),
    endTime: entity.endTime.toString(),
    referencePrice: entity.referencePrice.toString(),
    allocatedLiquidity: entity.allocatedLiquidity.toString(),
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (TimeperiodCreated):', err.message));
});

ChronoGrid.TimeperiodFinalized.handler(async ({ event, context }) => {
  const entity: ChronoGrid_TimeperiodFinalized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    timeperiodId: event.params.timeperiodId,
    netResult: event.params.netResult,
    returnedToGlobal: event.params.returnedToGlobal,
    newGlobalPool: event.params.newGlobalPool,
  };

  console.log('🏁 TimeperiodFinalized:', {
    id: entity.id,
    timeperiodId: entity.timeperiodId.toString(),
    netResult: entity.netResult.toString(),
    returnedToGlobal: entity.returnedToGlobal.toString(),
    newGlobalPool: entity.newGlobalPool.toString(),
  });

  context.ChronoGrid_TimeperiodFinalized.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertTimeperiodFinalized({
    id: entity.id,
    timeperiodId: entity.timeperiodId.toString(),
    netResult: entity.netResult.toString(),
    returnedToGlobal: entity.returnedToGlobal.toString(),
    newGlobalPool: entity.newGlobalPool.toString(),
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (TimeperiodFinalized):', err.message));
});

ChronoGrid.TimeperiodSettled.handler(async ({ event, context }) => {
  const entity: ChronoGrid_TimeperiodSettled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    timeperiodId: event.params.timeperiodId,
    winningGridId: event.params.winningGridId,
    twapPrice: event.params.twapPrice,
    totalLoserBets: event.params.totalLoserBets,
    poolShare: event.params.poolShare,
    winnerShare: event.params.winnerShare,
  };

  console.log('🎊 TimeperiodSettled:', {
    id: entity.id,
    timeperiodId: entity.timeperiodId.toString(),
    winningGridId: entity.winningGridId,
    twapPrice: entity.twapPrice.toString(),
    totalLoserBets: entity.totalLoserBets.toString(),
    poolShare: entity.poolShare.toString(),
    winnerShare: entity.winnerShare.toString(),
  });

  context.ChronoGrid_TimeperiodSettled.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertTimeperiodSettled({
    id: entity.id,
    timeperiodId: entity.timeperiodId.toString(),
    winningGridId: entity.winningGridId,
    twapPrice: entity.twapPrice.toString(),
    totalLoserBets: entity.totalLoserBets.toString(),
    poolShare: entity.poolShare.toString(),
    winnerShare: entity.winnerShare.toString(),
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (TimeperiodSettled):', err.message));
});

ChronoGrid.WinningsClaimedEqual.handler(async ({ event, context }) => {
  const entity: ChronoGrid_WinningsClaimedEqual = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    gridId: event.params.gridId,
    equalShare: event.params.equalShare,
    redemptionValue: event.params.redemptionValue,
    totalPayout: event.params.totalPayout,
  };

  console.log('🏆 WinningsClaimedEqual:', {
    id: entity.id,
    user: entity.user,
    gridId: entity.gridId,
    equalShare: entity.equalShare.toString(),
    redemptionValue: entity.redemptionValue.toString(),
    totalPayout: entity.totalPayout.toString(),
  });

  context.ChronoGrid_WinningsClaimedEqual.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertWinningsClaimedEqual({
    id: entity.id,
    user: entity.user,
    gridId: entity.gridId,
    equalShare: entity.equalShare.toString(),
    redemptionValue: entity.redemptionValue.toString(),
    totalPayout: entity.totalPayout.toString(),
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (WinningsClaimedEqual):', err.message));
});

ChronoGrid.WrapperSet.handler(async ({ event, context }) => {
  const entity: ChronoGrid_WrapperSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldWrapper: event.params.oldWrapper,
    newWrapper: event.params.newWrapper,
  };

  console.log('🔄 WrapperSet:', {
    id: entity.id,
    oldWrapper: entity.oldWrapper,
    newWrapper: entity.newWrapper,
  });

  context.ChronoGrid_WrapperSet.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertWrapperSet({
    id: entity.id,
    oldWrapper: entity.oldWrapper,
    newWrapper: entity.newWrapper,
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (WrapperSet):', err.message));
});

ChronoGridWrapper.BetPlacedWithSession.handler(async ({ event, context }) => {
  const entity: ChronoGridWrapper_BetPlacedWithSession = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    sessionKey: event.params.sessionKey,
    timeperiodId: event.params.timeperiodId,
    amount: event.params.amount,
    sharesReceived: event.params.sharesReceived,
    priceMin: event.params.priceMin,
    priceMax: event.params.priceMax,
    startTime: event.params.startTime,
    endTime: event.params.endTime,
    gridId: event.params.gridId,
  };

  console.log('🎲 BetPlacedWithSession:', {
    id: entity.id,
    user: entity.user,
    sessionKey: entity.sessionKey,
    timeperiodId: entity.timeperiodId.toString(),
    amount: entity.amount.toString(),
    sharesReceived: entity.sharesReceived.toString(),
    priceMin: entity.priceMin.toString(),
    priceMax: entity.priceMax.toString(),
    startTime: entity.startTime.toString(),
    endTime: entity.endTime.toString(),
    gridId: entity.gridId,
  });

  context.ChronoGridWrapper_BetPlacedWithSession.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertBetPlacedWithSession({
    id: entity.id,
    user: entity.user,
    sessionKey: entity.sessionKey,
    timeperiodId: entity.timeperiodId.toString(),
    amount: entity.amount.toString(),
    sharesReceived: entity.sharesReceived.toString(),
    priceMin: entity.priceMin.toString(),
    priceMax: entity.priceMax.toString(),
    startTime: entity.startTime.toString(),
    endTime: entity.endTime.toString(),
    gridId: entity.gridId,
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (BetPlacedWithSession):', err.message));
});

ChronoGridWrapper.Deposited.handler(async ({ event, context }) => {
  const entity: ChronoGridWrapper_Deposited = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    amount: event.params.amount,
    newBalance: event.params.newBalance,
  };

  console.log('\n💰 =============== DEPOSIT EVENT ===============');
  console.log('ID:', entity.id);
  console.log('User:', entity.user);
  console.log('Amount:', entity.amount.toString());
  console.log('New Balance:', entity.newBalance.toString());
  console.log('Block Number:', event.block.number);
  console.log('Block Timestamp:', new Date(event.block.timestamp * 1000).toISOString());
  console.log('===============================================\n');

  context.ChronoGridWrapper_Deposited.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertDeposited({
    id: entity.id,
    user: entity.user,
    amount: entity.amount.toString(),
    newBalance: entity.newBalance.toString(),
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (Deposited):', err.message));
});

ChronoGridWrapper.EIP712DomainChanged.handler(async ({ event, context }) => {
  const entity: ChronoGridWrapper_EIP712DomainChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  console.log('📜 EIP712DomainChanged:', {
    id: entity.id,
  });

  context.ChronoGridWrapper_EIP712DomainChanged.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertEIP712DomainChanged({
    id: entity.id,
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (EIP712DomainChanged):', err.message));
});

ChronoGridWrapper.FinalBalance.handler(async ({ event, context }) => {
  const entity: any = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    newBalance: event.params.newBalance,
  };

  console.log('💰 FinalBalance:', {
    id: entity.id,
    user: entity.user,
    newBalance: entity.newBalance.toString(),
  });

  context.ChronoGridWrapper_FinalBalance.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertFinalBalance({
    id: entity.id,
    user: entity.user,
    newBalance: entity.newBalance.toString(),
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (FinalBalance):', err.message));
});

ChronoGridWrapper.RelayerUpdated.handler(async ({ event, context }) => {
  const entity: ChronoGridWrapper_RelayerUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldRelayer: event.params.oldRelayer,
    newRelayer: event.params.newRelayer,
  };

  console.log('🔁 RelayerUpdated:', {
    id: entity.id,
    oldRelayer: entity.oldRelayer,
    newRelayer: entity.newRelayer,
  });

  context.ChronoGridWrapper_RelayerUpdated.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertRelayerUpdated({
    id: entity.id,
    oldRelayer: entity.oldRelayer,
    newRelayer: entity.newRelayer,
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (RelayerUpdated):', err.message));
});

ChronoGridWrapper.Withdrawn.handler(async ({ event, context }) => {
  const entity: ChronoGridWrapper_Withdrawn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    amount: event.params.amount,
    newBalance: event.params.newBalance,
  };

  console.log('💸 Withdrawn:', {
    id: entity.id,
    user: entity.user,
    amount: entity.amount.toString(),
    newBalance: entity.newBalance.toString(),
  });

  context.ChronoGridWrapper_Withdrawn.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertWithdrawn({
    id: entity.id,
    user: entity.user,
    amount: entity.amount.toString(),
    newBalance: entity.newBalance.toString(),
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (Withdrawn):', err.message));
});

ChronoGridWrapper.UpdatedPnl.handler(async ({ event, context }) => {
  const entity: ChronoGridWrapper_UpdatedPnl = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    pnl: event.params.pnl,
  };

  console.log('📊 UpdatedPnl:', {
    id: entity.id,
    user: entity.user,
    pnl: entity.pnl.toString(),
  });

  context.ChronoGridWrapper_UpdatedPnl.set(entity);

  // 🚀 Send to Supabase (non-blocking)
  insertUpdatedPnl({
    id: entity.id,
    user: entity.user,
    pnl: entity.pnl.toString(),
    blockNumber: event.block.number,
    timestamp: new Date(event.block.timestamp * 1000).toISOString(),
  }).catch(err => console.error('Supabase insert error (UpdatedPnl):', err.message));
});
