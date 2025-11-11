// This file is to dynamically generate TS types
// which we can't get using GenType
// Use @genType.import to link the types back to ReScript code

import type { Logger, EffectCaller } from "envio";
import type * as Entities from "./db/Entities.gen.ts";

export type HandlerContext = {
  /**
   * Access the logger instance with event as a context. The logs will be displayed in the console and Envio Hosted Service.
   */
  readonly log: Logger;
  /**
   * Call the provided Effect with the given input.
   * Effects are the best for external calls with automatic deduplication, error handling and caching.
   * Define a new Effect using createEffect outside of the handler.
   */
  readonly effect: EffectCaller;
  /**
   * True when the handlers run in preload mode - in parallel for the whole batch.
   * Handlers run twice per batch of events, and the first time is the "preload" run
   * During preload entities aren't set, logs are ignored and exceptions are silently swallowed.
   * Preload mode is the best time to populate data to in-memory cache.
   * After preload the handler will run for the second time in sequential order of events.
   */
  readonly isPreload: boolean;
  readonly ChronoGridWrapper_BetPlacedWithSession: {
    /**
     * Load the entity ChronoGridWrapper_BetPlacedWithSession from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGridWrapper_BetPlacedWithSession_t | undefined>,
    /**
     * Load the entity ChronoGridWrapper_BetPlacedWithSession from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGridWrapper_BetPlacedWithSession_t>,
    readonly getWhere: Entities.ChronoGridWrapper_BetPlacedWithSession_indexedFieldOperations,
    /**
     * Returns the entity ChronoGridWrapper_BetPlacedWithSession from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGridWrapper_BetPlacedWithSession_t) => Promise<Entities.ChronoGridWrapper_BetPlacedWithSession_t>,
    /**
     * Set the entity ChronoGridWrapper_BetPlacedWithSession in the storage.
     */
    readonly set: (entity: Entities.ChronoGridWrapper_BetPlacedWithSession_t) => void,
    /**
     * Delete the entity ChronoGridWrapper_BetPlacedWithSession from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGridWrapper_Deposited: {
    /**
     * Load the entity ChronoGridWrapper_Deposited from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGridWrapper_Deposited_t | undefined>,
    /**
     * Load the entity ChronoGridWrapper_Deposited from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGridWrapper_Deposited_t>,
    readonly getWhere: Entities.ChronoGridWrapper_Deposited_indexedFieldOperations,
    /**
     * Returns the entity ChronoGridWrapper_Deposited from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGridWrapper_Deposited_t) => Promise<Entities.ChronoGridWrapper_Deposited_t>,
    /**
     * Set the entity ChronoGridWrapper_Deposited in the storage.
     */
    readonly set: (entity: Entities.ChronoGridWrapper_Deposited_t) => void,
    /**
     * Delete the entity ChronoGridWrapper_Deposited from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGridWrapper_EIP712DomainChanged: {
    /**
     * Load the entity ChronoGridWrapper_EIP712DomainChanged from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGridWrapper_EIP712DomainChanged_t | undefined>,
    /**
     * Load the entity ChronoGridWrapper_EIP712DomainChanged from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGridWrapper_EIP712DomainChanged_t>,
    readonly getWhere: Entities.ChronoGridWrapper_EIP712DomainChanged_indexedFieldOperations,
    /**
     * Returns the entity ChronoGridWrapper_EIP712DomainChanged from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGridWrapper_EIP712DomainChanged_t) => Promise<Entities.ChronoGridWrapper_EIP712DomainChanged_t>,
    /**
     * Set the entity ChronoGridWrapper_EIP712DomainChanged in the storage.
     */
    readonly set: (entity: Entities.ChronoGridWrapper_EIP712DomainChanged_t) => void,
    /**
     * Delete the entity ChronoGridWrapper_EIP712DomainChanged from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGridWrapper_RelayerUpdated: {
    /**
     * Load the entity ChronoGridWrapper_RelayerUpdated from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGridWrapper_RelayerUpdated_t | undefined>,
    /**
     * Load the entity ChronoGridWrapper_RelayerUpdated from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGridWrapper_RelayerUpdated_t>,
    readonly getWhere: Entities.ChronoGridWrapper_RelayerUpdated_indexedFieldOperations,
    /**
     * Returns the entity ChronoGridWrapper_RelayerUpdated from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGridWrapper_RelayerUpdated_t) => Promise<Entities.ChronoGridWrapper_RelayerUpdated_t>,
    /**
     * Set the entity ChronoGridWrapper_RelayerUpdated in the storage.
     */
    readonly set: (entity: Entities.ChronoGridWrapper_RelayerUpdated_t) => void,
    /**
     * Delete the entity ChronoGridWrapper_RelayerUpdated from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGridWrapper_Withdrawn: {
    /**
     * Load the entity ChronoGridWrapper_Withdrawn from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGridWrapper_Withdrawn_t | undefined>,
    /**
     * Load the entity ChronoGridWrapper_Withdrawn from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGridWrapper_Withdrawn_t>,
    readonly getWhere: Entities.ChronoGridWrapper_Withdrawn_indexedFieldOperations,
    /**
     * Returns the entity ChronoGridWrapper_Withdrawn from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGridWrapper_Withdrawn_t) => Promise<Entities.ChronoGridWrapper_Withdrawn_t>,
    /**
     * Set the entity ChronoGridWrapper_Withdrawn in the storage.
     */
    readonly set: (entity: Entities.ChronoGridWrapper_Withdrawn_t) => void,
    /**
     * Delete the entity ChronoGridWrapper_Withdrawn from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGrid_AutoClaimFailed: {
    /**
     * Load the entity ChronoGrid_AutoClaimFailed from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGrid_AutoClaimFailed_t | undefined>,
    /**
     * Load the entity ChronoGrid_AutoClaimFailed from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGrid_AutoClaimFailed_t>,
    readonly getWhere: Entities.ChronoGrid_AutoClaimFailed_indexedFieldOperations,
    /**
     * Returns the entity ChronoGrid_AutoClaimFailed from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGrid_AutoClaimFailed_t) => Promise<Entities.ChronoGrid_AutoClaimFailed_t>,
    /**
     * Set the entity ChronoGrid_AutoClaimFailed in the storage.
     */
    readonly set: (entity: Entities.ChronoGrid_AutoClaimFailed_t) => void,
    /**
     * Delete the entity ChronoGrid_AutoClaimFailed from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGrid_AutoClaimSkipped: {
    /**
     * Load the entity ChronoGrid_AutoClaimSkipped from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGrid_AutoClaimSkipped_t | undefined>,
    /**
     * Load the entity ChronoGrid_AutoClaimSkipped from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGrid_AutoClaimSkipped_t>,
    readonly getWhere: Entities.ChronoGrid_AutoClaimSkipped_indexedFieldOperations,
    /**
     * Returns the entity ChronoGrid_AutoClaimSkipped from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGrid_AutoClaimSkipped_t) => Promise<Entities.ChronoGrid_AutoClaimSkipped_t>,
    /**
     * Set the entity ChronoGrid_AutoClaimSkipped in the storage.
     */
    readonly set: (entity: Entities.ChronoGrid_AutoClaimSkipped_t) => void,
    /**
     * Delete the entity ChronoGrid_AutoClaimSkipped from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGrid_BetPlaced: {
    /**
     * Load the entity ChronoGrid_BetPlaced from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGrid_BetPlaced_t | undefined>,
    /**
     * Load the entity ChronoGrid_BetPlaced from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGrid_BetPlaced_t>,
    readonly getWhere: Entities.ChronoGrid_BetPlaced_indexedFieldOperations,
    /**
     * Returns the entity ChronoGrid_BetPlaced from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGrid_BetPlaced_t) => Promise<Entities.ChronoGrid_BetPlaced_t>,
    /**
     * Set the entity ChronoGrid_BetPlaced in the storage.
     */
    readonly set: (entity: Entities.ChronoGrid_BetPlaced_t) => void,
    /**
     * Delete the entity ChronoGrid_BetPlaced from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGrid_GlobalLiquidityAdded: {
    /**
     * Load the entity ChronoGrid_GlobalLiquidityAdded from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGrid_GlobalLiquidityAdded_t | undefined>,
    /**
     * Load the entity ChronoGrid_GlobalLiquidityAdded from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGrid_GlobalLiquidityAdded_t>,
    readonly getWhere: Entities.ChronoGrid_GlobalLiquidityAdded_indexedFieldOperations,
    /**
     * Returns the entity ChronoGrid_GlobalLiquidityAdded from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGrid_GlobalLiquidityAdded_t) => Promise<Entities.ChronoGrid_GlobalLiquidityAdded_t>,
    /**
     * Set the entity ChronoGrid_GlobalLiquidityAdded in the storage.
     */
    readonly set: (entity: Entities.ChronoGrid_GlobalLiquidityAdded_t) => void,
    /**
     * Delete the entity ChronoGrid_GlobalLiquidityAdded from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGrid_GridCreated: {
    /**
     * Load the entity ChronoGrid_GridCreated from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGrid_GridCreated_t | undefined>,
    /**
     * Load the entity ChronoGrid_GridCreated from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGrid_GridCreated_t>,
    readonly getWhere: Entities.ChronoGrid_GridCreated_indexedFieldOperations,
    /**
     * Returns the entity ChronoGrid_GridCreated from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGrid_GridCreated_t) => Promise<Entities.ChronoGrid_GridCreated_t>,
    /**
     * Set the entity ChronoGrid_GridCreated in the storage.
     */
    readonly set: (entity: Entities.ChronoGrid_GridCreated_t) => void,
    /**
     * Delete the entity ChronoGrid_GridCreated from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGrid_MaxBetAmountUpdated: {
    /**
     * Load the entity ChronoGrid_MaxBetAmountUpdated from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGrid_MaxBetAmountUpdated_t | undefined>,
    /**
     * Load the entity ChronoGrid_MaxBetAmountUpdated from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGrid_MaxBetAmountUpdated_t>,
    readonly getWhere: Entities.ChronoGrid_MaxBetAmountUpdated_indexedFieldOperations,
    /**
     * Returns the entity ChronoGrid_MaxBetAmountUpdated from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGrid_MaxBetAmountUpdated_t) => Promise<Entities.ChronoGrid_MaxBetAmountUpdated_t>,
    /**
     * Set the entity ChronoGrid_MaxBetAmountUpdated in the storage.
     */
    readonly set: (entity: Entities.ChronoGrid_MaxBetAmountUpdated_t) => void,
    /**
     * Delete the entity ChronoGrid_MaxBetAmountUpdated from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGrid_OwnershipTransferred: {
    /**
     * Load the entity ChronoGrid_OwnershipTransferred from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGrid_OwnershipTransferred_t | undefined>,
    /**
     * Load the entity ChronoGrid_OwnershipTransferred from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGrid_OwnershipTransferred_t>,
    readonly getWhere: Entities.ChronoGrid_OwnershipTransferred_indexedFieldOperations,
    /**
     * Returns the entity ChronoGrid_OwnershipTransferred from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGrid_OwnershipTransferred_t) => Promise<Entities.ChronoGrid_OwnershipTransferred_t>,
    /**
     * Set the entity ChronoGrid_OwnershipTransferred in the storage.
     */
    readonly set: (entity: Entities.ChronoGrid_OwnershipTransferred_t) => void,
    /**
     * Delete the entity ChronoGrid_OwnershipTransferred from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGrid_TimeperiodCreated: {
    /**
     * Load the entity ChronoGrid_TimeperiodCreated from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGrid_TimeperiodCreated_t | undefined>,
    /**
     * Load the entity ChronoGrid_TimeperiodCreated from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGrid_TimeperiodCreated_t>,
    readonly getWhere: Entities.ChronoGrid_TimeperiodCreated_indexedFieldOperations,
    /**
     * Returns the entity ChronoGrid_TimeperiodCreated from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGrid_TimeperiodCreated_t) => Promise<Entities.ChronoGrid_TimeperiodCreated_t>,
    /**
     * Set the entity ChronoGrid_TimeperiodCreated in the storage.
     */
    readonly set: (entity: Entities.ChronoGrid_TimeperiodCreated_t) => void,
    /**
     * Delete the entity ChronoGrid_TimeperiodCreated from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGrid_TimeperiodFinalized: {
    /**
     * Load the entity ChronoGrid_TimeperiodFinalized from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGrid_TimeperiodFinalized_t | undefined>,
    /**
     * Load the entity ChronoGrid_TimeperiodFinalized from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGrid_TimeperiodFinalized_t>,
    readonly getWhere: Entities.ChronoGrid_TimeperiodFinalized_indexedFieldOperations,
    /**
     * Returns the entity ChronoGrid_TimeperiodFinalized from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGrid_TimeperiodFinalized_t) => Promise<Entities.ChronoGrid_TimeperiodFinalized_t>,
    /**
     * Set the entity ChronoGrid_TimeperiodFinalized in the storage.
     */
    readonly set: (entity: Entities.ChronoGrid_TimeperiodFinalized_t) => void,
    /**
     * Delete the entity ChronoGrid_TimeperiodFinalized from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGrid_TimeperiodSettled: {
    /**
     * Load the entity ChronoGrid_TimeperiodSettled from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGrid_TimeperiodSettled_t | undefined>,
    /**
     * Load the entity ChronoGrid_TimeperiodSettled from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGrid_TimeperiodSettled_t>,
    readonly getWhere: Entities.ChronoGrid_TimeperiodSettled_indexedFieldOperations,
    /**
     * Returns the entity ChronoGrid_TimeperiodSettled from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGrid_TimeperiodSettled_t) => Promise<Entities.ChronoGrid_TimeperiodSettled_t>,
    /**
     * Set the entity ChronoGrid_TimeperiodSettled in the storage.
     */
    readonly set: (entity: Entities.ChronoGrid_TimeperiodSettled_t) => void,
    /**
     * Delete the entity ChronoGrid_TimeperiodSettled from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGrid_WinningsClaimedEqual: {
    /**
     * Load the entity ChronoGrid_WinningsClaimedEqual from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGrid_WinningsClaimedEqual_t | undefined>,
    /**
     * Load the entity ChronoGrid_WinningsClaimedEqual from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGrid_WinningsClaimedEqual_t>,
    readonly getWhere: Entities.ChronoGrid_WinningsClaimedEqual_indexedFieldOperations,
    /**
     * Returns the entity ChronoGrid_WinningsClaimedEqual from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGrid_WinningsClaimedEqual_t) => Promise<Entities.ChronoGrid_WinningsClaimedEqual_t>,
    /**
     * Set the entity ChronoGrid_WinningsClaimedEqual in the storage.
     */
    readonly set: (entity: Entities.ChronoGrid_WinningsClaimedEqual_t) => void,
    /**
     * Delete the entity ChronoGrid_WinningsClaimedEqual from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
  readonly ChronoGrid_WrapperSet: {
    /**
     * Load the entity ChronoGrid_WrapperSet from the storage by ID.
     * If the entity is not found, returns undefined.
     */
    readonly get: (id: string) => Promise<Entities.ChronoGrid_WrapperSet_t | undefined>,
    /**
     * Load the entity ChronoGrid_WrapperSet from the storage by ID.
     * If the entity is not found, throws an error.
     */
    readonly getOrThrow: (id: string, message?: string) => Promise<Entities.ChronoGrid_WrapperSet_t>,
    readonly getWhere: Entities.ChronoGrid_WrapperSet_indexedFieldOperations,
    /**
     * Returns the entity ChronoGrid_WrapperSet from the storage by ID.
     * If the entity is not found, creates it using provided parameters and returns it.
     */
    readonly getOrCreate: (entity: Entities.ChronoGrid_WrapperSet_t) => Promise<Entities.ChronoGrid_WrapperSet_t>,
    /**
     * Set the entity ChronoGrid_WrapperSet in the storage.
     */
    readonly set: (entity: Entities.ChronoGrid_WrapperSet_t) => void,
    /**
     * Delete the entity ChronoGrid_WrapperSet from the storage.
     *
     * The 'deleteUnsafe' method is experimental and unsafe. You should manually handle all entity references after deletion to maintain database consistency.
     */
    readonly deleteUnsafe: (id: string) => void,
  }
};

