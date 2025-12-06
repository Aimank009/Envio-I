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
// Helper function for idempotent upserts
// ============================================
async function upsertEvent(
  table: string,
  data: Record<string, any>,
  eventName: string
) {
  try {
    const { data: result, error } = await supabase
      .from(table)
      .upsert([data], { onConflict: 'event_id', ignoreDuplicates: true });

    if (error) {
      console.error(`❌ Supabase upsert error (${eventName}):`, error);
      return { success: false, error };
    }

    console.log(`✅ ${eventName} sent to Supabase`);
    return { success: true, data: result };
  } catch (error: any) {
    console.error(`❌ Supabase error (${eventName}):`, error.message);
    return { success: false, error };
  }
}

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
  return upsertEvent('auto_claim_failed', {
    event_id: data.id,
    user_address: data.user,
    grid_id: data.gridId,
    timeperiod_id: data.timeperiodId,
    reason: data.reason,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'AutoClaimFailed');
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
  return upsertEvent('auto_claim_skipped', {
    event_id: data.id,
    user_address: data.user,
    grid_id: data.gridId,
    timeperiod_id: data.timeperiodId,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'AutoClaimSkipped');
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
  return upsertEvent('bet_placed', {
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
  }, 'BetPlaced');
}

// 4. GlobalLiquidityAdded
export async function insertGlobalLiquidityAdded(data: {
  id: string;
  amount: string;
  newTotal: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  return upsertEvent('global_liquidity_added', {
    event_id: data.id,
    amount: data.amount,
    new_total: data.newTotal,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'GlobalLiquidityAdded');
}

// 4b. GlobalLiquidityUpdated
export async function insertGlobalLiquidityUpdated(data: {
  id: string;
  newTotal: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  return upsertEvent('global_liquidity_updated', {
    event_id: data.id,
    new_total: data.newTotal,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'GlobalLiquidityUpdated');
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
  return upsertEvent('grid_created', {
    event_id: data.id,
    grid_id: data.gridId,
    timeperiod_id: data.timeperiodId,
    price_min: data.priceMin,
    price_max: data.priceMax,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'GridCreated');
}

// 6. MaxBetAmountUpdated
export async function insertMaxBetAmountUpdated(data: {
  id: string;
  oldAmount: string;
  newAmount: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  return upsertEvent('max_bet_amount_updated', {
    event_id: data.id,
    old_amount: data.oldAmount,
    new_amount: data.newAmount,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'MaxBetAmountUpdated');
}

// 7. OwnershipTransferred
export async function insertOwnershipTransferred(data: {
  id: string;
  previousOwner: string;
  newOwner: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  return upsertEvent('ownership_transferred', {
    event_id: data.id,
    previous_owner: data.previousOwner,
    new_owner: data.newOwner,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'OwnershipTransferred');
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
  return upsertEvent('timeperiod_created', {
    event_id: data.id,
    timeperiod_id: data.timeperiodId,
    start_time: data.startTime,
    end_time: data.endTime,
    reference_price: data.referencePrice,
    allocated_liquidity: data.allocatedLiquidity,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'TimeperiodCreated');
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
  return upsertEvent('timeperiod_finalized', {
    event_id: data.id,
    timeperiod_id: data.timeperiodId,
    net_result: data.netResult,
    returned_to_global: data.returnedToGlobal,
    new_global_pool: data.newGlobalPool,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'TimeperiodFinalized');
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
  return upsertEvent('timeperiod_settled', {
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
  }, 'TimeperiodSettled');
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
  return upsertEvent('winnings_claimed_equal', {
    event_id: data.id,
    user_address: data.user,
    grid_id: data.gridId,
    equal_share: data.equalShare,
    redemption_value: data.redemptionValue,
    total_payout: data.totalPayout,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'WinningsClaimedEqual');
}

// 12. WrapperSet
export async function insertWrapperSet(data: {
  id: string;
  oldWrapper: string;
  newWrapper: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  return upsertEvent('wrapper_set', {
    event_id: data.id,
    old_wrapper: data.oldWrapper,
    new_wrapper: data.newWrapper,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'WrapperSet');
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
  return upsertEvent('bet_placed_with_session', {
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
  }, 'BetPlacedWithSession');
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
  return upsertEvent('deposited', {
    event_id: data.id,
    user_address: data.user,
    amount: data.amount,
    new_balance: data.newBalance,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'Deposited');
}

// 15. EIP712DomainChanged
export async function insertEIP712DomainChanged(data: {
  id: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  return upsertEvent('eip712_domain_changed', {
    event_id: data.id,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'EIP712DomainChanged');
}

// 15b. FinalBalance
export async function insertFinalBalance(data: {
  id: string;
  user: string;
  newBalance: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  return upsertEvent('final_balance', {
    event_id: data.id,
    user_address: data.user,
    new_balance: data.newBalance,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'FinalBalance');
}

// 16. RelayerUpdated
export async function insertRelayerUpdated(data: {
  id: string;
  oldRelayer: string;
  newRelayer: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  return upsertEvent('relayer_updated', {
    event_id: data.id,
    old_relayer: data.oldRelayer,
    new_relayer: data.newRelayer,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'RelayerUpdated');
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
  return upsertEvent('withdrawn', {
    event_id: data.id,
    user_address: data.user,
    amount: data.amount,
    new_balance: data.newBalance,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'Withdrawn');
}

// 18. UpdatedPnl
export async function insertUpdatedPnl(data: {
  id: string;
  user: string;
  pnl: string;
  blockNumber?: number;
  timestamp?: string;
}) {
  return upsertEvent('updated_pnl', {
    event_id: data.id,
    user_address: data.user,
    pnl: data.pnl,
    block_number: data.blockNumber,
    timestamp: data.timestamp,
    created_at: new Date().toISOString(),
  }, 'UpdatedPnl');
}
