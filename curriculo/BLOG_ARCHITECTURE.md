# 📚 Documentação da Arquitetura do Blog

## 📋 Visão Geral

Este projeto implementa um **blog pessoal em Clean Architecture** para rodar em GitHub Pages sem backend. A estrutura segue princípios de **SRP (Single Responsibility Principle)** e **MVC Simplificado**.

---

## 🏗️ Estrutura de Pastas

```
src/
├── domain/                 # Camada de Domínio
│   └── Post.ts            # Entidades e interfaces
│
├── hooks/                 # Camada de Aplicação
│   └── useBlogPosts.js    # Lógica de busca de dados
│
├── screens/
│   ├── ProfileAna.jsx
│   ├── ProfileTainara.jsx
│   └── Blog/              # Blog Feature
│       ├── BlogContainer.jsx       # Orquestração
│       ├── BlogListView.jsx        # View de Lista
│       ├── BlogPostDetailView.jsx  # View de Detalhes
│       ├── BlogListView.css        # Estilos
│       └── BlogPostDetailView.css  # Estilos
│
└── App.jsx

public/
├── posts.json             # "Banco de dados" dos posts
└── posts/                 # Conteúdo markdown
    ├── clean-architecture-react.md
    ├── custom-hooks.md
    └── srp-in-practice.md
```

---

## 🔄 Fluxo de Dados

```
BlogContainer
    ↓
useBlogPosts (Hook)
    ↓
fetch('/posts.json')
    ↓
Post Entity (Domain)
    ↓
BlogListView (Apresentação)
    ↓
Usuário clica em "Ler Artigo"
    ↓
selectPost(postId)
    ↓
fetch('/posts/{arquivo}.md')
    ↓
BlogPostDetailView (Apresentação)
```

---

## 📦 Camadas da Arquitetura

### 1. **Domain Layer** (`/domain`)
Define as **entidades** e **tipos** da aplicação.

**Arquivo:** `Post.ts`
```typescript
export interface Post {
  id: string;
  titulo: string;
  dataPostagem: string;
  autor: string;
  caminhoArquivoMd: string;
  descricao?: string;
  tags?: string[];
}
```

**Responsabilidade:** Definir a estrutura de dados.

---

### 2. **Application Layer** (`/hooks`)
Contém a **lógica de negócio** isolada de componentes.

**Arquivo:** `useBlogPosts.js`
```javascript
export const useBlogPosts = () => {
  // Buscar posts.json
  // Ordenar por data
  // Buscar conteúdo markdown
  // Gerenciar loading e erros
};
```

**Responsabilidade:** 
- Fetch de dados
- Transformações de dados
- Gerenciamento de estado
- Tratamento de erros

**Vantagens:**
- Testável
- Reutilizável
- Independente de UI
- Fácil de debugar

---

### 3. **Presentation Layer** (`/screens/Blog`)

#### **3.1 BlogContainer** (Orchestration)
Orquestra a navegação entre views.

```javascript
export function BlogContainer() {
  const [showDetail, setShowDetail] = useState(false);
  const { posts, selectedPost, markdownContent, ... } = useBlogPosts();
  
  // Gerencia navegação
}
```

**Responsabilidade:** Controlar fluxo de navegação.

---

#### **3.2 BlogListView** (Presentation)
Exibe cards de posts.

```javascript
export function BlogListView({ posts, loading, error, onSelectPost }) {
  // Apenas apresentação
  // Sem lógica de negócio
}
```

**Props:**
- `posts`: Array de posts
- `loading`: boolean
- `error`: string ou null
- `onSelectPost`: callback

---

#### **3.3 BlogPostDetailView** (Presentation)
Exibe o artigo completo em markdown.

```javascript
export function BlogPostDetailView({ 
  post, 
  markdownContent, 
  loading, 
  error, 
  onBack 
})
```

**Props:**
- `post`: Post selecionado
- `markdownContent`: Conteúdo markdown
- `loading`: boolean
- `error`: string ou null
- `onBack`: callback

---

## 🔌 Como Funciona

### Inicialização

