/***** TAKE NOTE ******
This is a hack to get genType to work!

In order for genType to produce recursive types, it needs to be at the 
root module of a file. If it's defined in a nested module it does not 
work. So all the MockDb types and internal functions are defined in TestHelpers_MockDb
and only public functions are recreated and exported from this module.

the following module:
```rescript
module MyModule = {
  @genType
  type rec a = {fieldB: b}
  @genType and b = {fieldA: a}
}
```

produces the following in ts:
```ts
// tslint:disable-next-line:interface-over-type-literal
export type MyModule_a = { readonly fieldB: b };

// tslint:disable-next-line:interface-over-type-literal
export type MyModule_b = { readonly fieldA: MyModule_a };
```

fieldB references type b which doesn't exist because it's defined
as MyModule_b
*/

module MockDb = {
  @genType
  let createMockDb = TestHelpers_MockDb.createMockDb
}

@genType
module Addresses = {
  include TestHelpers_MockAddresses
}

module EventFunctions = {
  //Note these are made into a record to make operate in the same way
  //for Res, JS and TS.

  /**
  The arguements that get passed to a "processEvent" helper function
  */
  @genType
  type eventProcessorArgs<'event> = {
    event: 'event,
    mockDb: TestHelpers_MockDb.t,
    @deprecated("Set the chainId for the event instead")
    chainId?: int,
  }

  @genType
  type eventProcessor<'event> = eventProcessorArgs<'event> => promise<TestHelpers_MockDb.t>

  /**
  A function composer to help create individual processEvent functions
  */
  let makeEventProcessor = (~register) => args => {
    let {event, mockDb, ?chainId} =
      args->(Utils.magic: eventProcessorArgs<'event> => eventProcessorArgs<Internal.event>)

    // Have the line here, just in case the function is called with
    // a manually created event. We don't want to break the existing tests here.
    let _ =
      TestHelpers_MockDb.mockEventRegisters->Utils.WeakMap.set(event, register)
    TestHelpers_MockDb.makeProcessEvents(mockDb, ~chainId=?chainId)([event->(Utils.magic: Internal.event => Types.eventLog<unknown>)])
  }

  module MockBlock = {
    @genType
    type t = {
      hash?: string,
      number?: int,
      timestamp?: int,
    }

    let toBlock = (_mock: t) => {
      hash: _mock.hash->Belt.Option.getWithDefault("foo"),
      number: _mock.number->Belt.Option.getWithDefault(0),
      timestamp: _mock.timestamp->Belt.Option.getWithDefault(0),
    }->(Utils.magic: Types.AggregatedBlock.t => Internal.eventBlock)
  }

  module MockTransaction = {
    @genType
    type t = {
    }

    let toTransaction = (_mock: t) => {
    }->(Utils.magic: Types.AggregatedTransaction.t => Internal.eventTransaction)
  }

  @genType
  type mockEventData = {
    chainId?: int,
    srcAddress?: Address.t,
    logIndex?: int,
    block?: MockBlock.t,
    transaction?: MockTransaction.t,
  }

  /**
  Applies optional paramters with defaults for all common eventLog field
  */
  let makeEventMocker = (
    ~params: Internal.eventParams,
    ~mockEventData: option<mockEventData>,
    ~register: unit => Internal.eventConfig,
  ): Internal.event => {
    let {?block, ?transaction, ?srcAddress, ?chainId, ?logIndex} =
      mockEventData->Belt.Option.getWithDefault({})
    let block = block->Belt.Option.getWithDefault({})->MockBlock.toBlock
    let transaction = transaction->Belt.Option.getWithDefault({})->MockTransaction.toTransaction
    let config = RegisterHandlers.getConfig()
    let event: Internal.event = {
      params,
      transaction,
      chainId: switch chainId {
      | Some(chainId) => chainId
      | None =>
        switch config.defaultChain {
        | Some(chainConfig) => chainConfig.id
        | None =>
          Js.Exn.raiseError(
            "No default chain Id found, please add at least 1 chain to your config.yaml",
          )
        }
      },
      block,
      srcAddress: srcAddress->Belt.Option.getWithDefault(Addresses.defaultAddress),
      logIndex: logIndex->Belt.Option.getWithDefault(0),
    }
    // Since currently it's not possible to figure out the event config from the event
    // we store a reference to the register function by event in a weak map
    let _ = TestHelpers_MockDb.mockEventRegisters->Utils.WeakMap.set(event, register)
    event
  }
}


