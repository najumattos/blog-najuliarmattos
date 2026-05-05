import BackButton from '../../components/BackButton';
import ReactMarkdown from 'react-markdown';
import { Calendar, User } from 'lucide-react';

export function BlogPostDetailView({ post, content, loading, error }) {
  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <BackButton />
        <p>Erro ao carregar o post: {error.message}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="error">
        <BackButton />
        <p>Post não encontrado</p>
      </div>
    );
  }

  return (
    <article className="blog-post-detail">
      <BackButton />
      <header className="post-header">
        <h1>{post.titulo}</h1>
        <div className="post-meta">
          <div className="meta-item">
            <Calendar size={16} />
            <span>{new Date(post.dataPostagem).toLocaleDateString('pt-BR')}</span>
          </div>
          <div className="meta-item">
            <User size={16} />
            <span>{post.autor}</span>
          </div>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="tags">
            {post.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </header>

      <div className="post-content">
        <ReactMarkdown
          components={{
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
