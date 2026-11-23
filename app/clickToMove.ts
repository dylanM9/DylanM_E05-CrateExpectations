import { Controller } from "./controllers.ts";
import { Direction, Position } from "../core/mod.ts";
import { Session } from "../core/session.ts";
import { BoardInput } from "./tileClicks.ts";

function findDirection(
  player: Position,
  click: Position,
): Direction | null {
  const burger = "" + (player.x - click.x) + "|" + (player.y - click.y);
  switch (burger) {
    case "0|1":
      return "up";
    case "0|-1":
      return "down";
    case "1|0":
      return "left";
    case "-1|0":
      return "right";
    default:
      return null;
  }
}

export const clickToMove: Controller = {
  label: "Click a neighboring tile",
  attach(session: Session, board: BoardInput) {
    const stop = board.onTileClick((click) => {
      const { player } = session.getState().puzzle;
      const direction = findDirection(player, click);
      if (direction) {
        session.dispatch({ kind: "move", direction });
      }
    });
    return stop;
  },
};
