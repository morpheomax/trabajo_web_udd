// Algoritmo para elegir saber si eres mayor de edad
// Autor: Max

// Saludo inicial
let nombre = "";
nombre = prompt("¿Cómo te llamas?");
alert("Hola " + nombre + ", bienvenido a nuestra comunidad");

// Elegir tu pokemon inicial
let edad = "";
edad = prompt("¿Que edad tienes?");

// Mostrar tu pokemon inicial
if (edad < 18) {
  alert("No puedes ingresar al sitio web");
} else if (edad >= 18 && edad <= 30) {
  alert("Puedes Ingresar");
} else {
  alert("No puedes ingresar al sitio web");
}
