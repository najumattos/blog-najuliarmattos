
## CONCEITOS GIT

* **Git** - É um Sistema de Controle de Versão (VCS - Version Control System) utilizado para registrar, acompanhar e gerenciar o histórico de alterações em arquivos de um projeto. É essencial para o trabalho em equipe, permitindo que várias pessoas colaborem em um mesmo projeto de forma segura e organizada;
* **Github** - É uma plataforma de hospedagem de código em nuvem, baseada no Git. Ela permite armazenar repositórios online, compartilhar projetos, colaborar com outros desenvolvedores e revisar código de forma prática;
* **Repositório Local** - É a pasta no computador do desenvolvedor, manipulada com Git, onde ficam os arquivos do projeto e o histórico de versões; 
* **Repositório Remoto** - É a versão online de um repositório, hospedada em servidores como o GitHub, GitLab ou Bitbucket. Ele permite o compartilhamento e sincronização do projeto com outros colaboradores;
* **Diretório de Trabalho Corrente(WORKING DIRECTORY)** - É o diretório local onde são feitas as alterações por prompts;
* **Alterações elencadas para o Commit(STAGING SNAPSHOT OU STAGE)** - É o local onde você separa e escolhe quais alterações vão ser incluídas no próximo commit;
* **Commits Feitos(COMMIT HISTORY)** - É o histórico de commits em ordem cronológica. É possível visualizar esse histórico através do comando `git log`;
* **PULL REQUESTS(PRs)** - São um pedido para que o seu código seja incluído num projeto. O processo envolve alterar o código na sua branch, fazer um push para a sua branch no GitHub e, em seguida, pedir o Pull Request da sua branch no GitHub para a branch original (de desenvolvimento ou de longo prazo);
* **Code Review (Revisão de Código)** - Processo em que outros programadores revesam o seu código para verificar se ele segue as boas práticas de desenvolvimento, convenções internas da equipe e para identificar possíveis erros ou melhorias.

## COMANDOS GIT

* **Criar um repositório Git vazio na pasta atual(local):** `git init`
* **Visualizar o estado atual do repositório:** `git status`
*  **Copiar um repositório remoto para seu computador:** `git clone  link-repositorio` 
* **Baixar e incorporar (faz merge) mudanças do repositório remoto:**`git pull origin nome-branch`
* **Enviar commits para o repositório remoto:** `git push origin nome-branch`
* **Visualizar o histórico de Commits:** `git log`
 * **Salvar temporariamente alterações de forma paralela ao commit:** `git stash` 
* **Restauraar alterações da lista de Stach:** `git stash pop`
* **Cria um novo commit que desfaz as alterações de um commit anterior:** `git revert hash_do_commit`
* **Desfazer Commits:** `git reset`

* **GIT CONFIG:** Configura informações do usuário:
	```
	// Para todos os repositórios locais
	   git config --global user.name "Seu Nome"
	   git config --global user.email "Seu Email"

	// Para o repositório atual apenas
	   git config user.name "Seu Nome"
	   git config user.email "Seu Email"
	 
	 // Para conferir configurações
	    git config --local –list
	 ```  

* **GIT BRANCH:** Gerenciar as ramificações no repositório:
	```
	 // Ver Branchs
		git branch
	 
	 // Criar Branch
	    git branch nome-da-branch
	 
	 // Trocar Branch
	    git checkout nome-branch
	 
	 // Criar e acessar Branch
	    git checkout -b nome-branch
	``` 

* **GIT COMMIT**
	 ```
	 // Add Todos Arquivos
	    git add .
	 
	 // Add arquivos específicos
	    git add arquivo.extensao

	// Criar Commit
	    git commit -m "Mensagem descritiva"

	// Git commit + git add.
	    git commit -am "Mensagem descritiva"
	```

* **GIT DIFF**
	```
	// Visualizar diferença entre arquivos modificados e o último commit
	   git diff 

	// Visualizar o que tem na `nome_branch_a_comparar` mas não tem na `nome_branch_base` 
	   git diff nome_branch_base nome_branch_a_comparar

	// Visualizar o que tem na `nome_branch_base` mas não tem na `nome_branch_a_comparar`
	   git diff nome_branch_a_comparar nome_branch_base

	// Visualizar diferenças entre os últimos commits de cada branch (locais)
	   git diff nome_branch_base..nome_branch_a_comparar

	// Visualizar diferenças desde o ponto em que as branchs (locais) começam a divergirem
	   git diff nome_branch_base...nome_branch_a_comparar

	// Visualizar diferenças entre branch local que não foram enviadas para o repositório remoto
	   git diff origin/nome_branch_remota nome_branch_local
	```  

## GIT IGNORE
É um arquivo de texto na raiz do projeto que especifica quais arquivos ou pastas devem ser ignorados
**Como usar o `.gitignore`?**
Ao iniciar um diretório, criar um arquivo “.gitignore”no diretório do projeto. Os arquivos adicionados ao .gitignore não são versionados, ou seja, só existe localmente
### Como Adicionar arquivos ao `.gitignore`?

1. **Ao criar um novo repositório:** Logo na tela de criação (onde você coloca o nome do projeto), existe uma seção chamada **"Initialize this repository with:"**.   Lá você verá a opção **"Add .gitignore"**.   Ao clicar no botão "None", abre-se um menu suspenso com centenas de modelos prontos. Você pode digitar "VisualStudio", "Node" ou "Python", por exemplo, e ele já cria o arquivo com as regras recomendadas.

2. **Em um repositório que já existe:** No seu repositório, clique em **Add file** -> **Create new file**.  No campo do nome do arquivo, digite `.gitignore`.  Assim que você digita esse nome exato, o GitHub faz aparecer um botão no lado direito chamado **"Choose a .gitignore template"**.  Basta escolher o modelo e ele preenche o conteúdo automaticamente.

## Boas Práticas de Commit
* As mensagens devem ser claras e descritivas, escritas no modo Imperativo;
* Usar um padrão de commits;
* Os commits devem ser bem especificados, pequenos e objetivos;
* Commite apenas códigos que funcionem;
* Commite com frequência, mas sem exageros;
* Antes de fazer merge, atualize e revise usando o comando git pull;
* Commite apenas o que for necessário utilizando o comando .gitignore corretamente.

ESTRUTURA DE COMMIT (Emoji opcional): `:emoji:TIPO: mensagem` 

|  Emoji | Tipo | Uso |
|-|-|-|
| :tada: | START | :tada:START: Projeto inicial com estrutura básica |
| :sparkles: | FEAT | ✨FEAT: Nova Funcionalidade |
| :bug: | FIX | :bug:FIX: Correção de Bug |
| :memo: | DOCS | :memo:DOCS: Alterações na documentação
| :lipstick: | STYLE | :lipstick:STYLE: Estilo (espaços, identação, ponto e vírgula, etc.)
| :recycle: | REFACTOR | :recycle:REFACTOR: Refatoração de código, sem alterar comportamento
| :white_check_mark: | TEST | :white_check_mark:TEST: Adição ou modificação de testes
| :wrench: | CHORE | :wrench:CHORE: Tarefas de manutenção (ex: configs, scripts, etc.) |

Emojis: https://gitmoji.dev/
