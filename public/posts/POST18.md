O **pensamento computacional** é definido como uma habilidade analítica fundamental para todos os seres humanos, não se restringindo apenas a cientistas da computação. Ele envolve a **resolução de problemas**, a **projeção de sistemas** e a **compreensão do comportamento humano** ao extrair conceitos fundamentais da ciência da computação.
Diferente do que o nome pode sugerir, o pensamento computacional é uma **forma de pensamento humano**, e não um esforço para fazer as pessoas pensarem como máquinas. Enquanto computadores são limitados e metódicos, os humanos são criativos e usam o pensamento computacional para equipar aparelhos e resolver desafios que não seriam possíveis de enfrentar sozinhos.
Em suma, ele permite que as pessoas deixem de ser apenas consumidoras passivas de tecnologia para se tornarem cidadãos que compreendem como o mundo digital funciona e como utilizá-lo para transformar a realidade

## Origem e Evolução

-   **Seymour Papert (1980):** O termo foi cunhado por Papert, que via na programação uma forma de ensinar o computador e, nesse processo, aprender a pensar e lidar com erros (processo de _debug_).
-   **Jeannette Wing (2006):** O conceito ganhou relevância global após o artigo de Wing, que defendeu a inclusão do pensamento computacional na alfabetização básica das crianças, junto à leitura, escrita e aritmética.

## Princípios do Pensamento Computacional
Os princípios do pensamento computacional envolvem um conjunto de ferramentas mentais e habilidades analíticas utilizadas para resolver problemas complexos e projetar sistemas. Esses princípios são aplicáveis a diversas áreas da vida e não apenas à computação.
Pensar computacionalmente é uma forma de os **humanos** resolverem problemas de maneira imaginativa e inteligente, utilizando máquinas apenas para expandir o alcance de sua criatividade. É uma habilidade analítica fundamental que deve ser integrada à alfabetização básica, junto à leitura, escrita e aritmética

1. Abstração

A abstração é a capacidade de **focar apenas nos aspectos relevantes de um problema**, ignorando detalhes supérfluos para torná-lo tratável.

-   **Simplificação:** Envolve pensar em múltiplos níveis, permitindo que se lide com sistemas complexos sem a necessidade de entender cada detalhe técnico imediato.
-   **Exemplo Cotidiano:** Na reciclagem de plásticos, abstraímos as diferenças entre milhares de objetos (como canetas ou garrafas) e focamos apenas na propriedade comum de serem feitos de plástico para descartá-los na lixeira correta.
**Exemplo em Programação:** Em um sistema bancário, uma classe `ContaBancaria` representa apenas as informações e operações essenciais, como **consultar o saldo, realizar depósitos e efetuar saques**. Os detalhes internos de como essas operações são implementadas, como validações, atualização do saldo e regras de segurança, permanecem ocultos. Assim, quem utiliza a classe precisa conhecer apenas os métodos disponíveis para interagir com a conta, sem se preocupar com sua implementação interna.
```java
//Implementação Interna
class ContaBancaria {
    private double saldo;

    public void depositar(double valor) {
        saldo += valor;
    }

    public void sacar(double valor) {
        if (saldo >= valor) {
            saldo -= valor;
        }
    }

    public double consultarSaldo() {
        return saldo;
    }
}
```

Ao utilizar essa classe, o programador **não precisa saber**:
-   como o saldo é armazenado;
-   como o saque é validado;
-   como o depósito atualiza o saldo internamente.
```java
// Código que utiliza a abstração
ContaBancaria conta = new ContaBancaria();

conta.depositar(500);
conta.sacar(200);

System.out.println(conta.consultarSaldo());
```
Basta utilizar os métodos disponibilizados (`depositar`, `sacar` e `consultarSaldo`), enquanto toda a complexidade da implementação permanece escondida. **Essa é a essência da abstração: o usuário da classe interage apenas com o que ela faz, sem precisar conhecer como ela faz.**

2. Decomposição

