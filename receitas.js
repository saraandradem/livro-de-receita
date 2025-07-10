// lista de receitas ( voc~e pode adicionar mais aqui)
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
{
  titulo: "Chips de Batata Doce",
  imagem: "https://via.placeholder.com/300x200?text=Chips+Batata",
  ingredientes: ["Batata-doce", "Azeite", "Sal", "Orégano"],
  preparo: "Corte em rodelas finas, asse até dourar."
},
{
  titulo: "Iogurte com Granola",
  imagem: "https://via.placeholder.com/300x200?text=Iogurte",
  ingredientes: ["Iogurte natural", "Granola", "Frutas picadas"],
  preparo: "Monte camadas com os ingredientes em um copo ou pote."
},
{
  titulo: "Pão de Queijo Fit",
  imagem: "https://via.placeholder.com/300x200?text=Pao+de+Queijo",
  ingredientes: ["Polvilho doce", "Queijo branco ralado", "Ovos", "Iogurte natural"],
  preparo: "Misture e asse em forminhas por 25 minutos."
},
{
  titulo: "Tapioca com Recheio Saudável",
  imagem: "https://via.placeholder.com/300x200?text=Tapioca",
  ingredientes: ["Goma de tapioca", "Recheio a gosto (ex: frango, ricota, banana)"],
  preparo: "Coloque a goma na frigideira, recheie e dobre ao meio."
},
{
  titulo: "Panqueca de Aveia e Banana",
  imagem: "https://via.placeholder.com/300x200?text=Panqueca",
  ingredientes: ["Banana amassada", "Ovo", "Aveia"],
  preparo: "Misture os ingredientes e doure dos dois lados na frigideira."
},
{
  titulo: "Salada de Quinoa",
  imagem: "https://via.placeholder.com/300x200?text=Salada+Quinoa",
  ingredientes: ["Quinoa", "Tomate", "Pepino", "Azeite", "Limão"],
  preparo: "Cozinhe a quinoa e misture com os demais ingredientes picados."
},
{
  titulo: "Hambúrguer de Grão-de-Bico",
  imagem: "https://via.placeholder.com/300x200?text=Hamburguer",
  ingredientes: ["Grão-de-bico", "Cebola", "Alho", "Aveia", "Temperos"],
  preparo: "Amasse tudo, molde os hambúrgueres e grelhe."
},
{
  titulo: "Espaguete de Abobrinha",
  imagem: "https://via.placeholder.com/300x200?text=Abobrinha",
  ingredientes: ["Abobrinha", "Molho de tomate caseiro"],
  preparo: "Corte em tiras finas e refogue levemente. Sirva com molho."
},
{
  titulo: "Vitamina de Frutas",
  imagem: "https://via.placeholder.com/300x200?text=Vitamina",
  ingredientes: ["Banana", "Morango", "Leite vegetal"],
  preparo: "Bata tudo no liquidificador e sirva gelado."
},
{
  titulo: "Salada Tropical",
  imagem: "https://via.placeholder.com/300x200?text=Salada",
  ingredientes: ["Folhas verdes", "Abacaxi", "Manga", "Castanhas"],
  preparo: "Misture todos os ingredientes e sirva com molho leve."
},
{
  titulo: "Cookies de Banana e Aveia",
  imagem: "https://via.placeholder.com/300x200?text=Cookies",
  ingredientes: ["Banana amassada", "Aveia", "Uvas passas", "Canela"],
  preparo: "Misture tudo, forme bolinhas e asse por 20 minutos a 180°C."
},
{
  titulo: "Purê de Abóbora",
  imagem: "https://via.placeholder.com/300x200?text=Abobora",
  ingredientes: ["Abóbora cozida", "Azeite", "Temperos a gosto"],
  preparo: "Amasse a abóbora e misture com azeite e temperos."
},
{
  titulo: "Ovo Mexido com Espinafre",
  imagem: "https://via.placeholder.com/300x200?text=Ovo+Espinafre",
  ingredientes: ["Ovos", "Espinafre picado", "Sal", "Azeite"],
  preparo: "Refogue o espinafre e adicione os ovos batidos. Mexa até cozinhar."
},
{
  titulo: "Barra de Cereal Caseira",
  imagem: "https://via.placeholder.com/300x200?text=Barra+Cereal",
  ingredientes: ["Aveia", "Mel", "Frutas secas", "Castanhas"],
  preparo: "Misture e pressione em forma. Leve à geladeira por 2h e corte em barras."
},
{
  titulo: "Sorvete de Banana Natural",
  imagem: "https://via.placeholder.com/300x200?text=Sorvete+Banana",
  ingredientes: ["Banana congelada", "Pouca água", "Canela"],
  preparo: "Bata no processador até virar um creme. Sirva gelado com canela."
}

        ];
        // pegando o container onde os cards serão colocados
        const container = document.getElementById("receitas-container"); 
        
        // criando os cards de forma dinamica
        receitas.forEach(receitas=> {
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


        })