module ChronoGrid = {
  module AutoClaimFailed = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGrid.AutoClaimFailed.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGrid.AutoClaimFailed.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("user")
      user?: Address.t,
      @as("gridId")
      gridId?: string,
      @as("timeperiodId")
      timeperiodId?: bigint,
      @as("reason")
      reason?: string,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?user,
        ?gridId,
        ?timeperiodId,
        ?reason,
        ?mockEventData,
      } = args

      let params = 
      {
       user: user->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
       gridId: gridId->Belt.Option.getWithDefault("foo"),
       timeperiodId: timeperiodId->Belt.Option.getWithDefault(0n),
       reason: reason->Belt.Option.getWithDefault("foo"),
      }
->(Utils.magic: Types.ChronoGrid.AutoClaimFailed.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGrid.AutoClaimFailed.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGrid.AutoClaimFailed.event)
    }
  }

  module AutoClaimSkipped = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGrid.AutoClaimSkipped.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGrid.AutoClaimSkipped.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("user")
      user?: Address.t,
      @as("gridId")
      gridId?: string,
      @as("timeperiodId")
      timeperiodId?: bigint,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?user,
        ?gridId,
        ?timeperiodId,
        ?mockEventData,
      } = args

      let params = 
      {
       user: user->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
       gridId: gridId->Belt.Option.getWithDefault("foo"),
       timeperiodId: timeperiodId->Belt.Option.getWithDefault(0n),
      }
->(Utils.magic: Types.ChronoGrid.AutoClaimSkipped.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGrid.AutoClaimSkipped.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGrid.AutoClaimSkipped.event)
    }
  }

  module BetPlaced = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGrid.BetPlaced.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGrid.BetPlaced.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("user")
      user?: Address.t,
      @as("gridId")
      gridId?: string,
      @as("timeperiodId")
      timeperiodId?: bigint,
      @as("amountPaid")
      amountPaid?: bigint,
      @as("sharesReceived")
      sharesReceived?: bigint,
      @as("pricePerShare")
      pricePerShare?: bigint,
      @as("bAtEntry")
      bAtEntry?: bigint,
      @as("totalshare")
      totalshare?: bigint,
      @as("price_min")
      price_min?: bigint,
      @as("price_max")
      price_max?: bigint,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?user,
        ?gridId,
        ?timeperiodId,
        ?amountPaid,
        ?sharesReceived,
        ?pricePerShare,
        ?bAtEntry,
        ?totalshare,
        ?price_min,
        ?price_max,
        ?mockEventData,
      } = args

      let params = 
      {
       user: user->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
       gridId: gridId->Belt.Option.getWithDefault("foo"),
       timeperiodId: timeperiodId->Belt.Option.getWithDefault(0n),
       amountPaid: amountPaid->Belt.Option.getWithDefault(0n),
       sharesReceived: sharesReceived->Belt.Option.getWithDefault(0n),
       pricePerShare: pricePerShare->Belt.Option.getWithDefault(0n),
       bAtEntry: bAtEntry->Belt.Option.getWithDefault(0n),
       totalshare: totalshare->Belt.Option.getWithDefault(0n),
       price_min: price_min->Belt.Option.getWithDefault(0n),
       price_max: price_max->Belt.Option.getWithDefault(0n),
      }
->(Utils.magic: Types.ChronoGrid.BetPlaced.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGrid.BetPlaced.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGrid.BetPlaced.event)
    }
  }

  module GlobalLiquidityAdded = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGrid.GlobalLiquidityAdded.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGrid.GlobalLiquidityAdded.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("amount")
      amount?: bigint,
      @as("newTotal")
      newTotal?: bigint,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?amount,
        ?newTotal,
        ?mockEventData,
      } = args

      let params = 
      {
       amount: amount->Belt.Option.getWithDefault(0n),
       newTotal: newTotal->Belt.Option.getWithDefault(0n),
      }
->(Utils.magic: Types.ChronoGrid.GlobalLiquidityAdded.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGrid.GlobalLiquidityAdded.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGrid.GlobalLiquidityAdded.event)
    }
  }

  module GlobalLiquidityUpdated = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGrid.GlobalLiquidityUpdated.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGrid.GlobalLiquidityUpdated.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("newTotal")
      newTotal?: bigint,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?newTotal,
        ?mockEventData,
      } = args

      let params = 
      {
       newTotal: newTotal->Belt.Option.getWithDefault(0n),
      }
