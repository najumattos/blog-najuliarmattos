import { useState } from 'react';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { BlogListView } from './BlogListView';
import { BlogPostDetailView } from './BlogPostDetailView';

/**
 * BlogContainer
 * Responsabilidade: Orquestrar a navegação e estado do blog
 * Isola a lógica de negócio das views apresentacionais
 */

export function BlogContainer() {
  const [showDetail, setShowDetail] = useState(false);
  const { 
    posts, 
    selectedPost, 
    markdownContent, 
    loading, 
    error, 
    selectPost, 
    deselectPost 
  } = useBlogPosts();

  const handleSelectPost = async (postId) => {
    await selectPost(postId);
    setShowDetail(true);
    // Scroll para o topo (útil em páginas longas)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setShowDetail(false);
    deselectPost();
  };

  return (
    <>
      {!showDetail ? (
        <BlogListView 
          posts={posts}
          loading={loading}
          error={error}
          onSelectPost={handleSelectPost}
        />
      ) : (
        <BlogPostDetailView 
          post={selectedPost}
          markdownContent={markdownContent}
          loading={loading}
          error={error}
          onBack={handleBackToList}
        />
      )}
    </>
  );
}
