/* TypeScript file generated from Entities.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type id = string;

export type whereOperations<entity,fieldType> = { readonly eq: (_1:fieldType) => Promise<entity[]>; readonly gt: (_1:fieldType) => Promise<entity[]> };

export type ChronoGridWrapper_BetPlacedWithSession_t = {
  readonly amount: bigint; 
  readonly endTime: bigint; 
  readonly gridId: string; 
  readonly id: id; 
  readonly priceMax: bigint; 
  readonly priceMin: bigint; 
  readonly sessionKey: string; 
  readonly sharesReceived: bigint; 
  readonly startTime: bigint; 
  readonly timeperiodId: bigint; 
  readonly user: string
};

export type ChronoGridWrapper_BetPlacedWithSession_indexedFieldOperations = {};

export type ChronoGridWrapper_Deposited_t = {
  readonly amount: bigint; 
  readonly id: id; 
  readonly newBalance: bigint; 
  readonly user: string
};

export type ChronoGridWrapper_Deposited_indexedFieldOperations = {};

export type ChronoGridWrapper_EIP712DomainChanged_t = { readonly id: id };

export type ChronoGridWrapper_EIP712DomainChanged_indexedFieldOperations = {};

export type ChronoGridWrapper_FinalBalance_t = {
  readonly id: id; 
  readonly newBalance: bigint; 
  readonly user: string
};

export type ChronoGridWrapper_FinalBalance_indexedFieldOperations = {};

export type ChronoGridWrapper_RelayerUpdated_t = {
  readonly id: id; 
  readonly newRelayer: string; 
  readonly oldRelayer: string
};

export type ChronoGridWrapper_RelayerUpdated_indexedFieldOperations = {};

export type ChronoGridWrapper_Withdrawn_t = {
  readonly amount: bigint; 
  readonly id: id; 
  readonly newBalance: bigint; 
  readonly user: string
};

export type ChronoGridWrapper_Withdrawn_indexedFieldOperations = {};

export type ChronoGrid_AutoClaimFailed_t = {
  readonly gridId: string; 
  readonly id: id; 
  readonly reason: string; 
  readonly timeperiodId: bigint; 
  readonly user: string
};

export type ChronoGrid_AutoClaimFailed_indexedFieldOperations = {};

export type ChronoGrid_AutoClaimSkipped_t = {
  readonly gridId: string; 
  readonly id: id; 
  readonly timeperiodId: bigint; 
  readonly user: string
};

export type ChronoGrid_AutoClaimSkipped_indexedFieldOperations = {};

export type ChronoGrid_BetPlaced_t = {
  readonly amountPaid: bigint; 
  readonly bAtEntry: bigint; 
  readonly gridId: string; 
  readonly id: id; 
  readonly priceMax: bigint; 
  readonly priceMin: bigint; 
  readonly pricePerShare: bigint; 
  readonly sharesReceived: bigint; 
  readonly timeperiodId: bigint; 
  readonly totalshare: bigint; 
  readonly user: string
};

export type ChronoGrid_BetPlaced_indexedFieldOperations = {};

export type ChronoGrid_GlobalLiquidityAdded_t = {
  readonly amount: bigint; 
  readonly id: id; 
  readonly newTotal: bigint
};

export type ChronoGrid_GlobalLiquidityAdded_indexedFieldOperations = {};

export type ChronoGrid_GlobalLiquidityUpdated_t = { readonly id: id; readonly newTotal: bigint };

export type ChronoGrid_GlobalLiquidityUpdated_indexedFieldOperations = {};

export type ChronoGrid_GridCreated_t = {
  readonly gridId: string; 
  readonly id: id; 
  readonly priceMax: bigint; 
  readonly priceMin: bigint; 
  readonly timeperiodId: bigint
};

export type ChronoGrid_GridCreated_indexedFieldOperations = {};

export type ChronoGrid_MaxBetAmountUpdated_t = {
  readonly id: id; 
  readonly newAmount: bigint; 
  readonly oldAmount: bigint
};

export type ChronoGrid_MaxBetAmountUpdated_indexedFieldOperations = {};

export type ChronoGrid_OwnershipTransferred_t = {
  readonly id: id; 
  readonly newOwner: string; 
  readonly previousOwner: string
};

export type ChronoGrid_OwnershipTransferred_indexedFieldOperations = {};

export type ChronoGrid_TimeperiodCreated_t = {
  readonly allocatedLiquidity: bigint; 
  readonly endTime: bigint; 
  readonly id: id; 
  readonly referencePrice: bigint; 
  readonly startTime: bigint; 
  readonly timeperiodId: bigint
};

export type ChronoGrid_TimeperiodCreated_indexedFieldOperations = {};

export type ChronoGrid_TimeperiodFinalized_t = {
  readonly id: id; 
  readonly netResult: bigint; 
  readonly newGlobalPool: bigint; 
  readonly returnedToGlobal: bigint; 
  readonly timeperiodId: bigint
};

export type ChronoGrid_TimeperiodFinalized_indexedFieldOperations = {};

export type ChronoGrid_TimeperiodSettled_t = {
  readonly id: id; 
  readonly poolShare: bigint; 
  readonly timeperiodId: bigint; 
  readonly totalLoserBets: bigint; 
  readonly twapPrice: bigint; 
  readonly winnerShare: bigint; 
  readonly winningGridId: string
};

export type ChronoGrid_TimeperiodSettled_indexedFieldOperations = {};

export type ChronoGrid_WinningsClaimedEqual_t = {
  readonly equalShare: bigint; 
  readonly gridId: string; 
  readonly id: id; 
  readonly redemptionValue: bigint; 
  readonly totalPayout: bigint; 
  readonly user: string
};

export type ChronoGrid_WinningsClaimedEqual_indexedFieldOperations = {};

export type ChronoGrid_WrapperSet_t = {
  readonly id: id; 
  readonly newWrapper: string; 
  readonly oldWrapper: string
};

export type ChronoGrid_WrapperSet_indexedFieldOperations = {};
