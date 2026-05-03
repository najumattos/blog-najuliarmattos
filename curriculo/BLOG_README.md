# 📚 Blog - Guia Rápido

Bem-vindo ao seu blog pessoal! Esta é a implementação profissional de um blog que roda em **GitHub Pages** sem backend.

## 🚀 Quick Start

### 1. Instalar Dependências

```bash
cd curriculo
npm install
```

### 2. Rodar Localmente

```bash
npm run dev
```

Acesse `http://localhost:5173`

### 3. Ver o Blog

Procure a seção "Blog" na página. Você verá 3 posts de exemplo.

---

## 📝 Como Adicionar Seus Posts

### Passo 1: Criar o Arquivo Markdown

Crie um novo arquivo em `public/posts/seu-post.md`:

```markdown
# Título do Seu Post

Seu conteúdo em markdown aqui.

## Seção

Mais conteúdo...
```

### Passo 2: Atualizar posts.json

Adicione entrada em `public/posts.json`:

```json
{
  "id": "5",
  "titulo": "Seu Novo Post",
  "dataPostagem": "2024-05-20",
  "autor": "Seu Nome",
  "caminhoArquivoMd": "posts/seu-post.md",
  "descricao": "Breve descrição",
  "tags": ["React", "Tutorial"]
}
```

### Pronto! 🎉

Seu post aparecerá automaticamente na listagem.

---

## 🏗️ Estrutura do Projeto

```
src/
├── domain/Post.ts              # Modelo de dados
├── hooks/useBlogPosts.js       # Lógica de dados
└── screens/Blog/
    ├── BlogContainer.jsx       # Controlador
    ├── BlogListView.jsx        # Lista de posts
    └── BlogPostDetailView.jsx  # Detalhe do post

public/
├── posts.json                  # "Banco de dados"
└── posts/                      # Seus artigos markdown
```

---

## 🔧 Tecnologias

- **React 19** - Framework
- **Vite** - Build tool
- **react-markdown** - Renderização de markdown
- **lucide-react** - Ícones

---

## 📖 Documentação Completa

Para entender a arquitetura profissional, leia [BLOG_ARCHITECTURE.md](./BLOG_ARCHITECTURE.md)

---

## 💡 Dicas

### Formatação de Datas

Use o formato `YYYY-MM-DD` em `dataPostagem`:
```json
"dataPostagem": "2024-05-01"
```

### Escrevendo em Markdown

```markdown
# Heading 1
## Heading 2
### Heading 3

**negrito** e *itálico*

- Lista
- De
- Itens

1. Numerada
2. Lista

[Link](https://exemplo.com)

```código aqui```
```

### Meta Tags

Use tags relevantes para categorizar:
```json
"tags": ["React", "Architecture", "Tutorial"]
```

---

## 🚀 Build para Produção

```bash
npm run build
```

Os arquivos ficarão em `dist/`

---

## 📚 Saiba Mais

- [Clean Architecture em React](./src/screens/Blog) - Artigo no blog
- [Documentação Detalhada](./BLOG_ARCHITECTURE.md)
- [React Markdown Docs](https://github.com/remarkjs/react-markdown)

---

**Happy blogging! 📝**
