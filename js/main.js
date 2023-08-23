const correoInputElement = document.getElementById("correo");
const nombreCompletoInputElement = document.getElementById("nombreCompleto");
const salarioInputElement = document.getElementById("salario");
const consultarBtn = document.getElementById("consultarBtn");

const BUTTON_COLOR = "#c7a17a";

consultarBtn.addEventListener("click", () => {
  const correoValor = correoInputElement.value;
  const nombreCompletoValor = nombreCompletoInputElement.value;
  const salarioValor = salarioInputElement.value;

  validarCampos(correoValor, nombreCompletoValor, salarioValor);
});

function validarCampos(correo, nombre, salario) {
  if (correo && nombre && salario) {
    consultaPrestamo(correo, nombre, salario);
  } else {
    mostrarAlerta(
      "CAMPO INCOMPLETO",
      "Es necesario que complete todos los campos",
      "warning"
    );
  }
}

function consultaPrestamo(correo, nombreCompleto, salario) {
  if (salario < 100000) {
    mostrarAlerta(
      "NO CUMPLE CON LOS REQUISITOS",
      `${nombreCompleto} Lamentablemente no podemos brindarle ningún préstamo en este momento`,
      "error"
    );
  } else {
    mostrarAlerta(
      "REQUISITOS APROBADOS",
      `A continuación le mandaremos un correo a la casilla ${correo} con los pasos a seguir`,
      "success"
    );
  }
}

function mostrarAlerta(title, text, icon) {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    confirmButtonColor: BUTTON_COLOR,
    confirmButtonText: "De acuerdo",
  });
}
