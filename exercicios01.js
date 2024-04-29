/*
 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
     valor correspondente em graus Fahrenheit. 
*/
var prompt = require('prompt-sync')();
var celsius = prompt("Graus Celsius: ");
celsius = parseFloat(celsius); 
console.log("Temperatura em Fahrenheit:", celsius*1.8 + 32);


/*
 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
    votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
    em relação ao total de eleitores.
*/

var prompt = require('prompt-sync')();
var eleitores = parseFloat(prompt("Número eleitores: "));
var v_brancos = parseFloat(prompt("Votos brancos: "));
var v_nulos = parseFloat(prompt("Votos nulos: "));
var v_validos = parseFloat(prompt("Votos válidos: "));

console.log("Porcentcual votos brancos:", (v_brancos/eleitores) * 100 + "%" );
console.log("Porcentcual votos nulos:", (v_nulos/eleitores)* 100 + "%" );
console.log("Porcentcual votos validos:", (v_validos/eleitores)* 100 + "%");

/*
  3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
    ● Some 25 ao primeiro inteiro;
    ● Triplique o valor do segundo inteiro;
    ● Modifique o valor do terceiro inteiro para 12% do valor original;
    ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
    dos primeiros três inteiros.
*/

var prompt = require('prompt-sync')();
var n1 = parseInt(prompt("Inteiro 1: "));
var n2 = parseInt(prompt("Inteiro 2: "));
var n3 = parseInt(prompt("Inteiro 3: "));
var n4 =  parseInt(prompt("Inteiro 4: "));

n4 = n1 + n2 + n3;
n1 = n1 + 25;
n2 = 3*n2;
n3 = n3*0.12;

console.log("Novo n1:", n1 );
console.log("Novo n2:", n2 );
console.log("Novo n3:", n3 );
console.log("Novo n4:", n4 );


/*
  4-5. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
    calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
    aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
    aprovação).
    Acrescente  a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
    média calculada seja menor que 6,0
*/

let media;
var nota1 =  parseInt(prompt("Nota 1: "));
var nota2 =  parseInt(prompt("Nota 2: "));
media = (nota1+nota2)/2;
if (media >= 6) {
  console.log("PARABÉNS! Você foi aprovado.")
} else {
  console.log('Você foi REPROVADO! Estude mais')
}



/*
  6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
    formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
    Isósceles, escaleno ou eqüilátero.
    Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
    Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

*/

var prompt = require('prompt-sync')();
let A = parseFloat(prompt("Lado A: "));
let B = parseFloat(prompt("Lado B: "));
let C = parseFloat(prompt("Lado C: "));

if (A < B + C && B < A + C && C < A + B) {
  if (A==B && B==C) { console.log("Triângulo eqüilátero.") }
  else if (A!=B && B!= C && A != C) { console.log("Triângulo escaleno.") }
  else if (A==B || A==C || B == C) { console.log("Triângulo isósceles.") } 
}  else {
      console.log("Os lados fornecidos não formam triângulo.");
    }


/*
    7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.
*/

var prompt = require('prompt-sync')();
let quantidade_macas = parseInt(prompt("Quantidade de maçãs: "));
let preco_maca;

if (quantidade_macas >= 12) {preco_maca = 0.25}
else {preco_maca = 0.30}

console.log("O valor total da compra é: ", preco_maca*quantidade_macas)


/*
  8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
    e escreve-los em ordem crescente.
*/
var prompt = require('prompt-sync')();
let val1 = parseFloat(prompt("Valor 1: "));
let val2 = parseFloat(prompt("Valor 2: "));

if (val1 < val2) {console.log( val1, val2)}
else {console.log(val2, val1)}

  
/*
    9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo.
*/
var prompt = require('prompt-sync')();
let codigo =  parseInt(prompt("Insira o código de origem: "));

if (codigo==1 ) {console.log("Região Sul");}
else if (codigo == 2 ) {console.log("Região Norte");}
else if (codigo == 3 ) {console.log("Região Leste");}
else if (codigo == 4) {console.log("Região Oeste");}
else if ( 5 <= codigo && codigo <= 6) {console.log("Região Nordeste");}
else if (7 <= codigo && codigo<= 9 ) {console.log("Região Sudeste");}
else if (10 <= codigo && codigo <= 20 ) {console.log("Região Centro-Oeste");}
else if (25 <= codigo && codigo <= 50 ) {console.log("Região Nordeste");}
else {console.log("Produto importado");}


/*
  10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/
var prompt = require('prompt-sync')();
let num =  parseInt(prompt("Insira número inteiro: "));
for (let i = 1; i <= 10; i ++) {
  console.log(num);
}


/*
  11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
    cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
    ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
    NEGATIVO.
*/

var prompt = require('prompt-sync')();
let nn;
nn =  parseInt(prompt("Insira valor inteiro: "));
while (nn >= 0 ){
  if (nn%2 == 0) { console.log("PAR");}
  else if (nn%2 == 1) {console.log("IMPAR");}
  nn =  parseInt(prompt("Insira valor inteiro: "));
}


/*
  12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
    divididos por 11, dão resto igual a 5.
*/

for (let i = 1000; i<= 1999; i++) {
  if (i % 11 == 5) {console.log(i)}
}


/*
  13.  Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
    calcule e mostre a tabuada de 1 até N.
*/
var prompt = require('prompt-sync')();
let N;
for (let i = 1; i<= 5; i++) {
  N =  parseInt(prompt("Tabuada do: "));
  for (let j = 1; j<= N; j++) {
    console.log(`${j} * ${N} = ${j * N}`)
  }
}

/*
  14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    a média aritmética desses números.
*/
var prompt = require('prompt-sync')();
let soma = 0;
let contador = 0;
let n;
do {
    n =  parseFloat(prompt("Insira número (0 para terminar): "));
    soma += n;
    contador ++;
} while (n!= 0);
if (contador > 0) {console.log("Média dos numeros: ", soma/contador)}




/*
  15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
    que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
    respectivos.
*/
var prompt = require('prompt-sync')();
let soma_ = 0;
let soma_pesos = 0;
let con = 0;
let m, peso;

do {
    m = parseFloat(prompt("Insira número (0 para terminar): "));
    peso = parseFloat(prompt("Insira o peso: "));
    
    soma_ += m*peso;
    soma_pesos += peso;
    con ++;
} while (n != 0);
if (con > 0) {console.log("Média ponderada: ", soma_/soma_pesos)}




/*
  16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
*/

let i =2;
while (i<50) {
  let j=2;
  while (j<i) {
    if (i%j == 0) {break}
    else j++
  }
  if (j == i) {console.log(i)}
  i++
}