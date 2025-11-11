open Table
open Enums.EntityType
type id = string

type internalEntity = Internal.entity
module type Entity = {
  type t
  let name: string
  let schema: S.t<t>
  let rowsSchema: S.t<array<t>>
  let table: Table.table
  let entityHistory: EntityHistory.t<t>
}
external entityModToInternal: module(Entity with type t = 'a) => Internal.entityConfig = "%identity"
external entityModsToInternal: array<module(Entity)> => array<Internal.entityConfig> = "%identity"
external entitiesToInternal: array<'a> => array<Internal.entity> = "%identity"

@get
external getEntityId: internalEntity => string = "id"

exception UnexpectedIdNotDefinedOnEntity
let getEntityIdUnsafe = (entity: 'entity): id =>
  switch Utils.magic(entity)["id"] {
  | Some(id) => id
  | None =>
    UnexpectedIdNotDefinedOnEntity->ErrorHandling.mkLogAndRaise(
      ~msg="Property 'id' does not exist on expected entity object",
    )
  }

//shorthand for punning
let isPrimaryKey = true
let isNullable = true
let isArray = true
let isIndex = true

@genType
type whereOperations<'entity, 'fieldType> = {
  eq: 'fieldType => promise<array<'entity>>,
  gt: 'fieldType => promise<array<'entity>>
}

module ChronoGridWrapper_BetPlacedWithSession = {
  let name = (ChronoGridWrapper_BetPlacedWithSession :> string)
  @genType
  type t = {
    amount: bigint,
    endTime: bigint,
    gridId: string,
    id: id,
    priceMax: bigint,
    priceMin: bigint,
    sessionKey: string,
    sharesReceived: bigint,
    startTime: bigint,
    timeperiodId: bigint,
    user: string,
  }

  let schema = S.object((s): t => {
    amount: s.field("amount", BigInt.schema),
    endTime: s.field("endTime", BigInt.schema),
    gridId: s.field("gridId", S.string),
    id: s.field("id", S.string),
    priceMax: s.field("priceMax", BigInt.schema),
    priceMin: s.field("priceMin", BigInt.schema),
    sessionKey: s.field("sessionKey", S.string),
    sharesReceived: s.field("sharesReceived", BigInt.schema),
    startTime: s.field("startTime", BigInt.schema),
    timeperiodId: s.field("timeperiodId", BigInt.schema),
    user: s.field("user", S.string),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "amount", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "endTime", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "gridId", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "priceMax", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "priceMin", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "sessionKey", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
      mkField(
      "sharesReceived", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "startTime", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "timeperiodId", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "user", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGridWrapper_Deposited = {
  let name = (ChronoGridWrapper_Deposited :> string)
  @genType
  type t = {
    amount: bigint,
    id: id,
    newBalance: bigint,
    user: string,
  }

  let schema = S.object((s): t => {
    amount: s.field("amount", BigInt.schema),
    id: s.field("id", S.string),
    newBalance: s.field("newBalance", BigInt.schema),
    user: s.field("user", S.string),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "amount", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "newBalance", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "user", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGridWrapper_EIP712DomainChanged = {
  let name = (ChronoGridWrapper_EIP712DomainChanged :> string)
  @genType
  type t = {
    id: id,
  }

  let schema = S.object((s): t => {
    id: s.field("id", S.string),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGridWrapper_FinalBalance = {
  let name = (ChronoGridWrapper_FinalBalance :> string)
  @genType
  type t = {
    id: id,
    newBalance: bigint,
    user: string,
  }

  let schema = S.object((s): t => {
    id: s.field("id", S.string),
    newBalance: s.field("newBalance", BigInt.schema),
    user: s.field("user", S.string),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "newBalance", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "user", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGridWrapper_RelayerUpdated = {
  let name = (ChronoGridWrapper_RelayerUpdated :> string)
  @genType
  type t = {
    id: id,
    newRelayer: string,
    oldRelayer: string,
  }

  let schema = S.object((s): t => {
    id: s.field("id", S.string),
    newRelayer: s.field("newRelayer", S.string),
    oldRelayer: s.field("oldRelayer", S.string),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "newRelayer", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
      mkField(
      "oldRelayer", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGridWrapper_Withdrawn = {
  let name = (ChronoGridWrapper_Withdrawn :> string)
  @genType
  type t = {
    amount: bigint,
    id: id,
    newBalance: bigint,
    user: string,
  }

  let schema = S.object((s): t => {
    amount: s.field("amount", BigInt.schema),
    id: s.field("id", S.string),
    newBalance: s.field("newBalance", BigInt.schema),
    user: s.field("user", S.string),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "amount", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "newBalance", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "user", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGrid_AutoClaimFailed = {
  let name = (ChronoGrid_AutoClaimFailed :> string)
  @genType
  type t = {
    gridId: string,
    id: id,
    reason: string,
    timeperiodId: bigint,
    user: string,
  }

  let schema = S.object((s): t => {
    gridId: s.field("gridId", S.string),
    id: s.field("id", S.string),
    reason: s.field("reason", S.string),
    timeperiodId: s.field("timeperiodId", BigInt.schema),
    user: s.field("user", S.string),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "gridId", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "reason", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
      mkField(
      "timeperiodId", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "user", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGrid_AutoClaimSkipped = {
  let name = (ChronoGrid_AutoClaimSkipped :> string)
  @genType
  type t = {
    gridId: string,
    id: id,
    timeperiodId: bigint,
    user: string,
  }

  let schema = S.object((s): t => {
    gridId: s.field("gridId", S.string),
    id: s.field("id", S.string),
    timeperiodId: s.field("timeperiodId", BigInt.schema),
    user: s.field("user", S.string),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "gridId", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "timeperiodId", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "user", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGrid_BetPlaced = {
  let name = (ChronoGrid_BetPlaced :> string)
  @genType
  type t = {
    amountPaid: bigint,
    bAtEntry: bigint,
    gridId: string,
    id: id,
    priceMax: bigint,
    priceMin: bigint,
    pricePerShare: bigint,
    sharesReceived: bigint,
    timeperiodId: bigint,
    totalshare: bigint,
    user: string,
  }

  let schema = S.object((s): t => {
    amountPaid: s.field("amountPaid", BigInt.schema),
    bAtEntry: s.field("bAtEntry", BigInt.schema),
    gridId: s.field("gridId", S.string),
    id: s.field("id", S.string),
    priceMax: s.field("priceMax", BigInt.schema),
    priceMin: s.field("priceMin", BigInt.schema),
    pricePerShare: s.field("pricePerShare", BigInt.schema),
    sharesReceived: s.field("sharesReceived", BigInt.schema),
    timeperiodId: s.field("timeperiodId", BigInt.schema),
    totalshare: s.field("totalshare", BigInt.schema),
    user: s.field("user", S.string),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "amountPaid", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "bAtEntry", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "gridId", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "priceMax", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "priceMin", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "pricePerShare", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "sharesReceived", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "timeperiodId", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "totalshare", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "user", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGrid_GlobalLiquidityAdded = {
  let name = (ChronoGrid_GlobalLiquidityAdded :> string)
  @genType
  type t = {
    amount: bigint,
    id: id,
    newTotal: bigint,
  }

  let schema = S.object((s): t => {
    amount: s.field("amount", BigInt.schema),
    id: s.field("id", S.string),
    newTotal: s.field("newTotal", BigInt.schema),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "amount", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "newTotal", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGrid_GlobalLiquidityUpdated = {
  let name = (ChronoGrid_GlobalLiquidityUpdated :> string)
  @genType
  type t = {
    id: id,
    newTotal: bigint,
  }

  let schema = S.object((s): t => {
    id: s.field("id", S.string),
    newTotal: s.field("newTotal", BigInt.schema),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "newTotal", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGrid_GridCreated = {
  let name = (ChronoGrid_GridCreated :> string)
  @genType
  type t = {
    gridId: string,
    id: id,
    priceMax: bigint,
    priceMin: bigint,
    timeperiodId: bigint,
  }

  let schema = S.object((s): t => {
    gridId: s.field("gridId", S.string),
    id: s.field("id", S.string),
    priceMax: s.field("priceMax", BigInt.schema),
    priceMin: s.field("priceMin", BigInt.schema),
    timeperiodId: s.field("timeperiodId", BigInt.schema),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "gridId", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "priceMax", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "priceMin", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "timeperiodId", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGrid_MaxBetAmountUpdated = {
  let name = (ChronoGrid_MaxBetAmountUpdated :> string)
  @genType
  type t = {
    id: id,
    newAmount: bigint,
    oldAmount: bigint,
  }

  let schema = S.object((s): t => {
    id: s.field("id", S.string),
    newAmount: s.field("newAmount", BigInt.schema),
    oldAmount: s.field("oldAmount", BigInt.schema),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "newAmount", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "oldAmount", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGrid_OwnershipTransferred = {
  let name = (ChronoGrid_OwnershipTransferred :> string)
  @genType
  type t = {
    id: id,
    newOwner: string,
    previousOwner: string,
  }

  let schema = S.object((s): t => {
    id: s.field("id", S.string),
    newOwner: s.field("newOwner", S.string),
    previousOwner: s.field("previousOwner", S.string),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "newOwner", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
      mkField(
      "previousOwner", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGrid_TimeperiodCreated = {
  let name = (ChronoGrid_TimeperiodCreated :> string)
  @genType
  type t = {
    allocatedLiquidity: bigint,
    endTime: bigint,
    id: id,
    referencePrice: bigint,
    startTime: bigint,
    timeperiodId: bigint,
  }

  let schema = S.object((s): t => {
    allocatedLiquidity: s.field("allocatedLiquidity", BigInt.schema),
    endTime: s.field("endTime", BigInt.schema),
    id: s.field("id", S.string),
    referencePrice: s.field("referencePrice", BigInt.schema),
    startTime: s.field("startTime", BigInt.schema),
    timeperiodId: s.field("timeperiodId", BigInt.schema),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "allocatedLiquidity", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "endTime", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "referencePrice", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "startTime", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "timeperiodId", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGrid_TimeperiodFinalized = {
  let name = (ChronoGrid_TimeperiodFinalized :> string)
  @genType
  type t = {
    id: id,
    netResult: bigint,
    newGlobalPool: bigint,
    returnedToGlobal: bigint,
    timeperiodId: bigint,
  }

  let schema = S.object((s): t => {
    id: s.field("id", S.string),
    netResult: s.field("netResult", BigInt.schema),
    newGlobalPool: s.field("newGlobalPool", BigInt.schema),
    returnedToGlobal: s.field("returnedToGlobal", BigInt.schema),
    timeperiodId: s.field("timeperiodId", BigInt.schema),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "netResult", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "newGlobalPool", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "returnedToGlobal", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "timeperiodId", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGrid_TimeperiodSettled = {
  let name = (ChronoGrid_TimeperiodSettled :> string)
  @genType
  type t = {
    id: id,
    poolShare: bigint,
    timeperiodId: bigint,
    totalLoserBets: bigint,
    twapPrice: bigint,
    winnerShare: bigint,
    winningGridId: string,
  }

  let schema = S.object((s): t => {
    id: s.field("id", S.string),
    poolShare: s.field("poolShare", BigInt.schema),
    timeperiodId: s.field("timeperiodId", BigInt.schema),
    totalLoserBets: s.field("totalLoserBets", BigInt.schema),
    twapPrice: s.field("twapPrice", BigInt.schema),
    winnerShare: s.field("winnerShare", BigInt.schema),
    winningGridId: s.field("winningGridId", S.string),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "poolShare", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "timeperiodId", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "totalLoserBets", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "twapPrice", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "winnerShare", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "winningGridId", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGrid_WinningsClaimedEqual = {
  let name = (ChronoGrid_WinningsClaimedEqual :> string)
  @genType
  type t = {
    equalShare: bigint,
    gridId: string,
    id: id,
    redemptionValue: bigint,
    totalPayout: bigint,
    user: string,
  }

  let schema = S.object((s): t => {
    equalShare: s.field("equalShare", BigInt.schema),
    gridId: s.field("gridId", S.string),
    id: s.field("id", S.string),
    redemptionValue: s.field("redemptionValue", BigInt.schema),
    totalPayout: s.field("totalPayout", BigInt.schema),
    user: s.field("user", S.string),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "equalShare", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "gridId", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "redemptionValue", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "totalPayout", 
      Numeric,
      ~fieldSchema=BigInt.schema,
      
      
      
      
      
      ),
      mkField(
      "user", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

module ChronoGrid_WrapperSet = {
  let name = (ChronoGrid_WrapperSet :> string)
  @genType
  type t = {
    id: id,
    newWrapper: string,
    oldWrapper: string,
  }

  let schema = S.object((s): t => {
    id: s.field("id", S.string),
    newWrapper: s.field("newWrapper", S.string),
    oldWrapper: s.field("oldWrapper", S.string),
  })

  let rowsSchema = S.array(schema)

  @genType
  type indexedFieldOperations = {
    
  }

  let table = mkTable(
    (name :> string),
    ~fields=[
      mkField(
      "id", 
      Text,
      ~fieldSchema=S.string,
      ~isPrimaryKey,
      
      
      
      
      ),
      mkField(
      "newWrapper", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
      mkField(
      "oldWrapper", 
      Text,
      ~fieldSchema=S.string,
      
      
      
      
      
      ),
    ],
  )

  let entityHistory = table->EntityHistory.fromTable(~schema)

  external castToInternal: t => Internal.entity = "%identity"
}

let userEntities = [
  module(ChronoGridWrapper_BetPlacedWithSession),
  module(ChronoGridWrapper_Deposited),
  module(ChronoGridWrapper_EIP712DomainChanged),
  module(ChronoGridWrapper_FinalBalance),
  module(ChronoGridWrapper_RelayerUpdated),
  module(ChronoGridWrapper_Withdrawn),
  module(ChronoGrid_AutoClaimFailed),
  module(ChronoGrid_AutoClaimSkipped),
  module(ChronoGrid_BetPlaced),
  module(ChronoGrid_GlobalLiquidityAdded),
  module(ChronoGrid_GlobalLiquidityUpdated),
  module(ChronoGrid_GridCreated),
  module(ChronoGrid_MaxBetAmountUpdated),
  module(ChronoGrid_OwnershipTransferred),
  module(ChronoGrid_TimeperiodCreated),
  module(ChronoGrid_TimeperiodFinalized),
  module(ChronoGrid_TimeperiodSettled),
  module(ChronoGrid_WinningsClaimedEqual),
  module(ChronoGrid_WrapperSet),
]->entityModsToInternal

let allEntities =
  userEntities->Js.Array2.concat(
    [module(InternalTable.DynamicContractRegistry)]->entityModsToInternal,
  )

let byName =
  allEntities
  ->Js.Array2.map(entityConfig => {
    (entityConfig.name, entityConfig)
  })
  ->Js.Dict.fromArray
