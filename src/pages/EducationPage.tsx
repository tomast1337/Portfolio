import * as React from "react";
import {
  Header,
  Page,
  Ruler,
  SubHeader,
  UnOrderedList,
} from "../components/Commom";

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
          <strong>(2020 – 2023)</strong>
        </li>
      </UnOrderedList>
      <SubHeader>Technical High School</SubHeader>
      <UnOrderedList>
        <li>
          <strong>Completed</strong>
        </li>

        <li>(technical high school in informatics) at FAETEC</li>
        <li>State Technical School Republic</li>
        <li>
          <strong>(2016 – 2018)</strong>
        </li>
      </UnOrderedList>
    </Page>
  );
};
