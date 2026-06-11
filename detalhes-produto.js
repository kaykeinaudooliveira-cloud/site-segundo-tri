// Banco de dados simulado de produtos (Estilo Desertificado)
const produtosBancoDados = {
    "1": {
        title: "Jaqueta Corta-Vento Nomad",
        category: "Casacos / Techwear",
        style: "Techwear Utilitário",
        price: "R$ 349,90",
        description: "Desenvolvida para aguentar tempestades de areia urbanas. Possui múltiplos bolsos utilitários, tecido impermeável respirável e capuz ajustável. Tom cáqui desértico exclusivo.",
        img: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500&auto=format&fit=crop&q=60" // Imagem demonstrativa
    },
    "2": {
        title: "Vestido Fluido Areia",
        category: "Vestidos",
        style: "Boho Desert",
        price: "R$ 189,00",
        description: "Peça leve em linho rústico. Perfeito para dias quentes e noites amenas. Modelagem solta com caimento natural que remete às dunas do Saara.",
        img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60" // Imagem demonstrativa
    },
    "3": {
        title: "Calça Cargo Argila",
        category: "Calças",
        style: "Minimalismo Terroso",
        price: "R$ 219,90",
        description: "Calça cargo de sarja pesada na cor terracota. Conforto e durabilidade máxima com estética pós-apocalíptica sutil.",
        img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?w=500&auto=format&fit=crop&q=60" // Imagem demonstrativa
    }
};

// Função principal que roda ao carregar a página
function carregarProduto() {
    // 1. Pega os parâmetros da URL (ex: detalhes.html?id=2)
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');

    const container = document.getElementById('product-container');
    const errorContainer = document.getElementById('error-container');

    // 2. Verifica se o ID existe no nosso banco de dados
    if (produtoId && produtosBancoDados[produtoId]) {
        const produto = produtosBancoDados[produtoId];

        // 3. Injeta os dados do produto nos elementos HTML
        document.getElementById('product-img').src = produto.img;
        document.getElementById('product-img').alt = produto.title;
        document.getElementById('product-title').innerText = produto.title;
        document.getElementById('product-category').innerText = produto.category;
        document.getElementById('product-style').innerText = `Estilo: ${produto.style}`;
        document.getElementById('product-price').innerText = produto.price;
        document.getElementById('product-description').innerText = produto.description;
        
        // Atualiza também o título da aba do navegador
        document.title = `${produto.title} | DesertStyle`;

        // Exibe o container do produto com efeito suave
        container.classList.remove('opacity-0');
    } else {
        // Se não encontrar o produto, esconde o card e mostra erro
        container.classList.add('hidden');
        errorContainer.classList.remove('hidden');
    }
}

// Executa a função assim que a página abre
window.addEventListener('DOMContentLoaded', carregarProduto);