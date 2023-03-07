function somaNumerosPares(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] % 2 === 0) { // verifica se o número é par
        soma += lista[i]; // adiciona o número à soma
      }
    }
    return soma;
  }
  
  const lista = [2, 4, 7, 8, 10];
  const soma = somaNumerosPares(lista);
  console.log(soma);