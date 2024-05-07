import { Header, Page, SubHeader, UnOrderedList } from "../components/Commom";

export default () => {
  return (
    <Page>
      <Header>Education</Header>
      <SubHeader>Graduation</SubHeader>
      <UnOrderedList>
        <li>
          <strong>Graduating </strong>
        </li>
        <li>(Bachelor of Computer Science) at CEFET/RJ</li>
        <li>Federal Center for Technological Education</li>
        <li>
          <strong>(2020 – 2024)</strong>
        </li>
        <li>
          <strong>(Rio de Janeiro, RJ, Brazil)</strong>
        </li>
      </UnOrderedList>
      <SubHeader>Certificate Programs</SubHeader>
      <UnOrderedList>
        <li>
          <strong>Certificate Program in Informatics</strong>
        </li>
        <li>FAETEC</li>
        <li>
          <strong>(2016 – 2018)</strong>
        </li>
        <li>
          <strong>(Rio de Janeiro, RJ, Brazil)</strong>
        </li>
      </UnOrderedList>
    </Page>
  );
};
