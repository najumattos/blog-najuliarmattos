## 1. O que é Inteligência Artificial

A **inteligência artificial** é um campo da ciência da computação que se dedica ao estudo e ao desenvolvimento de máquinas e programas computacionais capazes de **reproduzir o comportamento humano na tomada de decisões e na realização de tarefas** porém a complexidade em definir o que é Inteligência artificial começa pelo fato de que não existe um consenso nem mesmo para as duas palavras que compõem o termo: **"inteligência"** e **"artificial"**. No imaginário popular espera-se que a IA seja uma supermáquina que pense e aja exatamente como um humano. No entanto, a IA real é diferente e os pesquisadores dividem suas definições em quatro grandes escolas ou paradigmas (pensar/agir como humanos ou racionalmente), o que mostra que não há uma resposta única para o que ela é.


## 2. Os quatro paradigmas da Inteligência Artificial (Russell e Norvig)
Os quatro paradigmas da Inteligência Artificial, propostos por Stuart Russell e Peter Norvig, organizam as definições da área em dois eixos: um que distingue entre **comportamento humano** e **raciocínio ideal (racional)**, e outro que diferencia entre **processos internos (pensar)** e **comportamento externo (agir)**

### 2.1 Sistemas que pensam como humanos
Este paradigma busca replicar o **processo cognitivo interno** do ser humano. O objetivo não é apenas fornecer a resposta correta, mas imitar o cérebro, incluindo seus erros, vieses e atalhos mentais. Esse campo está intimamente ligado às **ciências cognitivas** e à psicologia, mas enfrenta o desafio de que ainda não entendemos completamente como a mente humana funciona para reproduzi-la fielmente em código. Um exemplo histórico são as redes neurais concebidas originalmente como modelos do neurônio biológico

### 2.2 Sistemas que agem como humanos
Aqui, o foco não é o processo interno, mas o **comportamento externo observável**. O critério de sucesso é o **Teste de Turing**: se um avaliador humano não consegue distinguir, através de uma conversa por texto, se está interagindo com uma máquina ou outra pessoa, o sistema é considerado inteligente. É por causa deste paradigma que chatbots modernos são programados para parecerem simpáticos e usarem frases como "sinto muito" ou "fico feliz", simulando empatia para soar humanos.

### 2.3 Sistemas que pensam racionalmente
Este paradigma baseia-se na **lógica formal** e na tradição aristotélica de "leis do pensamento". O objetivo é que o sistema chegue a conclusões necessariamente verdadeiras a partir de premissas corretas, utilizando inferência lógica. Embora pareça ideal para matemática pura, esse modelo costuma falhar diante das incertezas e da bagunça do mundo real, que raramente se encaixa em sistemas lógicos de "preto no branco". Exemplos clássicos são os **sistemas especialistas** dos anos 1980

### 2.4 Sistemas que agem racionalmente (Agentes Racionais)
Este é o paradigma que **predomina na IA moderna** e orienta a maior parte da pesquisa atual. Um **agente racional** é definido como algo que age de forma a alcançar o melhor resultado possível (ou, se houver incerteza, o melhor resultado esperado).

-   **O paradigma dominante:** Ele venceu por ser pragmático; não exige que a máquina imite o pensamento humano (tecnicamente difícil) nem que use lógica pura (ineficiente sob incerteza).
-   **Maximização de objetivos:** O sistema opera percebendo o ambiente através de dados e processando essas informações para **maximizar uma meta numérica** ou função de utilidade definida por seus criadores

-   **Exemplos de agentes racionais:**
    -   **Algoritmos de recomendação (YouTube/Streaming):** Agem racionalmente para maximizar o tempo de retenção do usuário.
    -   **GPS:** Toma a melhor ação possível para minimizar o tempo de percurso.
    -   **Sistemas de climatização de data centers:** Otimizam o consumo de energia em tempo real.
    -   **Filtros de spam e análise de crédito:** Identificam padrões e tomam decisões para atingir objetivos específicos de segurança ou lucratividade.

A principal lição deste paradigma para um usuário crítico é entender que a IA não é uma "caixinha mágica", mas um **sistema de otimização matemática** que busca bater uma meta definida, usando dados históricos que podem conter preconceitos humanos.

| Paradigma | Objetivo |
| -------------------- | ---------------------- |
| Pensar como humanos | Imitar a cognição |
| Agir como humanos | Imitar o comportamento |
| Pensar racionalmente | Aplicar lógica |
| Agir racionalmente | Maximizar objetivos |

