
//for
for(var i = 0; i  <=100; i = i +1){
    console.log(i)
    }
    
    //Una abrerviacon para la expresion
    // i + i+1
    // i++
    //0-100
    //0-200
    //0-300
    //0-400
    //0-500
    
    for(var i = 0; i  <=200; i = i +1){//Estructura de um ciclo
    console.log(i)//Mostrara la accion i
    }
    
    for(var i = 0; i  <=300; i = i +1){//Estructura de um ciclo
    console.log(i)//Mostrara la accion i
    }
    
    for(var i = 0; i  <=500; i = i +1){//Estructura de um ciclo
    console.log(i)//Mostrara la accion i
    }
    
    //Tipos de variables 
var x=1980//number
var y=3
var string="Texto"//Texto
var booleano=true||false//booleanos 
//operadores Aritmeticos 
//+suma
//-resta

///división
//++ unir dos variables en rest
//-- unir dos variables en resta 

var suma=x+y//suma
console.log()//me muestra mi variable suma
var resta=x-y//resta
console.log()//me muestra mi variable resta
var multi=x * y//multiplicacion
console.log()//me muestra mi variable multi 
var div= x/y //division
console.log()//me muestra mi variable div
var modulo= x%y //modulo
console.log(modulo)//me muestra mi variable modulo 
console.log(suma)

//visual studio code 
//operadores condicionales
//== es igual --->5=8 es falso
//>mayor que 5>1 verdadero
//<menor que 5 <1 falso
//es igual o mayor que>= //5>=8falso
// es igual o menor que <=//5<=8 verdadero
// estructura if else

resta(15,10,2)
resta(2,9,7)
resta(17,5,7)
resta(24,4,5)
resta(66,8,25)
var mult = x * y //Variable multi

console.log(mult)// Muestra el multi
multi(7*5)
multi(3*8)
multi(4*4)
multi(9*9)
multi(5*6)
//ejercicio 1
function evaluate(number){
if(number>0){
    return "positivo"
}else if (number<0){
return "negativo"
}else{
    return "cero"
}
evaluate(-5);

}
//ejercicio 3
const area=(b,h,c)=>{
    return b*h/c
}

console.log(area(2,4,2))
for(let i=1; i<=100; i=i+1){
    if(i/2===0){
        console.log(i+"pares")
    }else if (i/1===0){
        console.log(i+"impares")
    }
}
let usuario=200
if(usuario <=1||usuario<=17){
    console.log("eres un niño")
}else if(usuario>=17&& usuario<=90){
    console.log("eres un adulto")
}else{
    console.log(":0 no eres humano")
}
let edad = (prompt("ingresa tu edad"))

if(edad<=0 || edad <=15){
    console.log("no puedes conducir, estas chiquito")
    alert("no puedes conducir suerte para la otra")
}else if(edad>=16&& edad <-17){
    console.log("tu ya puedes manejar")
    alert("puedes conducir felicidades")
}else{
    console.log("tu no lo hagas")
    alert("tu no lo hagas")
}
let uduario=(prompt("ingresa tu nombre de usuario"))
let userval="charlie botones"
let password=(prompt("ingresa tu contraseña"))
let passval="perritossalchichas123"

if(usuario=== userval && password===pasval){
    console.log("status 200")
    alert("acceso correcto")
}else{
    console.log("400")
    alert("acceso incorrecto, comprueba tus credenciales")
}
var number=10;
var str="hola mundo";
var underfined=underfined;
var bool=true;
var number=5;