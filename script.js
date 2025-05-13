
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("Copiado com sucesso!");
  }).catch(err => {
    showToast("Erro ao copiar!");
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
