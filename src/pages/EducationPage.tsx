import { Page, Paragraph, SubHeader, SubSubHeader } from "../components/Commom";

export default () => {
  return (
    <Page>
      <SubHeader>Education</SubHeader>
      <SubSubHeader>Graduation</SubSubHeader>
      <Paragraph>
        <p>
          <strong>Graduating </strong>
        </p>
        <p>
          <strong>Bachelor of Computer Science</strong>
          {" at "}
          <a>CEFET/RJ (Federal Center for Technological Education)</a>
        </p>
        <p>(2020 – current)</p>
      </Paragraph>

      <SubSubHeader>Certificate Programs</SubSubHeader>

      <Paragraph>
        <p>
          <strong>Certificate Program in Java FullStack development</strong>
          {" at "}
          <strong>FAETEC</strong>
        </p>

        <p>(2016 – 2018)</p>
      </Paragraph>
    </Page>
  );
};
