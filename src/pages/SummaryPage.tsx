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
        src="/imgs/eu.png"
        alt="Nicolas Vycas"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5em",
        }}
      >
        <a
          href="https://github.com/tomast1337"
          target="_blank"
          rel="noreferrer"
          style={{ margin: "0em 1em" }}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nicolas-vycas/"
          target="_blank"
          rel="noreferrer"
          style={{ margin: "0em 1em" }}
        >
          LinkedIn
        </a>
        <a href="mailto:vycasnicolas@gmail.com" style={{ margin: "0em 1em" }}>
          Email
        </a>
        <a
          href="https://docs.google.com/document/d/1JFXhvYoC9ycxctyJw9OORqxSMwhZo3KY72t37RVFCI0/edit"
          target="_blank"
          rel="noreferrer"
          style={{ margin: "0em 1em" }}
        >
          Resume
        </a>
      </div>

      <Paragraph>
        Full Stack Developer with extensive experience in software development,
        academic research, and data science. Fluent in Portuguese and English,
        proficient in a wide range of technologies including Java, JavaScript,
        TypeScript, C++, C#, Python, React, Next.js, NestJS, and database tools
        like PostgreSQL and MongoDB.
      </Paragraph>
      <Paragraph>Professional Highlights:</Paragraph>
      <Paragraph>
        Academic Research: Contributed to the creation of a game for visually
        impaired individuals, applying advanced map optimization techniques. The
        work was presented at WebMedia 2023, securing second place in the best
        undergraduate research paper category.
      </Paragraph>
      <Paragraph>
        Professional Experience: Worked as a full-stack developer on various
        projects using modern technologies such as React.js, Redux, Solidity,
        and MongoDB. Gained experience at companies like Ditavia and BetaBit
        Dev, and interned at the Federal Court of Accounts (TCU), excelling in
        data mining and structured data management.
      </Paragraph>
      <Paragraph>
        Freelance Projects: Developed Konzup Hub, an innovative system for
        tracking travel trends and assisting content creators, utilizing
        Next.js, Tailwind CSS, Python for microservices, and MongoDB.
      </Paragraph>
      <Paragraph>
        Education: Pursuing a Bachelor of Science in Computer Science at
        CEFET/RJ, with a technical certificate in Java Full Stack Development
        from FAETEC.
      </Paragraph>

      <Paragraph>
        If you want to get in touch with me, my preference is through my{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nicolas-vycas/"
        >
          LinkedIn
        </a>{" "}
        otherwise you can send me an email at{" "}
        <a href="mailto:vycasnicolas@gmail.com">vycasnicolas@gmail.com</a>.
      </Paragraph>

      <Paragraph>
        {" "}
        I'm always open to new opportunities and challenges.
      </Paragraph>
    </Page>
  );
};
