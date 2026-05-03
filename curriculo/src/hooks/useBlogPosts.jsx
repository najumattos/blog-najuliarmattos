import { useState, useEffect, useCallback } from 'react';

/**
 * Hook customizado: useBlogPosts
 * Responsabilidade: Gerenciar toda a lógica de busca de posts e conteúdo markdown
 * 
 * Benefícios:
 * - Isola a lógica de data fetching dos componentes visuais
 * - Reutilizável em múltiplos componentes
 * - Testável de forma independente
 */

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Buscar lista de posts do JSON
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/posts.json');
        if (!response.ok) throw new Error('Erro ao carregar posts');
        
        const data = await response.json();
        // Ordenar por data decrescente (mais recentes primeiro)
        const sortedPosts = data.sort((a, b) => 
          new Date(b.dataPostagem).getTime() - new Date(a.dataPostagem).getTime()
        );
        
        setPosts(sortedPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        console.error('Erro ao buscar posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Buscar conteúdo markdown do post selecionado
  const selectPost = useCallback(async (postId) => {
    try {
      setLoading(true);
      setError(null);

      const post = posts.find(p => p.id === postId);
      if (!post) throw new Error('Post não encontrado');

      // Buscar arquivo markdown
      const response = await fetch(`/${post.caminhoArquivoMd}`);
      if (!response.ok) throw new Error('Erro ao carregar conteúdo do post');

      const markdown = await response.text();
      setSelectedPost(post);
      setMarkdownContent(markdown);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      console.error('Erro ao buscar post:', err);
    } finally {
      setLoading(false);
    }
  }, [posts]);

  const deselectPost = () => {
    setSelectedPost(null);
    setMarkdownContent('');
  };

  return {
    posts,
    selectedPost,
    markdownContent,
    loading,
    error,
    selectPost,
    deselectPost,
  };
};
