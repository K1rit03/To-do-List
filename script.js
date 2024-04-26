const button = document.querySelector('.button_task');
const input = document.querySelector('.input_task');
const listaCompleta = document.querySelector('.list-task');
let minhaListaDeItens = [];

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
     }) 
    input.value = ''; // Limpa o campo de entrada após adicionar a tarefa
    mostrarTarefas();
}

function mostrarTarefas() {
    let novaLi = '';

    minhaListaDeItens.forEach((item,index) => {
        novaLi += `
    <li class="task ${item.concluida ? 'done' : ''}">
        <img src="img/checked.png" alt="Check" onclick="concluirTarefa(${index})">
        <p>${item.tarefa}</p>
        <img src="img/trash.png" alt="lixeira" onclick="deletarItem(${index})">
    </li>
`;

    });

    listaCompleta.innerHTML = novaLi;
    
    
    localStorage.setItem('lista',JSON.stringify(minhaListaDeItens))
}
function concluirTarefa(index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida
    mostrarTarefas()
}
function deletarItem(index){
    minhaListaDeItens.splice(index,1)

    mostrarTarefas()

}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if(tarefasDoLocalStorage){
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }

    

    mostrarTarefas()
}


recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa);
