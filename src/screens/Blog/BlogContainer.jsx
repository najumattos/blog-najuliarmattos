import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

  if (postId && selectedPost) {
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
