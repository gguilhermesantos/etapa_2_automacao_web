class HomeElements {
    url                 = () => {return    'https://buscacepinter.correios.com.br/app/endereco/index.php'}
    botaoBuscar         = () => {return    '#btn_pesquisar' }
    campoEndereco       = () => {return    '#endereco'}
    mensagemResultado   = () => {return    '#mensagem-resultado'}
    itemCepTabela       = () => {return    'tbody > tr > td[data-th="CEP"]'}
    itemEndTabela       = () => {return    'td[data-th="Logradouro/Nome"]'}
    itemlinkTabela      = () => {return    'td[data-th="Logradouro/Nome"] > a'}
    botaoNovaBusca      = () => {return    '#botaovolta'}
    detalhesDoCep       = () => {return    '#inicioConteudo'}
    saidaPopup          = () => {return    '#detalhes-cep-modal #inicioConteudo a.fechar'}
    cepValue            = () => {return    '69005-040'}
    enderecoValue       = () => {return    'Lojas Bemol'}
    itemdetcep          = () => {return    '#detalhes-cep-grande-usuario'}

}
export default new HomeElements();