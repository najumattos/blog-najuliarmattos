import React, { useState } from 'react';
import './EntreEmContato.css';

export default function EntreEmContato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com API ou serviço de e-mail
    console.log('Contato enviado:', formData);
    // limpar formulário após envio
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-grid">
        <div className="left-col">
          <label htmlFor="nome">Nome
            <input
              id="nome"
              name="nome"
              type="text"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="email">E-mail
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="telefone">Telefone/WhatsApp
            <input
              id="telefone"
              name="telefone"
              type="tel"
              value={formData.telefone}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="right-col">
          <label htmlFor="mensagem">Mensagem
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-btn">Enviar</button>
      </div>
    </form>
  );
}
