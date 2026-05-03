# Single Responsibility Principle (SRP) na Prática

O SRP (Princípio da Responsabilidade Única) é um dos princípios SOLID mais importantes para escrever código de qualidade. Vamos explorar como aplicá-lo em React.

## O que é SRP?

Uma classe (ou componente) deve ter uma, e apenas uma, razão para mudar. Em outras palavras: cada componente deve ter apenas uma responsabilidade.

## Aplicando SRP em React

### Exemplo 1: Componente Sem SRP

```javascript
// ❌ RUIM - Componente com múltiplas responsabilidades
function BlogPost() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('pt-BR');
  
  useEffect(() => {
    // Buscar posts
    fetch('/api/posts').then(/* ... */);
    // Buscar comentários
    fetch('/api/comments').then(/* ... */);
    // Carregar preferências
    loadPreferences();
  }, []);

  return (
    <div className={theme}>
      {/* Renderizar lista */}
      {/* Renderizar seleção */}
      {/* Renderizar comentários */}
      {/* Renderizar configurações */}
    </div>
  );
}
```

**Problemas:**
- Múltiplas razões para mudar
- Difícil de testar
- Difícil de manter
- Difícil de reutilizar

### Exemplo 2: Aplicando SRP

```javascript
// ✅ BOM - Separação de responsabilidades

// 1. Hook para dados de posts
export function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/api/posts').then(/* ... */);
  }, []);
  
  return { posts, loading };
}

// 2. Hook para dados de comentários
export function useComments(postId) {
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    if (postId) {
      fetch(`/api/comments/${postId}`).then(/* ... */);
    }
  }, [postId]);
  
  return { comments };
}

// 3. Hook para preferências do usuário
export function useUserPreferences() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('pt-BR');
  
  useEffect(() => {
    loadPreferences();
  }, []);
  
  return { theme, setTheme, language, setLanguage };
}

// 4. Componente de apresentação de post
function PostCard({ post, onSelect }) {
  return (
    <article onClick={() => onSelect(post.id)}>
      <h3>{post.titulo}</h3>
      <p>{post.descricao}</p>
    </article>
  );
}

// 5. Componente de lista
function PostsList({ posts, onSelectPost }) {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <PostCard 
          key={post.id} 
          post={post} 
          onSelect={onSelectPost} 
        />
      ))}
    </div>
  );
}

// 6. Componente de comentários
function CommentsList({ comments }) {
  return (
    <div className="comments">
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <p>{comment.texto}</p>
        </div>
      ))}
    </div>
  );
}

// 7. Container que orquestra tudo
function BlogContainer() {
  const { posts, loading: postsLoading } = useBlogPosts();
  const [selectedPostId, setSelectedPostId] = useState(null);
  const { comments } = useComments(selectedPostId);
  const { theme } = useUserPreferences();

  return (
    <div className={`blog-container ${theme}`}>
      <PostsList posts={posts} onSelectPost={setSelectedPostId} />
      {selectedPostId && <CommentsList comments={comments} />}
    </div>
  );
}
```

## Benefícios do SRP

### 1. Testabilidade

```javascript
describe('PostCard', () => {
  it('should call onSelect when clicked', () => {
    const onSelect = jest.fn();
    const post = { id: '1', titulo: 'Test' };
    
    render(<PostCard post={post} onSelect={onSelect} />);
    
    fireEvent.click(screen.getByRole('article'));
    expect(onSelect).toHaveBeenCalledWith('1');
  });
});

describe('useBlogPosts', () => {
  it('should fetch posts on mount', async () => {
    const { result } = renderHook(() => useBlogPosts());
    
    await waitFor(() => {
      expect(result.current.posts).toHaveLength(3);
    });
  });
});
```

### 2. Manutenibilidade

Cada peça é pequena e focada. Mudanças em uma responsabilidade não afetam as outras.

```javascript
// Mudar visual de PostCard não afeta useBlogPosts
// Mudar como dados são buscados não afeta components
```

### 3. Reusabilidade

```javascript
// Posso usar PostsList em múltiplos lugares
function HomePageBlog() {
  const { posts } = useBlogPosts();
  return <PostsList posts={posts} onSelectPost={goToDetail} />;
}

function SidebarRecentPosts() {
  const { posts } = useBlogPosts();
  return <PostsList posts={posts.slice(0, 3)} onSelectPost={goToDetail} />;
}
```

### 4. Escalabilidade

Adicionar novas features não afeta código existente.

```javascript
// Nova feature: filtrar por categoria
function useFilteredPosts(category) {
  const { posts } = useBlogPosts();
  return posts.filter(p => p.category === category);
}

// Não precisa mudar PostsList, PostCard, ou outra coisa
```

## Checklist: Seu Componente Segue SRP?

- [ ] Tem um único propósito claro?
- [ ] Pode ser descrito em uma frase simples?
- [ ] É fácil de testar?
- [ ] Tem poucas dependências?
- [ ] Pode ser reutilizado em diferentes contextos?
- [ ] Uma mudança de requisito afeta apenas este componente?

Se respondeu "não" para algum deles, provavelmente viola o SRP.

## Conclusão

O SRP não é apenas um princípio teórico. É prático e impacta diretamente na qualidade do seu código:

- **Componentes menores** → Mais fáceis de entender
- **Menos dependências** → Menos bugs
- **Reutilizável** → Menos código repetido
- **Testável** → Mais confiança

Comece aplicando SRP em novos componentes e refatore gradualmente os antigos.

---

**Tags:** Architecture, SOLID, React
