# Diagrama da Arquitetura do Blog

```mermaid
graph TB
    subgraph "Presentation Layer"
        AC["BlogContainer<br/>(Orchestration)"]
        LV["BlogListView<br/>(Cards View)"]
        DV["BlogPostDetailView<br/>(Detail View)"]
    end

    subgraph "Application Layer"
        Hook["useBlogPosts<br/>(Data Logic)"]
    end

    subgraph "Domain Layer"
        Entity["Post Entity<br/>(Types)"]
    end

    subgraph "Infrastructure"
        JSON["📄 posts.json<br/>(Data Source)"]
        MD["📝 posts/*.md<br/>(Content)"]
    end

    AC -->|toggles views| LV
    AC -->|toggles views| DV
    AC -->|fetches data| Hook
    
    Hook -->|implements| Entity
    Hook -->|fetch| JSON
    Hook -->|fetch| MD
    
    LV -->|displays| Hook
    DV -->|displays| Hook
    
    LV -->|click card| AC
    DV -->|click back| AC

    style AC fill:#e1f5ff
    style LV fill:#f3e5f5
    style DV fill:#f3e5f5
    style Hook fill:#fff3e0
    style Entity fill:#e8f5e9
    style JSON fill:#fce4ec
    style MD fill:#fce4ec
```

## Fluxo de Dados

```
User opens Blog
    ↓
BlogContainer mounts
    ↓
useBlogPosts fetches /posts.json
    ↓
Posts sorted by date (descending)
    ↓
BlogListView renders cards
    ↓
User clicks "Ler Artigo"
    ↓
selectPost(postId) called
    ↓
useBlogPosts fetches /posts/{id}.md
    ↓
BlogPostDetailView renders markdown
    ↓
User clicks "Voltar"
    ↓
BlogListView renders again
```

## Responsabilidades por Camada

### 🎨 Presentation Layer
- **BlogContainer** - Controla navegação entre views
- **BlogListView** - Exibe lista de posts em cards
- **BlogPostDetailView** - Exibe artigo completo

### 📦 Application Layer  
- **useBlogPosts** - Fetch e gestão de dados
  - Busca posts.json
  - Busca arquivos markdown
  - Ordena por data
  - Trata erros

### 📚 Domain Layer
- **Post** - Define estrutura de dados
  - TypeScript interfaces
  - Validações de tipo

### 🗄️ Infrastructure  
- **posts.json** - Banco de dados local
- **posts/*.md** - Conteúdo dos artigos
