
// 1. Criando o Array com 20 elementos (conforme o objetivo da atividade)
let listaPaises = [
  'Brasil', 'Argentina', 'Canadá', 'Japão', 'Alemanha',
  'França', 'Itália', 'Portugal', 'México', 'Austrália',
  'Índia', 'Egito', 'Chile', 'Espanha', 'China',
  'Suécia', 'Grécia', 'Angola', 'Uruguai', 'Holanda'
];

// 2. .length (quantidade total: 20)
console.log("Total de países cadastrados: " + listaPaises.length);

// 3. Acesso a posições
console.log("País na primeira posição: " + listaPaises[0]); // Brasil
console.log("País na última posição: " + listaPaises[19]);  // Holanda

// 4. Estrutura de repetição para listar todos os itens
console.log("--- Lista Completa ---");
for (let i = 0; i < listaPaises.length; i++) {
  console.log(`Índice ${i} - País: ${listaPaises[i]}`);
}

//Qual elemento está na 0,7,11,15,18,20
console.log(listaCidades[0]);  // São Paulo
console.log(listaCidades[7]);  // Madrid
console.log(listaCidades[11]); // Sidney
console.log(listaCidades[15]); // Amsterdã
console.log(listaCidades[18]); // Viena
console.log(listaCidades[20]); // Bangkok

//Penúltima e última posição
console.log(listaCidades[listaCidades.length - 2]); // Toronto (Penúltima)
console.log(listaCidades[listaCidades.length - 1]); // Bangkok (Última)

//Quantos elementos existem?
console.log(listaCidades.length); // 21

//Adicione um novo elemento
listaCidades.push('Istambul');
console.log(listaCidades.length); 

//Todos os elementos usando "for"
for (let i = 0; i < listaCidades.length; i++) {
    console.log(`Posição ${i}: ${listaCidades[i]}`);
  }