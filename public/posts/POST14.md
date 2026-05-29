No desenvolvimento de software, a resiliência e a previsibilidade são fundamentais. **Um sistema não se destaca apenas por como executa suas tarefas quando tudo dá certo, mas sim por como reage quando as coisas dão errado**.

Este guia aborda a evolução das estratégias de controle de fluxo e gerenciamento de falhas  desde os mecanismos nativos e tradicionais de **Tratamento de Exceções (`try-catch-finally` e `throw`)** — ideais para conter desastres imprevisíveis de infraestrutura —, até padrões de design avançados como o **Result Pattern**.  Essas duas abordagens deixam de ser concorrentes para se tornarem aliadas estratégicas, separando erros técnicos de infraestrutura de regras explícitas de negócio, garantindo um código limpo, performático e imutável.


## O que é Try/Catch?
O **`try-catch`** é uma estrutura de controle utilizada na programação para **tratamento de exceções** (erros que acontecem enquanto o programa está rodando).

### Como funciona a estrutura?
-   **`try` (Tentar):** Aqui dentro fica o código que _pode_ dar algum erro (ex: ler um arquivo que não existe, conectar a um banco de dados fora do ar, dividir um número por zero).
    
-   **`catch` (Capturar):** Se o erro acontecer dentro do bloco `try`, o programa para a execução ali na hora e pula direto para o bloco `catch`. Aqui se trata o erro (salva um log, mostra uma mensagem amigável, etc.).
    
-   **`finally` (Opcional):** Um bloco que roda **sempre**, ocorrendo erro ou não. É usado para limpar o terreno (fechar arquivos abertos, conexões de banco, etc.).

### Quando usar?
O `try-catch` deve ser utilizado para lidar com **imprevistos externos** que o código não consegue prever ou controlar com 100% de certeza.
-   **Operações de I/O (Entrada e Saída):** Ler/escrever arquivos, acessar pastas.
-   **Comunicação externa:** Requisições de APIs, consultas a bancos de dados, conexões de rede

### Quando NÃO usar?

O `try-catch` **não deve ser usado para mascarar código mal escrito** ou para controlar o fluxo normal do sistema.

-   **Erros de lógica que podem ser evitados com `if`:** Para verificar se algo é nulo ou se um número é zero antes de fazer a operação, use o `if`. `try-catch` é computacionalmente "caro" (pesado para o sistema).   
-   **Validações simples:** Não use `try-catch` para ver se o usuário digitou uma senha curta. Use validações condicionais.
-   **Pegar o erro e não fazer nada:** Deixar o bloco `catch` vazio (`catch { }`) é uma péssima prática (chamada de _swallowing exceptions_), pois o programa falha silenciosamente e você nunca vai descobrir o porquê.

	```csharp
	using System;
	using System.IO;

	try
	{
	    StreamReader arquivo = File.OpenText("dados.txt");
	    Console.WriteLine(arquivo.ReadLine());
	    // Se o arquivo não existir, o erro acontece aqui...
	}
	catch (FileNotFoundException)
	{
	    Console.WriteLine("O arquivo 'dados.txt' não foi encontrado.");
	}
	finally
	{
	    // ...mas o finally roda de qualquer jeito para garantir a limpeza
	    Console.WriteLine("Encerrando a operação de leitura.");
	}
	```

### Tipos de Excessões
 Note que no exemplo acima é chamado `catch (FileNotFoundException)`. Existem outros tipos de exceções em c#, sendo a `catch (Exception)` a "mãe" de todas as exceções. Em C#, absolutamente todo erro (seja de arquivo, divisão por zero, falta de memória, nulo) herda da classe base chamada `Exception`. Ao utilizar o `catch (Exception)`, é criado uma **rede de captura genérica** — qualquer erro que acontecer vai cair aqui. Você pode encadear vários blocos `catch` para tratar erros diferentes de formas diferentes. Mas existe uma regra de ouro: **o mais específico deve vir primeiro, e o mais genérico por último.**
 
