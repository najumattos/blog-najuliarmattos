import React from 'react'
import './Style.css';

const HeaderCV = ({ profile, redeSocial }) => {
  return (
    <article className="profile-container">
        <header className="foto-titulo">
      <figure className="avatar-wrapper">
          <img
            src={profile.img}
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
<p>{profile.descricao}</p>

      </header>
      <nav className="profile-nav">
          <a href={redeSocial.emailPrincipal} className="nav-link">
            {redeSocial.emailPrincipal}
          </a>
          <a href={redeSocial.github} target="_blank" rel="noopener noreferrer" className="nav-link">
           {redeSocial.github}
          </a>
          <a href={redeSocial.linkedin} target="_blank" rel="noopener noreferrer" className="nav-link">
            {redeSocial.linkedin}
          </a>
        </nav>
    </article>
  )
}

export default HeaderCV