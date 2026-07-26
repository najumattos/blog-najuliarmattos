## 1. Introdução ao Aprendizado de Máquina

A compreensão da Inteligência Artificial moderna exige entender a transição da lógica de regras para a lógica de padrões

### 1.1 Diferença entre Programação Tradicional e Aprendizado de Máquina

Na **computação convencional ou programação tradicional**, o programador deve escrever **regras explícitas** e prever todas as situações possíveis com antecedência. O modelo segue a lógica "se acontecer X, então faça Y". Essa abordagem é eficiente para problemas simples e bem definidos, como um jogo de xadrez ou a precificação básica de um imóvel.
No entanto, a programação tradicional possui um limite claro: ela é **frágil perante a complexidade do mundo real**. Por exemplo, é humanamente impossível escrever regras manuais que cubram todas as variações de iluminação, posição e ângulo necessárias para que um computador reconheça a foto de um gato. Já o **aprendizado de máquina** inverte essa lógica: em vez de regras, o desenvolvedor fornece ao sistema uma grande quantidade de exemplos para que ele descubra os padrões por conta própria.

### 1.2 O Conceito de Machine Learning

O termo **Machine Learning** (Aprendizado de Máquina) foi cunhado em 1959 por Arthur Samuel, pesquisador da IBM. O conceito fundamental consiste em dar ao computador a **capacidade de aprender sem ser programado explicitamente** para cada caso.
Em termos práticos, significa que o sistema melhora seu desempenho em uma tarefa específica através da experiência e da prática. Hoje, essa escala de aprendizado atingiu níveis sem precedentes devido à disponibilidade de décadas de dados brutos e hardware especializado, permitindo que a máquina resolva problemas que seriam inviáveis através de regras manuais.

### 1.3 Como os sistemas aprendem a partir de dados

Em vez de seguirem instruções fixas, os sistemas de IA utilizam diferentes métodos para processar dados e extrair conhecimento:

-   **Aprendizado Supervisionado:** O sistema aprende com um **"gabarito"**. Ele recebe milhões de dados rotulados por humanos (ex: fotos marcadas como "cachorro" ou "gato") e ajusta seus parâmetros internos para minimizar o erro entre sua previsão e a resposta correta.
-   **Aprendizado Não Supervisionado:** A máquina recebe dados sem rótulos e deve **encontrar uma lógica ou estrutura** na bagunça por conta própria. Ela agrupa informações por semelhança ou correlação estatística, como ocorre nos algoritmos de recomendação de streaming.
-   **Aprendizado por Reforço:** O sistema aprende por **tentativa e erro** em um ambiente virtual. Ele recebe "recompensas" por ações que o aproximam de um objetivo (como diminuir o tempo de uma rota no GPS) e "punições" por erros, ajustando seu comportamento para maximizar os pontos acumulados.
-   **Arquitetura Conexionista (Deep Learning):** Inspirada no cérebro humano, essa abordagem organiza o conhecimento em camadas de **redes neurais artificiais**. O aprendizado ocorre através do ajuste de milhões de **pesos numéricos** nas conexões entre os neurônios artificiais; quando o sistema erra, um processo chamado _backpropagation_ calcula esse erro e ajusta os pesos proporcionalmente. O conhecimento, portanto, não está em uma regra legível, mas distribuído matematicamente por toda a rede

## 2. Os Três Tipos de Aprendizado de Máquina

### 2.1 Aprendizado Supervisionado

Este tipo é comparado à analogia didática de **"estudar com gabarito"**, onde o aluno vê muitos exercícios resolvidos para aprender um padrão.

