import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

// Inicializar mermaid uma única vez fora do componente para performance (Singleton)
mermaid.initialize({ 
  startOnLoad: false, // Alterado para false, pois o controle será manual via .run()
  theme: 'dark' 
});

/**
 * MermaidBlock
 * Componente Wrapper: Ponte entre React e Mermaid.js
 */
export function MermaidBlock({ children }) {
  const mermaidRef = useRef(null);

  useEffect(() => {
    const renderDiagram = async () => {
      // 1. Verificação de Segurança (Evita o erro de properties of null)
      if (mermaidRef.current) {
        
        // 2. Reset de Estado: Remove o marcador de processamento anterior
        // Isso impede que o Mermaid ache que já terminou o trabalho num nó antigo
        mermaidRef.current.removeAttribute('data-processed');
        
        try {
          // 3. Execução Isolada: Renderiza apenas este nó específico
          // Em vez de varrer a página toda, focamos no elemento da referência
          await mermaid.run({
            nodes: [mermaidRef.current],
          });
        } catch (err) {
          // Tratamento pragmático de erros de sintaxe no diagrama
          console.error("Erro na renderização do diagrama Mermaid:", err);
        }
      }
    };

    renderDiagram();
  }, [children]); // Re-executa sempre que o texto do diagrama (children) mudar

  return (
    // A classe "mermaid" é o seletor que a biblioteca busca
    <div ref={mermaidRef} className="mermaid">
      {children}
    </div>
  );
}

export default MermaidBlock;