## 3. Teste de Turing e suas limitações
Proposto por Alan Turing em 1950, originalmente chamado de "Teste de Imitação", este método buscou substituir a pergunta filosófica "podem as máquinas pensar?" por um **critério operacional e comportamental**

-   **Funcionamento:** Um avaliador humano interage por meio de texto com um sistema e com outro humano simultaneamente.
-   **Critério de Sucesso:** Se o avaliador **não conseguir distinguir** qual dos dois interlocutores é a máquina, o sistema é considerado aprovado no teste.
-   **Foco no Observável:** O teste mede apenas o **comportamento externo**, ignorando os processos internos ou a consciência da máquina.

### 3.1 O Experimento do Quarto Chinês (John Searle)
Em 1980, o filósofo John Searle propôs este experimento mental para demonstrar que passar no Teste de Turing não prova inteligência real ou compreensão.

-   **A Analogia:** Imagine uma pessoa que não entende chinês trancada em um quarto com um manual de regras em sua própria língua. Ela recebe bilhetes com símbolos chineses (entradas), consulta o manual para saber quais símbolos devolver (regras) e entrega a resposta correta (saída).
-   **Conclusão:** Para quem está fora do quarto, parece que a pessoa entende chinês. No entanto, internamente, ocorre apenas a **manipulação de símbolos** sem qualquer **experiência semântica** ou compreensão do significado.

### 3.2 Limitações dos Modelos de Linguagem
Os grandes modelos de linguagem contemporâneos, como o GPT-4 e o Claude, são vistos como exemplos modernos do argumento de Searle.

-   **Fluência não é Entendimento:** Embora produzam respostas fluentes, adequadas ao contexto e até empáticas, esses sistemas processam apenas _tokens_ (pedaços de dados) de forma estatística.
-   **Simulação de Emoções:** Modelos são programados para agir como humanos, usando frases como "sinto muito" ou "fico feliz em ajudar", o que pode levar o usuário a uma **"ingenuidade perigosa"** ao humanizar o software.
-   **A Pergunta Crítica:** O usuário deve questionar se o sistema parece inteligente porque realmente compreende o que diz ou apenas porque é capaz de **produzir respostas convincentes**. Segundo as fontes, a IA moderna é menos uma cópia do humano e mais uma **máquina de decisão** orientada por objetivos matemáticos.

## 4. História da Inteligência Artificial
A história da inteligência artificial é marcada por ciclos de grande entusiasmo seguidos de colapsos de financiamento, conhecidos como "invernos", culminando na atual era da IA generativa.

-   **Teste de Turing (1950):** Alan Turing publicou o artigo _"Computing machinery and intelligence"_, propondo o "Teste de Imitação". Ele sugeriu que a questão relevante não era se as máquinas podem pensar, mas se podem se comportar de forma **indistinguível de um humano**.
-   **Conferência de Dartmouth (1956):** Organizada por nomes como John McCarthy e Marvin Minsky, foi neste evento que o termo **"inteligência artificial"** foi cunhado. A premissa da época era extremamente otimista, acreditando-se que qualquer aspecto da inteligência humana poderia ser simulado por uma máquina.
-   **Primeiro Inverno da IA (Década de 1970):** Ocorreu após o relatório Lighthill (1973) criticar a área por entregar resultados muito abaixo das expectativas. Os financiamentos foram cortados pois a IA baseada em regras tinha dificuldade em lidar com a complexidade do mundo real.
-   **Sistemas Especialistas (Década de 1980):** O campo ressurgiu com o foco no **conhecimento de domínio** em vez de aprendizado de dados. Um exemplo marcante foi o **MYCIN**, que codificava conhecimento médico em regras lógicas do tipo "SE-ENTÃO".
-   **Segundo Inverno da IA (1993):** Mais de 300 empresas de IA fecharam nos EUA devido ao hardware insuficiente e à escassez de dados, o que limitava o potencial das redes neurais na época.
-   **Deep Learning (2012):** Este marco inicial da era moderna ocorreu quando a **AlexNet** venceu a competição ImageNet com uma taxa de erro drasticamente menor que a dos concorrentes, demonstrando o poder das redes neurais profundas.
-   **Arquitetura Transformer (2017):** O Google publicou o artigo _"Attention is all you need"_, introduzindo o mecanismo de **autoatenção**. Essa inovação permitiu que os modelos processassem sequências inteiras de dados em paralelo, tornando viável o treinamento de sistemas com centenas de bilhões de parâmetros.
-   **ChatGPT e IA Generativa (2022):** O lançamento do ChatGPT marcou a entrada da IA generativa no cotidiano global, atingindo **100 milhões de usuários em apenas dois meses**. Essa tecnologia utiliza a escala massiva de dados (livros, sites, códigos) e a arquitetura Transformer para produzir respostas fluentes e contextuais.