-   **Dados Rotulados:** O modelo recebe **pares de entrada e saída correta** que foram previamente rotulados por humanos. O algoritmo ajusta seus parâmetros internos para minimizar a diferença (o erro) entre o que ele prevê e o gabarito fornecido.
-   **Exemplos:**
    -   **Filtros de Spam:** E-mails que foram marcados por usuários como "spam" ou "não spam" servem de base para a máquina reconhecer padrões semelhantes no futuro.
    -   **Reconhecimento de Voz:** Utiliza gravações de áudio acompanhadas de suas respectivas transcrições textuais.
    -   **Diagnóstico por Imagem:** Radiografias que já possuem laudos feitos por médicos especialistas.
-   **Ponto Crítico:** Como depende do julgamento humano para criar o gabarito, este sistema pode herdar e **automatizar preconceitos e falhas** dos rotuladores (ex: discriminação em triagem de currículos). Além disso, depende do chamado **"trabalho fantasma"**, realizado por trabalhadores que rotulam dados manualmente em plataformas de _crowdwork_.

### 2.2 Aprendizado Não Supervisionado

Diferente do anterior, aqui a analogia é **"organizar uma gaveta de fotos sem legenda"**, onde se agrupa o conteúdo por semelhança sem ter um gabarito prévio.

-   **Descoberta de padrões sem rótulos:** O modelo recebe uma montanha de dados brutos e sua instrução é **encontrar uma lógica ou estrutura** por conta própria. Ele age como um estatístico, identificando correlações e agrupamentos (clusters) sem que um humano diga o que cada grupo significa.
-   **Exemplos:**
    -   **Segmentação de Clientes:** Agrupar consumidores por comportamento de compra semelhante para direcionar campanhas.
    -   **Detecção de Anomalias:** Identificar transações financeiras que fogem do padrão comum, sinalizando possíveis fraudes.
    -   **Recomendação de Conteúdo:** Algoritmos de redes sociais e streaming que percebem que você pertence a uma "bolha" de usuários com gostos similares e sugerem o que o resto do grupo consome.

### 2.3 Aprendizado por Reforço

Este método assemelha-se a **"aprender a andar de bicicleta"** ou ao adestramento de animais: aprende-se na base da **tentativa e erro** dentro de um ambiente.

-   **Recompensas e Penalidades:** Um agente (o sistema de IA) executa ações e recebe **recompensas** por acertos e **punições** por erros. O único objetivo da máquina é aprender uma política de ações que **maximize a recompensa acumulada** ao longo do tempo.
-   **Exemplos:**
    -   **AlphaGo e AlphaZero:** Sistemas da DeepMind treinados para vencer jogos complexos através de milhões de partidas contra si mesmos.
    -   **GPS:** O sistema testa caminhos constantemente; se uma rota resulta em mais tempo de viagem, o algoritmo recebe uma "punição" e ajusta a sugestão para os próximos motoristas.
    -   **RLHF (Reinforcement Learning from Human Feedback):** Técnica usada para ajustar Modelos de Linguagem de Grande Escala (LLMs), como o ChatGPT, onde avaliadores humanos classificam as respostas para que o modelo aprenda a ser mais útil e seguro

## 3. Evolução da Inteligência Artificial
A evolução da Inteligência Artificial é marcada por três fases distintas, cada uma utilizando uma arquitetura interna diferente para representar e processar o conhecimento.

### 3.1 IA Simbólica (1956 – anos 1980)

Os primeiros sistemas de IA baseavam-se na premissa de que a inteligência humana poderia ser replicada por meio de **regras lógicas explícitas**.

-   **Baseada em regras:** O conhecimento era inserido manualmente por especialistas no formato "SE condição, ENTÃO ação". Para problemas com regras claras e ambientes fechados, como o xadrez, essa abordagem funciona muito bem.
-   **Sistemas Especialistas:** Eram programas que codificavam o conhecimento de um domínio específico para realizar consultas ou diagnósticos.
-   **Exemplo: MYCIN:** Desenvolvido em Stanford na década de 1970, este sistema utilizava cerca de 600 regras manuais para diagnosticar infecções sanguíneas. Sua grande vantagem era a transparência, pois era possível entender exatamente o caminho lógico da decisão.
-   **Limitação:** A IA simbólica é **frágil perante a complexidade do mundo real**. É impossível escrever regras manuais que cubram todas as variações necessárias para que um computador reconheça, por exemplo, a foto de um gato.

