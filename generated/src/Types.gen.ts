/* TypeScript file generated from Types.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type {ChronoGridWrapper_BetPlacedWithSession_t as Entities_ChronoGridWrapper_BetPlacedWithSession_t} from '../src/db/Entities.gen';

import type {ChronoGridWrapper_Deposited_t as Entities_ChronoGridWrapper_Deposited_t} from '../src/db/Entities.gen';

import type {ChronoGridWrapper_EIP712DomainChanged_t as Entities_ChronoGridWrapper_EIP712DomainChanged_t} from '../src/db/Entities.gen';

import type {ChronoGridWrapper_FinalBalance_t as Entities_ChronoGridWrapper_FinalBalance_t} from '../src/db/Entities.gen';

import type {ChronoGridWrapper_RelayerUpdated_t as Entities_ChronoGridWrapper_RelayerUpdated_t} from '../src/db/Entities.gen';

import type {ChronoGridWrapper_UpdatedPnl_t as Entities_ChronoGridWrapper_UpdatedPnl_t} from '../src/db/Entities.gen';

import type {ChronoGridWrapper_Withdrawn_t as Entities_ChronoGridWrapper_Withdrawn_t} from '../src/db/Entities.gen';

import type {ChronoGrid_AutoClaimFailed_t as Entities_ChronoGrid_AutoClaimFailed_t} from '../src/db/Entities.gen';

import type {ChronoGrid_AutoClaimSkipped_t as Entities_ChronoGrid_AutoClaimSkipped_t} from '../src/db/Entities.gen';

import type {ChronoGrid_BetPlaced_t as Entities_ChronoGrid_BetPlaced_t} from '../src/db/Entities.gen';

import type {ChronoGrid_GlobalLiquidityAdded_t as Entities_ChronoGrid_GlobalLiquidityAdded_t} from '../src/db/Entities.gen';

import type {ChronoGrid_GlobalLiquidityUpdated_t as Entities_ChronoGrid_GlobalLiquidityUpdated_t} from '../src/db/Entities.gen';

import type {ChronoGrid_GridCreated_t as Entities_ChronoGrid_GridCreated_t} from '../src/db/Entities.gen';

import type {ChronoGrid_MaxBetAmountUpdated_t as Entities_ChronoGrid_MaxBetAmountUpdated_t} from '../src/db/Entities.gen';

import type {ChronoGrid_OwnershipTransferred_t as Entities_ChronoGrid_OwnershipTransferred_t} from '../src/db/Entities.gen';

import type {ChronoGrid_TimeperiodCreated_t as Entities_ChronoGrid_TimeperiodCreated_t} from '../src/db/Entities.gen';

import type {ChronoGrid_TimeperiodFinalized_t as Entities_ChronoGrid_TimeperiodFinalized_t} from '../src/db/Entities.gen';

import type {ChronoGrid_TimeperiodSettled_t as Entities_ChronoGrid_TimeperiodSettled_t} from '../src/db/Entities.gen';

import type {ChronoGrid_WinningsClaimedEqual_t as Entities_ChronoGrid_WinningsClaimedEqual_t} from '../src/db/Entities.gen';

import type {ChronoGrid_WrapperSet_t as Entities_ChronoGrid_WrapperSet_t} from '../src/db/Entities.gen';

import type {HandlerContext as $$handlerContext} from './Types.ts';

import type {HandlerWithOptions as $$fnWithEventConfig} from './bindings/OpaqueTypes.ts';

import type {SingleOrMultiple as $$SingleOrMultiple_t} from './bindings/OpaqueTypes';

import type {eventOptions as Internal_eventOptions} from 'envio/src/Internal.gen';

import type {genericContractRegisterArgs as Internal_genericContractRegisterArgs} from 'envio/src/Internal.gen';

import type {genericContractRegister as Internal_genericContractRegister} from 'envio/src/Internal.gen';

import type {genericEvent as Internal_genericEvent} from 'envio/src/Internal.gen';

import type {genericHandlerArgs as Internal_genericHandlerArgs} from 'envio/src/Internal.gen';

import type {genericHandler as Internal_genericHandler} from 'envio/src/Internal.gen';

import type {logger as Envio_logger} from 'envio/src/Envio.gen';

import type {noEventFilters as Internal_noEventFilters} from 'envio/src/Internal.gen';

import type {t as Address_t} from 'envio/src/Address.gen';

export type id = string;
export type Id = id;

export type contractRegistrations = {
  readonly log: Envio_logger; 
  readonly addChronoGrid: (_1:Address_t) => void; 
  readonly addChronoGridWrapper: (_1:Address_t) => void
};

export type entityHandlerContext<entity,indexedFieldOperations> = {
  readonly get: (_1:id) => Promise<(undefined | entity)>; 
  readonly getOrThrow: (_1:id, message:(undefined | string)) => Promise<entity>; 
  readonly getWhere: indexedFieldOperations; 
  readonly getOrCreate: (_1:entity) => Promise<entity>; 
  readonly set: (_1:entity) => void; 
  readonly deleteUnsafe: (_1:id) => void
};

export type handlerContext = $$handlerContext;

export type chronoGridWrapper_BetPlacedWithSession = Entities_ChronoGridWrapper_BetPlacedWithSession_t;
export type ChronoGridWrapper_BetPlacedWithSession = chronoGridWrapper_BetPlacedWithSession;

export type chronoGridWrapper_Deposited = Entities_ChronoGridWrapper_Deposited_t;
export type ChronoGridWrapper_Deposited = chronoGridWrapper_Deposited;

export type chronoGridWrapper_EIP712DomainChanged = Entities_ChronoGridWrapper_EIP712DomainChanged_t;
export type ChronoGridWrapper_EIP712DomainChanged = chronoGridWrapper_EIP712DomainChanged;

export type chronoGridWrapper_FinalBalance = Entities_ChronoGridWrapper_FinalBalance_t;
export type ChronoGridWrapper_FinalBalance = chronoGridWrapper_FinalBalance;

export type chronoGridWrapper_RelayerUpdated = Entities_ChronoGridWrapper_RelayerUpdated_t;
export type ChronoGridWrapper_RelayerUpdated = chronoGridWrapper_RelayerUpdated;

export type chronoGridWrapper_UpdatedPnl = Entities_ChronoGridWrapper_UpdatedPnl_t;
export type ChronoGridWrapper_UpdatedPnl = chronoGridWrapper_UpdatedPnl;

export type chronoGridWrapper_Withdrawn = Entities_ChronoGridWrapper_Withdrawn_t;
export type ChronoGridWrapper_Withdrawn = chronoGridWrapper_Withdrawn;

export type chronoGrid_AutoClaimFailed = Entities_ChronoGrid_AutoClaimFailed_t;
export type ChronoGrid_AutoClaimFailed = chronoGrid_AutoClaimFailed;

export type chronoGrid_AutoClaimSkipped = Entities_ChronoGrid_AutoClaimSkipped_t;
export type ChronoGrid_AutoClaimSkipped = chronoGrid_AutoClaimSkipped;

export type chronoGrid_BetPlaced = Entities_ChronoGrid_BetPlaced_t;
export type ChronoGrid_BetPlaced = chronoGrid_BetPlaced;

export type chronoGrid_GlobalLiquidityAdded = Entities_ChronoGrid_GlobalLiquidityAdded_t;
export type ChronoGrid_GlobalLiquidityAdded = chronoGrid_GlobalLiquidityAdded;

export type chronoGrid_GlobalLiquidityUpdated = Entities_ChronoGrid_GlobalLiquidityUpdated_t;
export type ChronoGrid_GlobalLiquidityUpdated = chronoGrid_GlobalLiquidityUpdated;

export type chronoGrid_GridCreated = Entities_ChronoGrid_GridCreated_t;
export type ChronoGrid_GridCreated = chronoGrid_GridCreated;

export type chronoGrid_MaxBetAmountUpdated = Entities_ChronoGrid_MaxBetAmountUpdated_t;
export type ChronoGrid_MaxBetAmountUpdated = chronoGrid_MaxBetAmountUpdated;

export type chronoGrid_OwnershipTransferred = Entities_ChronoGrid_OwnershipTransferred_t;
export type ChronoGrid_OwnershipTransferred = chronoGrid_OwnershipTransferred;

export type chronoGrid_TimeperiodCreated = Entities_ChronoGrid_TimeperiodCreated_t;
export type ChronoGrid_TimeperiodCreated = chronoGrid_TimeperiodCreated;

export type chronoGrid_TimeperiodFinalized = Entities_ChronoGrid_TimeperiodFinalized_t;
export type ChronoGrid_TimeperiodFinalized = chronoGrid_TimeperiodFinalized;

export type chronoGrid_TimeperiodSettled = Entities_ChronoGrid_TimeperiodSettled_t;
export type ChronoGrid_TimeperiodSettled = chronoGrid_TimeperiodSettled;

export type chronoGrid_WinningsClaimedEqual = Entities_ChronoGrid_WinningsClaimedEqual_t;
export type ChronoGrid_WinningsClaimedEqual = chronoGrid_WinningsClaimedEqual;

export type chronoGrid_WrapperSet = Entities_ChronoGrid_WrapperSet_t;
export type ChronoGrid_WrapperSet = chronoGrid_WrapperSet;

export type Transaction_t = {};

export type Block_t = {
  readonly number: number; 
  readonly timestamp: number; 
  readonly hash: string
};

export type AggregatedBlock_t = {
  readonly hash: string; 
  readonly number: number; 
  readonly timestamp: number
};

export type AggregatedTransaction_t = {};

export type eventLog<params> = Internal_genericEvent<params,Block_t,Transaction_t>;
export type EventLog<params> = eventLog<params>;

export type SingleOrMultiple_t<a> = $$SingleOrMultiple_t<a>;

export type HandlerTypes_args<eventArgs,context> = { readonly event: eventLog<eventArgs>; readonly context: context };

export type HandlerTypes_contractRegisterArgs<eventArgs> = Internal_genericContractRegisterArgs<eventLog<eventArgs>,contractRegistrations>;

export type HandlerTypes_contractRegister<eventArgs> = Internal_genericContractRegister<HandlerTypes_contractRegisterArgs<eventArgs>>;

export type HandlerTypes_eventConfig<eventFilters> = Internal_eventOptions<eventFilters>;

export type fnWithEventConfig<fn,eventConfig> = $$fnWithEventConfig<fn,eventConfig>;

export type contractRegisterWithOptions<eventArgs,eventFilters> = fnWithEventConfig<HandlerTypes_contractRegister<eventArgs>,HandlerTypes_eventConfig<eventFilters>>;

export type ChronoGrid_chainId = 999;

export type ChronoGrid_AutoClaimFailed_eventArgs = {
  readonly user: Address_t; 
  readonly gridId: string; 
  readonly timeperiodId: bigint; 
  readonly reason: string
};

export type ChronoGrid_AutoClaimFailed_block = Block_t;

export type ChronoGrid_AutoClaimFailed_transaction = Transaction_t;

export type ChronoGrid_AutoClaimFailed_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGrid_AutoClaimFailed_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGrid_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGrid_AutoClaimFailed_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGrid_AutoClaimFailed_block
};

export type ChronoGrid_AutoClaimFailed_handlerArgs = Internal_genericHandlerArgs<ChronoGrid_AutoClaimFailed_event,handlerContext,void>;

export type ChronoGrid_AutoClaimFailed_handler = Internal_genericHandler<ChronoGrid_AutoClaimFailed_handlerArgs>;

export type ChronoGrid_AutoClaimFailed_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGrid_AutoClaimFailed_event,contractRegistrations>>;

export type ChronoGrid_AutoClaimFailed_eventFilter = { readonly user?: SingleOrMultiple_t<Address_t>; readonly gridId?: SingleOrMultiple_t<string> };

export type ChronoGrid_AutoClaimFailed_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGrid_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGrid_AutoClaimFailed_eventFiltersDefinition = 
    ChronoGrid_AutoClaimFailed_eventFilter
  | ChronoGrid_AutoClaimFailed_eventFilter[];

export type ChronoGrid_AutoClaimFailed_eventFilters = 
    ChronoGrid_AutoClaimFailed_eventFilter
  | ChronoGrid_AutoClaimFailed_eventFilter[]
  | ((_1:ChronoGrid_AutoClaimFailed_eventFiltersArgs) => ChronoGrid_AutoClaimFailed_eventFiltersDefinition);

export type ChronoGrid_AutoClaimSkipped_eventArgs = {
  readonly user: Address_t; 
  readonly gridId: string; 
  readonly timeperiodId: bigint
};

export type ChronoGrid_AutoClaimSkipped_block = Block_t;

export type ChronoGrid_AutoClaimSkipped_transaction = Transaction_t;

export type ChronoGrid_AutoClaimSkipped_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGrid_AutoClaimSkipped_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGrid_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGrid_AutoClaimSkipped_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGrid_AutoClaimSkipped_block
};

export type ChronoGrid_AutoClaimSkipped_handlerArgs = Internal_genericHandlerArgs<ChronoGrid_AutoClaimSkipped_event,handlerContext,void>;

export type ChronoGrid_AutoClaimSkipped_handler = Internal_genericHandler<ChronoGrid_AutoClaimSkipped_handlerArgs>;

export type ChronoGrid_AutoClaimSkipped_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGrid_AutoClaimSkipped_event,contractRegistrations>>;

export type ChronoGrid_AutoClaimSkipped_eventFilter = { readonly user?: SingleOrMultiple_t<Address_t>; readonly gridId?: SingleOrMultiple_t<string> };

export type ChronoGrid_AutoClaimSkipped_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGrid_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGrid_AutoClaimSkipped_eventFiltersDefinition = 
    ChronoGrid_AutoClaimSkipped_eventFilter
  | ChronoGrid_AutoClaimSkipped_eventFilter[];

export type ChronoGrid_AutoClaimSkipped_eventFilters = 
    ChronoGrid_AutoClaimSkipped_eventFilter
  | ChronoGrid_AutoClaimSkipped_eventFilter[]
  | ((_1:ChronoGrid_AutoClaimSkipped_eventFiltersArgs) => ChronoGrid_AutoClaimSkipped_eventFiltersDefinition);

export type ChronoGrid_BetPlaced_eventArgs = {
  readonly user: Address_t; 
  readonly gridId: string; 
  readonly timeperiodId: bigint; 
  readonly amountPaid: bigint; 
  readonly sharesReceived: bigint; 
  readonly pricePerShare: bigint; 
  readonly bAtEntry: bigint; 
  readonly totalshare: bigint; 
  readonly price_min: bigint; 
  readonly price_max: bigint
};

export type ChronoGrid_BetPlaced_block = Block_t;

export type ChronoGrid_BetPlaced_transaction = Transaction_t;

export type ChronoGrid_BetPlaced_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGrid_BetPlaced_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGrid_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGrid_BetPlaced_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGrid_BetPlaced_block
};

export type ChronoGrid_BetPlaced_handlerArgs = Internal_genericHandlerArgs<ChronoGrid_BetPlaced_event,handlerContext,void>;

export type ChronoGrid_BetPlaced_handler = Internal_genericHandler<ChronoGrid_BetPlaced_handlerArgs>;

export type ChronoGrid_BetPlaced_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGrid_BetPlaced_event,contractRegistrations>>;

export type ChronoGrid_BetPlaced_eventFilter = { readonly user?: SingleOrMultiple_t<Address_t>; readonly gridId?: SingleOrMultiple_t<string> };

export type ChronoGrid_BetPlaced_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGrid_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGrid_BetPlaced_eventFiltersDefinition = 
    ChronoGrid_BetPlaced_eventFilter
  | ChronoGrid_BetPlaced_eventFilter[];

export type ChronoGrid_BetPlaced_eventFilters = 
    ChronoGrid_BetPlaced_eventFilter
  | ChronoGrid_BetPlaced_eventFilter[]
  | ((_1:ChronoGrid_BetPlaced_eventFiltersArgs) => ChronoGrid_BetPlaced_eventFiltersDefinition);

export type ChronoGrid_GlobalLiquidityAdded_eventArgs = { readonly amount: bigint; readonly newTotal: bigint };

export type ChronoGrid_GlobalLiquidityAdded_block = Block_t;

export type ChronoGrid_GlobalLiquidityAdded_transaction = Transaction_t;

export type ChronoGrid_GlobalLiquidityAdded_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGrid_GlobalLiquidityAdded_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGrid_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGrid_GlobalLiquidityAdded_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGrid_GlobalLiquidityAdded_block
};

export type ChronoGrid_GlobalLiquidityAdded_handlerArgs = Internal_genericHandlerArgs<ChronoGrid_GlobalLiquidityAdded_event,handlerContext,void>;

export type ChronoGrid_GlobalLiquidityAdded_handler = Internal_genericHandler<ChronoGrid_GlobalLiquidityAdded_handlerArgs>;

export type ChronoGrid_GlobalLiquidityAdded_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGrid_GlobalLiquidityAdded_event,contractRegistrations>>;

export type ChronoGrid_GlobalLiquidityAdded_eventFilter = {};

export type ChronoGrid_GlobalLiquidityAdded_eventFilters = Internal_noEventFilters;

export type ChronoGrid_GlobalLiquidityUpdated_eventArgs = { readonly newTotal: bigint };

export type ChronoGrid_GlobalLiquidityUpdated_block = Block_t;

export type ChronoGrid_GlobalLiquidityUpdated_transaction = Transaction_t;

export type ChronoGrid_GlobalLiquidityUpdated_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGrid_GlobalLiquidityUpdated_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGrid_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGrid_GlobalLiquidityUpdated_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGrid_GlobalLiquidityUpdated_block
};

export type ChronoGrid_GlobalLiquidityUpdated_handlerArgs = Internal_genericHandlerArgs<ChronoGrid_GlobalLiquidityUpdated_event,handlerContext,void>;

export type ChronoGrid_GlobalLiquidityUpdated_handler = Internal_genericHandler<ChronoGrid_GlobalLiquidityUpdated_handlerArgs>;

export type ChronoGrid_GlobalLiquidityUpdated_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGrid_GlobalLiquidityUpdated_event,contractRegistrations>>;

export type ChronoGrid_GlobalLiquidityUpdated_eventFilter = {};

export type ChronoGrid_GlobalLiquidityUpdated_eventFilters = Internal_noEventFilters;

export type ChronoGrid_GridCreated_eventArgs = {
  readonly gridId: string; 
  readonly timeperiodId: bigint; 
  readonly priceMin: bigint; 
  readonly priceMax: bigint
};

export type ChronoGrid_GridCreated_block = Block_t;

export type ChronoGrid_GridCreated_transaction = Transaction_t;

export type ChronoGrid_GridCreated_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGrid_GridCreated_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGrid_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGrid_GridCreated_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGrid_GridCreated_block
};

export type ChronoGrid_GridCreated_handlerArgs = Internal_genericHandlerArgs<ChronoGrid_GridCreated_event,handlerContext,void>;

export type ChronoGrid_GridCreated_handler = Internal_genericHandler<ChronoGrid_GridCreated_handlerArgs>;

export type ChronoGrid_GridCreated_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGrid_GridCreated_event,contractRegistrations>>;

export type ChronoGrid_GridCreated_eventFilter = { readonly gridId?: SingleOrMultiple_t<string>; readonly timeperiodId?: SingleOrMultiple_t<bigint> };

export type ChronoGrid_GridCreated_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGrid_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGrid_GridCreated_eventFiltersDefinition = 
    ChronoGrid_GridCreated_eventFilter
  | ChronoGrid_GridCreated_eventFilter[];

export type ChronoGrid_GridCreated_eventFilters = 
    ChronoGrid_GridCreated_eventFilter
  | ChronoGrid_GridCreated_eventFilter[]
  | ((_1:ChronoGrid_GridCreated_eventFiltersArgs) => ChronoGrid_GridCreated_eventFiltersDefinition);

export type ChronoGrid_MaxBetAmountUpdated_eventArgs = { readonly oldAmount: bigint; readonly newAmount: bigint };

export type ChronoGrid_MaxBetAmountUpdated_block = Block_t;

export type ChronoGrid_MaxBetAmountUpdated_transaction = Transaction_t;

export type ChronoGrid_MaxBetAmountUpdated_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGrid_MaxBetAmountUpdated_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGrid_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGrid_MaxBetAmountUpdated_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGrid_MaxBetAmountUpdated_block
};

export type ChronoGrid_MaxBetAmountUpdated_handlerArgs = Internal_genericHandlerArgs<ChronoGrid_MaxBetAmountUpdated_event,handlerContext,void>;

export type ChronoGrid_MaxBetAmountUpdated_handler = Internal_genericHandler<ChronoGrid_MaxBetAmountUpdated_handlerArgs>;

export type ChronoGrid_MaxBetAmountUpdated_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGrid_MaxBetAmountUpdated_event,contractRegistrations>>;

export type ChronoGrid_MaxBetAmountUpdated_eventFilter = {};

export type ChronoGrid_MaxBetAmountUpdated_eventFilters = Internal_noEventFilters;

export type ChronoGrid_OwnershipTransferred_eventArgs = { readonly previousOwner: Address_t; readonly newOwner: Address_t };

export type ChronoGrid_OwnershipTransferred_block = Block_t;

export type ChronoGrid_OwnershipTransferred_transaction = Transaction_t;

export type ChronoGrid_OwnershipTransferred_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGrid_OwnershipTransferred_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGrid_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGrid_OwnershipTransferred_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGrid_OwnershipTransferred_block
};

export type ChronoGrid_OwnershipTransferred_handlerArgs = Internal_genericHandlerArgs<ChronoGrid_OwnershipTransferred_event,handlerContext,void>;

export type ChronoGrid_OwnershipTransferred_handler = Internal_genericHandler<ChronoGrid_OwnershipTransferred_handlerArgs>;

export type ChronoGrid_OwnershipTransferred_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGrid_OwnershipTransferred_event,contractRegistrations>>;

export type ChronoGrid_OwnershipTransferred_eventFilter = { readonly previousOwner?: SingleOrMultiple_t<Address_t>; readonly newOwner?: SingleOrMultiple_t<Address_t> };

export type ChronoGrid_OwnershipTransferred_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGrid_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGrid_OwnershipTransferred_eventFiltersDefinition = 
    ChronoGrid_OwnershipTransferred_eventFilter
  | ChronoGrid_OwnershipTransferred_eventFilter[];

export type ChronoGrid_OwnershipTransferred_eventFilters = 
    ChronoGrid_OwnershipTransferred_eventFilter
  | ChronoGrid_OwnershipTransferred_eventFilter[]
  | ((_1:ChronoGrid_OwnershipTransferred_eventFiltersArgs) => ChronoGrid_OwnershipTransferred_eventFiltersDefinition);

export type ChronoGrid_TimeperiodCreated_eventArgs = {
  readonly timeperiodId: bigint; 
  readonly startTime: bigint; 
  readonly endTime: bigint; 
  readonly referencePrice: bigint; 
  readonly allocatedLiquidity: bigint
};

export type ChronoGrid_TimeperiodCreated_block = Block_t;

export type ChronoGrid_TimeperiodCreated_transaction = Transaction_t;

export type ChronoGrid_TimeperiodCreated_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGrid_TimeperiodCreated_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGrid_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGrid_TimeperiodCreated_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGrid_TimeperiodCreated_block
};

export type ChronoGrid_TimeperiodCreated_handlerArgs = Internal_genericHandlerArgs<ChronoGrid_TimeperiodCreated_event,handlerContext,void>;

export type ChronoGrid_TimeperiodCreated_handler = Internal_genericHandler<ChronoGrid_TimeperiodCreated_handlerArgs>;

export type ChronoGrid_TimeperiodCreated_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGrid_TimeperiodCreated_event,contractRegistrations>>;

export type ChronoGrid_TimeperiodCreated_eventFilter = { readonly timeperiodId?: SingleOrMultiple_t<bigint> };

export type ChronoGrid_TimeperiodCreated_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGrid_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGrid_TimeperiodCreated_eventFiltersDefinition = 
    ChronoGrid_TimeperiodCreated_eventFilter
  | ChronoGrid_TimeperiodCreated_eventFilter[];

export type ChronoGrid_TimeperiodCreated_eventFilters = 
    ChronoGrid_TimeperiodCreated_eventFilter
  | ChronoGrid_TimeperiodCreated_eventFilter[]
  | ((_1:ChronoGrid_TimeperiodCreated_eventFiltersArgs) => ChronoGrid_TimeperiodCreated_eventFiltersDefinition);

export type ChronoGrid_TimeperiodFinalized_eventArgs = {
  readonly timeperiodId: bigint; 
  readonly netResult: bigint; 
  readonly returnedToGlobal: bigint; 
  readonly newGlobalPool: bigint
};

export type ChronoGrid_TimeperiodFinalized_block = Block_t;

export type ChronoGrid_TimeperiodFinalized_transaction = Transaction_t;

export type ChronoGrid_TimeperiodFinalized_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGrid_TimeperiodFinalized_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGrid_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGrid_TimeperiodFinalized_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGrid_TimeperiodFinalized_block
};

export type ChronoGrid_TimeperiodFinalized_handlerArgs = Internal_genericHandlerArgs<ChronoGrid_TimeperiodFinalized_event,handlerContext,void>;

export type ChronoGrid_TimeperiodFinalized_handler = Internal_genericHandler<ChronoGrid_TimeperiodFinalized_handlerArgs>;

export type ChronoGrid_TimeperiodFinalized_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGrid_TimeperiodFinalized_event,contractRegistrations>>;

export type ChronoGrid_TimeperiodFinalized_eventFilter = { readonly timeperiodId?: SingleOrMultiple_t<bigint> };

export type ChronoGrid_TimeperiodFinalized_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGrid_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGrid_TimeperiodFinalized_eventFiltersDefinition = 
    ChronoGrid_TimeperiodFinalized_eventFilter
  | ChronoGrid_TimeperiodFinalized_eventFilter[];

export type ChronoGrid_TimeperiodFinalized_eventFilters = 
    ChronoGrid_TimeperiodFinalized_eventFilter
  | ChronoGrid_TimeperiodFinalized_eventFilter[]
  | ((_1:ChronoGrid_TimeperiodFinalized_eventFiltersArgs) => ChronoGrid_TimeperiodFinalized_eventFiltersDefinition);

export type ChronoGrid_TimeperiodSettled_eventArgs = {
  readonly timeperiodId: bigint; 
  readonly winningGridId: string; 
  readonly twapPrice: bigint; 
  readonly totalLoserBets: bigint; 
  readonly poolShare: bigint; 
  readonly winnerShare: bigint
};

export type ChronoGrid_TimeperiodSettled_block = Block_t;

export type ChronoGrid_TimeperiodSettled_transaction = Transaction_t;

export type ChronoGrid_TimeperiodSettled_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGrid_TimeperiodSettled_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGrid_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGrid_TimeperiodSettled_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGrid_TimeperiodSettled_block
};

export type ChronoGrid_TimeperiodSettled_handlerArgs = Internal_genericHandlerArgs<ChronoGrid_TimeperiodSettled_event,handlerContext,void>;

export type ChronoGrid_TimeperiodSettled_handler = Internal_genericHandler<ChronoGrid_TimeperiodSettled_handlerArgs>;

export type ChronoGrid_TimeperiodSettled_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGrid_TimeperiodSettled_event,contractRegistrations>>;

export type ChronoGrid_TimeperiodSettled_eventFilter = { readonly timeperiodId?: SingleOrMultiple_t<bigint>; readonly winningGridId?: SingleOrMultiple_t<string> };

export type ChronoGrid_TimeperiodSettled_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGrid_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGrid_TimeperiodSettled_eventFiltersDefinition = 
    ChronoGrid_TimeperiodSettled_eventFilter
  | ChronoGrid_TimeperiodSettled_eventFilter[];

export type ChronoGrid_TimeperiodSettled_eventFilters = 
    ChronoGrid_TimeperiodSettled_eventFilter
  | ChronoGrid_TimeperiodSettled_eventFilter[]
  | ((_1:ChronoGrid_TimeperiodSettled_eventFiltersArgs) => ChronoGrid_TimeperiodSettled_eventFiltersDefinition);

export type ChronoGrid_WinningsClaimedEqual_eventArgs = {
  readonly user: Address_t; 
  readonly gridId: string; 
  readonly equalShare: bigint; 
  readonly redemptionValue: bigint; 
  readonly totalPayout: bigint
};

export type ChronoGrid_WinningsClaimedEqual_block = Block_t;

export type ChronoGrid_WinningsClaimedEqual_transaction = Transaction_t;

export type ChronoGrid_WinningsClaimedEqual_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGrid_WinningsClaimedEqual_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGrid_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGrid_WinningsClaimedEqual_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGrid_WinningsClaimedEqual_block
};

export type ChronoGrid_WinningsClaimedEqual_handlerArgs = Internal_genericHandlerArgs<ChronoGrid_WinningsClaimedEqual_event,handlerContext,void>;

export type ChronoGrid_WinningsClaimedEqual_handler = Internal_genericHandler<ChronoGrid_WinningsClaimedEqual_handlerArgs>;

export type ChronoGrid_WinningsClaimedEqual_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGrid_WinningsClaimedEqual_event,contractRegistrations>>;

export type ChronoGrid_WinningsClaimedEqual_eventFilter = { readonly user?: SingleOrMultiple_t<Address_t>; readonly gridId?: SingleOrMultiple_t<string> };

export type ChronoGrid_WinningsClaimedEqual_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGrid_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGrid_WinningsClaimedEqual_eventFiltersDefinition = 
    ChronoGrid_WinningsClaimedEqual_eventFilter
  | ChronoGrid_WinningsClaimedEqual_eventFilter[];

export type ChronoGrid_WinningsClaimedEqual_eventFilters = 
    ChronoGrid_WinningsClaimedEqual_eventFilter
  | ChronoGrid_WinningsClaimedEqual_eventFilter[]
  | ((_1:ChronoGrid_WinningsClaimedEqual_eventFiltersArgs) => ChronoGrid_WinningsClaimedEqual_eventFiltersDefinition);

export type ChronoGrid_WrapperSet_eventArgs = { readonly oldWrapper: Address_t; readonly newWrapper: Address_t };

export type ChronoGrid_WrapperSet_block = Block_t;

export type ChronoGrid_WrapperSet_transaction = Transaction_t;

export type ChronoGrid_WrapperSet_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGrid_WrapperSet_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGrid_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGrid_WrapperSet_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGrid_WrapperSet_block
};

export type ChronoGrid_WrapperSet_handlerArgs = Internal_genericHandlerArgs<ChronoGrid_WrapperSet_event,handlerContext,void>;

export type ChronoGrid_WrapperSet_handler = Internal_genericHandler<ChronoGrid_WrapperSet_handlerArgs>;

export type ChronoGrid_WrapperSet_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGrid_WrapperSet_event,contractRegistrations>>;

export type ChronoGrid_WrapperSet_eventFilter = { readonly oldWrapper?: SingleOrMultiple_t<Address_t>; readonly newWrapper?: SingleOrMultiple_t<Address_t> };

export type ChronoGrid_WrapperSet_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGrid_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGrid_WrapperSet_eventFiltersDefinition = 
    ChronoGrid_WrapperSet_eventFilter
  | ChronoGrid_WrapperSet_eventFilter[];

export type ChronoGrid_WrapperSet_eventFilters = 
    ChronoGrid_WrapperSet_eventFilter
  | ChronoGrid_WrapperSet_eventFilter[]
  | ((_1:ChronoGrid_WrapperSet_eventFiltersArgs) => ChronoGrid_WrapperSet_eventFiltersDefinition);

export type ChronoGridWrapper_chainId = 999;

export type ChronoGridWrapper_BetPlacedWithSession_eventArgs = {
  readonly user: Address_t; 
  readonly sessionKey: Address_t; 
  readonly timeperiodId: bigint; 
  readonly amount: bigint; 
  readonly sharesReceived: bigint; 
  readonly priceMin: bigint; 
  readonly priceMax: bigint; 
  readonly startTime: bigint; 
  readonly endTime: bigint; 
  readonly gridId: string
};

export type ChronoGridWrapper_BetPlacedWithSession_block = Block_t;

export type ChronoGridWrapper_BetPlacedWithSession_transaction = Transaction_t;

export type ChronoGridWrapper_BetPlacedWithSession_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGridWrapper_BetPlacedWithSession_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGridWrapper_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGridWrapper_BetPlacedWithSession_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGridWrapper_BetPlacedWithSession_block
};

export type ChronoGridWrapper_BetPlacedWithSession_handlerArgs = Internal_genericHandlerArgs<ChronoGridWrapper_BetPlacedWithSession_event,handlerContext,void>;

export type ChronoGridWrapper_BetPlacedWithSession_handler = Internal_genericHandler<ChronoGridWrapper_BetPlacedWithSession_handlerArgs>;

export type ChronoGridWrapper_BetPlacedWithSession_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGridWrapper_BetPlacedWithSession_event,contractRegistrations>>;

export type ChronoGridWrapper_BetPlacedWithSession_eventFilter = { readonly user?: SingleOrMultiple_t<Address_t>; readonly sessionKey?: SingleOrMultiple_t<Address_t> };

export type ChronoGridWrapper_BetPlacedWithSession_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGridWrapper_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGridWrapper_BetPlacedWithSession_eventFiltersDefinition = 
    ChronoGridWrapper_BetPlacedWithSession_eventFilter
  | ChronoGridWrapper_BetPlacedWithSession_eventFilter[];

export type ChronoGridWrapper_BetPlacedWithSession_eventFilters = 
    ChronoGridWrapper_BetPlacedWithSession_eventFilter
  | ChronoGridWrapper_BetPlacedWithSession_eventFilter[]
  | ((_1:ChronoGridWrapper_BetPlacedWithSession_eventFiltersArgs) => ChronoGridWrapper_BetPlacedWithSession_eventFiltersDefinition);

export type ChronoGridWrapper_Deposited_eventArgs = {
  readonly user: Address_t; 
  readonly amount: bigint; 
  readonly newBalance: bigint
};

export type ChronoGridWrapper_Deposited_block = Block_t;

export type ChronoGridWrapper_Deposited_transaction = Transaction_t;

export type ChronoGridWrapper_Deposited_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGridWrapper_Deposited_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGridWrapper_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGridWrapper_Deposited_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGridWrapper_Deposited_block
};

export type ChronoGridWrapper_Deposited_handlerArgs = Internal_genericHandlerArgs<ChronoGridWrapper_Deposited_event,handlerContext,void>;

export type ChronoGridWrapper_Deposited_handler = Internal_genericHandler<ChronoGridWrapper_Deposited_handlerArgs>;

export type ChronoGridWrapper_Deposited_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGridWrapper_Deposited_event,contractRegistrations>>;

export type ChronoGridWrapper_Deposited_eventFilter = { readonly user?: SingleOrMultiple_t<Address_t> };

export type ChronoGridWrapper_Deposited_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGridWrapper_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGridWrapper_Deposited_eventFiltersDefinition = 
    ChronoGridWrapper_Deposited_eventFilter
  | ChronoGridWrapper_Deposited_eventFilter[];

export type ChronoGridWrapper_Deposited_eventFilters = 
    ChronoGridWrapper_Deposited_eventFilter
  | ChronoGridWrapper_Deposited_eventFilter[]
  | ((_1:ChronoGridWrapper_Deposited_eventFiltersArgs) => ChronoGridWrapper_Deposited_eventFiltersDefinition);

export type ChronoGridWrapper_EIP712DomainChanged_eventArgs = void;

export type ChronoGridWrapper_EIP712DomainChanged_block = Block_t;

export type ChronoGridWrapper_EIP712DomainChanged_transaction = Transaction_t;

export type ChronoGridWrapper_EIP712DomainChanged_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGridWrapper_EIP712DomainChanged_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGridWrapper_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGridWrapper_EIP712DomainChanged_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGridWrapper_EIP712DomainChanged_block
};

export type ChronoGridWrapper_EIP712DomainChanged_handlerArgs = Internal_genericHandlerArgs<ChronoGridWrapper_EIP712DomainChanged_event,handlerContext,void>;

export type ChronoGridWrapper_EIP712DomainChanged_handler = Internal_genericHandler<ChronoGridWrapper_EIP712DomainChanged_handlerArgs>;

export type ChronoGridWrapper_EIP712DomainChanged_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGridWrapper_EIP712DomainChanged_event,contractRegistrations>>;

export type ChronoGridWrapper_EIP712DomainChanged_eventFilter = {};

export type ChronoGridWrapper_EIP712DomainChanged_eventFilters = Internal_noEventFilters;

export type ChronoGridWrapper_FinalBalance_eventArgs = { readonly user: Address_t; readonly newBalance: bigint };

export type ChronoGridWrapper_FinalBalance_block = Block_t;

export type ChronoGridWrapper_FinalBalance_transaction = Transaction_t;

export type ChronoGridWrapper_FinalBalance_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGridWrapper_FinalBalance_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGridWrapper_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGridWrapper_FinalBalance_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGridWrapper_FinalBalance_block
};

export type ChronoGridWrapper_FinalBalance_handlerArgs = Internal_genericHandlerArgs<ChronoGridWrapper_FinalBalance_event,handlerContext,void>;

export type ChronoGridWrapper_FinalBalance_handler = Internal_genericHandler<ChronoGridWrapper_FinalBalance_handlerArgs>;

export type ChronoGridWrapper_FinalBalance_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGridWrapper_FinalBalance_event,contractRegistrations>>;

export type ChronoGridWrapper_FinalBalance_eventFilter = { readonly user?: SingleOrMultiple_t<Address_t> };

export type ChronoGridWrapper_FinalBalance_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGridWrapper_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGridWrapper_FinalBalance_eventFiltersDefinition = 
    ChronoGridWrapper_FinalBalance_eventFilter
  | ChronoGridWrapper_FinalBalance_eventFilter[];

export type ChronoGridWrapper_FinalBalance_eventFilters = 
    ChronoGridWrapper_FinalBalance_eventFilter
  | ChronoGridWrapper_FinalBalance_eventFilter[]
  | ((_1:ChronoGridWrapper_FinalBalance_eventFiltersArgs) => ChronoGridWrapper_FinalBalance_eventFiltersDefinition);

export type ChronoGridWrapper_RelayerUpdated_eventArgs = { readonly oldRelayer: Address_t; readonly newRelayer: Address_t };

export type ChronoGridWrapper_RelayerUpdated_block = Block_t;

export type ChronoGridWrapper_RelayerUpdated_transaction = Transaction_t;

export type ChronoGridWrapper_RelayerUpdated_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGridWrapper_RelayerUpdated_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGridWrapper_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGridWrapper_RelayerUpdated_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGridWrapper_RelayerUpdated_block
};

export type ChronoGridWrapper_RelayerUpdated_handlerArgs = Internal_genericHandlerArgs<ChronoGridWrapper_RelayerUpdated_event,handlerContext,void>;

export type ChronoGridWrapper_RelayerUpdated_handler = Internal_genericHandler<ChronoGridWrapper_RelayerUpdated_handlerArgs>;

export type ChronoGridWrapper_RelayerUpdated_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGridWrapper_RelayerUpdated_event,contractRegistrations>>;

export type ChronoGridWrapper_RelayerUpdated_eventFilter = { readonly oldRelayer?: SingleOrMultiple_t<Address_t>; readonly newRelayer?: SingleOrMultiple_t<Address_t> };

export type ChronoGridWrapper_RelayerUpdated_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGridWrapper_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGridWrapper_RelayerUpdated_eventFiltersDefinition = 
    ChronoGridWrapper_RelayerUpdated_eventFilter
  | ChronoGridWrapper_RelayerUpdated_eventFilter[];

export type ChronoGridWrapper_RelayerUpdated_eventFilters = 
    ChronoGridWrapper_RelayerUpdated_eventFilter
  | ChronoGridWrapper_RelayerUpdated_eventFilter[]
  | ((_1:ChronoGridWrapper_RelayerUpdated_eventFiltersArgs) => ChronoGridWrapper_RelayerUpdated_eventFiltersDefinition);

export type ChronoGridWrapper_UpdatedPnl_eventArgs = { readonly user: Address_t; readonly pnl: bigint };

export type ChronoGridWrapper_UpdatedPnl_block = Block_t;

export type ChronoGridWrapper_UpdatedPnl_transaction = Transaction_t;

export type ChronoGridWrapper_UpdatedPnl_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGridWrapper_UpdatedPnl_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGridWrapper_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGridWrapper_UpdatedPnl_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGridWrapper_UpdatedPnl_block
};

export type ChronoGridWrapper_UpdatedPnl_handlerArgs = Internal_genericHandlerArgs<ChronoGridWrapper_UpdatedPnl_event,handlerContext,void>;

export type ChronoGridWrapper_UpdatedPnl_handler = Internal_genericHandler<ChronoGridWrapper_UpdatedPnl_handlerArgs>;

export type ChronoGridWrapper_UpdatedPnl_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGridWrapper_UpdatedPnl_event,contractRegistrations>>;

export type ChronoGridWrapper_UpdatedPnl_eventFilter = { readonly user?: SingleOrMultiple_t<Address_t> };

export type ChronoGridWrapper_UpdatedPnl_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGridWrapper_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGridWrapper_UpdatedPnl_eventFiltersDefinition = 
    ChronoGridWrapper_UpdatedPnl_eventFilter
  | ChronoGridWrapper_UpdatedPnl_eventFilter[];

export type ChronoGridWrapper_UpdatedPnl_eventFilters = 
    ChronoGridWrapper_UpdatedPnl_eventFilter
  | ChronoGridWrapper_UpdatedPnl_eventFilter[]
  | ((_1:ChronoGridWrapper_UpdatedPnl_eventFiltersArgs) => ChronoGridWrapper_UpdatedPnl_eventFiltersDefinition);

export type ChronoGridWrapper_Withdrawn_eventArgs = {
  readonly user: Address_t; 
  readonly amount: bigint; 
  readonly newBalance: bigint
};

export type ChronoGridWrapper_Withdrawn_block = Block_t;

export type ChronoGridWrapper_Withdrawn_transaction = Transaction_t;

export type ChronoGridWrapper_Withdrawn_event = {
  /** The parameters or arguments associated with this event. */
  readonly params: ChronoGridWrapper_Withdrawn_eventArgs; 
  /** The unique identifier of the blockchain network where this event occurred. */
  readonly chainId: ChronoGridWrapper_chainId; 
  /** The address of the contract that emitted this event. */
  readonly srcAddress: Address_t; 
  /** The index of this event's log within the block. */
  readonly logIndex: number; 
  /** The transaction that triggered this event. Configurable in `config.yaml` via the `field_selection` option. */
  readonly transaction: ChronoGridWrapper_Withdrawn_transaction; 
  /** The block in which this event was recorded. Configurable in `config.yaml` via the `field_selection` option. */
  readonly block: ChronoGridWrapper_Withdrawn_block
};

