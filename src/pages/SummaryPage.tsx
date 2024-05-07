import { Page, Paragraph } from "../components/Commom";

export default () => {
  return (
    <Page>
      <img
        loading="lazy"
        style={{
          display: "block",
          margin: "auto",
          padding: "0",
          width: "300px",
        }}
        src="/imgs/eu.jpeg"
        alt="Nicolas Vycas"
      />
      <Paragraph>
        Hi! I'm Nicolas, a Full Stack developer from Rio de Janeiro, Brazil. I'm
        currently studying Computer Science at CEFET/RJ, and graduating this
        year.
      </Paragraph>
      <Paragraph>
        If you want to get in touch with me, my preference is through my{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nicolas-vycas/"
        >
          LinkedIn
        </a>
        .
      </Paragraph>
    </Page>
  );
};
