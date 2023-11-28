const form = document.getElementById('agenda-form');
const nome = []
const tele = []
let linhas = '';


form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    adicionaNome();
    adicionaTel();
});

function adicionaLinha() {
    const inputNome = document.getElementById('insira-nome');
    const inputTelefone = document.getElementById('insira-tel');

    if(nome.includes(inputNome.value)){
        window.alert(`O Nome ${inputNome.value} já consta em nossa base de dados.`);
    }else {
        nome.push(inputNome.value);
        tele.push(inputTelefone.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    }

    
    
    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
}
