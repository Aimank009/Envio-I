#!/usr/bin/env node

/**
 * Generate config.yaml from .env file
 * This script reads environment variables and updates config.yaml
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const NETWORK_ID = process.env.NETWORK_ID || '999';
const START_BLOCK = process.env.START_BLOCK || '0';
const CHRONOGRID_ADDRESS = process.env.CHRONOGRID_ADDRESS || '0x0000000000000000000000000000000000000000';
const CHRONOGRID_WRAPPER_ADDRESS = process.env.CHRONOGRID_WRAPPER_ADDRESS || '0x0000000000000000000000000000000000000000';

const configYaml = `# yaml-language-server: $schema=./node_modules/envio/evm.schema.json
name: envio-indexer
networks:
- id: ${NETWORK_ID}
  start_block: ${START_BLOCK}
  contracts:
  - name: ChronoGrid
    address:
    - ${CHRONOGRID_ADDRESS}
    handler: src/EventHandlers.ts
    events:
    - event: AutoClaimFailed(address indexed user, bytes32 indexed gridId, uint256 timeperiodId, string reason)
    - event: AutoClaimSkipped(address indexed user, bytes32 indexed gridId, uint256 timeperiodId)
    - event: BetPlaced(address indexed user, bytes32 indexed gridId, uint256 timeperiodId, uint256 amountPaid, uint256 sharesReceived, uint256 pricePerShare, uint256 bAtEntry)
    - event: GlobalLiquidityAdded(uint256 amount, uint256 newTotal)
    - event: GridCreated(bytes32 indexed gridId, uint256 indexed timeperiodId, uint256 priceMin, uint256 priceMax)
    - event: MaxBetAmountUpdated(uint256 oldAmount, uint256 newAmount)
    - event: OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
    - event: TimeperiodCreated(uint256 indexed timeperiodId, uint256 startTime, uint256 endTime, uint256 referencePrice, uint256 allocatedLiquidity)
    - event: TimeperiodFinalized(uint256 indexed timeperiodId, int256 netResult, uint256 returnedToGlobal, uint256 newGlobalPool)
    - event: TimeperiodSettled(uint256 indexed timeperiodId, bytes32 indexed winningGridId, uint256 twapPrice, uint256 totalLoserBets, uint256 poolShare, uint256 winnerShare)
    - event: WinningsClaimedEqual(address indexed user, bytes32 indexed gridId, uint256 equalShare, uint256 redemptionValue, uint256 totalPayout)
    - event: WrapperSet(address indexed oldWrapper, address indexed newWrapper)
  - name: ChronoGridWrapper
    address:
    - ${CHRONOGRID_WRAPPER_ADDRESS}
    handler: src/EventHandlers.ts
    events:
    - event: BetPlacedWithSession(address indexed user, address indexed sessionKey, uint256 timeperiodId, uint256 amount, uint256 sharesReceived, uint256 priceMin, uint256 priceMax, uint256 startTime, uint256 endTime, bytes32 gridId)
    - event: Deposited(address indexed user, uint256 amount, uint256 newBalance)
    - event: EIP712DomainChanged()
    - event: RelayerUpdated(address indexed oldRelayer, address indexed newRelayer)
    - event: Withdrawn(address indexed user, uint256 amount, uint256 newBalance)
unordered_multichain_mode: true
preload_handlers: true
`;

const configPath = path.join(__dirname, 'config.yaml');
fs.writeFileSync(configPath, configYaml, 'utf8');

console.log('✅ config.yaml generated successfully!');
console.log(`   Network ID: ${NETWORK_ID}`);
console.log(`   Start Block: ${START_BLOCK}`);
console.log(`   ChronoGrid: ${CHRONOGRID_ADDRESS}`);
console.log(`   ChronoGridWrapper: ${CHRONOGRID_WRAPPER_ADDRESS}`);
