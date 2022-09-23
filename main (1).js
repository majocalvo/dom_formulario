//DOM
// Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).
// En Javascript, cuando nos referimos al DOM nos referimos a esta estructura, que podemos modificar de forma dinámica desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

// En Javascript, la forma de acceder al DOM es a través de un objeto llamado document, que representa el árbol DOM de la página o pestaña del navegador donde nos encontramos. En su interior pueden existir varios tipos de elementos, pero principalmente serán element o node:
// Element no es más que la representación genérica de una etiqueta: HTMLElement.
// Node es una unidad más básica, la cuál puede ser element o un nodo de texto.
// Tods los elementos HTML, dependiendo del elemento que sean, tendrán un tipo de dato específico.

// console.log(window)
// console.log(window.document)
// console.log(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document.documentElement)
// console.log(document.doctype)
// console.log(document.title)

// console.log(document.documentElement.lang)
// document.documentElement.lang = 'es-PE'
// console.log(document.documentElement.lang)

//Seleccion de elementos

// tradicional

// - getElementById('')

// const $menu = document.getElementById('menu')
// console.log($menu)

// - getElementByClassName()
// const $clase = document.getElementsByClassName('enlace1')
// console.log($clase)

// - getElementsByName()
// const $name = document.getElementsByName('viewport')
// console.log($name)

// - getElementByTagName()
// const $div = document.getElementsByTagName('div')
// console.log($div)

// moderna

//querySelector()
// const $menu = document.querySelector('#menu')
// console.log($menu)

// const $clase = document.querySelector('.enlace1')
// console.log($clase)

// const $div = document.querySelector('div')
// console.log($div)

//querySelectorAll()

// const $divs = document.querySelectorAll('div')
// console.log($divs)

// Metodos de Atributo

// const $linkDom = document.querySelector('.link_index')
// console.log($linkDom)

//hasAttribute()
// console.log($linkDom.hasAttribute('id'))

// getAttribute()
// console.log($linkDom.getAttributeNames())
// console.log($linkDom.getAttribute('href'))

// Eliminar Atributos
// $linkDom.removeAttribute('href')
// console.log($linkDom.getAttributeNames())

// Insertar Atributos
// $linkDom.setAttribute('href', '#')
// $linkDom.setAttribute('target', '_blanck')
// $linkDom.setAttribute('rel','noopener')
// console.log($linkDom.getAttributeNames())

//Modificar Atributos
// $linkDom.setAttribute('href', 'https://larnu.app/')

// Modificaion de estilos
// let $enlace = document.querySelector(".enlace1");
// console.log($enlace.style);
// // 1ra forma
// $enlace.style.setProperty("text-decoration", "none");
// $enlace.style.setProperty("background-color", "#000");
// $enlace.style.setProperty("color", "#fff");

// //2da forma
// $enlace.style.padding = "2rem";
// $enlace.style.margin = "2rem";
// $enlace.style.borderRadius = '1rem'
// $enlace.style.backgroundColor = 'blue'

// Clases
// let $card = document.querySelector(".card");

// console.log($card)
// console.log($card.className)
// console.log($card.classList)

// //ver clases
// console.log($card.classList.contains('clase'))

// //Agregar clases
// $card.classList.add('rotate-45')
// console.log($card.classList.contains('rotate-45'))

// //Eliminar Clases
// $card.classList.remove('rotate-45')

// //toggle
// $card.classList.toggle('rotate-45')
// $card.classList.toggle('rotate-45')
// $card.classList.toggle('rotate-45')
// $card.classList.toggle('rotate-45')

// // cambiar las clases
// // $card.classList.replace('rotate-45', 'rotate-135')

// $card.classList.add('opacity80', 'sepia')

// console.log($card.className)
// console.log($card.classList)

// Modificacion de texto

// let $parrafo = document.getElementById("parrafo");

// let lorem = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, <strong>totam quos voluptatibus</strong> rem obcaecati natus necessitatibus ipsa mollitia rerum pariatur? Cum esse ratione debitis sint dicta eum nisi aliquam praesentium.</p>

// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, totam quos voluptatibus rem obcaecati natus necessitatibus ipsa mollitia rerum pariatur? Cum esse ratione debitis sint dicta eum nisi aliquam praesentium.</p>

// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, totam quos voluptatibus rem obcaecati natus necessitatibus ipsa mollitia rerum pariatur? Cum esse ratione debitis sint dicta eum nisi aliquam praesentium.</p>
// `;

// $parrafo.innerText = lorem
// $parrafo.textContent = lorem
// $parrafo.innerHTML = lorem

// console.log($parrafo);

// let $figure = document.querySelector(".figure");
// console.log($figure);
// let texto = "Hola Mundo";

// console.log(($figure.children[1].children[1].innerHTML = texto));

// console.log($figure.firstElementChild.children);
// console.log($figure.children[0].children);
// console.log($figure.lastElementChild.children);
// console.log($figure.children[4].children);
// console.log(
//   ($figure.parentElement.children[8].children[0].children[1].innerHTML =
//     "Estoy recorriendo el dom")
// );

// Crear Elemento HTML
// let span = document.createElement("span");
// let img = document.createElement("img");
// let h2 = document.createElement("h2");

// let $pages = document.getElementById("page");

// $pages.appendChild(div);

let fragm = document.createDocumentFragment();

for (let i = 0; i < 10000; i++) {
  let div = document.createElement("div");
  div.textContent = `Div numero ${i}`;
  div.style.backgroundColor='black'
  div.style.color='#fff'
  div.style.marginBottom='1rem'
  fragm.appendChild(div);
}

document.body.appendChild(fragm);

console.log(fragm)
