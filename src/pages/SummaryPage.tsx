import * as React from "react";
import { CustomImage, Header, Page, Paragraph } from "../components/Commom";

export default () => {
  return (
    <Page>
      <Header>Summary</Header>
      <CustomImage
        style={{
          backdropFilter: "invert(1) grayscale(1) brightness(50)",
        }}
        src="/imgs/eu.jpeg"
        alt="Eu"
      />
      <Paragraph>
        Hi! I'm Nicolas, a programmer with 8 years of studies in the field. I
        began studying software development in 2016 while attending{" "}
        <strong>FAETEC's technical high school</strong>, where I focused on Java
        development. Since then, I've continued to build my skills and knowledge
        through self-study and my current studies in{" "}
        <strong>Computer Science at CEFET/RJ.</strong>
      </Paragraph>
      <Paragraph>
        I'm particularly interested in fullstack development because I enjoy
        being involved in all aspects of a project, from the front-end to the
        back-end. For me, it's all about finding the best solution to the
        problem at hand, regardless of the technology stack or business domain.
      </Paragraph>
      <Paragraph>
        Currently, I'm doing a intern-ship at{" "}
        <strong>
          <a href="https://portal.tcu.gov.br/inicio/">
            TCU ,Federal Court of Accounts
          </a>
        </strong>{" "}
        , in the Data Science area, where I work with <strong>Python,</strong>{" "}
        <strong>PowerBI,</strong> <strong>SQL,</strong> and other technologies.
        My goal is to transition into a software development role, which was my
        original career objective 8 years ago.
      </Paragraph>
      <Paragraph>
        In addition to my work at TCU, I've worked as an part-time fullstacks
        developer at{" "}
        <strong>
          <a href="https://www.linkedin.com/company/betabit-dev/">BetaBit</a>
        </strong>{" "}
        , where I work with <strong>React</strong> ,<strong>Python</strong> ,
        <strong>NestJS</strong> ,<strong>NodeJS</strong> ,
        <strong>Typescript</strong> ,<strong>PostgreSQL</strong> ,
        <strong>AWS</strong> , and other technologies.
      </Paragraph>
      <Paragraph>
        I'm a portuguese native speaker, and I'm fluent in English.
      </Paragraph>
      <Paragraph>
        If you want to get in touch with me, my preference is for{" "}
        <a href="https://www.linkedin.com/in/nicolas-vycas/">LinkedIn</a>.
      </Paragraph>
    </Page>
  );
};
