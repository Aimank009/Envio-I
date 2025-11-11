/* TypeScript file generated from TestHelpers_MockDb.res by genType. */

/* eslint-disable */
/* tslint:disable */

const TestHelpers_MockDbJS = require('./TestHelpers_MockDb.res.js');

import type {ChronoGridWrapper_BetPlacedWithSession_t as Entities_ChronoGridWrapper_BetPlacedWithSession_t} from '../src/db/Entities.gen';

import type {ChronoGridWrapper_Deposited_t as Entities_ChronoGridWrapper_Deposited_t} from '../src/db/Entities.gen';

import type {ChronoGridWrapper_EIP712DomainChanged_t as Entities_ChronoGridWrapper_EIP712DomainChanged_t} from '../src/db/Entities.gen';

import type {ChronoGridWrapper_RelayerUpdated_t as Entities_ChronoGridWrapper_RelayerUpdated_t} from '../src/db/Entities.gen';

import type {ChronoGridWrapper_Withdrawn_t as Entities_ChronoGridWrapper_Withdrawn_t} from '../src/db/Entities.gen';

import type {ChronoGrid_AutoClaimFailed_t as Entities_ChronoGrid_AutoClaimFailed_t} from '../src/db/Entities.gen';

import type {ChronoGrid_AutoClaimSkipped_t as Entities_ChronoGrid_AutoClaimSkipped_t} from '../src/db/Entities.gen';

import type {ChronoGrid_BetPlaced_t as Entities_ChronoGrid_BetPlaced_t} from '../src/db/Entities.gen';

import type {ChronoGrid_GlobalLiquidityAdded_t as Entities_ChronoGrid_GlobalLiquidityAdded_t} from '../src/db/Entities.gen';

import type {ChronoGrid_GridCreated_t as Entities_ChronoGrid_GridCreated_t} from '../src/db/Entities.gen';

import type {ChronoGrid_MaxBetAmountUpdated_t as Entities_ChronoGrid_MaxBetAmountUpdated_t} from '../src/db/Entities.gen';

import type {ChronoGrid_OwnershipTransferred_t as Entities_ChronoGrid_OwnershipTransferred_t} from '../src/db/Entities.gen';

import type {ChronoGrid_TimeperiodCreated_t as Entities_ChronoGrid_TimeperiodCreated_t} from '../src/db/Entities.gen';

import type {ChronoGrid_TimeperiodFinalized_t as Entities_ChronoGrid_TimeperiodFinalized_t} from '../src/db/Entities.gen';

import type {ChronoGrid_TimeperiodSettled_t as Entities_ChronoGrid_TimeperiodSettled_t} from '../src/db/Entities.gen';

import type {ChronoGrid_WinningsClaimedEqual_t as Entities_ChronoGrid_WinningsClaimedEqual_t} from '../src/db/Entities.gen';

import type {ChronoGrid_WrapperSet_t as Entities_ChronoGrid_WrapperSet_t} from '../src/db/Entities.gen';

import type {DynamicContractRegistry_t as InternalTable_DynamicContractRegistry_t} from 'envio/src/db/InternalTable.gen';

import type {RawEvents_t as InternalTable_RawEvents_t} from 'envio/src/db/InternalTable.gen';

import type {eventLog as Types_eventLog} from './Types.gen';

import type {rawEventsKey as InMemoryStore_rawEventsKey} from './InMemoryStore.gen';

/** The mockDb type is simply an InMemoryStore internally. __dbInternal__ holds a reference
to an inMemoryStore and all the the accessor methods point to the reference of that inMemory
store */
export abstract class inMemoryStore { protected opaque!: any }; /* simulate opaque types */

export type t = {
  readonly __dbInternal__: inMemoryStore; 
  readonly entities: entities; 
  readonly rawEvents: storeOperations<InMemoryStore_rawEventsKey,InternalTable_RawEvents_t>; 
  readonly dynamicContractRegistry: entityStoreOperations<InternalTable_DynamicContractRegistry_t>; 
  readonly processEvents: (_1:Types_eventLog<unknown>[]) => Promise<t>
};

export type entities = {
  readonly ChronoGridWrapper_BetPlacedWithSession: entityStoreOperations<Entities_ChronoGridWrapper_BetPlacedWithSession_t>; 
  readonly ChronoGridWrapper_Deposited: entityStoreOperations<Entities_ChronoGridWrapper_Deposited_t>; 
  readonly ChronoGridWrapper_EIP712DomainChanged: entityStoreOperations<Entities_ChronoGridWrapper_EIP712DomainChanged_t>; 
  readonly ChronoGridWrapper_RelayerUpdated: entityStoreOperations<Entities_ChronoGridWrapper_RelayerUpdated_t>; 
  readonly ChronoGridWrapper_Withdrawn: entityStoreOperations<Entities_ChronoGridWrapper_Withdrawn_t>; 
  readonly ChronoGrid_AutoClaimFailed: entityStoreOperations<Entities_ChronoGrid_AutoClaimFailed_t>; 
  readonly ChronoGrid_AutoClaimSkipped: entityStoreOperations<Entities_ChronoGrid_AutoClaimSkipped_t>; 
  readonly ChronoGrid_BetPlaced: entityStoreOperations<Entities_ChronoGrid_BetPlaced_t>; 
  readonly ChronoGrid_GlobalLiquidityAdded: entityStoreOperations<Entities_ChronoGrid_GlobalLiquidityAdded_t>; 
  readonly ChronoGrid_GridCreated: entityStoreOperations<Entities_ChronoGrid_GridCreated_t>; 
  readonly ChronoGrid_MaxBetAmountUpdated: entityStoreOperations<Entities_ChronoGrid_MaxBetAmountUpdated_t>; 
  readonly ChronoGrid_OwnershipTransferred: entityStoreOperations<Entities_ChronoGrid_OwnershipTransferred_t>; 
  readonly ChronoGrid_TimeperiodCreated: entityStoreOperations<Entities_ChronoGrid_TimeperiodCreated_t>; 
  readonly ChronoGrid_TimeperiodFinalized: entityStoreOperations<Entities_ChronoGrid_TimeperiodFinalized_t>; 
  readonly ChronoGrid_TimeperiodSettled: entityStoreOperations<Entities_ChronoGrid_TimeperiodSettled_t>; 
  readonly ChronoGrid_WinningsClaimedEqual: entityStoreOperations<Entities_ChronoGrid_WinningsClaimedEqual_t>; 
  readonly ChronoGrid_WrapperSet: entityStoreOperations<Entities_ChronoGrid_WrapperSet_t>
};

export type entityStoreOperations<entity> = storeOperations<string,entity>;

export type storeOperations<entityKey,entity> = {
  readonly getAll: () => entity[]; 
  readonly get: (_1:entityKey) => (undefined | entity); 
  readonly set: (_1:entity) => t; 
  readonly delete: (_1:entityKey) => t
};

/** The constructor function for a mockDb. Call it and then set up the inital state by calling
any of the set functions it provides access to. A mockDb will be passed into a processEvent 
helper. Note, process event helpers will not mutate the mockDb but return a new mockDb with
new state so you can compare states before and after. */
export const createMockDb: () => t = TestHelpers_MockDbJS.createMockDb as any;
