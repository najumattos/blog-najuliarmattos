# 📋 Cheat Sheet - Blog Clean Architecture

Guia de referência rápido para seu blog!

---

## 🚀 Commands

| Comando | O que faz |
|---------|-----------|
| `npm install` | Instala dependências |
| `npm run dev` | Roda em desenvolvimento |
| `npm run build` | Build para produção |
| `npm run preview` | Visualiza build |
| `npm run lint` | Verifica código |

---

## 📁 Estrutura (O que cada pasta é)

```
src/domain/          → Tipos e entidades
src/hooks/           → Lógica de dados
src/screens/Blog/    → Componentes e estilos
public/posts/        → Seus artigos
public/posts.json    → Lista de posts
```

---

## 📝 Adicionar Post

```
1. Criar: public/posts/meu-post.md

2. Registrar em posts.json:
{
  "id": "4",
  "titulo": "Meu Post",
  "dataPostagem": "2024-05-20",
  "autor": "Seu Nome",
  "caminhoArquivoMd": "posts/meu-post.md",
  "descricao": "Preview",
  "tags": ["Tag1", "Tag2"]
}

3. Pronto! ✅
```

---

## 📊 Arquivos Principais

| Arquivo | Faz o quê |
|---------|-----------|
| `useBlogPosts.js` | Busca posts e markdown |
| `BlogContainer.jsx` | Controla navegação |
| `BlogListView.jsx` | Exibe cards |
| `BlogPostDetailView.jsx` | Exibe artigo |
| `BlogListView.css` | Todos os estilos |
| `posts.json` | Dados dos posts |

---

## 🏗️ Camadas

```
PRESENTATION  → Componentes visuais
APPLICATION   → useB blogPosts hook
DOMAIN        → Post entity (types)
INFRASTRUCTURE → posts.json + *.md
```

---

## 🎨 URL dos Posts

```
No posts.json:
"caminhoArquivoMd": "posts/seu-arquivo.md"

Deve existir:
public/posts/seu-arquivo.md
```

---

## 📚 Documentação

| Arquivo | Leia quando |
|---------|------------|
| QUICK_START | Quer começar (5 min) |
| BLOG_README | Quer saber como usar |
| BLOG_ARCHITECTURE | Quer entender tudo |
| BLOG_EXAMPLES | Quer estender |
| VERIFY_SETUP | Quer verificar |
| INDEX | Quer índice completo |

---

## 🔧 Componentes

| Componente | Props | Retorna |
|-----------|-------|---------|
| BlogListView | `posts`, `loading`, `error`, `onSelectPost` | Cards |
| BlogPostDetailView | `post`, `markdownContent`, `loading`, `error`, `onBack` | Artigo |
| BlogContainer | (none) | Lista ou Detalhe |

---

## 🪝 Hook: useBlogPosts

```javascript
const {
  posts,            // Array de posts
  selectedPost,     // Post selecionado
  markdownContent,  // Conteúdo markdown
  loading,          // boolean
  error,            // string ou null
  selectPost,       // (postId) => void
  deselectPost      // () => void
} = useBlogPosts();
```

---

## 📱 Breakpoints Responsivos

```
Desktop: > 768px
Mobile:  < 768px

CSS ajusta automaticamente
```

---

## 🐛 Problemas Comuns

| Problema | Solução |
|----------|---------|
| Posts não aparecem | Verificar `posts.json` |
| Markdown não renderiza | Verificar sintaxe `.md` |
| Erro de compilação | Rodar `npm install` |
| Port 5173 ocupada | `npm run dev -- --port 3000` |
| Página em branco | Verificar console |

---

## ✅ Checklist Rápido

```
[ ] npm install rodou
[ ] npm run dev funciona
[ ] Blog aparece no navegador
[ ] 3 posts de exemplo aparecem
[ ] Clique nos posts funciona
[ ] Markdown renderiza
[ ] Sem erros no console
[ ] Responsivo no mobile
```

---

## 🎯 Data Format

```javascript
// Post.ts
interface Post {
  id: string;                // Único
  titulo: string;            // Título
  dataPostagem: string;      // YYYY-MM-DD
  autor: string;             // Seu nome
  caminhoArquivoMd: string; // "posts/file.md"
  descricao?: string;        // Preview
  tags?: string[];           // Categorias
}
```

---

## 🚀 Deploy Rápido

```bash
npm run build
# Commit dist/ no gh-pages branch
# GitHub Pages configura automaticamente
```

---

## 📊 Estrutura posts.json

```json
[
  {
    "id": "1",
    "titulo": "Post 1",
    "dataPostagem": "2024-05-01",
    "autor": "Seu Nome",
    "caminhoArquivoMd": "posts/post1.md",
    "descricao": "Descrição",
    "tags": ["Tag1"]
  },
  // ... mais posts
]
```

---

## 🔄 Fluxo de Dados

```
Usuário acessa blog
    ↓
BlogContainer renderiza
    ↓
useBlogPosts fetch /posts.json
    ↓
BlogListView exibe cards
    ↓
Clique → selectPost(id)
    ↓
useBlogPosts fetch /posts/{id}.md
    ↓
BlogPostDetailView renderiza
    ↓
Clique Voltar → deselectPost()
```

---

## 💾 Salvar para Referência

Imprima este documento ou salve como favorito!

---

## 🌐 URLs Importantes

```
Dev:        http://localhost:5173
Build:      npm run build
Docs:       Ver INDEX.md
GitHub:     Seu repositório
Live:       github.io URL
```

---

## ⌨️ Atalhos VS Code

```
Ctrl+Shift+P  → Abrir comando
Ctrl+P        → Procurar arquivo
Ctrl+F        → Buscar no arquivo
F12           → Console do navegador
```

---

## 🎓 O Que Aprender

1. **Clean Architecture** - Leia artigos no blog
2. **React Hooks** - Custom hooks no código
3. **CSS Grid** - Estilos do blog
4. **Markdown** - Seus posts

---

## 📞 Links Rápidos

- Entrar em pasta: `cd curriculo`
- Documentação: `INDEX.md`
- Começar: `QUICK_START.md`
- Entender: `BLOG_ARCHITECTURE.md`
- Estender: `BLOG_EXAMPLES.md`

---

## ✨ Dirias

Você tem:
- ✅ 4 componentes React
- ✅ 1 hook customizado
- ✅ 3 posts de exemplo
- ✅ 12 documentos
- ✅ 7 exemplos de extensão

---

## 🎉 Próximo Passo

```bash
npm install && npm run dev
# Abrir http://localhost:5173
# Ver seu blog funcionando!
```

---

**Imprima ou salve este cheat sheet para referência rápida!** 📋

---

*Versão: 1.0 | Data: 2024-05-02*
