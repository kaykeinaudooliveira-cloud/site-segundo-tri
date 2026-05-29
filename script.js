function verDetalhes(titulo, preco, descricao) {
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-preco').innerText = preco;
    document.getElementById('modal-descricao').innerText = descricao;

    // Remove a classe oculta para exibir o modal
    document.getElementById('modal-detalhes').classList.remove('oculta');
}

function fecharDetalhes() {
    // Adiciona a classe oculta para esconder o modal
    document.getElementById('modal-detalhes').classList.add('oculta');
}