1. **App.jsx** renderiza `<BlogContainer />`
2. **BlogContainer** executa `useBlogPosts()`
3. **useBlogPosts** faz fetch de `/posts.json`
4. Posts são ordenados por data (mais recentes primeiro)
5. **BlogListView** exibe cards

### Ao Clicar em um Post

1. Usuário clica em "Ler Artigo"
2. `selectPost(postId)` é chamado
3. **useBlogPosts** busca o arquivo `.md`
4. **BlogPostDetailView** exibe o conteúdo
5. **react-markdown** renderiza HTML

### Ao Voltar

1. Usuário clica em "Voltar"
2. `deselectPost()` é chamado
3. **BlogListView** é exibida novamente

---

## 📝 Estrutura de Dados: posts.json

```json
[
  {
    "id": "1",
    "titulo": "Título do Post",
    "dataPostagem": "2024-05-01",
    "autor": "Seu Nome",
    "caminhoArquivoMd": "posts/arquivo.md",
    "descricao": "Preview do post",
    "tags": ["Tag1", "Tag2"]
  }
]
```

**Campos:**
- `id`: Identificador único
- `titulo`: Título do artigo
- `dataPostagem`: Data (formato: YYYY-MM-DD)
- `autor`: Nome do autor
- `caminhoArquivoMd`: Caminho relativo ao arquivo markdown
- `descricao`: Preview (opcional)
- `tags`: Array de tags (opcional)

---

## 📄 Estrutura de Arquivo Markdown

Os arquivos markdown devem estar em `/public/posts/`:

```markdown
# Título do Artigo

Conteúdo do artigo em markdown.

## Seção 1

Mais conteúdo...

### Subseção

- Lista
- De
- Itens

```code
Código destacado
```

---

## 🎨 Estilos

Todos os estilos estão em `/screens/Blog/BlogListView.css`:

- Grid responsivo
- Cards com efeitos hover
- Markdown bem formatado
- Suporte a mobile

---

## 🧪 Como Adicionar Novos Posts

### 1. Criar arquivo Markdown

Crie `/public/posts/meu-artigo.md`:
```markdown
# Meu Novo Artigo

Conteúdo aqui...
```

### 2. Adicionar ao posts.json

Adicione entrada em `/public/posts.json`:
```json
{
  "id": "4",
  "titulo": "Meu Novo Artigo",
  "dataPostagem": "2024-05-15",
  "autor": "Seu Nome",
  "caminhoArquivoMd": "posts/meu-artigo.md",
  "descricao": "Descrição breve",
  "tags": ["React", "Novo"]
}
```

### 3. Pronto!

O post aparecerá automaticamente na listagem.

---

## 🧪 Testando Localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm preview
```

---

## 🚀 Deploy no GitHub Pages

1. Configure `vite.config.js` com base em seu repositório
2. Execute `npm run build`
3. Commit e push os arquivos de build

---

## 💡 Princípios Aplicados

### ✅ Clean Architecture
- Camadas bem definidas
- Independência entre camadas
- Fácil de testar

### ✅ SRP (Single Responsibility Principle)
- Cada componente tem uma responsabilidade
- Cada hook foca em uma tarefa
- Fácil de manter e evoluir

### ✅ DRY (Don't Repeat Yourself)
- Lógica reutilizável em hooks
- Componentes apresentacionais reutilizáveis

### ✅ Separation of Concerns
- Lógica separada de apresentação
- Data fetching isolado
- Navegação centralizada

---

## 🔮 Próximas Melhorias Sugeridas

1. **Paginação** - Para muitos posts
2. **Filtro por Tags** - Categorizar posts
3. **Busca** - Procurar posts
4. **Tema Escuro** - useTheme hook
5. **Comentários** - Integração com serviço externo
6. **RSS Feed** - Para subscribes
7. **Analytics** - Rastrear leituras

---

## 📞 Suporte

Para dúvidas sobre a arquitetura ou como estender o blog, revise:
- Este documento
- Comentários no código
- Artigos no blog (especialmente "Clean Architecture em React")

---

**Desenvolvido com ❤️ seguindo princípios de Clean Architecture**
