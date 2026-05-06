import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkFootnotes from 'remark-footnotes';
import { Calendar, User } from 'lucide-react';
import highlightJs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import MermaidBlock from '../../components/MermaidBlock';

export function BlogPostDetailView({ post, content, error }) {
  

  if (!post) {
    return (
      <div className="error">
        <BackButton />
        <p>Post não encontrado</p>
      </div>
    );
  }

  return (
    <article className="blog-post-detail">
      <header className="post-header">
        <h1>{post.titulo}</h1>
        <div className="post-meta">
          <div className="meta-item">
            <Calendar size={16} />
            <span>{new Date(post.dataPostagem).toLocaleDateString('pt-BR')}</span>
          </div>
          <div className="meta-item">
            <User size={16} />
            <span>{post.autor}</span>
          </div>
        </div>
      </header>

      <div className="post-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkFootnotes]}
          components={{
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
            table: ({ children }) => (
              <div className="table-wrapper">
                <table className="markdown-table">{children}</table>
              </div>
            ),
            thead: ({ children }) => <thead className="table-head">{children}</thead>,
            tbody: ({ children }) => <tbody className="table-body">{children}</tbody>,
            tr: ({ children }) => <tr className="table-row">{children}</tr>,
            th: ({ children }) => <th className="table-cell table-header-cell">{children}</th>,
            td: ({ children }) => <td className="table-cell">{children}</td>,
            pre: ({ children }) => {
              // Detectar se é mermaid
              if (children && children.props && children.props.className === 'language-mermaid') {
                return <MermaidBlock>{children.props.children}</MermaidBlock>;
              }
              return <pre>{children}</pre>;
            },
            code: ({ node, inline, className, children, ...props }) => {
              // Se for inline, renderizar como código normal
              if (inline) {
                return <code className={className} {...props}>{children}</code>;
              }

              // Se não tiver className, renderizar como código normal
              if (!className) {
                return <code {...props}>{children}</code>;
              }

              // Extrair linguagem
              const match = /language-(\w+)/.exec(className || '');
              const language = match ? match[1] : '';

              // Se for mermaid, renderizar como diagrama
              if (language === 'mermaid') {
                const codeString = Array.isArray(children) 
                  ? children.join('') 
                  : String(children);
                return <MermaidBlock>{codeString.replace(/\n$/, '')}</MermaidBlock>;
              }

              // Aplicar syntax highlighting com highlight.js
              let highlightedCode = children;
              try {
                if (language && highlightJs.getLanguage(language)) {
                  const highlighted = highlightJs.highlight(
                    Array.isArray(children) ? children.join('') : String(children),
                    { language, ignoreIllegals: true }
                  );
                  highlightedCode = (
                    <pre>
                      <code 
                        className={`hljs language-${language}`}
                        dangerouslySetInnerHTML={{ __html: highlighted.value }}
                      />
                    </pre>
                  );
                }
              } catch (err) {
                console.warn(`Erro ao highlightear código ${language}:`, err);
              }

              // Retornar código com ou sem highlight
              if (highlightedCode !== children) {
                return highlightedCode;
              }

              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            sup: ({ children }) => (
              <sup className="footnote-ref">{children}</sup>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
      <ScrollToTopButton />
    </article>
  );
}
