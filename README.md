<a name="readme-top"></a>

# Etapa II - Automação de Teste Web I

Este projeto tem o intuito de desenvolver automação do site do Correios em Cypress para demonstrar conhecimentos em automação.

## Inicializando

Estas instruções fornecerão um passo a passo da instalação do projeto em sua máquina local para fins de avaliação.

### Pré requisitos

* Ter inicializado e configurado um repositório, neste caso, github
* Ter conhecimentos no site a ser testado: http://www.buscacep.correios.com.br
* Ter instalado [Node](https://nodejs.org/en/download/)

### Instalando

Comandos Utilizados em Unix OS:

* `npm init --yes` - cria o arquivo package.json 
* `npm install -D cypress` - Instalação do Cypress (node_modules)
* `npm install -D @bahmutov/cypress-esbuild-preprocessor` - Instalação do cucumber para utilização da estrutura do Gherkin na versão 10 do cy
* `npm install --save-dev @badeball/cypress-cucumber-preprocessor` - Instalação do cucumber para utilização da estrutura do Gherkin na versão 10 do cy
* `npm install --save-dev typescript` - Instalação do typescript
* `npm i` - Instalação das dependências (redundância) 
* `npx cypress open` - cria estrutura para o cypress e pode dar timeout na primeira vez.

Caso o cypress não reconheça o projeto, após aberto, clicar em **E2E Testing** > **Continue** > Escolher um navegador de sua preferencia e clicar em **Start E2E Testing in Chrome** e assim estará tudo pronto para começar o desenvolvimento.

Para utilizar BDD:

* Dentro da pasta `e2e` está o arquivo `.feature`
* Dentro de `support` está as pastas de definições das features, page object 
* Dentro de `fixtures` esta os elementos da página 

## Rodando testes

* Para iniciar o cypress:
`npx cypress open` - verifica o cypress pode ser executado e abre a interface

* Para rodar testes no terminal, sem a utilização do navegador, entre na pasta do projeto, rodar o comando:
```sh
npx cypress run --spec "cypress/e2e/Features/Busca.feature"
```

<p align="center">(<a href="#readme-top">Voltar ao topo</a>)</p>