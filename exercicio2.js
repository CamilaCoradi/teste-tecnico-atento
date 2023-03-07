const fs = require('fs');
const csv = require('csv-parser');

// nome do arquivo CSV a ser lido
const fileName = 'clientes.csv';

// array para armazenar as idades dos clientes
let idades = [];

// lê o arquivo CSV e calcula as idades dos clientes
fs.createReadStream(fileName)
  .pipe(csv())
  .on('data', (row) => {
    // extrai a data de nascimento do cliente a partir do arquivo CSV
    const dataNascimento = new Date(row.data_nascimento);
    if (isNaN(dataNascimento.getTime())) {
      return; // pula essa linha do arquivo se a data de nascimento não for válida
    }

    // calcula a idade do cliente a partir da data de nascimento
    const idade = new Date().getFullYear() - dataNascimento.getFullYear();

    // adiciona a idade do cliente ao array de idades
    idades.push(idade);
  })
  .on('end', () => {
    // calcula a idade média dos clientes
    const idadeMedia = idades.reduce((acc, idade) => acc + idade, 0) / idades.length;
    const idadeMediaInteira = Math.floor(idadeMedia);

    // imprime a idade média dos clientes no console
    console.log(`A idade média dos clientes é ${idadeMediaInteira} anos.`);
  });