### 3.2 IA Conexionista / Deep Learning (anos 1980 – presente)

Diferente da simbólica, esta abordagem não tenta escrever regras, mas sim criar sistemas inspirados na neurociência que descobrem padrões a partir de exemplos.

-   **Redes Neurais Artificiais:** O conhecimento é representado por camadas de nós interligados (neurônios artificiais) com **pesos numéricos** nas conexões.
-   **Perceptron:** Proposto por Frank Rosenblatt em 1958, foi o modelo matemático inicial de um neurônio artificial e o ponto de partida desta era.
-   **Backpropagation:** É o processo de aprendizado que calcula o erro na saída e o propaga de volta pela rede para ajustar os pesos das conexões proporcionalmente.
-   **AlexNet e a Revolução:** O momento decisivo ocorreu em 2012, quando a rede neural **AlexNet** venceu a competição ImageNet com uma margem de erro drasticamente menor que os métodos tradicionais, provando que o aprendizado profundo (_Deep Learning_) era superior para tarefas de percepção.
-   **Limitação:** Funciona como uma **"caixa-preta"**, sendo muito difícil auditar ou entender por que o sistema chegou a um resultado específico.

### 3.3 IA Generativa (2017 – presente)

Esta fase representa a evolução máxima do modelo conexionista, alimentada por volumes massivos de dados da internet.

-   **Grandes Modelos de Linguagem (LLMs):** Sistemas como **GPT-4, Claude e Gemini** são treinados para prever qual é o próximo _token_ (fragmento de texto) em uma sequência, baseando-se em probabilidades estatísticas.
-   **Arquitetura Transformer:** Introduzida em 2017 por Vaswani et al., é a tecnologia que viabilizou os LLMs.
-   **Autoatenção (Self-attention):** É o mecanismo central do Transformer que permite ao modelo calcular a importância de cada palavra em relação a todas as outras em uma frase, capturando o contexto global de forma muito mais eficiente que tecnologias anteriores.
-   **Limitação Crítica:** Estes modelos focam na **plausibilidade estatística e não na verdade**. Eles não "compreendem" o conteúdo e podem **alucinar**, inventando informações de forma fluente e com tom assertivo

## 4. Conceitos Fundamentais dos LLMs
Os Grandes Modelos de Linguagem (LLMs), como o GPT-4, Claude e Gemini, baseiam-se em uma arquitetura de rede neural que processa informações de forma estatística para prever a próxima unidade de texto.

### 4.1 Token

O **token** é a unidade básica de processamento dos modelos de linguagem. Ele não é necessariamente uma palavra completa, mas sim um **fragmento de texto** que pode ser uma palavra inteira, parte dela ou até um sinal de pontuação.

-   **Exemplo:** A palavra "naturalização" pode ser fragmentada pelo modelo em tokens menores como "natural", "iza" e "ção", dependendo do vocabulário específico do sistema.

### 4.2 Embedding

Como as máquinas processam números e não letras, os tokens precisam ser convertidos em uma **representação numérica**, chamada de **embedding** ou vetor.

-   **Espaço Semântico:** Cada token é posicionado em um espaço de alta dimensão onde a proximidade física indica semelhança de significado. Tokens semanticamente próximos (como "rei" e "rainha") ficam próximos nesse espaço.
-   **Aritmética de Vetores:** Essa representação permite cálculos matemáticos que capturam relações conceituais, como a famosa equação:
`vetor(rei)−vetor(homem)+vetor(mulher)≈vetor(rainha)`

### 4.3 Autoatenção (Self-Attention)

