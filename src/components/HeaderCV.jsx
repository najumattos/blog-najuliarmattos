import React from 'react';
import { Mail, Globe, Code } from 'lucide-react';
import './HeaderCV.css';

const HeaderCV = ({
  profile = {
    img: 'profile.png',
    nome: 'Ana Julia',
    titulo: 'Desenvolvedora Backend',
    descricao: 'Desenvolvedora FOCADA em arquitetura de sistemas e qualidade de código, priorizando a implementação de Clean Code, SOLID e DRY para garantir sistemas sustentáveis. Tenho experiência prática no desenvolvimento de APIs robustas utilizando Thin Controllers, Result Pattern e Fluent API, focando em uma lógica de negócio clara e desacoplada. Minha trajetória anterior no comércio e liderança de turma consolidou soft skills em comunicação e resolução de problemas, que hoje aplico em ambientes ágeis (Kanban).'
  },
  redeSocial = {
    emailPrincipal: 'anareismattos.dev@gmail.com',
    emailSecundario: 'anajuliamattos02@gmail.com',
    github: 'github.com/anajulia',
    linkedin: 'linkedin.com/in/anajulia'
  }
}) => {
  return (
    <article className="profile-container">
      <div className="profile-header">
        <div className="profile-header-text">
          <h1 className="profile-greeting">Olá, eu sou a {profile.nome}</h1>
          <h2 className="profile-title">{profile.titulo}</h2>
        </div>

        <figure className="avatar-wrapper">
          <img
            src={`../../public/img/${profile.img}`}
            alt={`Foto de ${profile.nome}`}
            className="profile-image"
          />
        </figure>

         <div className="social-icons">
          <a
            href={`https://${redeSocial.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Globe size={24} />
          </a>
          <a
            href={`https://${redeSocial.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Code size={24} />
          </a>
          <a
            href={`mailto:${redeSocial.emailPrincipal}`}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="E-mail"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="profile-body">
        <p className="profile-description">{profile.descricao}</p>
      </div>

      <div className="profile-footer">
        <div className="profile-actions">
          <a
            href={`mailto:${redeSocial.emailPrincipal}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Entrar em contato
          </a>
          <a
            href={`https://${redeSocial.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Ver GitHub
          </a>
        </div>

       
      </div>
    </article>
  );
};

export default HeaderCV;
