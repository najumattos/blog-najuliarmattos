# 💡 Exemplos de Uso e Extensão

## Exemplo 1: Adicionar um novo Post

### 1. Criar arquivo markdown (`public/posts/hooks-avancados.md`)

```markdown
# Hooks Avançados em React

Este é um artigo sobre hooks mais complexos...

## useReducer vs useState

...
```

### 2. Atualizar `public/posts.json`

```json
[
  // ... posts existentes ...
  {
    "id": "4",
    "titulo": "Hooks Avançados em React",
    "dataPostagem": "2024-05-25",
    "autor": "Seu Nome",
    "caminhoArquivoMd": "posts/hooks-avancados.md",
    "descricao": "Explore hooks como useReducer, useCallback e useRef",
    "tags": ["React", "Hooks", "Avançado"]
  }
]
```

Pronto! O post aparecerá automaticamente.

---

## Exemplo 2: Estender com Busca (Search)

### Criar novo hook (`src/hooks/useSearchPosts.js`)

```javascript
import { useState, useMemo } from 'react';
import { useBlogPosts } from './useBlogPosts';

export function useSearchPosts(searchTerm) {
  const { posts } = useBlogPosts();
  
  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return posts;
    
    const term = searchTerm.toLowerCase();
    return posts.filter(post =>
      post.titulo.toLowerCase().includes(term) ||
      post.descricao?.toLowerCase().includes(term) ||
      post.tags?.some(tag => tag.toLowerCase().includes(term))
    );
  }, [posts, searchTerm]);

  return filteredPosts;
}
```

### Usar no BlogContainer

```javascript
import { useSearchPosts } from '../../hooks/useSearchPosts';

export function BlogContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts = useSearchPosts(searchTerm);
  
  // ...
  
  return (
    <>
      <input
        type="text"
        placeholder="Buscar posts..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <BlogListView posts={filteredPosts} {...} />
    </>
  );
}
```

---

## Exemplo 3: Filtrar por Tags

### Criar novo hook (`src/hooks/useFilterByTag.js`)

```javascript
import { useState } from 'react';
import { useBlogPosts } from './useBlogPosts';

export function useFilterByTag(selectedTag) {
  const { posts } = useBlogPosts();
  
  if (!selectedTag) return posts;
  
  return posts.filter(post =>
    post.tags?.includes(selectedTag)
  );
}
```

### Criar componente de filtro

```javascript
function TagFilter({ tags, selectedTag, onSelectTag }) {
  return (
    <div className="tag-filter">
      <button
        onClick={() => onSelectTag(null)}
        className={!selectedTag ? 'active' : ''}
      >
        Todos
      </button>
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => onSelectTag(tag)}
          className={selectedTag === tag ? 'active' : ''}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
```

---

## Exemplo 4: Adicionar Tema Escuro

### Criar hook (`src/hooks/useDarkMode.js`)

```javascript
import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}
```

### Usar no App

```javascript
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      {/* ... resto do app */}
    </div>
  );
}
```

---

## Exemplo 5: Paginação

### Atualizar `useBlogPosts` com paginação

```javascript
const POSTS_PER_PAGE = 5;

export const useBlogPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // ... resto do hook ...
  
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return posts.slice(startIndex, endIndex);
  }, [posts, currentPage]);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  return {
    posts: paginatedPosts,
    currentPage,
    setCurrentPage,
    totalPages,
    // ...
  };
};
```

### Criar componente de paginação

```javascript
function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
```

---

## Exemplo 6: Relacionar Posts (Ver Também)

### Atualizar Post no JSON

```json
{
  "id": "1",
  "titulo": "...",
  "relatedPostIds": ["2", "3"],
  // ...
}
```

### Criar hook (`src/hooks/useRelatedPosts.js`)

```javascript
import { useBlogPosts } from './useBlogPosts';

export function useRelatedPosts(postId, limit = 3) {
  const { posts } = useBlogPosts();
  
  const currentPost = posts.find(p => p.id === postId);
  if (!currentPost) return [];

  return (currentPost.relatedPostIds || [])
    .map(relatedId => posts.find(p => p.id === relatedId))
    .filter(Boolean)
    .slice(0, limit);
}
```

### Usar no BlogPostDetailView

```javascript
import { useRelatedPosts } from '../../hooks/useRelatedPosts';

export function BlogPostDetailView({ post, /* ... */ }) {
  const relatedPosts = useRelatedPosts(post?.id);

  return (
    <div className="blog-detail-container">
      {/* ... conteúdo do post ... */}
      
      {relatedPosts.length > 0 && (
        <div className="related-posts">
          <h3>Ver Também</h3>
          {relatedPosts.map(post => (
            <a key={post.id} href={`#post-${post.id}`}>
              {post.titulo}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
```

---

## Exemplo 7: Integração com Google Analytics

### Criar hook (`src/hooks/useAnalytics.js`)

```javascript
import { useEffect } from 'react';

export function useAnalytics() {
  const trackPageView = (pageName) => {
    if (window.gtag) {
      window.gtag('pageview', {
        page_path: `/blog/${pageName}`,
      });
    }
  };

  const trackEvent = (eventName, eventData) => {
    if (window.gtag) {
      window.gtag('event', eventName, eventData);
    }
  };

  return { trackPageView, trackEvent };
}
```

### Usar no BlogContainer

```javascript
import { useAnalytics } from '../../hooks/useAnalytics';

export function BlogContainer() {
  const { trackPageView, trackEvent } = useAnalytics();
  
  const handleSelectPost = async (postId) => {
    const post = posts.find(p => p.id === postId);
    trackEvent('post_opened', { post_id: postId, title: post.titulo });
    trackPageView(post.titulo);
    
    // ... resto da lógica
  };
  
  // ...
}
```

---

## Checklist para Manter Clean Architecture

Ao adicionar novas features, certifique-se de:

- [ ] **Domain** - Novo tipo? Adicione em `/domain/`
- [ ] **Application** - Nova lógica? Crie um novo hook em `/hooks/`
- [ ] **Presentation** - Novo componente? Adicione em `/screens/Blog/`
- [ ] **Container** - Orquestre tudo em `BlogContainer`
- [ ] **Tests** - Teste o hook isoladamente
- [ ] **Documentation** - Documente a nova feature

---

## Performance Tips

1. **Memoize componentes** - Use `React.memo()` para evitar re-renders
2. **useMemo para cálculos** - Cache resultados caros
3. **useCallback para funções** - Cache funções passadas como props
4. **Lazy load componentes** - Use `React.lazy()` para views

---

## Troubleshooting

### Posts não aparecem?
- ✅ Verificar caminho em `posts.json`
- ✅ Verificar se arquivo `.md` existe
- ✅ Verificar console por erros

### Markdown não renderiza corretamente?
- ✅ Verificar sintaxe markdown válida
- ✅ Verificar tags suportadas por `react-markdown`

### Aplicação lenta?
- ✅ Usar React DevTools Profiler
- ✅ Verificar se há re-renders desnecessários
- ✅ Considerar lazy loading de posts

---

**Divirta-se expandindo seu blog!** 🚀
