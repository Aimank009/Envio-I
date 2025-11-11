import assert from "assert";
import { 
  TestHelpers,
  ChronoGrid_AutoClaimFailed
} from "generated";
const { MockDb, ChronoGrid } = TestHelpers;

describe("ChronoGrid contract AutoClaimFailed event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for ChronoGrid contract AutoClaimFailed event
  const event = ChronoGrid.AutoClaimFailed.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("ChronoGrid_AutoClaimFailed is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await ChronoGrid.AutoClaimFailed.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualChronoGridAutoClaimFailed = mockDbUpdated.entities.ChronoGrid_AutoClaimFailed.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedChronoGridAutoClaimFailed: ChronoGrid_AutoClaimFailed = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      user: event.params.user,
      gridId: event.params.gridId,
      timeperiodId: event.params.timeperiodId,
      reason: event.params.reason,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualChronoGridAutoClaimFailed, expectedChronoGridAutoClaimFailed, "Actual ChronoGridAutoClaimFailed should be the same as the expectedChronoGridAutoClaimFailed");
  });
});
