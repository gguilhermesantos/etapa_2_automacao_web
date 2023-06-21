import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from '../../support/page_object/homePage';
import HomeElements from '../../fixtures/elementos';

Given('acesso o site', () => {
    HomePage.acessarSite();
})

When('preencho o campo de entrada com {string}', function (entrada: string) {
    HomePage.preencherDescricao(entrada);
})

When('clico no botao {string}', function (botao: string) {
    HomePage.clickBtn(botao);
})

Then('verifico que os dados da busca por {string}', function (tipo: string) {
    HomePage.verificaCampos(tipo);
})

When('validar dados da busca por CEP',function (){
    HomePage.preencherDescricao(HomeElements.cepValue());
    HomePage.clickBtn('Buscar');
    HomePage.verificaCampos('CEP');
})