A **autoatenção** é o mecanismo que permite ao modelo entender o **contexto** de uma frase. Diferente de sistemas antigos que liam palavra por palavra, a autoatenção calcula, para cada posição em uma sequência, o "peso" ou importância que deve ser dado a todas as outras palavras da mesma frase.

-   **Exemplo de Ambiguidade:** Na frase _"O banco estava cheio de dinheiro"_, a autoatenção atribui um peso alto à conexão entre as palavras "banco" e "dinheiro", permitindo que o modelo identifique que se trata de uma instituição financeira e não de um assento.

### 4.4 Transformer

O **Transformer** é a arquitetura de rede neural, introduzida em 2017, que tornou os LLMs modernos viáveis. Ele consolidou o uso da autoatenção para processar dados em larga escala.

-   **Processamento Massivo:** Essa arquitetura permitiu treinar modelos com bilhões de parâmetros em trilhões de tokens, permitindo que a máquina aprendesse implicitamente estruturas linguísticas e fatos do mundo.
-   **Padrões Estatísticos:** No Transformer, o conhecimento não está em regras gramaticais fixas, mas em distribuições de probabilidade que preveem o próximo token com base em oceanos de estatísticas coletadas da internet.

É fundamental notar que, apesar da fluência, esses sistemas focam na **plausibilidade estatística** e não na compreensão real da verdade, o que pode levar a "alucinações" onde o modelo inventa informações de forma muito convincente.

## 5. Processo de Treinamento dos Modelos Generativos

### 5.1 Pré-treinamento
Esta é a fase inicial e mais robusta, onde o modelo constrói sua base de conhecimento.

-   **O que acontece:** O modelo aprende a prever **tokens mascarados** ou a próxima palavra em uma sequência, baseando-se em padrões estatísticos de como as palavras se conectam.
-   **Dados:** É utilizado um volume massivo de informações, incluindo **bilhões de documentos** coletados da internet, livros digitalizados e códigos-fonte.
-   **Custo:** Esta fase é extremamente intensiva em termos de **energia e capacidade computacional**.
-   **Resultado:** O sistema aprende implicitamente estruturas linguísticas, fatos do mundo e padrões de raciocínio.

### 5.2 Fine-tuning (Refinamento)

Após o pré-treino, o modelo passa por um ajuste fino para se tornar mais útil em tarefas práticas.

-   **O que acontece:** São utilizados **datasets menores e mais controlados** para calibrar o comportamento do sistema.
-   **Objetivo:** O foco é tornar o modelo mais **preciso e fluente** em tarefas específicas, refinando a forma como ele responde aos comandos do usuário.

### 5.3 RLHF (Aprendizado por Reforço com Feedback Humano)

Esta é a etapa final, que utiliza a lógica do **aprendizado por reforço** para alinhar a IA às expectativas humanas.

-   **O que acontece:** Avaliadores humanos classificam pares de respostas geradas pelo modelo, indicando qual é a melhor em termos de qualidade e utilidade.
-   **Ajuste:** Um sistema de aprendizado por reforço utiliza esse feedback para ajustar o modelo, recompensando-o quando ele gera respostas parecidas com as preferidas pelos humanos.
-   **Impacto no Usuário:** É o RLHF que produz o **comportamento conversacional**, a capacidade de seguir instruções e o cuidado com a segurança que os modelos modernos exibem.

**Ponto Crítico:** Apesar dessas etapas complexas, os materiais enfatizam que o treinamento foca na **plausibilidade estatística** e não na verdade factual. Como o modelo aprende padrões de probabilidade e não compreensão real, ele pode gerar informações incorretas (alucinações) com um tom extremamente assertivo e fluente.

## 6. Limitações e Uso Responsável

As limitações da Inteligência Artificial (IA) generativa são inerentes à sua própria arquitetura e ao modo como esses sistemas são treinados.

### 6.1 Alucinações

As alucinações ocorrem quando o modelo gera informações incorretas ou inventadas com a mesma fluência e **tom assertivo** de um conteúdo preciso.