->(Utils.magic: Types.ChronoGrid.GlobalLiquidityUpdated.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGrid.GlobalLiquidityUpdated.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGrid.GlobalLiquidityUpdated.event)
    }
  }

  module GridCreated = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGrid.GridCreated.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGrid.GridCreated.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("gridId")
      gridId?: string,
      @as("timeperiodId")
      timeperiodId?: bigint,
      @as("priceMin")
      priceMin?: bigint,
      @as("priceMax")
      priceMax?: bigint,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?gridId,
        ?timeperiodId,
        ?priceMin,
        ?priceMax,
        ?mockEventData,
      } = args

      let params = 
      {
       gridId: gridId->Belt.Option.getWithDefault("foo"),
       timeperiodId: timeperiodId->Belt.Option.getWithDefault(0n),
       priceMin: priceMin->Belt.Option.getWithDefault(0n),
       priceMax: priceMax->Belt.Option.getWithDefault(0n),
      }
->(Utils.magic: Types.ChronoGrid.GridCreated.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGrid.GridCreated.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGrid.GridCreated.event)
    }
  }

  module MaxBetAmountUpdated = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGrid.MaxBetAmountUpdated.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGrid.MaxBetAmountUpdated.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("oldAmount")
      oldAmount?: bigint,
      @as("newAmount")
      newAmount?: bigint,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?oldAmount,
        ?newAmount,
        ?mockEventData,
      } = args

      let params = 
      {
       oldAmount: oldAmount->Belt.Option.getWithDefault(0n),
       newAmount: newAmount->Belt.Option.getWithDefault(0n),
      }
->(Utils.magic: Types.ChronoGrid.MaxBetAmountUpdated.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGrid.MaxBetAmountUpdated.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGrid.MaxBetAmountUpdated.event)
    }
  }

  module OwnershipTransferred = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGrid.OwnershipTransferred.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGrid.OwnershipTransferred.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("previousOwner")
      previousOwner?: Address.t,
      @as("newOwner")
      newOwner?: Address.t,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?previousOwner,
        ?newOwner,
        ?mockEventData,
      } = args

      let params = 
      {
       previousOwner: previousOwner->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
       newOwner: newOwner->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
      }
->(Utils.magic: Types.ChronoGrid.OwnershipTransferred.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGrid.OwnershipTransferred.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGrid.OwnershipTransferred.event)
    }
  }

  module TimeperiodCreated = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGrid.TimeperiodCreated.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGrid.TimeperiodCreated.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("timeperiodId")
      timeperiodId?: bigint,
      @as("startTime")
      startTime?: bigint,
      @as("endTime")
      endTime?: bigint,
      @as("referencePrice")
      referencePrice?: bigint,
      @as("allocatedLiquidity")
      allocatedLiquidity?: bigint,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?timeperiodId,
        ?startTime,
        ?endTime,
        ?referencePrice,
        ?allocatedLiquidity,
        ?mockEventData,
      } = args

      let params = 
      {
       timeperiodId: timeperiodId->Belt.Option.getWithDefault(0n),
       startTime: startTime->Belt.Option.getWithDefault(0n),
       endTime: endTime->Belt.Option.getWithDefault(0n),
       referencePrice: referencePrice->Belt.Option.getWithDefault(0n),
       allocatedLiquidity: allocatedLiquidity->Belt.Option.getWithDefault(0n),
      }
->(Utils.magic: Types.ChronoGrid.TimeperiodCreated.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGrid.TimeperiodCreated.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGrid.TimeperiodCreated.event)
    }
  }

  module TimeperiodFinalized = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGrid.TimeperiodFinalized.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGrid.TimeperiodFinalized.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("timeperiodId")
      timeperiodId?: bigint,
      @as("netResult")
      netResult?: bigint,
      @as("returnedToGlobal")
      returnedToGlobal?: bigint,
      @as("newGlobalPool")
      newGlobalPool?: bigint,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?timeperiodId,
        ?netResult,
        ?returnedToGlobal,
        ?newGlobalPool,
        ?mockEventData,
      } = args

      let params = 
      {
       timeperiodId: timeperiodId->Belt.Option.getWithDefault(0n),
       netResult: netResult->Belt.Option.getWithDefault(0n),
       returnedToGlobal: returnedToGlobal->Belt.Option.getWithDefault(0n),
       newGlobalPool: newGlobalPool->Belt.Option.getWithDefault(0n),
      }
