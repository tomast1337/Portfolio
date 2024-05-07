import {
  Buffer,
  Context,
  Coord,
  Cursor,
  Program,
} from "play.core/src/modules/types";
import { rot, length } from "play.core/src/modules/vec2";
import { fract, map, smoothstep } from "play.core/src/modules/num";
import { sdCircle } from "play.core/src/modules/sdf";

const density = " .:-=+*#%@";
const colors = [
  "red",
  "red",
  "red",
  "red",
  "#FFF",
  "#CCC",
  "#AAA",
  "#888",
  "#666",
  "#444",
];
const backgroundColors = ["#000", "#111", "#222"];

function main(
  coord: Coord,
  context: Context,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _cursor: Cursor,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _buffer: Buffer
) {
  const t = context.time * 0.001;
  const m = Math.min(context.cols, context.rows);
  const a = context.metrics.aspect;

  const offset = {
    x: context.cols / 2,
    y: context.rows / 2,
  };

  offset.x += Math.sin(t * 0.7) * context.cols * 0.2;
  offset.y += Math.cos(t * 0.5) * context.rows * 0.2;

  let st = {
    x: ((2.0 * (coord.x - offset.x)) / m) * a,
    y: (2.0 * (coord.y - offset.y)) / m,
  };

  st = rot(st, 0.6 * Math.sin(0.62 * t) * length(st) * 2.5);
  st = rot(st, t * 0.2);

  const s = map(Math.sin(t), -1, 1, 0.5, 1.8);
  const pt = {
    x: fract(st.x * s) - 0.5,
    y: fract(st.y * s) - 0.5,
  };

  const r = 0.5 * Math.sin(0.5 * t + st.x * 0.2) + 0.5;

  const d = sdCircle(pt, r);

  const width = 0.05 + 0.3 * Math.sin(t);

  const k = smoothstep(width, width + 0.2, Math.sin(10 * d + t));
  const c = (1.0 - Math.exp(-3 * Math.abs(d))) * k;

  const index = Math.floor(c * (density.length - 1));

  return {
    char: density[index],
    color: colors[Math.floor(c * colors.length)],
    backgroundColor: backgroundColors[Math.floor(c * backgroundColors.length)],
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