-   **Natureza Estrutural:** Esse fenômeno não é um erro passageiro ou um "bug" que será corrigido facilmente, mas uma consequência direta de como os modelos são construídos.
-   **Falta de Compreensão:** Como a máquina foca na **plausibilidade estatística** e não na verdade factual, ela não "sabe" que errou; ela apenas produz o que é matematicamente provável de vir a seguir em uma frase.
-   **Referências Inventadas:** Um exemplo comum é a criação de referências bibliográficas plausíveis (com nomes de autores e títulos que fazem sentido), mas que **não existem na realidade**.

### 6.2 Corte de conhecimento (_Knowledge Cutoff_)

Diferente do pensamento humano ou de sistemas conectados em tempo real, os Grandes Modelos de Linguagem (LLMs) possuem um limite temporal para o que sabem.

-   **Data de Treino:** O modelo foi treinado com um conjunto de dados que termina em uma data específica.
-   **Sem Acesso Posterior:** Isso significa que a IA não tem acesso a informações ou eventos que ocorreram após esse **"corte de conhecimento"**, a menos que tenha ferramentas externas acopladas.

### 6.3 O Mito da Imaterialidade
Embora o uso da IA pareça instantâneo e "limpo", o sistema possui um "corpo" físico extenso.

-   **Início na Mineração:** Todo sistema de IA começa com a extração de **lítio e terras-raras**, fabricação de chips e construção de instalações industriais de enorme escala.
-   **Decisões sem Informação:** O mito de que a computação é etérea faz com que usuários e empresas ignorem as externalidades reais (energia, água e trabalho) ao adotar soluções tecnológicas.
-   **Densidade de Energia:** Um único rack de servidores modernos pode consumir energia equivalente a **10 ou 30 residências**.
-   **Escala Global:** Projeta-se que data centers de IA consumam **500 TWh em 2026**, quase o consumo total anual de eletricidade do Brasil.
-   **Pegada de Carbono:** Estima-se que treinar o GPT-3 emitiu 552 toneladas de CO2, o equivalente a **276 voos de ida e volta entre São Paulo e Nova York**.
-   **Consumo Hídrico:** O processamento gera calor que exige resfriamento. Em 2022, a **Microsoft consumiu 6,4 bilhões de litros de água** e o **Google 5,6 bilhões**, o que gera conflitos em regiões com escassez hídrica.
-   **Consultas Individuais:** Uma pergunta a um LLM consome de **10 a 30 vezes mais energia** do que uma busca tradicional no Google.
-   **Plataformas de Crowdwork:** Grande parte dessa rotulagem é feita por trabalhadores em plataformas como a Amazon Mechanical Turk, que são pagos com **valores muito baixos** por tarefa.
- **Extração de Dados:** Há conflitos éticos e judiciais sobre o uso de dados de artistas, jornalistas e acadêmicos coletados via _scraping_ sem consentimento.


### 6.4 Questões éticas e LGPD

O uso desses dados levanta debates significativos sobre ética e privacidade, conforme destacado nas fontes:

-   **Consentimento:** O uso de dados gerados por usuários para melhorar produtos sem o **consentimento explícito** é uma preocupação central, estando no escopo de regulamentações como a **LGPD (Lei Geral de Proteção de Dados)** no Brasil e o GDPR na Europa.
-   **Vieses Herdados:** Como os sistemas dependem do "gabarito" humano, eles acabam **herdando falhas e preconceitos** dos rotuladores. Se as pessoas que rotularam dados no passado possuíam vieses (como preconceito contra nomes ou bairros em triagens de currículo), a IA aprenderá e automatizará essas exclusões de forma invisível.
-   **Auditoria Necessária:** Por ser um sistema desenhado por humanos, a tecnologia carrega qualidades e preconceitos de seus criadores, o que exige que o profissional crítico questione as regras e os objetivos que a máquina está tentando otimizar

