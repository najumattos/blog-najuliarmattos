import './Mural.css';
import { useMuralMessages } from '../hooks/useMuralMessages';

function formatDate(value) {
  if (!value) return '';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString('pt-BR');
}

export default function Mural({ messages }) {
  const { messages: muralMessages, loading, error } = useMuralMessages();
  const list = Array.isArray(messages) ? messages : muralMessages;

  if (loading) {
    return <div className="mural-state">Carregando mural...</div>;
  }

  if (error) {
    return <div className="mural-state">Erro ao carregar mural: {error}</div>;
  }

  return (
    <section className="mural" aria-label="Mural de mensagens">
      <div className="mural-list">
        {list.map((message, index) => (
          <article key={`${message.autor}-${message.data}-${index}`} className="message-card">
            <header className="message-card-header">
              <div className="message-author-line">
                <span className="message-author">{message.autor}</span>
                {message.papel ? <em className="message-role">{message.papel}</em> : null}
              </div>
              <time className="message-date" dateTime={message.data}>
                {formatDate(message.data)}
              </time>
            </header>

            <p className="message-text">{message.mensagem}</p>
          </article>
        ))}
      </div>
    </section>
  );
}