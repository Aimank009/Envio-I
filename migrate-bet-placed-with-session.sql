-- Migration: Add new columns to bet_placed_with_session table
-- Run this in your Supabase SQL Editor if the table already exists

ALTER TABLE bet_placed_with_session 
ADD COLUMN IF NOT EXISTS price_min TEXT NOT NULL DEFAULT '0',
ADD COLUMN IF NOT EXISTS price_max TEXT NOT NULL DEFAULT '0',
ADD COLUMN IF NOT EXISTS start_time TEXT NOT NULL DEFAULT '0',
ADD COLUMN IF NOT EXISTS end_time TEXT NOT NULL DEFAULT '0',
ADD COLUMN IF NOT EXISTS grid_id TEXT NOT NULL DEFAULT '';

-- Remove default values after adding columns
ALTER TABLE bet_placed_with_session 
ALTER COLUMN price_min DROP DEFAULT,
ALTER COLUMN price_max DROP DEFAULT,
ALTER COLUMN start_time DROP DEFAULT,
ALTER COLUMN end_time DROP DEFAULT,
ALTER COLUMN grid_id DROP DEFAULT;

-- Add index for grid_id
CREATE INDEX IF NOT EXISTS idx_bet_session_grid ON bet_placed_with_session(grid_id);

-- Verify the changes
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'bet_placed_with_session' 
ORDER BY ordinal_position;
