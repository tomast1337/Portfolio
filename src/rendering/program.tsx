import {
  Buffer,
  Context,
  Coord,
  Cursor,
  Program,
} from "play.core/src/modules/types";

const pattern = "__HIRE-Nicolas-NOW__";
const colors = ["red", "green", "blue"];

const { sin, round, abs } = Math;

function main(
  coord: Coord,
  context: Context,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _cursor: Cursor,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _buffer: Buffer
) {
  const t = context.time * 0.0005;
  const x = coord.x;
  const y = coord.y;
  const o = sin(y * x * sin(t) * 0.003 + y * 0.01 + t) * 20;
  const i = round(abs(x + y + o)) % pattern.length;
  return {
    char: pattern[i],
    color: colors[i % colors.length],
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function post(_context: Context, _cursor: Cursor, _buffer: Buffer) {
  // draw Vignette
}

export const program: Program = {
  main: main,
  post: post,
};
