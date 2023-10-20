const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 3) {
    warnings += `El nombre debe contener más de 3 caracteres.`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
    parrafo.classList.add('p-warning')
  } else {
    parrafo.innerHTML = "Enviado";
    parrafo.classList.add('p-success')
  }

  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});