->(Utils.magic: Types.ChronoGrid.TimeperiodFinalized.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGrid.TimeperiodFinalized.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGrid.TimeperiodFinalized.event)
    }
  }

  module TimeperiodSettled = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGrid.TimeperiodSettled.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGrid.TimeperiodSettled.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("timeperiodId")
      timeperiodId?: bigint,
      @as("winningGridId")
      winningGridId?: string,
      @as("twapPrice")
      twapPrice?: bigint,
      @as("totalLoserBets")
      totalLoserBets?: bigint,
      @as("poolShare")
      poolShare?: bigint,
      @as("winnerShare")
      winnerShare?: bigint,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?timeperiodId,
        ?winningGridId,
        ?twapPrice,
        ?totalLoserBets,
        ?poolShare,
        ?winnerShare,
        ?mockEventData,
      } = args

      let params = 
      {
       timeperiodId: timeperiodId->Belt.Option.getWithDefault(0n),
       winningGridId: winningGridId->Belt.Option.getWithDefault("foo"),
       twapPrice: twapPrice->Belt.Option.getWithDefault(0n),
       totalLoserBets: totalLoserBets->Belt.Option.getWithDefault(0n),
       poolShare: poolShare->Belt.Option.getWithDefault(0n),
       winnerShare: winnerShare->Belt.Option.getWithDefault(0n),
      }
->(Utils.magic: Types.ChronoGrid.TimeperiodSettled.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGrid.TimeperiodSettled.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGrid.TimeperiodSettled.event)
    }
  }

  module WinningsClaimedEqual = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGrid.WinningsClaimedEqual.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGrid.WinningsClaimedEqual.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("user")
      user?: Address.t,
      @as("gridId")
      gridId?: string,
      @as("equalShare")
      equalShare?: bigint,
      @as("redemptionValue")
      redemptionValue?: bigint,
      @as("totalPayout")
      totalPayout?: bigint,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?user,
        ?gridId,
        ?equalShare,
        ?redemptionValue,
        ?totalPayout,
        ?mockEventData,
      } = args

      let params = 
      {
       user: user->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
       gridId: gridId->Belt.Option.getWithDefault("foo"),
       equalShare: equalShare->Belt.Option.getWithDefault(0n),
       redemptionValue: redemptionValue->Belt.Option.getWithDefault(0n),
       totalPayout: totalPayout->Belt.Option.getWithDefault(0n),
      }
->(Utils.magic: Types.ChronoGrid.WinningsClaimedEqual.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGrid.WinningsClaimedEqual.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGrid.WinningsClaimedEqual.event)
    }
  }

  module WrapperSet = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGrid.WrapperSet.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGrid.WrapperSet.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("oldWrapper")
      oldWrapper?: Address.t,
      @as("newWrapper")
      newWrapper?: Address.t,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?oldWrapper,
        ?newWrapper,
        ?mockEventData,
      } = args

      let params = 
      {
       oldWrapper: oldWrapper->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
       newWrapper: newWrapper->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
      }
->(Utils.magic: Types.ChronoGrid.WrapperSet.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGrid.WrapperSet.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGrid.WrapperSet.event)
    }
  }

}


module ChronoGridWrapper = {
  module BetPlacedWithSession = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGridWrapper.BetPlacedWithSession.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGridWrapper.BetPlacedWithSession.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("user")
      user?: Address.t,
      @as("sessionKey")
      sessionKey?: Address.t,
      @as("timeperiodId")
      timeperiodId?: bigint,
      @as("amount")
      amount?: bigint,
      @as("sharesReceived")
      sharesReceived?: bigint,
      @as("priceMin")
      priceMin?: bigint,
      @as("priceMax")
      priceMax?: bigint,
      @as("startTime")
      startTime?: bigint,
      @as("endTime")
      endTime?: bigint,
      @as("gridId")
      gridId?: string,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?user,
        ?sessionKey,
        ?timeperiodId,
        ?amount,
        ?sharesReceived,
        ?priceMin,
        ?priceMax,
        ?startTime,
        ?endTime,
        ?gridId,
        ?mockEventData,
      } = args

      let params = 
      {
       user: user->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
       sessionKey: sessionKey->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
       timeperiodId: timeperiodId->Belt.Option.getWithDefault(0n),
       amount: amount->Belt.Option.getWithDefault(0n),
       sharesReceived: sharesReceived->Belt.Option.getWithDefault(0n),
       priceMin: priceMin->Belt.Option.getWithDefault(0n),
       priceMax: priceMax->Belt.Option.getWithDefault(0n),
       startTime: startTime->Belt.Option.getWithDefault(0n),
       endTime: endTime->Belt.Option.getWithDefault(0n),
       gridId: gridId->Belt.Option.getWithDefault("foo"),
      }
->(Utils.magic: Types.ChronoGridWrapper.BetPlacedWithSession.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGridWrapper.BetPlacedWithSession.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGridWrapper.BetPlacedWithSession.event)
    }
  }

  module Deposited = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGridWrapper.Deposited.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGridWrapper.Deposited.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("user")
      user?: Address.t,
      @as("amount")
      amount?: bigint,
      @as("newBalance")
      newBalance?: bigint,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?user,
        ?amount,
        ?newBalance,
        ?mockEventData,
      } = args

      let params = 
      {
       user: user->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
       amount: amount->Belt.Option.getWithDefault(0n),
       newBalance: newBalance->Belt.Option.getWithDefault(0n),
      }
->(Utils.magic: Types.ChronoGridWrapper.Deposited.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGridWrapper.Deposited.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGridWrapper.Deposited.event)
    }
  }

  module EIP712DomainChanged = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGridWrapper.EIP712DomainChanged.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGridWrapper.EIP712DomainChanged.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?mockEventData,
      } = args

      let params = 
      ()
      ->(Utils.magic: Types.ChronoGridWrapper.EIP712DomainChanged.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGridWrapper.EIP712DomainChanged.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGridWrapper.EIP712DomainChanged.event)
    }
  }

  module FinalBalance = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGridWrapper.FinalBalance.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGridWrapper.FinalBalance.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("user")
      user?: Address.t,
      @as("newBalance")
      newBalance?: bigint,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?user,
        ?newBalance,
        ?mockEventData,
      } = args

      let params = 
      {
       user: user->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
       newBalance: newBalance->Belt.Option.getWithDefault(0n),
      }
->(Utils.magic: Types.ChronoGridWrapper.FinalBalance.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGridWrapper.FinalBalance.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGridWrapper.FinalBalance.event)
    }
  }

  module RelayerUpdated = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGridWrapper.RelayerUpdated.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGridWrapper.RelayerUpdated.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("oldRelayer")
      oldRelayer?: Address.t,
      @as("newRelayer")
      newRelayer?: Address.t,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?oldRelayer,
        ?newRelayer,
        ?mockEventData,
      } = args

      let params = 
      {
       oldRelayer: oldRelayer->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
       newRelayer: newRelayer->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
      }
->(Utils.magic: Types.ChronoGridWrapper.RelayerUpdated.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGridWrapper.RelayerUpdated.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGridWrapper.RelayerUpdated.event)
    }
  }

  module Withdrawn = {
    @genType
    let processEvent: EventFunctions.eventProcessor<Types.ChronoGridWrapper.Withdrawn.event> = EventFunctions.makeEventProcessor(
      ~register=(Types.ChronoGridWrapper.Withdrawn.register :> unit => Internal.eventConfig),
    )

    @genType
    type createMockArgs = {
      @as("user")
      user?: Address.t,
      @as("amount")
      amount?: bigint,
      @as("newBalance")
      newBalance?: bigint,
      mockEventData?: EventFunctions.mockEventData,
    }

    @genType
    let createMockEvent = args => {
      let {
        ?user,
        ?amount,
        ?newBalance,
        ?mockEventData,
      } = args

      let params = 
      {
       user: user->Belt.Option.getWithDefault(TestHelpers_MockAddresses.defaultAddress),
       amount: amount->Belt.Option.getWithDefault(0n),
       newBalance: newBalance->Belt.Option.getWithDefault(0n),
      }
->(Utils.magic: Types.ChronoGridWrapper.Withdrawn.eventArgs => Internal.eventParams)

      EventFunctions.makeEventMocker(
        ~params,
        ~mockEventData,
        ~register=(Types.ChronoGridWrapper.Withdrawn.register :> unit => Internal.eventConfig),
      )->(Utils.magic: Internal.event => Types.ChronoGridWrapper.Withdrawn.event)
    }
  }

}

