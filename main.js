// // alert("Hola mundo");

let nombre = "Eduardo";
let apellidos = "Ortiz";
let edad = 30;

console.log(nombre, apellidos)
console.log("mi edad es: ", edad)

let base = prompt("Escribe la base del triangulo");
let altura = prompt("Escribe la altura del triangulo");
let resultado = (parseFloat(base) * parseFloat(altura)) / 2;

alert("El area del triangulo es: "+ resultado);

//------------------------------------------------------------- Nomina
let wagePerDay = parseFloat(prompt("Ingresa tu salario: "));

let wagePerMonthBeforeTaxes = (24 * wagePerDay).toFixed(2);
let wageBiweeklyBeforeTaxes = (12 * wagePerDay).toFixed(2);

let wagePerMonthAfterTaxes = ( (24 * wagePerDay) - (((24 * wagePerDay) * 0.30) + ((24 * wagePerDay) * 0.10)) ).toFixed(2) ;
let wageBiweeklyAfterTaxes = ( (12 * wagePerDay) - (((12 * wagePerDay) * 0.30) + ((12 * wagePerDay) * 0.10)) ).toFixed(2) ;

alert("Salario mes bruto: " + wagePerMonthBeforeTaxes + " Neto: " + wagePerMonthAfterTaxes +"\n"+
"Salario quincenal bruto: " + wageBiweeklyBeforeTaxes + " Neto: " + wageBiweeklyAfterTaxes);

//------------------------------------------------------------- Operaciones aritmeticas
let firstNumber = parseFloat(prompt("Escribe el primer numero: "));
let secondNumber = parseFloat(prompt("Escribe el segundo un numero: "));

console.log("Multiplicacion: " + (firstNumber * secondNumber));
console.log("Suma: " + (firstNumber + secondNumber));
console.log("Resta: " + (firstNumber - secondNumber));
console.log("Division: " + (firstNumber / secondNumber));

//-------------------------------------------------------------- condicionales
let edad = parseInt(prompt("Ingresa tu edad: "));
if(edad >= 18 && edad <= 29){
    console.log("Felicidades has sido aceptado en el programa de Generation!");
}else{
    console.log("Desafortunadamente no has sido aceptado por que no cumples los requisitos del programa");
}

// ------------------------------------------------------------- Funciones

/*
1. Crear una función que reciba por parámetros 2 números y los sume. Imprimir por console.log diferentes sumas
2. Crear un arreglo de meses y por console.log imprimir los meses.
3. Crear un ciclo en donde se imprima el arreglo de meses
*/

function sum(first, second){
    console.log(first + second)
}
sum(50, 50)

let meses = ["enero", "febrero", " marzo", "abril", "mayo", "junio", " julio", " agosto","septiembre", "octubre", "noviembre", "diciembre"]
meses.forEach(element => {
    console.log(element)
});

//Crear objeto que se llame persona con nombre, apellidos, edad, saludar hola mas nombre, cual es su edad

class Person {
    constructor(name, lastname, age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }

    saludar(){
        console.log(`Hola soy ${this.name}`)
    }

    edad(){
        console.log(`Mi edad es ${this.age}`)
    }
}

function createObject(name, lastname, age){
    return new Person(name, lastname, age)
}

fetch("https://animechan.vercel.app/api/random")
    .then( res => res.json())
    .then( data => console.log(data) );


fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        var cat_button = document.getElementById('cat')

        cat_button.addEventListener('click', function() {
            var image = document.createElement("img");
            image.src = data[0].url
            document.getElementById('img-container').append(image)

        });
});