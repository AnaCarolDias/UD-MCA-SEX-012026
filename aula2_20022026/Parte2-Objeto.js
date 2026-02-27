let roupa = {
  nome: 'Camiseta',
  cor: 'Rosa',
  preco: 89,
  estoque: 25
};

//Acessar o nome
console.log(roupa.nome);

//Preço usando colchetes
console.log(roupa['preco']);

//Atualizar estoque para 80
roupa.estoque = 80;

//Imprimir todas as propriedades
console.log(roupa);