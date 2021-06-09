//Ejercicio 1
//Escribe un programa que responda a un usuario que quiere comprar un helado mas toppings.
    //Precio base del helado: 35
    //El topping de oreo cuesta 12
    //El topping de KitKat cuesta 17
    //El topping de brownie cuesta 13
    //prompt("que topping quieres");


//Declarar variables
var helado = 35

var oreo = 12

var kitkat = 17

var brownie = 13

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