  document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obter data e hora atual no formato brasileiro
    const agora = new Date();
    const dataHora = agora.toLocaleDateString('pt-BR') + ' às ' + agora.toLocaleTimeString('pt-BR');

    // Preencher o campo oculto
    document.getElementById("newsletter-horario").value = dataHora;

    const formData = new FormData(form);
    const submitButton = form.querySelector(".btn-submit");

    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          submitButton.textContent = "Enviado";

          form.reset();

          setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = "Enviar";
          }, 1000);
        } else {
         
          submitButton.disabled = false;
          submitButton.textContent = "Enviar";
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
       
        submitButton.disabled = false;
        submitButton.textContent = "Enviar";
      });
  });
});
