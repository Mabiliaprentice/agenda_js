const form = document.getElementById('agenda-form');
const contatos = [];
let linhas = '';


form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    
});

function adicionaLinha() {
    const inputNome = document.getElementById('insira-nome').value;
    const inputSobrenome = document.getElementById('insira-sobrenome').value;
    const inputTelefone = document.getElementById('insira-tel').value;
    

    if(contatos.includes(inputNome) && contatos.includes (inputTelefone)){
        window.alert(`O Nome ${inputNome} já consta em nossa base de dados.`);
        window.alert(`O Telefone ${inputTelefone} já consta em nossa base de dados.`);
    }else {
        contatos.push(inputNome, inputTelefone)
    
        let linha = '<tr>';
        linha += `<td>${inputNome}</td>`;
        linha += `<td>${inputSobrenome}</td>`;
        linha += `<td>${inputTelefone}</td>`;
        linha += '</tr>';
        linhas += linha;
    }

    //function atualizaTabela() {
        const tabela = document.querySelector('tbody');
        tabela.innerHTML = linhas;
    //}
    
}

