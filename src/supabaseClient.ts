import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';


// Load environment variables from .env
// Use process.cwd() to load from the project root directory
const envPath = path.join(process.cwd(), '.env');
console.log('🔍 Loading config from:', envPath);
dotenv.config({ path: envPath });

// Supabase configuration
const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';

console.log('🔍 Supabase Config Loaded:');
console.log('  URL:', SUPABASE_URL ? `${SUPABASE_URL.slice(0, 30)}... ✅` : 'MISSING ❌');
console.log('  Key:', SUPABASE_ANON_KEY ? `${SUPABASE_ANON_KEY.slice(0, 20)}... ✅` : 'MISSING ❌');

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('⚠️  Supabase credentials not found. Set SUPABASE_URL and SUPABASE_ANON_KEY in .env');
}

// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================
// ChronoGrid Event Handlers (12 functions)
// ============================================

// 1. AutoClaimFailed
export async function insertAutoClaimFailed(data: {
  id: string;
  user: string;
  gridId: string;
  timeperiodId: string;
  reason: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('auto_claim_failed')
      .insert([{
        event_id: data.id,
        user_address: data.user,
        grid_id: data.gridId,
        timeperiod_id: data.timeperiodId,
        reason: data.reason,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (AutoClaimFailed):', error);
      return { success: false, error };
    }

    console.log('✅ AutoClaimFailed sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (AutoClaimFailed):', error.message);
    return { success: false, error };
  }
}

// 2. AutoClaimSkipped
export async function insertAutoClaimSkipped(data: {
  id: string;
  user: string;
  gridId: string;
  timeperiodId: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('auto_claim_skipped')
      .insert([{
        event_id: data.id,
        user_address: data.user,
        grid_id: data.gridId,
        timeperiod_id: data.timeperiodId,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (AutoClaimSkipped):', error);
      return { success: false, error };
    }

    console.log('✅ AutoClaimSkipped sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (AutoClaimSkipped):', error.message);
    return { success: false, error };
  }
}

// 3. BetPlaced (ChronoGrid)
export async function insertBetPlaced(data: {
  id: string;
  user: string;
  gridId: string;
  timeperiodId: string;
  amountPaid: string;
  sharesReceived: string;
  pricePerShare: string;
  bAtEntry: string;
  totalshare: string;
  priceMin: string;
  priceMax: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('bet_placed')
      .insert([{
        event_id: data.id,
        user_address: data.user,
        grid_id: data.gridId,
        timeperiod_id: data.timeperiodId,
        amount_paid: data.amountPaid,
        shares_received: data.sharesReceived,
        price_per_share: data.pricePerShare,
        b_at_entry: data.bAtEntry,
        total_share: data.totalshare,
        price_min: data.priceMin,
        price_max: data.priceMax,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (BetPlaced):', error);
      return { success: false, error };
    }

    console.log('✅ BetPlaced sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (BetPlaced):', error.message);
    return { success: false, error };
  }
}

// 4. GlobalLiquidityAdded
export async function insertGlobalLiquidityAdded(data: {
  id: string;
  amount: string;
  newTotal: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('global_liquidity_added')
      .insert([{
        event_id: data.id,
        amount: data.amount,
        new_total: data.newTotal,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (GlobalLiquidityAdded):', error);
      return { success: false, error };
    }

    console.log('✅ GlobalLiquidityAdded sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (GlobalLiquidityAdded):', error.message);
    return { success: false, error };
  }
}

// 4b. GlobalLiquidityUpdated
export async function insertGlobalLiquidityUpdated(data: {
  id: string;
  newTotal: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('global_liquidity_updated')
      .insert([{
        event_id: data.id,
        new_total: data.newTotal,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (GlobalLiquidityUpdated):', error);
      return { success: false, error };
    }

    console.log('✅ GlobalLiquidityUpdated sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (GlobalLiquidityUpdated):', error.message);
    return { success: false, error };
  }
}

// 5. GridCreated
export async function insertGridCreated(data: {
  id: string;
  gridId: string;
  timeperiodId: string;
  priceMin: string;
  priceMax: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('grid_created')
      .insert([{
        event_id: data.id,
        grid_id: data.gridId,
        timeperiod_id: data.timeperiodId,
        price_min: data.priceMin,
        price_max: data.priceMax,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (GridCreated):', error);
      return { success: false, error };
    }

    console.log('✅ GridCreated sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (GridCreated):', error.message);
    return { success: false, error };
  }
}

// 6. MaxBetAmountUpdated
export async function insertMaxBetAmountUpdated(data: {
  id: string;
  oldAmount: string;
  newAmount: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('max_bet_amount_updated')
      .insert([{
        event_id: data.id,
        old_amount: data.oldAmount,
        new_amount: data.newAmount,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (MaxBetAmountUpdated):', error);
      return { success: false, error };
    }

    console.log('✅ MaxBetAmountUpdated sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (MaxBetAmountUpdated):', error.message);
    return { success: false, error };
  }
}

// 7. OwnershipTransferred
export async function insertOwnershipTransferred(data: {
  id: string;
  previousOwner: string;
  newOwner: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('ownership_transferred')
      .insert([{
        event_id: data.id,
        previous_owner: data.previousOwner,
        new_owner: data.newOwner,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (OwnershipTransferred):', error);
      return { success: false, error };
    }

    console.log('✅ OwnershipTransferred sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (OwnershipTransferred):', error.message);
    return { success: false, error };
  }
}

// 8. TimeperiodCreated
export async function insertTimeperiodCreated(data: {
  id: string;
  timeperiodId: string;
  startTime: string;
  endTime: string;
  referencePrice: string;
  allocatedLiquidity: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('timeperiod_created')
      .insert([{
        event_id: data.id,
        timeperiod_id: data.timeperiodId,
        start_time: data.startTime,
        end_time: data.endTime,
        reference_price: data.referencePrice,
        allocated_liquidity: data.allocatedLiquidity,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (TimeperiodCreated):', error);
      return { success: false, error };
    }

    console.log('✅ TimeperiodCreated sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (TimeperiodCreated):', error.message);
    return { success: false, error };
  }
}

// 9. TimeperiodFinalized
export async function insertTimeperiodFinalized(data: {
  id: string;
  timeperiodId: string;
  netResult: string;
  returnedToGlobal: string;
  newGlobalPool: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('timeperiod_finalized')
      .insert([{
        event_id: data.id,
        timeperiod_id: data.timeperiodId,
        net_result: data.netResult,
        returned_to_global: data.returnedToGlobal,
        new_global_pool: data.newGlobalPool,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (TimeperiodFinalized):', error);
      return { success: false, error };
    }

    console.log('✅ TimeperiodFinalized sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (TimeperiodFinalized):', error.message);
    return { success: false, error };
  }
}

// 10. TimeperiodSettled
export async function insertTimeperiodSettled(data: {
  id: string;
  timeperiodId: string;
  winningGridId: string;
  twapPrice: string;
  totalLoserBets: string;
  poolShare: string;
  winnerShare: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('timeperiod_settled')
      .insert([{
        event_id: data.id,
        timeperiod_id: data.timeperiodId,
        winning_grid_id: data.winningGridId,
        twap_price: data.twapPrice,
        total_loser_bets: data.totalLoserBets,
        pool_share: data.poolShare,
        winner_share: data.winnerShare,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (TimeperiodSettled):', error);
      return { success: false, error };
    }

    console.log('✅ TimeperiodSettled sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (TimeperiodSettled):', error.message);
    return { success: false, error };
  }
}

// 11. WinningsClaimedEqual
export async function insertWinningsClaimedEqual(data: {
  id: string;
  user: string;
  gridId: string;
  equalShare: string;
  redemptionValue: string;
  totalPayout: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('winnings_claimed_equal')
      .insert([{
        event_id: data.id,
        user_address: data.user,
        grid_id: data.gridId,
        equal_share: data.equalShare,
        redemption_value: data.redemptionValue,
        total_payout: data.totalPayout,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (WinningsClaimedEqual):', error);
      return { success: false, error };
    }

    console.log('✅ WinningsClaimedEqual sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (WinningsClaimedEqual):', error.message);
    return { success: false, error };
  }
}

// 12. WrapperSet
export async function insertWrapperSet(data: {
  id: string;
  oldWrapper: string;
  newWrapper: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('wrapper_set')
      .insert([{
        event_id: data.id,
        old_wrapper: data.oldWrapper,
        new_wrapper: data.newWrapper,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (WrapperSet):', error);
      return { success: false, error };
    }

    console.log('✅ WrapperSet sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (WrapperSet):', error.message);
    return { success: false, error };
  }
}

// ============================================
// ChronoGridWrapper Event Handlers (5 functions)
// ============================================

// 13. BetPlacedWithSession
export async function insertBetPlacedWithSession(data: {
  id: string;
  user: string;
  sessionKey: string;
  timeperiodId: string;
  amount: string;
  sharesReceived: string;
  priceMin: string;
  priceMax: string;
  startTime: string;
  endTime: string;
  gridId: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('bet_placed_with_session')
      .insert([{
        event_id: data.id,
        user_address: data.user,
        session_key: data.sessionKey,
        timeperiod_id: data.timeperiodId,
        amount: data.amount,
        shares_received: data.sharesReceived,
        price_min: data.priceMin,
        price_max: data.priceMax,
        start_time: data.startTime,
        end_time: data.endTime,
        grid_id: data.gridId,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (BetPlacedWithSession):', error);
      return { success: false, error };
    }

    console.log('✅ BetPlacedWithSession sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (BetPlacedWithSession):', error.message);
    return { success: false, error };
  }
}

// 14. Deposited
export async function insertDeposited(data: {
  id: string;
  user: string;
  amount: string;
  newBalance: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('deposited')
      .insert([{
        event_id: data.id,
        user_address: data.user,
        amount: data.amount,
        new_balance: data.newBalance,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (Deposited):', error);
      return { success: false, error };
    }

    console.log('✅ Deposited sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (Deposited):', error.message);
    return { success: false, error };
  }
}

// 15. EIP712DomainChanged
export async function insertEIP712DomainChanged(data: {
  id: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('eip712_domain_changed')
      .insert([{
        event_id: data.id,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (EIP712DomainChanged):', error);
      return { success: false, error };
    }

    console.log('✅ EIP712DomainChanged sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (EIP712DomainChanged):', error.message);
    return { success: false, error };
  }
}

// 15b. FinalBalance
export async function insertFinalBalance(data: {
  id: string;
  user: string;
  newBalance: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('final_balance')
      .insert([{
        event_id: data.id,
        user_address: data.user,
        new_balance: data.newBalance,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (FinalBalance):', error);
      return { success: false, error };
    }

    console.log('✅ FinalBalance sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (FinalBalance):', error.message);
    return { success: false, error };
  }
}

// 16. RelayerUpdated
export async function insertRelayerUpdated(data: {
  id: string;
  oldRelayer: string;
  newRelayer: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('relayer_updated')
      .insert([{
        event_id: data.id,
        old_relayer: data.oldRelayer,
        new_relayer: data.newRelayer,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (RelayerUpdated):', error);
      return { success: false, error };
    }

    console.log('✅ RelayerUpdated sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (RelayerUpdated):', error.message);
    return { success: false, error };
  }
}

// 17. Withdrawn
export async function insertWithdrawn(data: {
  id: string;
  user: string;
  amount: string;
  newBalance: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('withdrawn')
      .insert([{
        event_id: data.id,
        user_address: data.user,
        amount: data.amount,
        new_balance: data.newBalance,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (Withdrawn):', error);
      return { success: false, error };
    }

    console.log('✅ Withdrawn sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (Withdrawn):', error.message);
    return { success: false, error };
  }
}

// 18. UpdatedPnl
export async function insertUpdatedPnl(data: {
  id: string;
  user: string;
  pnl: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('updated_pnl')
      .insert([{
        event_id: data.id,
        user_address: data.user,
        pnl: data.pnl,
        block_number: data.blockNumber,
        timestamp: data.timestamp,
        created_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('❌ Supabase insert error (UpdatedPnl):', error);
      return { success: false, error };
    }

    console.log('✅ UpdatedPnl sent to Supabase');
    return { success: true, data: result };
  } catch (error: any) {
    console.error('❌ Supabase error (UpdatedPnl):', error.message);
    return { success: false, error };
  }
}