### 6.5 Verificação de Fontes

A verificação de fontes citadas por modelos de linguagem (LLMs) é uma **prática obrigatória, não opcional**.

-   **Referências Plausíveis mas Falsas:** Devido ao modo como são treinados, os LLMs não recuperam artigos de uma biblioteca, mas geram textos estatisticamente prováveis. Isso significa que a IA pode criar uma referência bibliográfica que parece correta — com autores reais e títulos coerentes — mas que **não existe na realidade**.
-   **Limitação do "Corte de Conhecimento":** É fundamental lembrar que os modelos possuem uma data limite de treinamento; portanto, afirmações sobre eventos recentes podem ser geradas sem acesso a informações atualizadas, exigindo verificação externa redobrada.

### 6.6 Avaliação Crítica das Respostas
Uma postura crítica exige que o usuário não se deixe seduzir pela forma como a IA apresenta a informação.

-   **Fluência vs. Verdade:** O limite estrutural da IA generativa é que ela foca na **plausibilidade estatística e não na verdade**. Uma resposta pode ser inteiramente falsa, mas apresentada com um **tom assertivo e fluente**, o que pode enganar o usuário desatento.
-   **Alucinação Estrutural:** As "alucinações" (informações inventadas) não são um erro temporário ou um _bug_, mas uma consequência direta da arquitetura do sistema. Entender isso é o que permite ao profissional usar a tecnologia com critério.

### 6.7 Boas Práticas no Uso Acadêmico e Profissional

-   **Auditoria de Vieses:** Profissionais devem ser capazes de realizar uma "auditoria pessoal" nos serviços que utilizam, questionando se o sistema carrega padrões de exclusão ou preconceitos herdados dos humanos que rotularam os dados originais (o "gabarito").
-   **Questionamento da "Bolha":** É importante identificar em qual "bolha invisível" os algoritmos de recomendação (aprendizado não supervisionado) estão inserindo o usuário, para evitar que o mapa do mundo e o consumo de informações fiquem cada vez mais restritos.
-   **Entender as "Regras do Jogo":** O profissional crítico deve perguntar: "quais são as regras do jogo que esta máquina está tentando ganhar?". Isso envolve identificar qual objetivo o sistema está otimizando (como tempo de tela ou economia de combustível no GPS) e quais os possíveis efeitos colaterais dessa otimização.
-   **Reconhecimento do Trabalho Humano:** Ter consciência do "trabalho fantasma" (_ghost work_) — o esforço humano invisível e muitas vezes precário que rotula os dados — é parte da literacia ética necessária para compreender a infraestrutura da IA.

Em suma, o uso responsável da IA na prática profissional consiste em tratar a tecnologia como um **sistema desenhado por humanos**, que herda tanto qualidades quanto preconceitos, exigindo supervisão constante e verificação rigorosa de seus resultados.

## 7 Naturalização Tecnológica
A naturalização é o processo pelo qual uma tecnologia se torna tão onipresente que passa a ser percebida como **invisível, inevitável e óbvia**.

-   **Invisibilidade:** Quando um sistema funciona perfeitamente e está em todo lugar, o cérebro para de analisá-lo conscientemente para economizar energia, tornando as decisões desses sistemas (como feeds de notícias ou GPS) inquestionáveis.
-   **Inscrições de Valores:** Segundo Bruno Latour, os objetos tecnológicos carregam "inscrições" — valores e escolhas de seus criadores que operam silenciosamente quando a tecnologia é naturalizada.
-   **Tecnopólio:** Citando Neil Postman, o estágio onde a tecnologia se torna a própria fonte de legitimidade, fazendo com que resultados gerados por máquinas pareçam mais confiáveis do que os humanos.

### 7.1 As Quatro Ilusões da IA
O design das interfaces de IA oculta sua infraestrutura e limitações, gerando quatro crenças equivocadas nos usuários:

