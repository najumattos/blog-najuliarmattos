Aja como um desenvolvedor Senior React e especialista em CSS moderno. Preciso criar o componente de visualização dos posts para o meu blog, seguindo o padrão MVC/SRP e sem utilizar imagens.

O que deve ser feito:

Componente PostCard: Crie um card que exiba:

Metadados: No topo, uma linha com o formato 'em {dataPostagem} por {autor}' em fonte menor.

Título: Um título em destaque (h2 ou h3).

Descrição: Um resumo do post. Aplique uma lógica para limitar o texto em 250 caracteres, garantindo que não quebre o layout.

Botão: Um botão 'Leia mais' estilizado no rodapé do card.

Componente PostGrid (Layout):

Organize os cards em um grid responsivo.

Desktop: No máximo 3 cards por fileira.

Mobile: 1 card por fileira.

Utilize CSS Grid para o posicionamento.

Integração:

O PostGrid deve receber a lista de posts do nosso arquivo posts.json via props (seguindo o Service/Hook de busca que já temos).

Estilização:

Não utilize imagens (mesmo que a referência tenha).

Foque em uma tipografia limpa, bom espaçamento interno (padding) e uma cor de fundo sutil para os cards para dar contraste. O layout deve ser 'clean' e profissional."
#

Aja como um desenvolvedor Senior React. Com base na arquitetura de **MVC Simplificado** e **SRP** que estamos utilizando neste blog (onde isolamos a lógica em Hooks/Services e a interface em Views), crie um componente de **Navbar** responsivo.

**Requisitos:**

1. **Estrutura:** O menu deve conter as opções: `Home`, `Currículo` e `Sobre`.
2. **Responsividade:** Deve possuir um 'menu hambúrguer' para telas mobile e uma disposição horizontal para desktop.
3. **Semântica e Acessibilidade:** Utilize tags HTML5 (`<nav>`, `<ul>`, `<li>`) e garanta que seja acessível (aria-labels).
4. **Estilo:** Siga o padrão de CSS já utilizado no projeto (seja CSS Modules, Styled Components ou CSS puro). O estilo deve ser limpo e profissional.
5. **Clean Code:** Mantenha a lógica de 'abrir/fechar' do menu mobile bem encapsulada. Se houver necessidade de uma lógica complexa de rotas, sugira a criação de um arquivo de configuração de constantes para os links."

#

Quero que você crie um roadmap técnico e prático para implementar suporte avançado a arquivos .md em um blog feito com React + Vite, hospedado no GitHub Pages, sem backend.

Contexto do projeto:

- O conteúdo dos posts vem de arquivos Markdown armazenados em /public/posts/
- Existe um arquivo /public/posts.json com metadados dos posts
- A aplicação já tem uma tela de detalhe do post em React
- Hoje o conteúdo é renderizado com react-markdown
- Quero chegar o mais perto possível do preview do GitHub
- Preciso suportar:
  - Markdown básico
  - tabelas
  - listas de tarefa
  - blocos de código
  - links
  - imagens
  - diagramas, idealmente Mermaid
  - estilo visual parecido com o GitHub
- Quero manter a arquitetura limpa e simples, separando:
  - camada de dados
  - serviço / hook de carregamento
  - componente de apresentação
- Sem backend
- Sem soluções que exijam infraestrutura complexa
- Preferência por bibliotecas leves e manutenção simples

Quero que o roadmap contenha:

1. Objetivo da implementação
2. Escopo mínimo viável
3. Etapas em ordem de execução
4. Dependências e plugins recomendados
5. Riscos técnicos e limitações
6. Decisões de arquitetura
7. Estratégia para suportar diagramas
8. Estratégia para deixar o visual parecido com GitHub
9. Sugestão de estrutura de arquivos
10. Checklist de validação final
11. Uma versão por fases:

- fase 1: básico funcional
- fase 2: visual aprimorado
- fase 3: diagramas e extras

Responda de forma objetiva, em português, com foco em implementação realista. Se houver mais de uma abordagem possível, recomende a mais simples e mantenível para um projeto React publicado no GitHub Pages.
