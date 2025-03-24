/**
 * se os campos de nome e email estiverem preenchidos
 *    envie os dados (alerta para usuaria)
 * senão
 *    peça a usuaria que preencha os campos nome e email
 *
 * dequemviraoevento.addEventListener("evento", oquedevefazer)
 **/

const button = document.getElementById("botao-enviar");

function validaFormulario() {
  if (
    document.getElementById("nome-da-usuaria").value != "" &&
    document.getElementById("email-da-usuaria").value != ""
  ) {
    alert("Prontinho! Você receberá as novidades por email.");
  } else {
    alert("Por favor, preencha os campos nome e email");
  }
}

button.addEventListener("click", validaFormulario);
