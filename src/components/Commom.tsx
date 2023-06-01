import * as React from "react";
import styled, { css } from "styled-components";
import { colors, fonts, forDesktop } from "../styles/colors";

export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        backgroundImage: "rgba(0,0,0,0.5)",
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        width: "100vw",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "0",
        marginBottom: "5em",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const Header = styled.h1`
  font-size: 2rem;
  text-align: left;
  text-decoration: underline;
  color: white;
  font-family: ${fonts.fontTitle};
  background-image: url("/imgs/textures/texture1.gif");
  background-size: 100%;
  background-repeat: repeat;
  background-position: center;
  width: fit-content;
  padding: 0.25em;
`;

export const SubHeader = styled.h2`
  font-size: 1.6em;
  text-align: left;
  font-weight: bold;
  text-decoration: underline;
  padding-left: 1em;
  color: ${colors.dark1};
  font-family: ${fonts.fontText};
  background-color: ${colors.light1};
  backdrop-filter: invert(1) grayscale(1) contrast(5) brightness(1.2);
  width: fit-content;
`;

export const SubSubHeader = styled.h3`
  font-size: 1.5em;
  text-align: left;
  font-weight: bold;
  text-decoration: underline;
  padding-left: 1em;
  font-family: ${fonts.fontText};
  width: fit-content;
`;

export const Paragraph = styled.p`
  font-size: 0.9em;
  text-align: justify;
  text-justify: inter-word;
  padding: 0.5em;
  color: ${colors.dark1};
  background-color: ${colors.light1};
  backdrop-filter: invert(1) grayscale(1) contrast(50) brightness(50) blur(10px);
  font-family: ${fonts.fontText};
  ${forDesktop(
    css`
      font-size: 1rem;
    `
  )}

  a {
    color: ${colors.dark2};
    text-decoration: underline;
    font-weight: bold;
  }

  span {
    color: ${colors.dark2};
    font-weight: 500;
  }
`;