export type ChronoGridWrapper_Withdrawn_handlerArgs = Internal_genericHandlerArgs<ChronoGridWrapper_Withdrawn_event,handlerContext,void>;

export type ChronoGridWrapper_Withdrawn_handler = Internal_genericHandler<ChronoGridWrapper_Withdrawn_handlerArgs>;

export type ChronoGridWrapper_Withdrawn_contractRegister = Internal_genericContractRegister<Internal_genericContractRegisterArgs<ChronoGridWrapper_Withdrawn_event,contractRegistrations>>;

export type ChronoGridWrapper_Withdrawn_eventFilter = { readonly user?: SingleOrMultiple_t<Address_t> };

export type ChronoGridWrapper_Withdrawn_eventFiltersArgs = { 
/** The unique identifier of the blockchain network where this event occurred. */
readonly chainId: ChronoGridWrapper_chainId; 
/** Addresses of the contracts indexing the event. */
readonly addresses: Address_t[] };

export type ChronoGridWrapper_Withdrawn_eventFiltersDefinition = 
    ChronoGridWrapper_Withdrawn_eventFilter
  | ChronoGridWrapper_Withdrawn_eventFilter[];

export type ChronoGridWrapper_Withdrawn_eventFilters = 
    ChronoGridWrapper_Withdrawn_eventFilter
  | ChronoGridWrapper_Withdrawn_eventFilter[]
  | ((_1:ChronoGridWrapper_Withdrawn_eventFiltersArgs) => ChronoGridWrapper_Withdrawn_eventFiltersDefinition);

export type chainId = number;

export type chain = 999;