Conhecer essa trajetória ajuda a entender que a IA atual não é uma versão definitiva, mas o resultado de uma combinação de **dados em escala industrial, hardware especializado e novas arquiteturas** que não estavam disponíveis nos ciclos anteriores.

## Linha do Tempo da Inteligência Artificial

```text
1950
│
├── 🧠 Teste de Turing
│   • Alan Turing publica "Computing Machinery and Intelligence".
│   • Propõe o Teste de Imitação como critério para avaliar se uma máquina
│     pode apresentar comportamento indistinguível do de um ser humano.
│
1956
│
├── 🚀 Conferência de Dartmouth
│   • O termo "Inteligência Artificial" é criado.
│   • Início oficial da IA como área de pesquisa.
│
Década de 1970
│
├── ❄️ Primeiro Inverno da IA
│   • Cortes de financiamento devido aos resultados abaixo das expectativas.
│
Década de 1980
│
├── 🩺 Sistemas Especialistas
│   • Popularização de sistemas baseados em regras.
│   • Exemplo: MYCIN.
│
1993
│
├── ❄️ Segundo Inverno da IA
│   • Fechamento de centenas de empresas de IA.
│   • Limitações de hardware e escassez de dados.
│
2012
│
├── 🧩 Deep Learning (AlexNet)
│   • A AlexNet vence a competição ImageNet.
│   • Marco inicial da era moderna das redes neurais profundas.
│
2017
│
├── ⚡ Arquitetura Transformer
│   • Publicação do artigo "Attention Is All You Need".
│   • Introdução do mecanismo de Self-Attention.
│
2022
│
└── 🤖 ChatGPT e IA Generativa
    • Popularização dos Grandes Modelos de Linguagem (LLMs).
    • A IA generativa passa a fazer parte do cotidiano.
```

## 5. Arquitetura Transformer
A **Arquitetura Transformer**, introduzida pelo Google em 2017 no artigo _"Attention is all you need"_, representou uma mudança de paradigma no processamento de linguagem natural ao resolver limitações de modelos anteriores, como as LSTMs (Long Short-Term Memory)

### 5.1 Self-attention (Autoatenção)
O mecanismo de **autoatenção** é a inovação central desta arquitetura. Diferente dos modelos anteriores que liam o texto palavra por palavra, o Transformer calcula, para cada posição em uma sequência, o quanto todas as outras posições são relevantes para interpretá-la.

-   **Contexto Global:** Isso permite que o modelo capture relações entre palavras que estão distantes uma da outra em um texto, facilitando a compreensão de dependências de longo alcance que eram difíceis de processar anteriormente.

### 5.2 Processamento Paralelo
Antes dos Transformers, o processamento de texto era predominantemente sequencial, o que tornava o treinamento lento e menos eficiente.

-   **Velocidade e Eficiência:** A arquitetura Transformer substituiu a leitura sequencial pela capacidade de **processar a sequência inteira em paralelo**.
-   **Hardware:** Essa mudança tornou o treinamento muito mais eficiente em hardwares modernos com muitos núcleos de processamento, como GPUs e TPUs, permitindo lidar com volumes massivos de dados.

### 5.3 Grandes Modelos de Linguagem (LLMs)
A combinação da arquitetura Transformer com o processamento paralelo e dados em escala industrial viabilizou a criação dos **LLMs** (Large Language Models).

-   **Escala Sem Precedentes:** Tornou-se possível treinar modelos com centenas de bilhões de parâmetros em corpora que incluem bilhões de páginas da web, livros, códigos-fonte e artigos científicos.
-   **Exemplos Contemporâneos:** Essa é a tecnologia fundamental por trás de sistemas como o **GPT-4** (OpenAI), o **Claude** (Anthropic) e o **Gemini** (Google).
-   **IA Generativa:** O sucesso desses modelos culminou no lançamento de ferramentas como o **ChatGPT**, que integrou a IA generativa ao cotidiano global de forma acelerada.

Entender essa arquitetura é essencial para compreender por que esses modelos possuem pontos fortes e "pontos cegos" específicos, além de reconhecer que a IA atual não é uma versão definitiva, mas uma evolução tecnológica contínua.

