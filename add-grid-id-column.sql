-- ========================================
-- Quick Fix: Add grid_id column to bet_placed_with_session
-- ========================================
-- Run this SQL in your Supabase SQL Editor

-- Add grid_id column if it doesn't exist
ALTER TABLE bet_placed_with_session 
ADD COLUMN IF NOT EXISTS grid_id TEXT;

-- Add index for better query performance
CREATE INDEX IF NOT EXISTS idx_bet_session_grid ON bet_placed_with_session(grid_id);

-- Verify the column was added
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'bet_placed_with_session' 
AND column_name = 'grid_id';

-- Check table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'bet_placed_with_session' 
ORDER BY ordinal_position;
