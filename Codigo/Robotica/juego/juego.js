var SMS = alert('Bienvenido a mi juego')
var j1 = prompt('Selecciona piedra, papel o tijera')
var j2 = prompt('Selecciona piedra, papel o tijera')
var piedra = 'piedra'
var papel = 'papel'
var tijera = 'tijera'

if (j1 == piedra && j2 == papel){
    alert('El papel le gana a la piedra, Jugador 2 Gana')
}else if (j1 == papel && j2 == tijera){
    alert('La tijera le gana a papel, Jugador 2 gana')
}else if (j1 == tijera && j2 == piedra){
    alert('La piedra le gana a la tijera, Jugador 2 gana')
}else if (j1 == piedra && j2 == piedra){
    alert('Piedra y piedra empatan, Nadie gana')
}else if (j1 == papel && j2 == papel){
    alert('Papel y papel empatan, Nadie gana')
}else if (j1 == tijera && j2 == tijera){
    alert('Tijeras y tijeras empatan, Nadie gana')
}else if (j1 == piedra && j2 == tijera){
    alert('Piedra le gana a tijeras, Jugador 1 gana')
}else if (j1 == tijera && j2 == papel){
    alert('Tijeras gana a papel, Jugador 1 gana')
}else if (j1 == papel && j2 == piedra){
    alert('Papel gana a piedra, Jugador 1 gana')
}else{
    alert('Algo salio mal, intentalo de nuevo')
}