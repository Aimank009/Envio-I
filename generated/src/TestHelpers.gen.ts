/* TypeScript file generated from TestHelpers.res by genType. */

/* eslint-disable */
/* tslint:disable */

const TestHelpersJS = require('./TestHelpers.res.js');

import type {ChronoGridWrapper_BetPlacedWithSession_event as Types_ChronoGridWrapper_BetPlacedWithSession_event} from './Types.gen';

import type {ChronoGridWrapper_Deposited_event as Types_ChronoGridWrapper_Deposited_event} from './Types.gen';

import type {ChronoGridWrapper_EIP712DomainChanged_event as Types_ChronoGridWrapper_EIP712DomainChanged_event} from './Types.gen';

import type {ChronoGridWrapper_FinalBalance_event as Types_ChronoGridWrapper_FinalBalance_event} from './Types.gen';

import type {ChronoGridWrapper_RelayerUpdated_event as Types_ChronoGridWrapper_RelayerUpdated_event} from './Types.gen';

import type {ChronoGridWrapper_Withdrawn_event as Types_ChronoGridWrapper_Withdrawn_event} from './Types.gen';

import type {ChronoGrid_AutoClaimFailed_event as Types_ChronoGrid_AutoClaimFailed_event} from './Types.gen';

import type {ChronoGrid_AutoClaimSkipped_event as Types_ChronoGrid_AutoClaimSkipped_event} from './Types.gen';

import type {ChronoGrid_BetPlaced_event as Types_ChronoGrid_BetPlaced_event} from './Types.gen';

import type {ChronoGrid_GlobalLiquidityAdded_event as Types_ChronoGrid_GlobalLiquidityAdded_event} from './Types.gen';

import type {ChronoGrid_GlobalLiquidityUpdated_event as Types_ChronoGrid_GlobalLiquidityUpdated_event} from './Types.gen';

import type {ChronoGrid_GridCreated_event as Types_ChronoGrid_GridCreated_event} from './Types.gen';

import type {ChronoGrid_MaxBetAmountUpdated_event as Types_ChronoGrid_MaxBetAmountUpdated_event} from './Types.gen';

import type {ChronoGrid_OwnershipTransferred_event as Types_ChronoGrid_OwnershipTransferred_event} from './Types.gen';

import type {ChronoGrid_TimeperiodCreated_event as Types_ChronoGrid_TimeperiodCreated_event} from './Types.gen';

import type {ChronoGrid_TimeperiodFinalized_event as Types_ChronoGrid_TimeperiodFinalized_event} from './Types.gen';

import type {ChronoGrid_TimeperiodSettled_event as Types_ChronoGrid_TimeperiodSettled_event} from './Types.gen';

import type {ChronoGrid_WinningsClaimedEqual_event as Types_ChronoGrid_WinningsClaimedEqual_event} from './Types.gen';

import type {ChronoGrid_WrapperSet_event as Types_ChronoGrid_WrapperSet_event} from './Types.gen';

import type {t as Address_t} from 'envio/src/Address.gen';

import type {t as TestHelpers_MockDb_t} from './TestHelpers_MockDb.gen';

/** The arguements that get passed to a "processEvent" helper function */
export type EventFunctions_eventProcessorArgs<event> = {
  readonly event: event; 
  readonly mockDb: TestHelpers_MockDb_t; 
  readonly chainId?: number
};

export type EventFunctions_eventProcessor<event> = (_1:EventFunctions_eventProcessorArgs<event>) => Promise<TestHelpers_MockDb_t>;

export type EventFunctions_MockBlock_t = {
  readonly hash?: string; 
  readonly number?: number; 
  readonly timestamp?: number
};

export type EventFunctions_MockTransaction_t = {};

export type EventFunctions_mockEventData = {
  readonly chainId?: number; 
  readonly srcAddress?: Address_t; 
  readonly logIndex?: number; 
  readonly block?: EventFunctions_MockBlock_t; 
  readonly transaction?: EventFunctions_MockTransaction_t
};

