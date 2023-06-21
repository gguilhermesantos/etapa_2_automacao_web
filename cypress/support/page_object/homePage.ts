/// <reference types="Cypress" />
import HomeElements from '../../fixtures/elementos';

export class HomePage {
    static acessarSite() {
        cy.visit(HomeElements.url());
    }

    static clickBtn(botao){
        if (botao == 'Buscar') {
            cy.get(HomeElements.botaoBuscar()).click();
        } else if (botao == 'Nova Busca'){
            cy.get(HomeElements.botaoNovaBusca()).first().click();
        } else if (botao == 'Fechar'){
            cy.get(HomeElements.saidaPopup()).click();
        } else {
            cy.log("Erro de descrição no botão");
        }
        cy.wait(500)
    }

    static preencherDescricao(entrada){
        cy.get(HomeElements.campoEndereco()).clear();
        cy.get(HomeElements.campoEndereco()).type(entrada);
    }

    static verificaCampos(tipo){
        if (tipo == 'CEP'){
            cy.get(HomeElements.itemCepTabela()).contains(HomeElements.cepValue());
        } else if (tipo == 'Endereço') {
            cy.get(HomeElements.itemEndTabela()).contains(HomeElements.enderecoValue());
            cy.get(HomeElements.itemlinkTabela()).click();
            cy.get(HomeElements.itemdetcep()).contains(HomeElements.enderecoValue());
            cy.get(HomeElements.saidaPopup()).click();
        }
        
    }
}
