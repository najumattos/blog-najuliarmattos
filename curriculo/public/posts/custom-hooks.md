# Hooks Customizados: Reutilizando Lógica em React

Os hooks revolucionaram a forma como escrevemos React. Mas além dos hooks built-in, você pode criar seus próprios hooks customizados para encapsular lógica reutilizável.

## Por que criar Hooks Customizados?

Hooks customizados permitem:

- **Extrair lógica de componentes** - Separação de concerns
- **Reutilizar lógica entre componentes** - DRY (Don't Repeat Yourself)
- **Tornar testes mais fáceis** - Testar lógica isoladamente
- **Compartilhar padrões** - Consistência no projeto

## Anatomia de um Hook Customizado

Um hook customizado é uma função JavaScript que:

1. Usa outros hooks (built-in ou customizados)
2. Pode retornar valores ou funções
3. Seu nome começa com `use`

```javascript
export function useCustomHook() {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    // Efeito colateral
  }, []);
  
  return { state, setState };
}
```

## Exemplo: useBlogPosts

Nosso projeto utiliza um hook customizado para gerenciar a lógica de busca de posts:

```javascript
export const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/posts.json');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};
```

## Benefícios Práticos

### 1. Componente Simplificado

**Antes (sem hook customizado):**
```javascript
function BlogContainer() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // ... lógica de fetch
  }, []);
  
  // ... resto do componente
}
```

**Depois (com hook customizado):**
```javascript
function BlogContainer() {
  const { posts, loading, error } = useBlogPosts();
  
  // ... componente focado em lógica de negócio
}
```

### 2. Reutilização

Use o mesmo hook em múltiplos componentes:

```javascript
function BlogListPage() {
  const { posts } = useBlogPosts();
  return <BlogList posts={posts} />;
}

function BlogSidebar() {
  const { posts } = useBlogPosts();
  return <RecentPosts posts={posts} />;
}
```

### 3. Testabilidade

Teste a lógica independentemente:

```javascript
describe('useBlogPosts', () => {
  it('should fetch posts on mount', async () => {
    const { result } = renderHook(() => useBlogPosts());
    
    await waitFor(() => {
      expect(result.current.posts.length).toBeGreaterThan(0);
    });
  });
});
```

## Padrões Úteis

### 1. Hook com Callback

```javascript
function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    setStatus('pending');
    try {
      const response = await asyncFunction();
      setData(response);
      setStatus('success');
    } catch (error) {
      setError(error);
      setStatus('error');
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, data, error };
}
```

### 2. Hook com Debounce

```javascript
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
```

### 3. Hook com LocalStorage

```javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```

## Regras de Ouro

1. **Sempre comece com `use`** - Permite que o React identifique como hook
2. **Chame apenas no nível superior** - Não chame dentro de loops ou condições
3. **Retorne dados ou funções consistentes** - A API do hook deve ser previsível
4. **Documente bem** - Escreva comentários explicando o hook

## Conclusão

Hooks customizados são ferramentas poderosas para criar código React mais limpo, testável e reutilizável. Comece criando pequenos hooks para tarefas específicas e evolua para padrões mais complexos.

---

**Tags:** React, Hooks, JavaScript
