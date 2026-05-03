import PostList from '../../components/PostList';
import './BlogListView.css';

/**
 * BlogListView
 * Responsabilidade: Exibir a lista de posts em cards
 * Recebe dados já processados e passa callbacks ao componente pai
 */

export function BlogListView({ 
  posts, 
  loading, 
  error, 
  onSelectPost 
}) {
  if (loading) {
    return (
      <div className="blog-list-container">
        <div className="loading">Carregando posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-list-container">
        <div className="error">❌ {error}</div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="blog-list-container">
        <div className="empty">Nenhum post disponível ainda.</div>
      </div>
    );
  }

  return (
    <div className="blog-list-container">
      <div className="blog-header">
        <h1>📝 Blog</h1>
        <p>Artigos sobre desenvolvimento, arquitetura e boas práticas</p>
      </div>

      <PostList posts={posts} onSelectPost={onSelectPost} />
    </div>
  );
}