Este princípio consiste em **dividir um problema grande e complexo em pedaços menores** e mais fáceis de gerenciar, que podem ser resolvidos de forma independente.
-   **Dividir para Conquistar:** É uma estratégia fundamental que permite reduzir a complexidade geral da tarefa ao focar em cada componente por vez.
-   **Exemplo Cotidiano**:** A tarefa de "fritar um ovo" pode ser decomposta em etapas menores como "pegar a frigideira", "colocar o óleo" e "ligar o fogo".
- **Exemplo em Programação:** Ao desenvolver um sistema de cadastro de usuários, em vez de criar um único bloco de código responsável por toda a funcionalidade, o problema é dividido em tarefas menores e independentes, como **validar os dados informados**, **criar o objeto do usuário**, **salvar as informações no banco de dados** e **enviar um e-mail de confirmação**. Dessa forma, cada parte pode ser implementada, testada e corrigida separadamente, tornando o sistema mais organizado, reutilizável e fácil de manter.

3. Reformulação de problemas

O pensamento computacional envolve a capacidade de **transformar um problema aparentemente complexo em outro equivalente que já possui uma solução conhecida ou mais simples de implementar**. Em vez de tentar resolver diretamente um problema difícil, busca-se uma nova forma de representá-lo, aproveitando algoritmos, técnicas ou estruturas já existentes.

-   **Métodos de Transformação:** 
	- **Redução:** transformar um problema em outro cuja solução já é conhecida.
	-   **Transformação:** alterar a representação do problema para facilitar sua resolução.
	-   **Incorporação:** adaptar um problema para que ele possa ser resolvido por uma técnica existente.
	-   **Simulação:** representar o comportamento de um sistema ou situação para analisar seu funcionamento antes de implementá-lo.
	
-   **Prevenção e recuperação de falhas**
O pensamento computacional também considera **o que pode dar errado** durante a execução de um sistema. Por isso, procura desenvolver soluções capazes de prevenir falhas ou minimizar seus impactos, utilizando técnicas como:
	-   redundância de informações;
	-   correção de erros;
	-   contenção de danos;
	-   mecanismos de recuperação em caso de falha.
- **Exemplo Cotidiano:** Imagine que você precisa separar uma pilha de roupas para lavar: Em vez de analisar cada peça individualmente e decidir um programa diferente para a máquina, você **reformula o problema** utilizando uma característica em comum: a cor. Assim, basta separar as roupas em **claras** e **escuras**, tornando a tarefa muito mais simples e organizada.

- **Exemplo em Programação:** Imagine um sistema que precisa verificar se um usuário possui permissão para acessar determinada funcionalidade.
Uma solução seria escrever diversas condições (`if`) para cada tipo de usuário. Porém, essa abordagem rapidamente se torna difícil de manter.
Em vez disso, o problema pode ser **reformulado** utilizando uma estrutura de dados que associa cada perfil às suas permissões. Assim, em vez de várias verificações, basta consultar essa estrutura.

```java
Map<String, List<String>> permissoes = new HashMap<>();

permissoes.put("ADMIN", List.of("LER", "EDITAR", "EXCLUIR"));
permissoes.put("USUARIO", List.of("LER"));

if (permissoes.get(perfil).contains("EDITAR")) {
    System.out.println("Acesso permitido");
}
```
Nesse exemplo, o problema deixa de ser "escrever inúmeras condições" e passa a ser "consultar uma estrutura de dados". **Essa mudança na forma de representar o problema torna a solução mais simples, organizada e fácil de manter**, ilustrando o conceito de reformulação de problemas apresentado por Jeannette Wing.

4. Algoritmos e eficiência

Um algoritmo é uma **sequência finita e lógica de passos** definida para resolver um problema ou realizar uma tarefa.

-   **Linguagem Universal:** É a linguagem que os computadores entendem, mas que humanos também seguem de forma implícita em rotinas diárias.
-   **Eficiência e Critérios:** Um programa não deve ser julgado apenas pela sua corretude, mas também pela sua **eficiência, estética e simplicidade**.
-   **Trocas (****Trade-offs****):** A eficiência envolve fazer escolhas entre o uso de tempo e espaço, bem como entre o poder de processamento e a capacidade de armazenamento

