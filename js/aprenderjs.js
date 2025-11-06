// ######### FORMAS DE IMPRESIÓN
// (1) ALERT
// alert("FUNCIONA");
// (2) CONSOLA
console.log("FUNCIONA");
// (3) LIBRERÍAS DE TERCEROS - SWEETALERT2
Swal.fire("FUNCIONA");
// (4) DESDE EL DOM
document.write("HOLA FUNCIONA");

// ######### TIPOS DE VARIABLES => const / let / var
// const => usado para variables constantes que no cambian de valor
// let => usado para variables de bloques como if por ejm
// var => un poco en desuso, se usa para variables globales
const pi = 3.14;
const inche = 2.54;
let animal = "perro";
var elemento = "silla";

// ######### TIPOS DE DATOS => string / numero / booleanos
let var_uno = 20; // entero
let var_dos = 20.5; // decimal
let var_tres = "20.5"; // string
let string = "texto"; // string 
let booelano =  false; // true
let booelano_s =  "false"; // true
let objeto_persona = {nombre:"wilder", apellido:"duarte", edad:33};
let array = ["lunes","martes","miercoles","jueves","viernes","sabados","domingos"];
let array_mixto = ["wilder",33,"duarte",20,12,91];
let array_num = [1,2,3,4,5,6,7,8,9];
let estudiantes = [
    {nombre:"Wilder", edad:"33"},
    {nombre:"Anyi", edad:"34"},
    {nombre:"Celeste", edad:"5"},
    {nombre:"Antonella", edad:"3"},
    {nombre:"Sara", edad:"0"}
]
console.log(estudiantes[0].nombre + " - " + estudiantes[0].edad)

// ######### OPERADORES LÓGICOS => AND / OR / NOT
console.log(true && false);
console.log(true && true);
console.log(false && false);
console.log(false && true);
console.log(true || false);
console.log(false || true);
console.log(!true);
console.log(!false);

// ######### OPERADORES DE COMPARACIÓN < / <= / > / >= / != / ==
let com_uno = 10;
let com_dos = 15;
let com_tres = 10;
console.log(com_uno > com_dos); // Mayor que 
console.log(com_uno >= com_dos); // Mayor o igual que 
console.log(com_tres == com_dos); // Igual
console.log(com_tres != com_dos); // Diferente
console.log(com_uno < com_dos); // Menor que 
console.log(com_uno <= com_dos); // Menor o igual que

console.log(com_uno === com_dos); // Compara valor y tipo de dato
console.log(com_uno !== com_dos); // Diferente valor y tipo de dato

// ######### OPERADORES ARITMÉTICOS BÁSICOS + - / * %
console.log(com_uno + com_dos);
console.log(com_uno - com_dos);
console.log(com_uno * com_dos);
console.log(com_uno / com_dos);
console.log(com_uno % com_dos);


// estructuras condicionales if 
let edad = parseInt(prompt("ingrese edad"));
let estatura = parseInt(prompt("ingrese en cm"));

if (edad>5 && estatura>=100){
    console.log("tiene la estatura y edad");
}else if(edad > 5 || estatura >=100 ){

}else{
    console.log(" le falta crecer mijo ");
}
let age = parseInt(prompt("ingrese edad"))
console.log(age)

if (age < 13) {
    console.log("ni;o.");
  } else if (age >= 13 && age <= 17) {
    console.log("Eres un adolescente.");
  } else if (age >= 18 && age <= 38) {
    console.log("Eres un joven.");
  } else if (age >= 39 && age <= 59) {
    console.log("Eres un adulto.");
  } else if (age >= 60) {
    console.log("Perteneces a la tercera edad.");
  } else {
    console.log("Edad no válida.");
  }

  let base = parseFloat(prompt("ingrese la base (mayor cero)"));
  let altura = parseFloat(prompt("ingrese la altura  (mayor cero)"));
  if(base > 0 && altura > 0){
    let area = base*altura;
    Swal.fire("el area es igual a:"+ area);

  }else{
    Swal.fire("❌ingrese valores validos (mayores quecero)");
  }
  