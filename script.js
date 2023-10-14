/* <form id="form">
<div class="row_formn">
    <div class="column_formn">
        <h3>Contacto</h3>
        <div class="input-group">
            <label for="nombre">Nombre:</label>
            <input type="text" id="name" name="nombre" required>
        </div>

        <div class="input-group">
            <label for="apellidos">Apellidos:</label>
            <input type="text" id="lastname" name="apellidos" required>
        </div>

        <div class="input-group">
            <label for="telefono">Teléfono:</label>
            <input type="number" id="number" name="telefono" required>
        </div>

        <div class="input-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required>
        </div>

        <div class="input-group">

            <label for="mensaje">Mensaje:</label>
            <textarea id="menssage" name="mensaje" required></textarea>
        </div>

        <div class="input-group">
            <label for="fecha">Fecha:</label>
            <input type="date" id="date" name="fecha" required>
        </div>
        <label class="card">
            <input type="radio" name="card" value="si" />
            Acepto el tratamiento de mis datos personales.
        </label>
    </div>
</div>
<div class="row_formn">
    <div class="input-bottom">
        <input type="reset" value="Resetear">
        <input type="submit" value="Enviar">
    </div>

</form> */

const formulario = document.getElementById("form");
const nombre = document.getElementById("name");
const apellidos = document.getElementById("lastname");
const telefono = document.getElementById("number");
const email = document.getElementById("email");
const fecha = document.getElementById("date");
const parrafo = document.getElementById("parrafo");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let alert = "";
  let getEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let entrar = true;
  let enviado = "Formulario enviado con éxito";

  if (nombre.value.length < 1) {
    alert += "El nombre no es válido. ";
    entrar = false;
  }

  if (!getEmail.test(email.value)) {
    alert += "El email no es válido. ";
    entrar = false;
  }

  if (telefono.value.length < 9) {
    alert += "El número no es válido. ";
    entrar = false;
  }

  if (entrar) {
    parrafo.innerHTML = "Formulario válido. " + enviado;
  } else {
    parrafo.innerHTML = alert;
  }
});