- **Exemplo Cotidiano:** Preparar um ovo frito é seguir um algoritmo. Primeiro pega-se a frigideira, depois adiciona-se o óleo, liga-se o fogão, espera-se a frigideira aquecer, quebra-se o ovo, aguarda-se o cozimento e, por fim, desliga-se o fogo e serve-se o alimento. Se essas etapas forem executadas na ordem correta, o resultado esperado será obtido. Além disso, diferentes maneiras de realizar essa tarefa podem ser mais ou menos eficientes, como aquecer a frigideira antes de quebrar o ovo ou utilizar uma tampa para acelerar o cozimento.
- **Exemplo em Programação:** Em um sistema de autenticação, o algoritmo de login segue uma sequência lógica de verificações. Primeiro, verifica se o usuário existe; em seguida, valida se a senha informada está correta; por fim, confirma se o usuário possui permissão para acessar o sistema. Somente quando todas as etapas são concluídas com sucesso o acesso é liberado. Esse processo demonstra como um algoritmo organiza uma sequência de decisões para resolver um problema de forma correta e eficiente.

5. Heurísticas

As heurísticas referem-se ao uso de **raciocínio heurístico para a descoberta de soluções** em contextos de incerteza.

-   **Tomada de Decisão:** Envolve planejar, aprender e agendar ações mesmo quando não se tem todas as informações ou quando os recursos são limitados.
-   **Aproximação:** Ao buscar eficiência, o pensamento computacional questiona se uma solução aproximada é "boa o suficiente" para o desafio em questão.

- **Exemplo Cotidiano:** Imagine que você está preso em um congestionamento e precisa chegar rapidamente ao seu destino. Em vez de conhecer exatamente qual é a rota mais rápida, você escolhe um caminho alternativo com base na sua experiência ou em informações parciais, como o movimento das ruas ou um aplicativo de navegação. Essa decisão não garante o melhor percurso, mas aumenta as chances de chegar mais rápido utilizando uma estratégia baseada em conhecimento prévio.
- **Exemplo em Programação:** Um aplicativo de mapas precisa encontrar a melhor rota entre dois pontos. Em cidades muito grandes, calcular todas as rotas possíveis seria extremamente demorado. Em vez disso, o algoritmo utiliza heurísticas, como a distância em linha reta até o destino ou as condições atuais do trânsito, para priorizar os caminhos mais promissores. Assim, ele encontra uma rota muito boa em pouco tempo, mesmo sem garantir que seja a melhor entre todas as possibilidades.

## Influência em Outras Áreas
O pensamento computacional influencia diversas áreas da sociedade ao oferecer uma forma estruturada e eficiente de resolver problemas.

-   **Ciência:** Transforma áreas como **estatística** (aprendizado de máquina), **biologia** (biologia computacional), **economia** (teoria dos jogos computacional), além de impactar a **química** e a **física** com a nano computação e a computação quântica.
-   **Educação e Mercado de Trabalho:** Tornou-se uma competência essencial na formação dos estudantes, sendo incorporado à **BNCC**. Também contribui para a inovação em áreas como gestão, indústria, saúde, direito e artes, desenvolvendo o raciocínio lógico e a capacidade de resolver problemas complexos.
-   **Vida Cotidiana:** Está presente em diversas atividades do dia a dia, como organizar a mochila antecipadamente (**prefetching e caching**), refazer os passos para encontrar um objeto (**backtracking**), decidir entre comprar ou alugar um produto (**algoritmos on-line**) e escolher a fila mais rápida do supermercado (**modelagem de desempenho**).

Em resumo, o pensamento computacional vai além da programação, fornecendo ferramentas para analisar problemas, tomar decisões e criar soluções mais eficientes em diferentes áreas do conhecimento e da vida cotidiana.

## O que pensamento computacional **não é**
O pensamento computacional **não se limita à programação**, nem consiste em fazer humanos pensarem como computadores. Trata-se de uma habilidade analítica baseada em abstração, lógica e resolução de problemas, e não de uma rotina mecânica. Além disso, **não é exclusivo da Ciência da Computação**, sendo útil em diversas áreas do conhecimento e da vida cotidiana. Seu foco está nos **conceitos e estratégias** para resolver problemas, combinando raciocínio matemático e engenharia, e **não depende necessariamente do uso de computadores**, podendo ser desenvolvido por meio de atividades de computação desplugada.

