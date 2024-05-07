import { Page, Paragraph, Ruler, SubHeader } from "../components/Commom";
export default () => {
  return (
    <>
      <Page>
        <section>
          <SubHeader>Professional Experience </SubHeader>
          <Paragraph>
            <strong>Undergraduate research</strong> at{" "}
            <a href="https://www.cefet-rj.br/">CEFET-RJ</a>
            <p>
              <a
                href="http://lattes.cnpq.br/0698360136410401"
                target="_blank"
                rel="noreferrer"
              >
                Lattes Curriculum{" "}
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://sol.sbc.org.br/index.php/webmedia_estendido/article/view/25677"
              >
                Publications at SBC-OpenLib
              </a>
            </p>
            <p>Nov 2022 - Current</p>
          </Paragraph>
          <Paragraph>
            <strong>Full Stack Internship</strong> at{" "}
            <a target="_blank" rel="noreferrer" href="https://www.ditavia.com/">
              Ditavia
            </a>
            <p>Dez 2023 - Apr 2024</p>
          </Paragraph>
          <Paragraph>
            <strong>Full Stack Developer</strong> at{" "}
            <a target="_blank" rel="noreferrer" href="https://betabit.com.br/">
              BetaBit
            </a>
            <p>Nov 2022 - Apr 2023</p>
          </Paragraph>
          <Paragraph>
            <strong>Data Science Internship</strong> at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://portal.tcu.gov.br/en_us/english/inside-tcu/the-court/"
            >
              Federal Court of Accounts (TCU)
            </a>
            <p>Aug 2021 - Aug 2023</p>
          </Paragraph>
          <Paragraph>
            <strong>Class assistant</strong> at{" "}
            <a target="_blank" rel="noreferrer" href="https://www.cefet-rj.br/">
              CEFET-RJ
            </a>
            <p>Mar 2021 - Aug 2022</p>
          </Paragraph>
        </section>
        <Ruler />
        <section>
          <SubHeader>Freelance Projects</SubHeader>
          <Paragraph>
            <a target="_blank" rel="noreferrer" href="https://hub.konzup.com/">
              <strong>Konzup Hub</strong>
            </a>
            <p>Aug 2022 - Aug 2023</p>
          </Paragraph>
        </section>
        <Ruler />
      </Page>
    </>
  );
};