1.  **Confiabilidade:** O usuário crê que a IA verifica fatos, mas ela gera textos estatisticamente plausíveis (**papagaios estocásticos**) e pode "alucinar" referências inexistentes.
2.  **Neutralidade:** Crê-se na objetividade da máquina, mas ela herda vieses dos dados de treinamento que refletem desigualdades históricas.
3.  **Gratuidade:** Ignoram-se os custos ambientais (energia e água) e humanos (_ghost work_ em condições precárias).
4.  **Universalidade:** Acredita-se que a IA funciona igual para todos, mas modelos treinados majoritariamente em inglês (>90%) têm desempenho inferior em outros idiomas e contextos culturais, como o brasileiro.

### 7.2 Vieses Algorítmicos
Os vieses ocorrem quando os dados de treinamento refletem preconceitos históricos, e a IA, por meio de sua lógica de otimização, os reproduz em escala.

### 7.3 A Prática da Desnaturalização
Desnaturalizar a IA não significa rejeitar a tecnologia, mas desenvolver a **literacia crítica**. O primeiro passo é o "Reconhecer": identificar onde a IA está presente (mesmo em aplicativos comuns como Spotify e Google Maps) e questionar quais dados a alimentam, quem ela representa e quais objetivos ela está otimizando. Para profissionais de engenharia e tecnologia, essa análise deixa de ser um "complemento ético opcional" para se tornar uma **competência técnica fundamental**.

## Mapa Mental
```text
IA
│
├── Machine Learning
│   ├── Supervisionado
│   ├── Não supervisionado
│   └── Reforço
│
├── Evolução
│   ├── IA Simbólica
│   ├── IA Conexionista
│   └── IA Generativa
│
├── LLMs
│   ├── Token
│   ├── Embedding
│   ├── Self-Attention
│   ├── Transformer
│   └── Treinamento
│       ├── Pré-treinamento
│       ├── Fine-tuning
│       └── RLHF
│
└── Limitações e Uso Responsável
│   ├── Alucinações
│   ├── Corte de conhecimento
│   ├── O Mito da Imaterialidade
│   ├── LGPD
│   ├── Verificação de fontes
│   ├── Avaliação crítica
│   
└── Naturalização Tecnológica    
    ├── As Quatro Ilusões da IA
    ├── Vieses Algorítmicos
    ├── A Prática da Desnaturalização
```

## Conclusão
A Inteligência Artificial moderna evoluiu de sistemas baseados em regras para modelos capazes de aprender padrões estatísticos a partir de grandes volumes de dados. Embora os LLMs tenham ampliado significativamente as aplicações da IA, suas limitações técnicas, impactos sociais e questões éticas exigem uso crítico e responsável. Compreender como esses sistemas aprendem, suas restrições e seus custos é essencial para utilizá-los de forma consciente em contextos acadêmicos e profissionais.

## Referências
-   **PLACCA, J. A.**  _Como a IA aprende_. São Paulo: Univesp, 2026. 12 p. (Série IA na Prática Acadêmica e Profissional, Quinzena 1, Módulo 2).
-   **PLACCA, J. A.**  **O custo invisível da IA**. São Paulo: Univesp, 2026. 11 p. (Série IA na Prática Acadêmica e Profissional, Quinzena 1, Módulo 3).
-   **PLACCA, J. A.**  **Quando se para de questionar: naturalização e vieses algorítmicos**. São Paulo: Univesp, 2026. 13 p. (Série IA na Prática Acadêmica e Profissional, Quinzena 1, Módulo 4).
-   **ASSOCIATION FOR COMPUTING MACHINERY [ACM].**  _Fathers of the deep learning revolution receive ACM A.M. Turing Award_. ACM, 2019.
-   **MITCHELL, T. M.**  _Machine learning_. New York: McGraw-Hill, 1997.
-   **VASWANI, A. et al.**  _Attention is all you need_. _Advances in Neural Information Processing Systems_, v. 30, 2017
