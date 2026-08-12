let idade = 40; // number
idade = '40'; // string

const nome = 'Francisco';
// nome = 'Dantas'; // Erro!

var tituloDisciplina;
tituloDisciplina = 'PW2';

let estaCursando = true; // boolean
let notaPW2; // undefined
notaPW2 = null; // null

idade = 40;
console.log(typeof idade);

// Arrays ----------------------------------

const notas = [90, 95, '100'];
notas[2] = 100;
notas.push(95);

const user = {
    nome: 'Nycolas',
    idade: 18
};

console.log(user.nome);
console.log(typeof user.nome);


// Evitar ao máximo utilizar var

for(let i = 0; i < 3; i++) {
    console.log('Valor do i no bloco: '+i);
}

console.log(i);