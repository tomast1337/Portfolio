import { CustomImage, Page, Paragraph } from "../components/Commom";

export default () => {
  return (
    <Page>
      <CustomImage
        style={{
          backdropFilter: "invert(1) grayscale(1) brightness(50)",
          width: "300px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src="/imgs/eu.jpeg"
        alt="Eu"
      />
      <Paragraph>
        Hi! I'm Nicolas, a full-stack developer from Rio de Janeiro, Brazil. I'm
        currently studying Computer Science at CEFET/RJ, and graduating this
        year.
      </Paragraph>
      <Paragraph>
        If you want to get in touch with me, my preference is for{" "}
        <a href="https://www.linkedin.com/in/nicolas-vycas/">LinkedIn</a>.
      </Paragraph>
    </Page>
  );
};
