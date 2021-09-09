// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Manga', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Mirtilo', 'Mamão', 'Maça'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui

  const saladaDeFrutas = [...specialFruit,...additionalItens]
  return saladaDeFrutas;
};

console.log(fruitSalad(specialFruit, additionalItens));