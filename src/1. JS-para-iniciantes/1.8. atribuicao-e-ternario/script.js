//OPERADORES DE ATRIBUIÇÃO
//Podem funcionar como formas abreviadas
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)


//OPERADOR TERNÁRIO
//Abreviação de condicionais com if e else
var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber

// condição ? true : false


//EXERCÍCIO
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
console.log(scroll+=500);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;
possuiCarro && possuiCasa ? darCredito=true : darCredito=false
console.log(darCredito);
//OU
darCredito = (possuiCarro && possuiCasa)
console.log(darCredito);