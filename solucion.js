console.log('inicio')

const $nombre = document.getElementById("nombre")
const $apellido = document.getElementById("apellido")
const $saludo = document.getElementById("saludo")

function enviarSaludo() {

if($nombre.value == "" || $apellido.value ==""){
    $saludo.innerHTML = "Debes ingresar todos los campos"
return
}
$saludo.innerHTML = ""
let p = document.createElement("p")
$saludo.appendChild(p)

p.innerHTML = "Hola " + $nombre.value + " " + $apellido.value + ", gracias por rellenar el formulario de LarnU";

$nombre.value = ""
$apellido.value = ""

}
