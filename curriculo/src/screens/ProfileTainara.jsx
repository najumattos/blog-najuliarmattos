import "./Style.css";
import HeaderCV from "../components/HeaderCV";
import SectionCV from "../components/SectionCV";

export default function ProfileTainara() {
  const identificacao = {
    nome: "TAINARA VITORIA DOS SANTOS",
    titulo: "Estudante de Frontend | React ",
    img: "tainara.jpg",
    descricao: "25 anos | Barra Bonita-SP | Casada | (14)988060308",
  };
  const redesSociais = {
    emailPrincipal: "tainaravit.santos28@gmail.com",
    github: "github.com/tainara-vitsantos",
    linkedin: "linkedin.com/in/tainara-santos-946931358",
  };
  const objetivo =
    "Atualmente no 3º semestre de Técnico em Desenvolvimento de Sistemas, Cursando Desenvolvimento de Software Multiplataforma (2º semestre), Focada em aprender e amando cada novidade no mundo da tecnologia";
  const experiencias = [
    {
      titulo: "Snack Burguer (Proprietaria)",
      periodo: "2020 - atualmente",
      descricao:
        "bla bla bla",
    },
    {
      titulo: "Padaria Pão de Mel",
      periodo: "2018 - 2020",
      descricao:
        "bla bla bla",
    }
  ];
  const formacoes = [
    {
      titulo: "Tecnólogo em Desenv. de Software",
      periodo: "02/2025 - 07/2026",
      descricao: "FATEC Jahu",
    },
    {
      titulo: "Técnico em Desenv. de Sistemas",
      periodo: "02/2025 - 07/2026",
      descricao: "ETEC Comendador João Rays",
    },
    {
      titulo: "Técnico em Contabilidade",
      periodo: "02/2018 - 12/2019",
      descricao: "ETEC Comendador João Rays",
    },
  ];
  const estudos = [
    {
      titulo: "FDEVS | Frontend",
      periodo: "2025",
      descricao: "Programa de Treinamento FDEVS da Upper Consultoria",
    }
  ];

  return (
    <>
      <header>
        <HeaderCV profile={identificacao} redeSocial={redesSociais}></HeaderCV>
      </header>
      <main>

        <section>
          <div className="title">
            <h2 className="objective-title">OBJETIVO</h2>
          </div>
          <p className="objective-text">{objetivo}</p>
        </section>

        <section>
          <div className="title">
          <h2 className="objective-title">EXPERIÊNCIA</h2>
          </div>
          <SectionCV itens={experiencias} />
        </section>

        <section className="formacao-estudos">

          <section>
            <div className="title">
            <h2 className="objective-title">FORMAÇÃO</h2>
            </div>
            <SectionCV itens={formacoes} />
          </section>

          <section>
            <div className="title">
            <h2 className="objective-title">ESTUDOS COMPLEMENTARES</h2>
            </div>
            <SectionCV itens={estudos} />
          </section>
        </section>
      </main>
    </>
  );
}