export type ChronoGrid_AutoClaimFailed_createMockArgs = {
  readonly user?: Address_t; 
  readonly gridId?: string; 
  readonly timeperiodId?: bigint; 
  readonly reason?: string; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGrid_AutoClaimSkipped_createMockArgs = {
  readonly user?: Address_t; 
  readonly gridId?: string; 
  readonly timeperiodId?: bigint; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGrid_BetPlaced_createMockArgs = {
  readonly user?: Address_t; 
  readonly gridId?: string; 
  readonly timeperiodId?: bigint; 
  readonly amountPaid?: bigint; 
  readonly sharesReceived?: bigint; 
  readonly pricePerShare?: bigint; 
  readonly bAtEntry?: bigint; 
  readonly totalshare?: bigint; 
  readonly price_min?: bigint; 
  readonly price_max?: bigint; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGrid_GlobalLiquidityAdded_createMockArgs = {
  readonly amount?: bigint; 
  readonly newTotal?: bigint; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGrid_GlobalLiquidityUpdated_createMockArgs = { readonly newTotal?: bigint; readonly mockEventData?: EventFunctions_mockEventData };

export type ChronoGrid_GridCreated_createMockArgs = {
  readonly gridId?: string; 
  readonly timeperiodId?: bigint; 
  readonly priceMin?: bigint; 
  readonly priceMax?: bigint; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGrid_MaxBetAmountUpdated_createMockArgs = {
  readonly oldAmount?: bigint; 
  readonly newAmount?: bigint; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGrid_OwnershipTransferred_createMockArgs = {
  readonly previousOwner?: Address_t; 
  readonly newOwner?: Address_t; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGrid_TimeperiodCreated_createMockArgs = {
  readonly timeperiodId?: bigint; 
  readonly startTime?: bigint; 
  readonly endTime?: bigint; 
  readonly referencePrice?: bigint; 
  readonly allocatedLiquidity?: bigint; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGrid_TimeperiodFinalized_createMockArgs = {
  readonly timeperiodId?: bigint; 
  readonly netResult?: bigint; 
  readonly returnedToGlobal?: bigint; 
  readonly newGlobalPool?: bigint; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGrid_TimeperiodSettled_createMockArgs = {
  readonly timeperiodId?: bigint; 
  readonly winningGridId?: string; 
  readonly twapPrice?: bigint; 
  readonly totalLoserBets?: bigint; 
  readonly poolShare?: bigint; 
  readonly winnerShare?: bigint; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGrid_WinningsClaimedEqual_createMockArgs = {
  readonly user?: Address_t; 
  readonly gridId?: string; 
  readonly equalShare?: bigint; 
  readonly redemptionValue?: bigint; 
  readonly totalPayout?: bigint; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGrid_WrapperSet_createMockArgs = {
  readonly oldWrapper?: Address_t; 
  readonly newWrapper?: Address_t; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGridWrapper_BetPlacedWithSession_createMockArgs = {
  readonly user?: Address_t; 
  readonly sessionKey?: Address_t; 
  readonly timeperiodId?: bigint; 
  readonly amount?: bigint; 
  readonly sharesReceived?: bigint; 
  readonly priceMin?: bigint; 
  readonly priceMax?: bigint; 
  readonly startTime?: bigint; 
  readonly endTime?: bigint; 
  readonly gridId?: string; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGridWrapper_Deposited_createMockArgs = {
  readonly user?: Address_t; 
  readonly amount?: bigint; 
  readonly newBalance?: bigint; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGridWrapper_EIP712DomainChanged_createMockArgs = { readonly mockEventData?: EventFunctions_mockEventData };

export type ChronoGridWrapper_FinalBalance_createMockArgs = {
  readonly user?: Address_t; 
  readonly newBalance?: bigint; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGridWrapper_RelayerUpdated_createMockArgs = {
  readonly oldRelayer?: Address_t; 
  readonly newRelayer?: Address_t; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export type ChronoGridWrapper_Withdrawn_createMockArgs = {
  readonly user?: Address_t; 
  readonly amount?: bigint; 
  readonly newBalance?: bigint; 
  readonly mockEventData?: EventFunctions_mockEventData
};

export const MockDb_createMockDb: () => TestHelpers_MockDb_t = TestHelpersJS.MockDb.createMockDb as any;

export const Addresses_mockAddresses: Address_t[] = TestHelpersJS.Addresses.mockAddresses as any;

export const Addresses_defaultAddress: Address_t = TestHelpersJS.Addresses.defaultAddress as any;

export const ChronoGrid_AutoClaimFailed_processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_AutoClaimFailed_event> = TestHelpersJS.ChronoGrid.AutoClaimFailed.processEvent as any;

export const ChronoGrid_AutoClaimFailed_createMockEvent: (args:ChronoGrid_AutoClaimFailed_createMockArgs) => Types_ChronoGrid_AutoClaimFailed_event = TestHelpersJS.ChronoGrid.AutoClaimFailed.createMockEvent as any;

export const ChronoGrid_AutoClaimSkipped_processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_AutoClaimSkipped_event> = TestHelpersJS.ChronoGrid.AutoClaimSkipped.processEvent as any;

export const ChronoGrid_AutoClaimSkipped_createMockEvent: (args:ChronoGrid_AutoClaimSkipped_createMockArgs) => Types_ChronoGrid_AutoClaimSkipped_event = TestHelpersJS.ChronoGrid.AutoClaimSkipped.createMockEvent as any;

export const ChronoGrid_BetPlaced_processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_BetPlaced_event> = TestHelpersJS.ChronoGrid.BetPlaced.processEvent as any;

export const ChronoGrid_BetPlaced_createMockEvent: (args:ChronoGrid_BetPlaced_createMockArgs) => Types_ChronoGrid_BetPlaced_event = TestHelpersJS.ChronoGrid.BetPlaced.createMockEvent as any;

export const ChronoGrid_GlobalLiquidityAdded_processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_GlobalLiquidityAdded_event> = TestHelpersJS.ChronoGrid.GlobalLiquidityAdded.processEvent as any;

export const ChronoGrid_GlobalLiquidityAdded_createMockEvent: (args:ChronoGrid_GlobalLiquidityAdded_createMockArgs) => Types_ChronoGrid_GlobalLiquidityAdded_event = TestHelpersJS.ChronoGrid.GlobalLiquidityAdded.createMockEvent as any;

export const ChronoGrid_GlobalLiquidityUpdated_processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_GlobalLiquidityUpdated_event> = TestHelpersJS.ChronoGrid.GlobalLiquidityUpdated.processEvent as any;

export const ChronoGrid_GlobalLiquidityUpdated_createMockEvent: (args:ChronoGrid_GlobalLiquidityUpdated_createMockArgs) => Types_ChronoGrid_GlobalLiquidityUpdated_event = TestHelpersJS.ChronoGrid.GlobalLiquidityUpdated.createMockEvent as any;

export const ChronoGrid_GridCreated_processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_GridCreated_event> = TestHelpersJS.ChronoGrid.GridCreated.processEvent as any;

export const ChronoGrid_GridCreated_createMockEvent: (args:ChronoGrid_GridCreated_createMockArgs) => Types_ChronoGrid_GridCreated_event = TestHelpersJS.ChronoGrid.GridCreated.createMockEvent as any;

export const ChronoGrid_MaxBetAmountUpdated_processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_MaxBetAmountUpdated_event> = TestHelpersJS.ChronoGrid.MaxBetAmountUpdated.processEvent as any;

export const ChronoGrid_MaxBetAmountUpdated_createMockEvent: (args:ChronoGrid_MaxBetAmountUpdated_createMockArgs) => Types_ChronoGrid_MaxBetAmountUpdated_event = TestHelpersJS.ChronoGrid.MaxBetAmountUpdated.createMockEvent as any;

export const ChronoGrid_OwnershipTransferred_processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_OwnershipTransferred_event> = TestHelpersJS.ChronoGrid.OwnershipTransferred.processEvent as any;

export const ChronoGrid_OwnershipTransferred_createMockEvent: (args:ChronoGrid_OwnershipTransferred_createMockArgs) => Types_ChronoGrid_OwnershipTransferred_event = TestHelpersJS.ChronoGrid.OwnershipTransferred.createMockEvent as any;

export const ChronoGrid_TimeperiodCreated_processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_TimeperiodCreated_event> = TestHelpersJS.ChronoGrid.TimeperiodCreated.processEvent as any;

export const ChronoGrid_TimeperiodCreated_createMockEvent: (args:ChronoGrid_TimeperiodCreated_createMockArgs) => Types_ChronoGrid_TimeperiodCreated_event = TestHelpersJS.ChronoGrid.TimeperiodCreated.createMockEvent as any;

export const ChronoGrid_TimeperiodFinalized_processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_TimeperiodFinalized_event> = TestHelpersJS.ChronoGrid.TimeperiodFinalized.processEvent as any;

export const ChronoGrid_TimeperiodFinalized_createMockEvent: (args:ChronoGrid_TimeperiodFinalized_createMockArgs) => Types_ChronoGrid_TimeperiodFinalized_event = TestHelpersJS.ChronoGrid.TimeperiodFinalized.createMockEvent as any;

export const ChronoGrid_TimeperiodSettled_processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_TimeperiodSettled_event> = TestHelpersJS.ChronoGrid.TimeperiodSettled.processEvent as any;

export const ChronoGrid_TimeperiodSettled_createMockEvent: (args:ChronoGrid_TimeperiodSettled_createMockArgs) => Types_ChronoGrid_TimeperiodSettled_event = TestHelpersJS.ChronoGrid.TimeperiodSettled.createMockEvent as any;

export const ChronoGrid_WinningsClaimedEqual_processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_WinningsClaimedEqual_event> = TestHelpersJS.ChronoGrid.WinningsClaimedEqual.processEvent as any;

export const ChronoGrid_WinningsClaimedEqual_createMockEvent: (args:ChronoGrid_WinningsClaimedEqual_createMockArgs) => Types_ChronoGrid_WinningsClaimedEqual_event = TestHelpersJS.ChronoGrid.WinningsClaimedEqual.createMockEvent as any;

export const ChronoGrid_WrapperSet_processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_WrapperSet_event> = TestHelpersJS.ChronoGrid.WrapperSet.processEvent as any;

export const ChronoGrid_WrapperSet_createMockEvent: (args:ChronoGrid_WrapperSet_createMockArgs) => Types_ChronoGrid_WrapperSet_event = TestHelpersJS.ChronoGrid.WrapperSet.createMockEvent as any;

export const ChronoGridWrapper_BetPlacedWithSession_processEvent: EventFunctions_eventProcessor<Types_ChronoGridWrapper_BetPlacedWithSession_event> = TestHelpersJS.ChronoGridWrapper.BetPlacedWithSession.processEvent as any;

export const ChronoGridWrapper_BetPlacedWithSession_createMockEvent: (args:ChronoGridWrapper_BetPlacedWithSession_createMockArgs) => Types_ChronoGridWrapper_BetPlacedWithSession_event = TestHelpersJS.ChronoGridWrapper.BetPlacedWithSession.createMockEvent as any;

export const ChronoGridWrapper_Deposited_processEvent: EventFunctions_eventProcessor<Types_ChronoGridWrapper_Deposited_event> = TestHelpersJS.ChronoGridWrapper.Deposited.processEvent as any;

export const ChronoGridWrapper_Deposited_createMockEvent: (args:ChronoGridWrapper_Deposited_createMockArgs) => Types_ChronoGridWrapper_Deposited_event = TestHelpersJS.ChronoGridWrapper.Deposited.createMockEvent as any;

export const ChronoGridWrapper_EIP712DomainChanged_processEvent: EventFunctions_eventProcessor<Types_ChronoGridWrapper_EIP712DomainChanged_event> = TestHelpersJS.ChronoGridWrapper.EIP712DomainChanged.processEvent as any;

export const ChronoGridWrapper_EIP712DomainChanged_createMockEvent: (args:ChronoGridWrapper_EIP712DomainChanged_createMockArgs) => Types_ChronoGridWrapper_EIP712DomainChanged_event = TestHelpersJS.ChronoGridWrapper.EIP712DomainChanged.createMockEvent as any;

export const ChronoGridWrapper_FinalBalance_processEvent: EventFunctions_eventProcessor<Types_ChronoGridWrapper_FinalBalance_event> = TestHelpersJS.ChronoGridWrapper.FinalBalance.processEvent as any;

export const ChronoGridWrapper_FinalBalance_createMockEvent: (args:ChronoGridWrapper_FinalBalance_createMockArgs) => Types_ChronoGridWrapper_FinalBalance_event = TestHelpersJS.ChronoGridWrapper.FinalBalance.createMockEvent as any;

export const ChronoGridWrapper_RelayerUpdated_processEvent: EventFunctions_eventProcessor<Types_ChronoGridWrapper_RelayerUpdated_event> = TestHelpersJS.ChronoGridWrapper.RelayerUpdated.processEvent as any;

export const ChronoGridWrapper_RelayerUpdated_createMockEvent: (args:ChronoGridWrapper_RelayerUpdated_createMockArgs) => Types_ChronoGridWrapper_RelayerUpdated_event = TestHelpersJS.ChronoGridWrapper.RelayerUpdated.createMockEvent as any;

export const ChronoGridWrapper_Withdrawn_processEvent: EventFunctions_eventProcessor<Types_ChronoGridWrapper_Withdrawn_event> = TestHelpersJS.ChronoGridWrapper.Withdrawn.processEvent as any;

export const ChronoGridWrapper_Withdrawn_createMockEvent: (args:ChronoGridWrapper_Withdrawn_createMockArgs) => Types_ChronoGridWrapper_Withdrawn_event = TestHelpersJS.ChronoGridWrapper.Withdrawn.createMockEvent as any;

export const ChronoGrid: {
  TimeperiodFinalized: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_TimeperiodFinalized_event>; 
    createMockEvent: (args:ChronoGrid_TimeperiodFinalized_createMockArgs) => Types_ChronoGrid_TimeperiodFinalized_event
  }; 
  OwnershipTransferred: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_OwnershipTransferred_event>; 
    createMockEvent: (args:ChronoGrid_OwnershipTransferred_createMockArgs) => Types_ChronoGrid_OwnershipTransferred_event
  }; 
  GridCreated: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_GridCreated_event>; 
    createMockEvent: (args:ChronoGrid_GridCreated_createMockArgs) => Types_ChronoGrid_GridCreated_event
  }; 
  MaxBetAmountUpdated: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_MaxBetAmountUpdated_event>; 
    createMockEvent: (args:ChronoGrid_MaxBetAmountUpdated_createMockArgs) => Types_ChronoGrid_MaxBetAmountUpdated_event
  }; 
  TimeperiodSettled: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_TimeperiodSettled_event>; 
    createMockEvent: (args:ChronoGrid_TimeperiodSettled_createMockArgs) => Types_ChronoGrid_TimeperiodSettled_event
  }; 
  AutoClaimSkipped: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_AutoClaimSkipped_event>; 
    createMockEvent: (args:ChronoGrid_AutoClaimSkipped_createMockArgs) => Types_ChronoGrid_AutoClaimSkipped_event
  }; 
  BetPlaced: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_BetPlaced_event>; 
    createMockEvent: (args:ChronoGrid_BetPlaced_createMockArgs) => Types_ChronoGrid_BetPlaced_event
  }; 
  TimeperiodCreated: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_TimeperiodCreated_event>; 
    createMockEvent: (args:ChronoGrid_TimeperiodCreated_createMockArgs) => Types_ChronoGrid_TimeperiodCreated_event
  }; 
  WinningsClaimedEqual: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_WinningsClaimedEqual_event>; 
    createMockEvent: (args:ChronoGrid_WinningsClaimedEqual_createMockArgs) => Types_ChronoGrid_WinningsClaimedEqual_event
  }; 
  AutoClaimFailed: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_AutoClaimFailed_event>; 
    createMockEvent: (args:ChronoGrid_AutoClaimFailed_createMockArgs) => Types_ChronoGrid_AutoClaimFailed_event
  }; 
  GlobalLiquidityAdded: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_GlobalLiquidityAdded_event>; 
    createMockEvent: (args:ChronoGrid_GlobalLiquidityAdded_createMockArgs) => Types_ChronoGrid_GlobalLiquidityAdded_event
  }; 
  WrapperSet: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_WrapperSet_event>; 
    createMockEvent: (args:ChronoGrid_WrapperSet_createMockArgs) => Types_ChronoGrid_WrapperSet_event
  }; 
  GlobalLiquidityUpdated: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGrid_GlobalLiquidityUpdated_event>; 
    createMockEvent: (args:ChronoGrid_GlobalLiquidityUpdated_createMockArgs) => Types_ChronoGrid_GlobalLiquidityUpdated_event
  }
} = TestHelpersJS.ChronoGrid as any;

export const Addresses: { mockAddresses: Address_t[]; defaultAddress: Address_t } = TestHelpersJS.Addresses as any;

export const MockDb: { createMockDb: () => TestHelpers_MockDb_t } = TestHelpersJS.MockDb as any;

export const ChronoGridWrapper: {
  RelayerUpdated: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGridWrapper_RelayerUpdated_event>; 
    createMockEvent: (args:ChronoGridWrapper_RelayerUpdated_createMockArgs) => Types_ChronoGridWrapper_RelayerUpdated_event
  }; 
  EIP712DomainChanged: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGridWrapper_EIP712DomainChanged_event>; 
    createMockEvent: (args:ChronoGridWrapper_EIP712DomainChanged_createMockArgs) => Types_ChronoGridWrapper_EIP712DomainChanged_event
  }; 
  BetPlacedWithSession: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGridWrapper_BetPlacedWithSession_event>; 
    createMockEvent: (args:ChronoGridWrapper_BetPlacedWithSession_createMockArgs) => Types_ChronoGridWrapper_BetPlacedWithSession_event
  }; 
  FinalBalance: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGridWrapper_FinalBalance_event>; 
    createMockEvent: (args:ChronoGridWrapper_FinalBalance_createMockArgs) => Types_ChronoGridWrapper_FinalBalance_event
  }; 
  Deposited: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGridWrapper_Deposited_event>; 
    createMockEvent: (args:ChronoGridWrapper_Deposited_createMockArgs) => Types_ChronoGridWrapper_Deposited_event
  }; 
  Withdrawn: {
    processEvent: EventFunctions_eventProcessor<Types_ChronoGridWrapper_Withdrawn_event>; 
    createMockEvent: (args:ChronoGridWrapper_Withdrawn_createMockArgs) => Types_ChronoGridWrapper_Withdrawn_event
  }
} = TestHelpersJS.ChronoGridWrapper as any;
