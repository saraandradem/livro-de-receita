// Lista de receitas
const receitas = [
  {
    titulo: "Omelete de Legumes",
    imagem: "https://via.placeholder.com/300x200?text=Omelete",
    ingredientes: ["2 ovos", "Cenoura ralada", "Tomate", "Cebola", "Sal"],
    preparo: "Bata os ovos com os legumes picados e tempere. Cozinhe em frigideira antiaderente até dourar."
  },
  {
    titulo: "Mingau de Aveia",
    imagem: "https://via.placeholder.com/300x200?text=Mingau",
    ingredientes: ["Aveia", "Leite vegetal", "Mel", "Canela"],
    preparo: "Leve ao fogo baixo mexendo até engrossar. Finalize com mel e canela."
  },
  {
    titulo: "Wrap Integral de Frango",
    imagem: "https://via.placeholder.com/300x200?text=Wrap",
    ingredientes: ["Tortilha integral", "Frango desfiado", "Alface", "Tomate", "Molho de iogurte"],
    preparo: "Recheie a tortilha e enrole. Sirva fria ou aquecida."
  },
  {
    titulo: "Suco Verde Detox",
    imagem: "https://via.placeholder.com/300x200?text=Suco+Verde",
    ingredientes: ["Couve", "Maçã", "Limão", "Água gelada", "Gengibre"],
    preparo: "Bata tudo no liquidificador, coe e sirva gelado."
  },
  {
    titulo: "Bolo de Banana Fit",
    imagem: "https://via.placeholder.com/300x200?text=Bolo+Banana",
    ingredientes: ["Bananas", "Ovos", "Aveia", "Fermento", "Canela"],
    preparo: "Misture tudo, coloque em forma untada e asse por 30 minutos a 180°C."
  },
  // ... pode adicionar as outras receitas normalmente
];

// Container das receitas
const container = document.getElementById("receitas-container");

// Função para limpar o container e montar os cards das receitas
function mostrarReceitas() {
  container.innerHTML = ""; // limpa conteúdo anterior
  receitas.forEach(receita => {
    const card = document.createElement("div");
    card.className = "receita-card";
    card.innerHTML = `
      <img src="${receita.imagem}" alt="${receita.titulo}">
      <h3>${receita.titulo}</h3>
      <strong>Ingredientes:</strong>
      <ul>
        ${receita.ingredientes.map(item => `<li>${item}</li>`).join("")}
      </ul>
      <strong>Modo de preparo:</strong>
      <p>${receita.preparo}</p>
    `;
    container.appendChild(card);
  });
}

// Função para alternar entre seções
function mostrarSecao(id) {
  const secoes = document.querySelectorAll(".secao");
  secoes.forEach(secao => {
    if (secao.id === id) {
      secao.style.display = "block";
    } else {
      secao.style.display = "none";
    }
  });

  // Se a seção for receitas, renderiza as receitas
  if (id === "receitas-container") {
    mostrarReceitas();
  }
}

// Lista de dicas de mercado
const dicas = [
  {
    titulo: "📦 Leia os rótulos!",
    texto: "Evite alimentos com muitos nomes estranhos. Quanto mais simples, melhor!"
  },
  {
    titulo: "⚠️ Açúcar escondido",
    texto: "Fique atenta a nomes como xarope de milho, maltodextrina e dextrose."
  },
  {
    titulo: "🧂 Menos sódio, mais saúde",
    texto: "Produtos industrializados geralmente têm muito sal. Cuidado com o excesso!"
  },
  {
    titulo: "🥑 Variedade é o segredo",
    texto: "Inclua alimentos de cores diferentes no prato. Cada cor traz um tipo de nutriente."
  },
  {
    titulo: "🛒 Prefira frutas da estação",
    texto: "Elas são mais baratas, frescas e nutritivas!"
  }
];

// Container das dicas
const dicasContainer = document.getElementById("dicas-container");

// Função para mostrar dicas
function mostrarDicas() {
  dicasContainer.innerHTML = ""; // limpa conteúdo anterior
  dicas.forEach(dica => {
    const card = document.createElement("div");
    card.className = "dica-card";
    card.innerHTML = `
      <h3>${dica.titulo}</h3>
      <p>${dica.texto}</p>
    `;
    dicasContainer.appendChild(card);
  });
}

// Mostrar receitas assim que a página carrega
mostrarReceitas();

// Mostrar dicas quando a seção for exibida
// Adicionamos um listener para exibir as dicas ao mostrar a seção "dicas"
document.querySelector('button[onclick="mostrarSecao(\'dicas\')"]').addEventListener("click", mostrarDicas);



