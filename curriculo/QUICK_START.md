# 🚀 Quick Start Guide - Blog Setup

## ⚡ 30 Segundos para Começar

```bash
cd curriculo
npm install
npm run dev
```

Acesse: `http://localhost:5173`

---

## 📚 Estrutura Criada

```
✅ src/domain/Post.ts           - Tipos
✅ src/hooks/useBlogPosts.js    - Lógica
✅ src/screens/Blog/            - Componentes + Estilos
✅ public/posts.json             - Dados
✅ public/posts/*.md             - 3 artigos de exemplo
✅ src/App.jsx                   - Integrado
```

---

## 📖 Documentação

| Arquivo | Objetivo |
|---------|----------|
| **BLOG_README.md** | 👈 **Comece aqui** - Guia rápido |
| **BLOG_ARCHITECTURE.md** | Docs completas |
| **BLOG_EXAMPLES.md** | Exemplos de extensão |
| **ARCHITECTURE_DIAGRAM.md** | Diagramas visuais |
| **BLOG_SETUP_COMPLETE.md** | Resumo completo |

---

## 🎯 Próximos Passos

### 1️⃣ Ver o Blog Funcionando
```bash
npm run dev
# Abra o navegador e veja a seção Blog
```

### 2️⃣ Entender a Arquitetura
```
Leia: BLOG_ARCHITECTURE.md (5 min)
```

### 3️⃣ Adicionar Seu Primeiro Post
```bash
# 1. Crie: public/posts/meu-artigo.md
# 2. Atualize: public/posts.json
# 3. Pronto! Aparecerá no blog
```

### 4️⃣ Customizar (Opcional)
```
Veja: BLOG_EXAMPLES.md
```

### 5️⃣ Deploy no GitHub Pages
```
Veja: BLOG_README.md
```

---

## 🏗️ Arquitetura em 1 Minuto

```
BlogContainer (Orquestra navegação)
    ↓
useBlogPosts (Busca dados)
    ↓
Domain: Post (Tipos)
    ↓
Dados: posts.json + posts/*.md
    ↓
Views: BlogListView + BlogPostDetailView
```

---

## 📝 Adicionar Post em 30 Segundos

### Passo 1: Criar arquivo
```bash
# public/posts/titulo-post.md
# Escrever em markdown
```

### Passo 2: Registrar
```bash
# Adicionar em public/posts.json:
{
  "id": "4",
  "titulo": "Meu Post",
  "dataPostagem": "2024-05-20",
  "autor": "Seu Nome",
  "caminhoArquivoMd": "posts/titulo-post.md",
  "descricao": "Descrição breve",
  "tags": ["React"]
}
```

### Pronto! ✅

---

## 🎨 Arquivos Principais

### Hook (Lógica)
```
src/hooks/useBlogPosts.js
├─ Busca posts.json
├─ Busca markdown
├─ Ordena por data
└─ Gerencia estado
```

### Componentes (Visão)
```
src/screens/Blog/
├─ BlogContainer.jsx (Controlador)
├─ BlogListView.jsx (Lista)
└─ BlogPostDetailView.jsx (Detalhe)
```

### Dados
```
public/
├─ posts.json (Array de posts)
└─ posts/ (Arquivos .md)
```

---

## 💾 Commands Rápidos

```bash
# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint
npm run lint
```

---

## 🧪 Ver Exemplos

3 artigos de exemplo foram criados:

1. **clean-architecture-react.md** - Aprenda sobre Clean Architecture
2. **custom-hooks.md** - Saiba como usar hooks
3. **srp-in-practice.md** - Entenda Single Responsibility Principle

Leia-os no blog para aprender!

---

## ✨ Princípios Implementados

- ✅ Clean Architecture
- ✅ Single Responsibility Principle (SRP)
- ✅ Data-Driven (JSON)
- ✅ MVC Simplificado
- ✅ Sem Backend
- ✅ GitHub Pages Ready

---

## 🤔 Dúvidas?

### "Como adicionar mais posts?"
→ Ver seção "Adicionar Post" acima

### "Como customizar estilos?"
→ Edite `src/screens/Blog/BlogListView.css`

### "Como adicionar busca/filtro?"
→ Ver `BLOG_EXAMPLES.md`

### "Como fazer deploy?"
→ Ver `BLOG_README.md` seção "Deploy"

### "Preciso de um backend?"
→ Não! Tudo roda no cliente. Para comentários, use serviços como Disqus.

---

## 📊 Stats

```
Arquivos Criados: 14+
Linhas de Código: ~1000+
Componentes: 4
Hooks: 1
Posts de Exemplo: 3
Documentação: 5 arquivos
```

---

## 🎓 Estrutura Profissional

Cada parte tem uma responsabilidade clara:

```
Domain Layer     → Define tipos
Application      → Lógica de dados
Presentation     → UI componentes
Infrastructure   → JSON + Markdown
```

---

## 🎉 Parabéns!

Você tem um **blog profissional em Clean Architecture** pronto para:

- ✅ Escrever artigos em Markdown
- ✅ Rodar localmente
- ✅ Fazer deploy no GitHub Pages
- ✅ Escalar com novas features

---

## 🔗 Próximos Passos

1. Leia: **BLOG_README.md**
2. Explore: **BLOG_ARCHITECTURE.md**
3. Customize: **BLOG_EXAMPLES.md**
4. Aproveite! 🚀

---

**Happy Blogging!** 📝✨