## 6. Literacia em Inteligência Artificial
O **Framework de Literacia em Inteligência Artificial** (ou _Quadro de Alfabetização em IA_) é uma estrutura metodológica que define **o conjunto de conhecimentos, habilidades e atitudes críticas** que uma pessoa precisa ter para compreender, utilizar e avaliar ferramentas de Inteligência Artificial de forma eficaz e ética.
Diferente da capacitação técnica avançada (como programar modelos ou treinar algoritmos), a literacia em IA foca na **capacidade de conviver e trabalhar com a tecnologia**.

### Framework de seis competências
O framework de **Literacia em Inteligência Artificial** baseia-se no trabalho de Omaima Almatrafi et al. (2024) e organiza as competências necessárias para lidar com a tecnologia em seis dimensões progressivas.
O objetivo central desse framework é mover o usuário de uma relação "automática" ou ingênua com a IA para uma relação de análise e responsabilidade.

**1. Reconhecer**
-   **Definição:** É a capacidade de identificar sistemas de IA no cotidiano e distingui-los de softwares comuns.
-   **IA Invisível:** Reconhecer exige saber identificar a IA que opera "nos bastidores", sem uma interface óbvia de chatbot, como **filtros de spam**, algoritmos de **aprovação de crédito**, sistemas de **triagem de currículos** e recomendações de vagas de emprego.
-   **O que buscar:** Para reconhecer um sistema como IA, deve-se observar se ele aprende padrões a partir de dados, se otimiza um objetivo definido e se toma ou recomenda decisões.

**2. Conhecer**
Conhecer envolve entender as características básicas e o funcionamento técnico por trás dos sistemas identificados. Isso inclui compreender que a IA é um conjunto de abordagens e algoritmos, e não uma tecnologia única.

**3. Usar**
Refere-se à habilidade prática de interagir com as ferramentas de IA de forma eficaz. O uso sem literacia leva a uma **"ingenuidade perigosa"**, onde o usuário humaniza o software (atribuindo-lhe sentimentos ou consciência) em vez de entendê-lo como um sistema de otimização matemática.

**4. Avaliar**
Esta competência envolve a capacidade de **verificar, questionar e criticar** os resultados entregues pela IA. Um usuário capaz de avaliar não aceita a resposta da máquina como uma "verdade absoluta", mas pergunta:
-   Qual objetivo este sistema está otimizando?
-   Quem definiu esses objetivos?
-   Como posso verificar este resultado por outra fonte?

**5. Criar**
A dimensão de criar diz respeito à capacidade de projetar ou desenvolver sistemas de IA. Para o profissional (como engenheiros), isso significa saber especificar metas corretamente para que o algoritmo não produza efeitos colaterais indesejados (como a recomendação de conteúdo extremo por uma lógica de pura otimização de tempo de tela).

**6. Navegar Eticamente**
É a dimensão mais avançada, focada em agir com responsabilidade e entender o impacto social da tecnologia.

-   **Vieses Algorítmicos:** Envolve reconhecer que, se os dados históricos usados no treinamento carregarem preconceitos (racismo, machismo), a máquina irá replicar e escalar essas exclusões para "bater a meta" numérica.
-   **Justiça:** O navegador ético questiona quais grupos podem ser afetados de forma desigual pelas decisões automatizadas.

Em resumo, o reconhecimento inicial é a **condição essencial** para que todas as outras cinco dimensões aconteçam; sem saber onde a IA está operando, o usuário não consegue avaliá-la ou usá-la de forma ética.

## Resumindo

- IA não possui uma definição única.
- Existem quatro paradigmas.
- O paradigma dominante é o dos agentes racionais.
- O Teste de Turing mede comportamento.
- O Quarto Chinês critica o Teste de Turing.
- A IA passou por dois invernos.
- Deep Learning impulsionou a IA moderna.
- Transformers permitiram os LLMs.
- Literacia em IA envolve seis competências.

## Referências
- **PLACCA, J. A.**  **O que é (e o que não é) IA**. São Paulo: Univesp, 2026. 10 p. (Série IA na Prática Acadêmica e Profissional, Quinzena 1, Módulo 1)
-   **TURING, A. M.** Computing machinery and intelligence. _Mind_, v. 59, n. 236, p. 433-460, 1950.
-   **VASWANI, A. et al.** Attention is all you need. _Advances in Neural Information Processing Systems_, v. 30, 2017
-   **ALMATRAFI, O. et al.** Base dos seis níveis de literacia em IA: reconhecer, conhecer, usar, avaliar, criar, navegar eticamente. _AI Literacy Framework_, 2024.
