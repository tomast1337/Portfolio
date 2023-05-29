import * as React from "react";
import {
    Card,
    CardContainer,
    CardLeft,
    CardRight,
    CustomImage,
    Header,
    Page,
    Paragraph,
} from "../components/Commom";

interface shoutOut {
  nome: string;
  link: string;
  mensagem: string;
  foto: string;
}

const ShoutOutsPage = () => {
  const shoutOuts: shoutOut[] = [
    {
      nome: "Davi Campanaro",
      link: "https://github.com/DaveTheCamper",
      mensagem: "",
      foto: "https://avatars.githubusercontent.com/u/44680026?v=4",
    },
    {
      nome: "Cristhiane da Cruz",
      link: "https://github.com/barroscruzc",
      mensagem: "",
      foto: "https://avatars.githubusercontent.com/u/93226440?v=4",
    },
    {
      nome: "Bernardo Costa",
      link: "https://github.com/Bentroen",
      mensagem: "",
      foto: "https://avatars.githubusercontent.com/u/29354120?v=4",
    },
    {
      nome: "Diego de Paula",
      link: "https://github.com/DiegoPaula",
      mensagem: "",
      foto: "https://avatars.githubusercontent.com/u/77380810?v=4",
    },
    {
      nome: "Felipe Nieto",
      link: "https://github.com/NietoCurcio",
      mensagem: "",
      foto: "https://avatars.githubusercontent.com/u/51931239?v=4",
    },
    {
      nome: "Nadson Nascimento",
      link: "https://www.linkedin.com/in/nadson-cardoso/",
      mensagem: "",
      foto: "https://media.licdn.com/dms/image/C4E03AQFq0VFTp7srDA/profile-displayphoto-shrink_200_200/0/1655175845655?e=1677715200&v=beta&t=c3_hPaBOsorLNSWTKXqRpCRGW01BclO60aUynuE7sfw",
    },
    {
      nome: "Thiago André",
      link: "https://www.linkedin.com/in/thiago1590/",
      mensagem: "",
      foto: "https://media.licdn.com/dms/image/C4D03AQFZ3NqnBjv6mw/profile-displayphoto-shrink_800_800/0/1609030711153?e=1677715200&v=beta&t=mOk0FhbEcF0WxL9X7fdW_xMnce2XG5149dDs0AJwqnQ",
    },
  ];

  React.useEffect(() => {
    document.title = "ShoutOuts - Nicolas Vycas Nery";
  });
  return (
    <Page>
      <Header>Shout-outs</Header>
      <Paragraph>
        Pagina dedicada a programadores e profissionais que conheci durante os
        meus anos de estudo e aprecio o trabalho deles.
      </Paragraph>
      <CardContainer>
        {shoutOuts
          .sort(() => Math.random() - 0.5)
          .map((shoutOut, index) => {
            return (
              <Card key={index}>
                <CardLeft>
                  <CustomImage style={{
                    width: "200px",
                    height: "auto",
                    display: "inline",
                    margin: "0 auto",
                  }} src={shoutOut.foto} alt={shoutOut.nome} />
                </CardLeft>
                <CardRight>
                  <Paragraph>{shoutOut.nome}</Paragraph>
                  {shoutOut.mensagem && (
                    <Paragraph>{shoutOut.mensagem}</Paragraph>
                  )}
                  <Paragraph>
                    <a href={shoutOut.link}>Link</a>
                  </Paragraph>
                </CardRight>
              </Card>
            );
          })}
      </CardContainer>
    </Page>
  );
};

export default ShoutOutsPage;