## Características do pensamento computacional
O pensamento computacional é uma **habilidade analítica baseada na conceitualização**, que vai além da programação e utiliza conceitos da Ciência da Computação para resolver problemas e projetar sistemas. Suas principais características são:
-   **Conceitualização, não programação:** envolve pensar em diferentes níveis de abstração, e não apenas escrever código.
-   **Habilidade fundamental:** é uma competência essencial para qualquer pessoa, não uma atividade mecânica.
-   **Forma humana de pensar:** utiliza a criatividade e o raciocínio humano para resolver problemas com o apoio da computação.
-   **Integra matemática e engenharia:** combina fundamentos matemáticos com a construção de soluções para problemas do mundo real.
-   **Foco em ideias:** prioriza conceitos e estratégias para resolver problemas, e não apenas software, hardware ou outros artefatos tecnológicos.

O pensamento computacional baseia-se no reconhecimento do que é **computável** e no aproveitamento do poder e dos limites dos processos computacionais, sejam eles realizados por humanos ou por máquinas. Ele permite reformular problemas aparentemente difíceis em formas que já sabemos como resolver, utilizando técnicas como redução, transformação e simulação.

Além disso, envolve o desenvolvimento de atitudes como a confiança para influenciar sistemas complexos sem entender cada detalhe técnico imediato, além da capacidade de pensar em termos de prevenção, proteção e recuperação em cenários de falha.

## A IA e o Pensamento Computacional entre os Desenvolvedores

A Inteligência Artificial não substitui o pensamento computacional; ela o complementa e potencializa. Para os desenvolvedores, a IA tornou-se uma ferramenta capaz de acelerar tarefas como geração de código, depuração, documentação, testes e pesquisa de soluções. No entanto, a qualidade dos resultados produzidos pela IA depende diretamente da capacidade do profissional de **analisar problemas, decompor tarefas, abstrair conceitos, avaliar algoritmos e validar as respostas obtidas**.

Um desenvolvedor que domina o pensamento computacional consegue utilizar a IA de forma mais eficiente, elaborando melhores instruções (_prompts_), identificando erros, escolhendo as soluções mais adequadas e compreendendo as limitações das respostas geradas. Por outro lado, depender exclusivamente da IA sem compreender os fundamentos da computação pode levar à produção de códigos incorretos, inseguros ou de difícil manutenção.

Assim, a IA não elimina a necessidade do pensamento computacional. Pelo contrário, ela reforça sua importância, pois cabe ao desenvolvedor interpretar o problema, tomar decisões, validar as soluções e garantir que o software atenda aos requisitos de forma correta, eficiente e segura. Em outras palavras, **a IA auxilia na implementação, mas o pensamento computacional continua sendo a principal habilidade para projetar e resolver problemas de software**.

## Conclusão
O pensamento computacional é uma habilidade essencial para compreender problemas, criar soluções e utilizar a tecnologia de forma crítica. Mais do que aprender a programar, ele desenvolve a capacidade de analisar situações, decompor problemas, criar algoritmos, utilizar abstrações e tomar decisões eficientes. Em um mundo cada vez mais apoiado por Inteligência Artificial, essa habilidade torna-se ainda mais importante, pois permite que as pessoas utilizem a tecnologia de maneira consciente, validando soluções e transformando ideias em sistemas úteis

## Referências
-   **UNIVESP.**  _Pensamento Computacional - Partes 1, 2 e 3_. São Paulo: Univesp, [s.d.]. Vídeo-aulas apresentadas por Marcos e Jana, com a participação dos professores convidados Reinaldo (primeiro conteudista da disciplina), Seig (USP/Harvard), Sérgio Amaral (Unicamp), além de Ricardo e Mônica.
-   **WING, J.**  _Pensamento Computacional – Um conjunto de atitudes e habilidades que todos, não só cientistas da computação, ficaram ansiosos para aprender e usar_. Tradução de Cleverson Sebastião dos Anjos. **Revista Brasileira de Ensino de Ciência e Tecnologia (RBECT)**, v. 9, n. 2, p. 1-10, mai./ago. 2016. Tradução do original "Computational Thinking", publicado na _Communications of the ACM_, mar. 2006
