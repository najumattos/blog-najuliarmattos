import { Calendar, User } from 'lucide-react';
import './PostList.css';

function formatDate(dateValue) {
  return new Date(dateValue).toLocaleDateString('pt-BR');
}

export function PostList({ posts = [], onSelectPost }) {
  return (
    <ul className="post-list" aria-label="Lista de posts">
      {posts.map(post => (
        <li key={post.id} className="post-list-item">
          <button
            type="button"
            className="post-list-link"
            onClick={() => onSelectPost?.(post.id)}
            aria-label={`Abrir post ${post.titulo}`}
          >
            <div className="post-list-main">
              <h3 className="post-list-title">{post.titulo}</h3>
              <div className="post-list-meta">
                <span className="post-list-meta-item">
                  <Calendar size={14} aria-hidden="true" />
                  <span>{formatDate(post.dataPostagem)}</span>
                </span>
                <span className="post-list-meta-item">
                  <User size={14} aria-hidden="true" />
                  <span>{post.autor}</span>
                </span>
              </div>
            </div>
            <span className="post-list-arrow" aria-hidden="true">→</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