// images
export const CustomImage = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => {
  const { src, style } = props;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const hiddenCanvasRef = React.useRef<HTMLCanvasElement>(null);
  const [image, setImage] = React.useState<HTMLImageElement | null>(null);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [isOnScreen, setIsOnScreen] = React.useState(false);
  const [wasDrawn, setWasDrawn] = React.useState(false);
  // check if element is on screen
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      { rootMargin: "0px 0px 100px 0px" }
    );
    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }
    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }, [canvasRef]);

  React.useEffect(() => {
    const img = new Image();
    img.src = src as string;
    img.onload = () => {
      setImage(img);
      setImageLoaded(true);

      const imageRatio = img.width / img.height;
      if (canvasRef.current) {
        canvasRef.current.width = 400;
        canvasRef.current.height = 400 / imageRatio;
      }
      // draw image on hidden canvas
      if (hiddenCanvasRef.current) {
        hiddenCanvasRef.current.width = 400;
        hiddenCanvasRef.current.height = 400 / imageRatio;
        const ctx = hiddenCanvasRef.current.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(
          /* image*/ img,
          /* source x*/ 0,
          /* source y*/ 0,
          /* source width*/ img.width,
          /* source height*/ img.height,
          /* destination x*/ 0,
          /* destination y*/ 0,
          /* destination width*/ hiddenCanvasRef.current.width,
          /*destination height*/ hiddenCanvasRef.current.height
        );
      }
    };
  }, [src]);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const drawImage = async () => {
    if (wasDrawn) return;
    //await drawImageAsciiArt();
    await drawImageLoading();
  };

  const drawImageLoading = async () => {
    if (imageLoaded && image && canvasRef.current && isOnScreen) {
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;
      const imageRatio = image.width / image.height;
      canvasRef.current.width = 400;
      canvasRef.current.height = 400 / imageRatio;
      const canvasWidth = canvasRef.current.width;
      const canvasHeight = canvasRef.current.height;

      // fake segmented loading
      // split image in 10 parts
      const parts = Math.floor(Math.random() * 90) + 10; // 10 to 100
      const partHeight = image.height / parts;
      const partWidth = image.width;
      for (let i = 0; i < parts; i++) {
        // draw part scaled to canvas size
        ctx.drawImage(
          /* image*/ image,
          /* source x*/ 0,
          /* source y*/ i * partHeight,
          /* source width*/ partWidth,
          /* source height*/ partHeight,
          /* destination x*/ 0,
          /* destination y*/ (i * canvasHeight) / parts,
          /* destination width*/ canvasWidth,
          /*destination height*/ canvasHeight / parts
        );
        // wait , the later the part the faster it loads
        await delay((Math.random() * parts + (1 / (i + 1)) * 70) + 50);
      }
      setWasDrawn(true);
    }
  };

  const drawImageAsciiArt = async () => {
    if (imageLoaded && image && canvasRef.current && isOnScreen) {
      const ctx = canvasRef.current.getContext("2d");
      const hiddenCtx = hiddenCanvasRef.current?.getContext("2d");
      if (!ctx || !hiddenCtx) return;
      const imageRatio = image.width / image.height;
      canvasRef.current.width = 400;
      canvasRef.current.height = 400 / imageRatio;

      const partsX = 100;
      const partsY = 100;
      const partHeight = image.height / partsY;
      const partWidth = image.width / partsX;
      for (let i = 0; i < partsY; i++) {
        for (let j = 0; j < partsX; j++) {
          const imageData = hiddenCtx.getImageData(
            /* source x*/ j * partWidth,
            /* source y*/ i * partHeight,
            /* source width*/ partWidth,
            /* source height*/ partHeight
          );
          const data = imageData.data;
          const color = `rgb(
            ${data?.[0] || 0},${data?.[1] || 0},${data?.[2] || 0})`;
          // draw part scaled to canvas size
          ctx.font = `bold ${partHeight}px monospace`;
          ctx.fillText("@", j * partWidth - 2, i * partHeight - 2);
          ctx.fillStyle = color;
          await delay(Math.random() * partsX * partsY + 1 / (i * j + 1));
        }
      }
    }
  };

  React.useEffect(() => {
    drawImage();
  }, [isOnScreen, imageLoaded]);

  return (
    <div
      style={{
        padding: "0",
        height: "fit-content",
        width: "fit-content",
        margin: "0 0",
      }}
    >
      <canvas ref={canvasRef} style={style} />
      <canvas
        ref={hiddenCanvasRef}
        style={style ? { ...style, display: "none" } : { display: "none" }}
      />
    </div>
  );
};

export const CenteredImage = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <CustomImage {...props} />
    </div>
  );
};

export const UnOrderedList = styled.ul`
  // no decoration
  list-style-type: none;
  width: fit-content;
  padding: 0.5em;
  background-color: ${colors.light1};
  backdrop-filter: invert(1) grayscale(1) contrast(5) brightness(1.2);
  color: ${colors.dark1};

  li {
    font-family: ${fonts.fontText};
    font-size: 0.9em;
  }
`;

export const Ruler = styled.hr`
  width: 100%;
  border: 1px solid ${colors.dark1};
  background-color: ${colors.light1};
  backdrop-filter: invert(1) grayscale(1) contrast(5) brightness(1.2);
  margin: 0;
  padding: 0;
  height: 1px;
  border: 0;
`;

export const CardContainer = styled.div`
  ${forDesktop(
    css`
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 1em;
    `
  )}
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em;
  justify-items: center;
  align-items: center;
  padding: 1em;
`;

export const Card = styled.div`
  width: 90%;
  ${forDesktop(css`
    width: 400px;
  `)}
  height: fit-content;
  background-color: ${colors.light1};
  backdrop-filter: invert(1) grayscale(1) contrast(5) brightness(8) blur(10px);
  border: 5px solid ${colors.light1};
  outline: 5px solid ${colors.dark2};
  box-shadow: 2px 2px 4px 2px ${colors.light1};
  min-width: 300px;
  color: ${colors.dark1};
  font-family: ${fonts.fontText};
`;

export const CardLeft = styled.div`
  width: 50%;
  height: 100%;
  float: left;
`;

export const CardRight = styled.div`
  width: 50%;
  height: 100%;
  float: right;
`;
