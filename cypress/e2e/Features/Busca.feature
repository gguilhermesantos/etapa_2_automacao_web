Feature: Testando buscas por CEP e endereço

Scenario: Busca por CEP
  Given acesso o site
  And preencho o campo de entrada com "69005-040"
  When clico no botao "Buscar"
  Then verifico que os dados da busca por "CEP"

Scenario: Busca por endereço
  Given acesso o site
  And preencho o campo de entrada com "Lojas Bemol"
  When clico no botao "Buscar"
  Then verifico que os dados da busca por "Endereço"

Scenario: Duas buscas ao mesmo tempo
  Given acesso o site
  And validar dados da busca por CEP
  And clico no botao "Nova Busca"
  And preencho o campo de entrada com "Lojas Bemol"
  When clico no botao "Buscar"
  Then verifico que os dados da busca por "Endereço"