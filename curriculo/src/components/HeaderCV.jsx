import React from 'react'
import './Style.css';

const HeaderCV = ({ 
  profile = {
    img: 'avatar.jpg',
    nome: 'Ana Julia Reis de Mattos',
    titulo: 'Desenvolvedora Backend',
    descricao: 'Apaixonada por tecnologia e inovaçãoDesenvolvedora focada em arquitetura de sistemas e qualidade de código (SOLID, Testes Unitários). Responsável por pela API Connectamente com implementação de autenticação JWT, integração de Docker e fluxos de CI/CD via GitHub Actions. Experiência prática em React e Metodologias Ágeis (Kanban). Minha vivência anterior no comércio e como líder de turma me proporcionou soft skills diferenciadas em comunicação, liderança e resolução de problemas.'
  }, 
  redeSocial = {
    emailPrincipal: 'anareismattos.dev@gmail.com',
    emailSecundario: 'anajuliamattos02@gmail.com  ',
    github: 'github.com/anajulia',
    linkedin: 'linkedin.com/in/anajulia'
  }
}) => {
  return (
    <article className="profile-container">
      
      <section className='nome-foto'>
      <figure className="avatar-wrapper">
          <img
            src={`../../public/img/${profile.img}`}
            alt={`Foto de ${profile.nome}`}
            className="profile-image"
          />
        </figure>

        <div className="profile-info">
          <h1 className="profile-name">{profile.nome}</h1>
          <p className="profile-description">
            {profile.titulo}
          </p>
        </div>
        </section>


   
      <nav className="profile-nav">
          <a href={`mailto:${redeSocial.emailPrincipal}`} className="nav-link">
            {redeSocial.emailPrincipal}
          </a>
          <a href={redeSocial.emailSecundario} className="nav-link">
            {redeSocial.emailSecundario}
          </a>
          <a href={`https://${redeSocial.github}`} target="_blank" rel="noopener noreferrer" className="nav-link">
           {redeSocial.github}
          </a>
          <a href={`https://${redeSocial.linkedin}`} target="_blank" rel="noopener noreferrer" className="nav-link">
            {redeSocial.linkedin}
          </a>
        </nav>
        <p className="descricao">{profile.descricao}</p>
    </article>
  )
}

export default HeaderCV