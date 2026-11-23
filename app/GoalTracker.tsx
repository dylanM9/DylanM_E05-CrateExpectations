import type { Puzzle } from "../core/mod.ts";
import { isGoal } from "../core/mod.ts";

export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  let numGoalsCovered = 0;
  for (const cratePos of puzzle.crates) {
    if (isGoal(puzzle.layout, cratePos)) numGoalsCovered++;
  }
  return (
    <dl className="status">
      <dt>Goals Filled</dt>
      <dd>{numGoalsCovered} of {puzzle.layout.goals.length}</dd>
    </dl>
  );
}
