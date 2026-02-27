let estoqueLoja = [
  { nome: 'Camiseta Preta', preco: 49.90, estoque: 100 },
  { nome: 'Calça Jeans', preco: 129.00, estoque: 45 },
  { nome: 'Tênis Esportivo', preco: 299.99, estoque: 20 },
  { nome: 'Jaqueta de Couro', preco: 350.00, estoque: 10 },
  { nome: 'Meias', preco: 15.00, estoque: 200 },
  { nome: 'Boné Aba Curva', preco: 59.90, estoque: 30 },
  { nome: 'Bermuda Cargo', preco: 89.90, estoque: 55 },
  { nome: 'Moletom Canguru', preco: 149.00, estoque: 25 },
  { nome: 'Cinto de Couro', preco: 45.00, estoque: 40 },
  { nome: 'Vestido Floral', preco: 110.00, estoque: 15 }
];

//Preço do segundo objeto
console.log(estoqueLoja[1].preco);

//nome do terceiro objeto
console.log(estoqueLoja[2].nome);

//Quantos itens existem no array?
console.log(estoqueLoja.length);

//O nome de todos os objetos
estoqueLoja.forEach(item => console.log(item.nome));

//Soma do estoque total
let totalEstoque = estoqueLoja.reduce((soma, item) => soma + item.estoque, 0);
console.log(totalEstoque);

//Qual possui maior estoque?
let maiorEstoque = estoqueLoja.reduce((max, item) => item.estoque > max.estoque ? item : max);
console.log(maiorEstoque.nome);