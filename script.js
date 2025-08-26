 document.getElementById("miFormulario").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje");

  const emailValido = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!emailValido.test(email)) {
    mensaje.textContent = " El email no tiene un formato válido.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "✅ Formulario enviado correctamente.";
    mensaje.style.color = "green";
  }
});

