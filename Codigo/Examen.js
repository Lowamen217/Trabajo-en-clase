var edad

if (edad >= 18){
    console.log("es mayor de edad")
if (edad <= 18){
    console.log("es menor de edad")
}
}else{
    console.log("Es menor de edad")
}
 

for (let i = 1; 1<=200; i = i+1){
    if (1 % 2 === 0){
        console.log(1 + "fizz")
    }else if (i % 1 === 0){
        console.log(1 + "buzz")
    }
}


var helado = 35

var oreo = 15

var kitkat = 15

var brownie = 15

var topping = prompt("que topping quieres? oreo = 12$  kitkat = 17$  brownie = 13")

//crear condicion
if(topping === 'oreo'){
    alert(helado + oreo)
    console.log("Tu helado con topping oreo cuesta", helado + oreo)
}else if(topping === 'kitkat'){
    alert(helado + kitkat)
    console.log("Tu helado con topping KitKat cuesta", helado + kitkat)
}else if(topping === 'brownie'){
    alert(topping + brownie)
    console.log("Tu helado con topping Brownie cuesta", helado + brownie)
}else if(topping === 'oreo kitkat'){
    alert(helado + oreo + kitkat)
    console.log("Tu helado con topping oreo y KitKat cuesta", helado + oreo + kitkat)
}else if(topping == 'oreo brownie'){
    alert(topping + oreo + brownie)
    console.log("Tu helado con topping oreo y brownie cuesta", helado + oreo + brownie)
}else if(topping == 'kitkat brownie'){
    alert(topping + kitkat + brownie)
    console.log("Tu helado con topping kitkat y brownie cuesta", helado + kitkat + brownie)
}else if(topping == 'kitkat brownie oreo'){
    alert(topping + kitkat + brownie + oreo)
    console.log("Tu helado con topping kitkat, brownie y oreo cuesta", helado + kitkat + brownie + oreo)
}else{
    alert("no seleccionaste bien tu topping")
    console.log("No seleccionaste bien tu topping")
}





var Paquete1 = 100  

var Paquete2 = 120

var Paquete3 = 130

var Paquete4 = 140

var paquete = prompt("que paquete deseas?")

if(paquete === 'Paquete1'){
    alert(Paquete1)
    console.log("Tu Paquete1 con Sandia, Chilaquiles y Cafe cuesta", Paquete1)
}else if(paquete === 'Paquete2'){
    alert(Paquete2)
    console.log("Tu Paquete2 con Melon, Quesadillas y Jugo de Naranja cuesta", Paquete2)
}else if(paquete === 'Paquete3'){
    alert(Paquete3)
    console.log("Tu Paquete3 con Papaya, Tacos de mixote y Cafe cuesta", Paquete3)
}else if(paquete === 'Paquete4'){
    alert(Paquete4)
    console.log("Tu Paquete4 con Pera, Huevo y Jugo de Naranja cuesta", Paquete4)
}else{
    alert("no seleccionaste bien tu Paquete")
    console.log("No seleccionaste bien tu Paquete")
}

var letra = "p"

if (letra == "a", "e", "i", "o", "u") {
    console.log("vocal")
}
else{
    console.log("consonante")
}