```csharp
try
{
    // Código que lê um arquivo na rede
    string conteudo = File.ReadAllText(@"\\servidor\compartilhado\dados.txt");
}
catch (FileNotFoundException)
{
    // 1. Se o arquivo especificamente não existir, cai aqui
    Console.WriteLine("O arquivo 'dados.txt' não foi encontrado no servidor.");
}
catch (UnauthorizedAccessException)
{
    // 2. Se o arquivo existir, mas você não tiver permissão de acesso, cai aqui
    Console.WriteLine("Você não tem permissão para abrir este arquivo.");
}
catch (Exception ex)
{
    // 3. Qualquer OUTRO erro inesperado (ex: a rede caiu inteira) cai aqui
    Console.WriteLine($"Ocorreu um erro inesperado: {ex.Message}");
}
```
### Inspecionar o Erro
A abordagem A é válida quando **você só quer saber que o erro aconteceu, mas não precisa de detalhes**.
```csharp
// Abordagem A
catch (FileNotFoundException)
{
    Console.WriteLine("Arquivo sumiu!");
}
```

Se você precisar inspecionar o erro (ver a mensagem do sistema, descobrir em qual linha exata ele quebrou), você precisa dar um **nome** para esse erro, criando uma variável. Usar `ex` (ou qualquer nome que você preferir, como `erro`) te dá acesso ao `ex.Message` (mensagem amigável) e ao `ex.StackTrace` (o rastro de migalhas que o erro deixou no código), o que é essencial para debugar sistemas em produção. Veja a diferença na Abordagem B
```csharp
// Abordagem B: Salvar o erro em um log para descobrir o mistério depois
catch (FileNotFoundException ex) // 'ex' é o nome da variável que guarda o erro
{
    Console.WriteLine("Arquivo sumiu!");
    // Aqui você acessa as propriedades do objeto 'ex'
    Sentry.Log(ex.StackTrace); // Mostra o caminho exato onde o código quebrou
    throw;
}
```
## Throw
O **`throw`** (que significa "lançar" em inglês) é a palavra-chave utilizada no C# (e em várias outras linguagens) para **disparar intencionalmente uma exceção**.
Se o `try-catch` é a rede de proteção que _captura_ o erro, o `throw` é a catapulta que _joga_ o erro para o sistema.
É utilizado quando o código encontra uma situação que **foge da regra de negócio ou que torna impossível continuar a execução** daquele método. Em vez de deixar o programa continuar rodando com dados errados (o que geraria um problema muito pior lá na frente), o `throw` para tudo imediatamente e avisa: _"Daqui eu não passo porque algo está muito errado"_.

### Quando é utilizado?
1.  **Validação de argumentos:** Se um método precisa de um e-mail válido para cadastrar um usuário e recebe um texto vazio.
2.  **Regras de negócio violadas:** Tentar sacar um valor maior do que o saldo da conta.
3.  **Repassar um erro:** Você capturou o erro no `catch` para salvar um log, mas quer que a aplicação (a tela, por exemplo) saiba que o erro aconteceu para mostrar um aviso ao usuário. Veja o exemplo a seguir:
	```csharp
	try
	{
	    string texto = File.ReadAllText("config.json");
	}
	catch (FileNotFoundException ex)
	{
	    // 1. Registra o problema no sistema de logs para o programador ver depois
	    Logger.Log($"Erro crítico: Arquivo de configuração sumiu. Detalhes: {ex.Message}");
	    
	    // 2. Relança o erro para a camada de cima (ex: a interface gráfica) tratar
	    throw; 
	}
	```
### Classes de Exceções Nativas .Net
As "mensagens de throw", no ecossistema do C# e .NET, são as centenas de exceções prontas para quase qualquer situação. Cada uma delas serve para dar um significado semântico ao erro, ou seja, só pelo nome da exceção o programador já sabe o que deu errado. São excessoes para tratar Erros de Argumentos (Validação de Entrada), Erros de Dados e Matemática,  Erros de Operação e Estado do Sistema. 

