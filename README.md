## Envio Indexer - Mercury v2

**Enhanced indexer with comprehensive event tracking and Supabase integration**

*Please refer to the [documentation website](https://docs.envio.dev) for a thorough guide on all [Envio](https://envio.dev) indexer features*

### ✨ Features

- 🔍 **17 Events Tracked** - Comprehensive monitoring of ChronoGrid and ChronoGridWrapper
- 📊 **Dual Storage** - Data stored in both Envio GraphQL and Supabase PostgreSQL
- 🎯 **2 Contracts** - ChronoGrid core + ChronoGridWrapper session keys
- 📝 **Rich Logging** - Detailed console output with emoji indicators
- ⚡ **Non-blocking** - Async Supabase writes don't slow down indexing
- 🔐 **Production Ready** - Comprehensive error handling and monitoring

### 📋 Events Monitored

**ChronoGrid (12 events):**
- AutoClaimFailed, AutoClaimSkipped, BetPlaced, GlobalLiquidityAdded
- GridCreated, MaxBetAmountUpdated, OwnershipTransferred
- TimeperiodCreated, TimeperiodFinalized, TimeperiodSettled
- WinningsClaimedEqual, WrapperSet

**ChronoGridWrapper (5 events):**
- BetPlacedWithSession, Deposited, Withdrawn
- EIP712DomainChanged, RelayerUpdated

### 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Configure Supabase (see SUPABASE_SETUP.md)
# Edit .env.supabase with your credentials

# Run the indexer
pnpm dev
```

Visit http://localhost:8080 to see the GraphQL Playground, local password is `testing`.

### 📚 Documentation

- **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** - Step-by-step Supabase configuration
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Deployment, queries, and best practices
- **[supabase-tables.sql](./supabase-tables.sql)** - Complete database schema

### 🛠️ Development

```bash
# Generate types from config
pnpm codegen

# Build TypeScript
pnpm build

# Run tests
pnpm test

# Watch mode
pnpm watch
```

### 📊 Data Access

**GraphQL (Envio):**
```graphql
query {
  ChronoGrid_BetPlaced(limit: 10) {
    user
    gridId
    amountPaid
  }
}
```

**SQL (Supabase):**
```sql
SELECT * FROM bet_placed 
WHERE user_address = '0x...' 
ORDER BY timestamp DESC;
```

### Pre-requisites

- [Node.js (use v18 or newer)](https://nodejs.org/en/download/current)
- [pnpm (use v8 or newer)](https://pnpm.io/installation)
- [Docker desktop](https://www.docker.com/products/docker-desktop/)
- [Supabase account](https://supabase.com) (for database integration)

### 📈 Architecture

```
Blockchain Events
       ↓
   Envio Indexer
    ↙         ↘
GraphQL DB   Supabase
   (Fast)    (Persistent)
```

### 🔧 Configuration

- **config.yaml** - Contract addresses and events
- **schema.graphql** - GraphQL type definitions
- **.env.supabase** - Supabase credentials
- **src/EventHandlers.ts** - Event processing logic
- **src/supabaseClient.ts** - Database integration

### 📝 License

MIT

