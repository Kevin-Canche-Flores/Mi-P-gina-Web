let city = 'Mérida';
let state = 'Yucatán'
let country = 'México';
let age = 24


// FUNCIONES
// https://www.youtube.com/watch?v=z9ydd8ekpzY&t=182s
//Mi primera Función en el DOM en el html con javascript
let tittlePage = document.querySelector('.nav-tittle');
let aboutMe = document.querySelector('.Read-Me');

tittlePage.innerText = 'Mi Web';

const changesAboutMe = (age = undefined, country = undefined, state = undefined, city = undefined) => {
  let contenido = `Tengo <b>${age}</b> años, y soy de <i>${city}, ${state}, ${country}</i>.<br>
                   Me encanta la tecnología, los videojuegos, y pasar tiempo con mi familia.
                   Busco mi primera oportunidad laboral en el área del <i>desarrollo web.</i>`
  return contenido
}
//LLamada de la función....
aboutMe.innerHTML = changesAboutMe(age, country, state, city);

// APARTADO DE NAVEGADOR
let menu_responsive = document.querySelector(".checkbtn");
      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };