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
        <h1>Hello World</h1>
            <table align="center">
        <tr>
            <td><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Sign%20of%20the%20Horns%20Medium-Light%20Skin%20Tone.png" alt="Sign of the Horns Medium-Light Skin Tone" width="25" height="25" /></td>            
            <td><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Woman%20Technologist%20Light%20Skin%20Tone.png" alt="Woman Technologist Light Skin Tone" width="25" height="25" /></td>
            <td><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Purple%20Heart.png" alt="Purple Heart" width="25" height="25" /></td>
        </tr>
    </table>
        <p>Artigos sobre desenvolvimento de software e boas práticas de programação</p>
      </div>

      <PostList posts={posts} onSelectPost={onSelectPost} />
    </div>
  );
}
