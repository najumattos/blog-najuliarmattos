import { useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { BlogListView } from './BlogListView';
import { BlogPostDetailView } from './BlogPostDetailView';

/**
 * BlogContainer
 * Responsabilidade: Orquestrar a navegação e estado do blog
 * Isola a lógica de negócio das views apresentacionais
 */

export function BlogContainer() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const location = useLocation();
  const { 
    posts, 
    selectedPost, 
    markdownContent, 
    loading, 
    error, 
    selectPost, 
    deselectPost 
  } = useBlogPosts();

  // Quando o postId na URL muda, seleciona o post
  useEffect(() => {
    if (postId) {
      selectPost(postId);
    } else {
      deselectPost();
    }
  }, [postId, selectPost, deselectPost]);

  const handleSelectPost = (selectedPostId) => {
    navigate(`/post/${selectedPostId}`);
  };

  // Se está em "/" ou "/artigos" (sem postId), sempre mostra lista
  // mesmo que selectedPost ainda esteja em estado anterior
  const isListView = !postId || location.pathname === '/' || location.pathname === '/artigos';

  if (!isListView && selectedPost) {
    return (
      <BlogPostDetailView 
        post={selectedPost}
        content={markdownContent}
        loading={loading}
        error={error}
      />
    );
  }

  return (
    <BlogListView 
      posts={posts}
      loading={loading}
      error={error}
      onSelectPost={handleSelectPost}
    />
  );
}
