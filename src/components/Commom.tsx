import * as React from "react";
import { colors, fonts } from "../styles/colors";

export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <article
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
    </article>
  );
};

export const Header = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      style={{
        fontSize: "2em",
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "uppercase",
        color: `${colors.dark1}`,
        fontFamily: `${fonts.fontTitle}`,
        backgroundColor: `${colors.light1}`,
        backdropFilter: `invert(1) grayscale(1) contrast(5) brightness(1.2)`,
        width: "fit-content",
        padding: "0.5em",
        margin: "1em auto",
      }}
      {...props}
    />
  );
};

export const SubHeader = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      style={{
        fontSize: "1.6em",
        textAlign: "left",
        fontWeight: "bold",
        textDecoration: "underline",
        padding: "1em",
        color: `${colors.dark1}`,
        fontFamily: `${fonts.fontText}`,
        backgroundColor: `${colors.light1}`,
        backdropFilter: `invert(1) grayscale(1) contrast(5) brightness(1.2)`,
        width: "fit-content",
      }}
      {...props}
    />
  );
};

export const SubSubHeader = (
  props: React.HTMLAttributes<HTMLHeadingElement>
) => {
  return (
    <h3
      style={{
        fontSize: "1.5em",
        textAlign: "left",
        fontWeight: "bold",
        textDecoration: "underline",
        padding: "1em",
        color: `${colors.dark1}`,
        fontFamily: `${fonts.fontText}`,
        backgroundColor: `${colors.light1}`,
        backdropFilter: `invert(1) grayscale(1) contrast(5) brightness(1.2)`,
        width: "fit-content",
      }}
      {...props}
    />
  );
};

const CustomP = (props: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      style={{
        fontSize: "1em",
        textAlign: "justify",
        textJustify: "inter-word",
        padding: "0.5em",
        color: `${colors.dark1}`,
        fontFamily: `${fonts.fontText}`,
        backgroundColor: `${colors.light1}`,
        backdropFilter: `invert(1) grayscale(1) contrast(5) brightness(1.2)`,
        margin: "0 0 64px 0",
      }}
      {...props}
    />
  );
};

export const Paragraph = (
  props: React.HTMLAttributes<HTMLParagraphElement>
) => {
  return (
    <div
      style={{
        backdropFilter: `invert(1) grayscale(1) contrast(50) brightness(50) blur(10px)`,
      }}
    >
      <div
        style={{
          fontSize: `0.9em`,
          textAlign: `justify`,
          textJustify: `inter-word`,
          padding: `0.1px 0.5em`,
          color: `${colors.dark1}`,
          backgroundColor: `${colors.light1}`,

          margin: `0 0 64px 0`,
        }}
      >
        <CustomP {...props} />
      </div>
    </div>
  );
};

export const CustomImage = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => {
  return (
    <div
      style={{
        padding: "0",
        height: "fit-content",
        width: "fit-content",
        margin: "0 0",
      }}
    >
      <img
        style={{
          display: "block",
          margin: "auto",
          padding: "0",
          height: "fit-content",
          width: "fit-content",
        }}
        {...props}
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

export const UnOrderedList = (
  props: React.HTMLAttributes<HTMLUListElement>
) => {
  return (
    <ul
      style={{
        listStyleType: "none",
        width: "fit-content",
        padding: "0.5em",
        backgroundColor: `${colors.light1}`,
        backdropFilter: `invert(1) grayscale(1) contrast(5) brightness(1.2)`,
        color: `${colors.dark1}`,
      }}
      {...props}
    />
  );
};

export const Ruler = () => (
  <hr style={{ width: "100%", border: "1px solid black" }} />
);

export const CardContainer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "1em",
        justifyItems: "center",
        alignItems: "center",
        padding: "1em",
        ...props.style,
      }}
      {...props}
    />
  );
};
export const Card = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      style={{
        width: "90%",
        height: "fit-content",
        backgroundColor: `${colors.light1}`,
        backdropFilter: `invert(1) grayscale(1) contrast(5) brightness(8) blur(10px)`,
        border: `5px solid ${colors.light1}`,
        outline: `5px solid ${colors.dark1}`,
        boxShadow: `2px 2px 4px 2px ${colors.light1}`,
        minWidth: "300px",
        color: `${colors.dark1}`,
        fontFamily: `${fonts.fontText}`,
        ...props.style,
      }}
      {...props}
    />
  );
};

export const CardLeft = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      style={{
        width: "50%",
        height: "100%",
        float: "left",
        ...props.style,
      }}
      {...props}
    />
  );
};

export const CardRight = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      style={{
        width: "50%",
        height: "100%",
        float: "right",
        ...props.style,
      }}
      {...props}
    />
  );
};
