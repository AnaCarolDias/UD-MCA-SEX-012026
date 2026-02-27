//1) Array
const cores = ["Azul", "Verde", "Vermelho"];

// Acessando posição
console.log(cores[0]); // Azul

// Usando o .length
console.log(cores.length); // 3


//2) Objeto
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024
  };
  
  // Acessando propriedades
  console.log(carro.modelo); // Corolla


  //3) Array de Objetos
  const produtos = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 }
  ];
  
  // Praticando Estrutura de Repetição (for)
  for (let i = 0; i < produtos.length; i++) {
    // Acessamos a posição [i] e depois a propriedade .nome
    console.log("Produto: " + produtos[i].nome + " | Preço: R$" + produtos[i].preco);
  }

  