Veja a baixo um exemplo comum de **`NotImplementedException`**, usada para indicar que o método foi criado, mas o código que faz ele funcionar ainda não foi escrito.  Para o código compilar (já que o C# exige que métodos que retornam algo tenham um `return`), você usa o `throw new NotImplementedException()`.
```csharp
public Client GetById(int id)
{ 
	// O throw aqui avisa a equipe e faz o código compilar sem precisar de um 'return null;' gambiarrado
	throw new NotImplementedException("A busca de clientes por ID ainda será implementada"); 
}
```
As exceções (`try-catch`) são excelentes para imprevistos de infraestrutura (a internet caiu, o banco de dados sumiu). Porém, usar exceções para **regras de negócio** (ex: usuário digitou senha errada, saldo insuficiente) tem dois grandes problemas:
1.  **São pesadas:** Lançar uma exceção obriga o .NET a pausar a execução, capturar toda a Pilha de Chamadas (_Call Stack_) e procurar um `catch`. Isso consome muita memória e processamento.    
2.  **São invisíveis na assinatura do método:** Olhando para a linha `public void Sacar(decimal valor)`, você não sabe se ela pode estourar um erro. Você é obrigado a adivinhar ou ler o código interno para saber se precisa de um `try-catch`.
 É ai que entra design de software, pra não explodir a lanchonete toda vez que algo não acontecer como esperado

## Result Pattern
O **Result Pattern** (Padrão de Resultado) é um padrão de design de software que muda a forma como o código lida com o sucesso ou a falha de uma operação.
Em vez de deixar o programa estourar uma exceção (`throw exception`) quando algo dá errado, o método **retorna um objeto comum** que diz explicitamente se a operação deu certo ou errado, e traz junto os dados ou a mensagem de erro.

---
**Para entender fácil: imagine que você pede um lanche pelo aplicativo.**
-   **Sem o Result Pattern (Usando Exceções):** Se o lanche acabar, a lanchonete explode. O aplicativo trava e fecha.    
-   **Com o Result Pattern:** A lanchonete te entrega uma caixinha (o objeto Result). Você abre a caixinha e vê um bilhete: _"Olha, deu erro, o lanche acabou"_ ou _"Deu certo, aqui está seu lanche"_. O fluxo continua rodando pacificamente.
---
### Quando usar o Result Pattern?
-   **Regras de Negócio (Domain/Use Cases):** Validações de fluxo, checagem de permissões, regras financeiras.    
-   **Operações comuns que falham frequentemente:** Login inválido, cupom de desconto expirado, produto fora de estoque. São situações que você _sabe_ que vão acontecer muito no dia a dia.
    
### Quando NÃO usar?
-   **Erros de Infraestrutura:** Se o banco de dados desconectou ou o arquivo sumiu do disco, use `try-catch`. O Result Pattern não substitui as exceções para desastres reais do sistema.

### Como usar?
O fluxo do **Result Pattern** funciona como uma esteira de entrega dividida em três etapas:


* **1. A estrutura clássica do objeto Result (A Caixa Padronizada):** Em vez de deixar as funções responderem de qualquer jeito, você utiliza um padrão.  O Result é uma classe que tem as propriedades para o Dado solicitado, mensagem de erro ou de sucesso. Ele sempre tem duas divisórias externas: O indicador de **Sucesso ou Falha** e um espaço para o conteúdo(*dado*).
  * Se o indicador for Sucesso, o conteúdo dentro é o **Dado solicitado**
  * Se o indicador for  Falha, o conteúdo é o **Motivo do erro**.

>Você pode criar a classe no seu projeto ou utilizar bibliotecas, como **`ErrorOr`** ou **`FluentResults`** no C#
---
* **2. Aplicando no método de Negócio (O Trabalho da Fábrica)**: Quando a regra de negócio (como um login ou um saque) é executada, a função faz todas as validações necessárias usando condições simples (`if`).
	```csharp
	public class LoginService
	{
	    // Quem bate o olho aqui sabe exatamente que esse método pode falhar
	    public Result<string> Logar(string usuario, string senha)
	    {
	        if (string.IsNullOrEmpty(usuario) || string.IsNullOrEmpty(senha))
	        {
		        //Se o indicador for  Falha, o conteúdo é o **Motivo do erro**.
	            return Result<string>.Failure("Usuário e senha são obrigatórios.");
	        }

	        if (usuario != "ana" || senha != "1234")
	        {
		        //Essa mensagem é a que apareceria no exemplo de resultado.Error do tópico 3(Consumindo o método)
	            return Result<string>.Failure("Usuário ou senha incorretos.");
	        }

	        // Se o indicador for Sucesso, o conteúdo dentro é o **Dado solicitado**
	        return Result<string>.Success("Token-JWT-Gerado-Com-Sucesso");
	    }
	}
	```   

### 3. Consumindo o método (Quem recebe o envelope)
Aqui o Result se parece com um envelope, quem chamou a função (pode ser a tela do sistema ou uma API). O código não precisa de uma rede de proteção (`try-catch`) porque sabe que o envelope não vai explodir. 
* O solicitante  armazena o retorno do método dentro de uma variável `resultado`
	```csharp
	var resultado = loginService.Logar("ana", "senha_errada");
	```

* Abre o envelope para verificar o conteúdo do envelope
Se `não for sucesso` a lanchonete não explode apenas exibe o conteúdo de `resultado.Error`,  se tiver Sucesso, ele abre e usa o dado.
	```csharp
	if (!resultado.IsSuccess){ 
		// O erro é tratado como um dado comum, sem estourar o programa
		Console.WriteLine($"Não foi possível logar. Motivo: {resultado.Error}"); 
		return;
	}
  Console.WriteLine($"Login efetuado! Seu token é: {resultado.Value}"); 
	```
> O envelope do Result deve ser imutável; quem consome apenas lê o resultado, nunca altera o que está lá dentro

## Como o Result trabalha com o Try/Catch?
```md
[ Método A (Tem try-catch?) ] <-- Se não, o programa crasha aqui ▲ │ (O erro sobe para cá) │ [ Método B (Tem try-catch?) ] <-- Se não tiver, o erro continua subindo ▲ │ (O erro nasce aqui e sobe) │ [ Método C (Estourou o throw!) ]
```

Eles são **parceiros com responsabilidades diferentes**. O _Result Pattern_ nasceu justamente para evitar o "efeito dominó" de destruição das exceções aconteça por motivos bobos (como uma senha errada ou um cartão recusado).

Em um sistema profissional, o código é dividido em camadas. Geralmente temos as camadas de **Infraestrutura** (banco de dados, arquivos, APIs externas) e as camadas de **Negócio** (as regras do seu sistema). 

Em vez de deixar erros de infraestrutura quebrar o sistema subindo a pilha de chamadas, o código captura a exceção e a envelopa em um `Result.Failure("Banco indisponível")`. 


```csharp
static Result<string> FazerPedido(string nomeLanche) { 
	try
	{
		  // Lógica fictícia: se leu o arquivo e chegou aqui, o lanche está disponível 
		  return Result<string>.Success($"Um delicioso {nomeLanche}");
	 }
	 catch (Exception) { 
		 // Capturamos o desastre técnico aqui na base e o transformamos em um Result amigável!
		 // Desse modo, o erro não sobe quebrando a Pilha de Chamadas até a tela.
		 return Result<string>.Failure("Lanchonete fechada: Nosso sistema de estoque sumiu do servidor."); 
	 }
}
```

## Comparativo
| Caracteristica | Throw / Try / Catch | Result Pattern |
|--|--|--|
| Visibilidade | **Invisível (Implícito):** Olhando a assinatura de um método, você não sabe se ele pode estourar um erro | **Explícito:** A assinatura do método grita o que pode acontecer: `Result<User, ValidationError>`|
| Performance | **Pesado:** Capturar a _Stack Trace_ (o rastro de onde o erro aconteceu) exige muito processamento da CPU | **Leve:** É apenas a criação de um objeto comum na memória, tão rápido quanto retornar um número ou string |
| Tipagem | **Fraca:** O bloco `catch(Exception ex)` captura qualquer coisa. Você perde a tipagem do erro específico facilmente. | **Forte:** Você pode tipar exatamente quais erros aquela função retorna (ex: `UserNotFoundError`, `InvalidPasswordError`)
| Uso Ideal| Situações **excepcionais** e imprevisíveis (infraestrutura, falta de memória, queda de rede) | Regras de **negócio** e fluxos esperados (validação de formulário, usuário não encontrado) |

## Conclusão
A jornada pelo entendimento do tratamento de erros — saindo do uso tradicional do `try-catch` até a implementação do _Result Pattern_ e os conceitos de _Railway Oriented Programming (ROP)_ — transforma profundamente a qualidade e a resiliência de um software.

**O próximo passo evolutivo envolve maturidade e robustez:** substituir implementações manuais por bibliotecas consolidadas no ecossistema (como `ErrorOr` ou `FluentResults`),  e mergulhar a fundo em **logs estruturados e observabilidade**. Afinal, converter uma exceção em um dado seguro para o usuário só é uma estratégia perfeita quando garantimos que o rastro técnico do erro foi devidamente registrado, monitorado e mapeado para a equipe de desenvolvimento.

---
**Projeto prático desenvolvido em concomitância a esse artigo: [vitrine-semi-joias]**

[vitrine-semi-joias]:https://github.com/najumattos/vitrine-semi-joias/
