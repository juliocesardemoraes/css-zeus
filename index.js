let nome = "Maria";

// CRUD - Create Read Update Delete
// Create
const carro = {};
let estudante = {
  nome: "Maria",
  idade: 17,
  serie: "3º ano",
  notas: {
    matematica: 8,
    portugues: 9,
    historia: 7,
    fisica: 10,
  },
};
const estudanteMaternal = {
  nome: "Maria",
  idade: 17,
  serie: "pré",
  notas: {
    matematica: 8,
    portugues: 9,
    historia: 7,
  },
};

// READ
console.log(estudante.nome);
const acc = "nome";
console.log(estudante[acc]);
console.log(estudante.notas.fisica.nota?.nota2);
console.log(estudanteMaternal.notas.fisica.nota?.nota2);

// Update
estudante.nome = "Julio";
console.log(estudante);

// Delete
delete estudante.nome;
console.log(estudante.nome);
estudante = {};
console.log(estudante);

// Iteração
for (let chave in estudante) {
  console.log(chave + ": " + estudante[chave]);
}

for (let chaveNotas in estudante["notas"]) {
  console.log(chaveNotas + ": " + estudante["notas"][chaveNotas]);
}
