
/*1. Escribe un script que muestre tu nombre y el curso y el campo de la informática donde te gustaría trabajar*/

alert("Ejercicio 1 - Presentación");
let nombre = "Nicolás Agustín Massaccesi";
let curso = "1º DAM";
let gustaria = "Programación Backend de Aplicaciónes";

alert("Mi nombre es: "+ nombre);
alert("Mi curso es: "+ curso);
alert("Me gustaría dedicarme a: "+ gustaria);

/* 2. Realiza la suma de los números que se introduzcan por teclado hasta que se lea un cero.*/

alert("Ejercicio 2 - Suma");
let suma = 0;
let numEj2 = 1;
while (numEj2 !=0) {
    numEj2 = Number(prompt("Ingrese un número a sumar (0 - para detenerse):"));
    suma += numEj2;
};
alert("Resultado: "+ suma);

/*3. Leer 4 valores numéricos de una cifra. Esos valores en realidad son un solo número y habrá
que escribirlo por pantalla completo. Por ejemplo, introduzco el 1, 2, 3 y 4. El resultado es
1234.*/

alert("Ejercicio 3 - Número de cuatro cifras");
let numEj3 = ""
for (let index = 1; index <= 4; index++) {
    numEj3 += prompt("Ingrese la "+index+"º cifra: ")
};
alert("Su número es: "+ numEj3);

/*4. Leer el valor de la nota de un alumno y poner la nota correspondiente en texto. Por ejemplo,
un 7.2 es notable */

alert("Ejercicio 4 - Nota Alumno");
let nota = Number(prompt("Ingrese la nota del alumno: "));
if (nota >= 0 && nota < 5) {
    alert("Su nota es: "+nota+", suspenso.")
}else if (nota >= 5 && nota < 7) {
    alert("Su nota es: "+nota+", bien.")
}else if (nota >= 7 && nota < 9) {
    alert("Su nota es: "+nota+", notable.")
}else if (nota >= 9 && nota <= 10) {
    alert("Su nota es: "+nota+", sobresaliente.")
}else{
    alert("La nota ingresada no es valida.")
};

/*5. Introducir 10 valores en un array, mostrar la suma de sus valores, el mayor valor, el menor
valor y la media de los valores */

alert("Ejercicio 5 - 10 valores array");
let array = [];
let sumaArray = 0;
array[0] = Number(prompt("Ingrese el 1º valor: "));
sumaArray += array[0];
let mayor = array[0];
let menor = array[0];
for (let index = 1; index < 10; index++) {
    array[index] = Number(prompt("Ingrese el "+Number(index+1)+"º valor: "));
    sumaArray += array[index];
    if (array[index] > mayor) {
        mayor = array[index];
    };
    if (array[index] < menor) {
        menor = array[index];
    };
    
};
let media = sumaArray/array.length
alert("Suma: "+sumaArray);
alert("Mayor: "+mayor);
alert("Menor: "+menor);
alert("Media: "+media);


/*6. Rellenar un array con valores aleatorios mediante una función matemática de 20 elementos
tipo entero entre el 10 y el 20. Después hay que recorrer el array y el programa tendrá que
mostrar el total de valores mayores que 15, menores que 15 e iguales a 15.*/

alert("Ejercicio 6 - 20 valores aleatorios array");
function numeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
};
let lista = [];
let mayores = 0;
let menores = 0;
let iguales = 0;
for (let index = 0; index < 20; index++) {
    numero = numeroAleatorio(10,20)
    if (numero > 15) {
        mayores++;
    }else if(numero == 15){
        iguales++;
    }else if(numero < 15){
        menores++;
    };
    lista.push(numero)
};
alert("Cantidad de mayores a 15: "+mayores);
alert("Cantidad de iguales a 15: "+iguales);
alert("Cantidad de menores a 15: "+menores);
alert("El arreglo es: "+lista);

