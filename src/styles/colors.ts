import { css } from "styled-components";

const fontUrl =
  "https://fonts.googleapis.com/css2?family=Libre+Barcode+128+Text&family=Monofett&family=Orbitron&family=Press+Start+2P&family=Share+Tech&family=Share+Tech+Mono&display=swap";

const dark1 = "#000";
const dark2 = "#202020";
const dark3 = "#404040";
const dark4 = "#606060";
const light4 = "#707070";
const light3 = "#808080";
const light2 = "#A0A0A0";
const light1 = "#ffffff";

const fontBarcode = "'Libre Barcode 128 Text', cursive";
const fontBold = "'Monofett', cursive";
const fontSans = "'Orbitron', sans-serif";
const fontTitle = "'Press Start 2P', cursive";
const fontText = "'Share Tech', sans-serif";
const fontMonoText = "'Share Tech Mono', monospace";

export const colors = {
  dark1,
  dark2,
  dark3,
  dark4,
  light4,
  light3,
  light2,
  light1,
};

export const fonts = {
  fontBarcode,
  fontBold,
  fontSans,
  fontTitle,
  fontText,
  fontMonoText,
};

export const fontFaces = css`
    @import url(${fontUrl});
`;

export const forDesktop = (css: string) => `
    @media (min-width: 1024px) {
        ${css}
    }
`;
