
function copiarTexto(texto) {
  navigator.clipboard.writeText(texto).then(() => {
    const aviso = document.createElement('div');
    aviso.textContent = "Copiado com sucesso!";
    aviso.style.position = "fixed";
    aviso.style.bottom = "20px";
    aviso.style.left = "50%";
    aviso.style.transform = "translateX(-50%)";
    aviso.style.background = "#00aaff";
    aviso.style.padding = "10px 20px";
    aviso.style.borderRadius = "5px";
    aviso.style.color = "white";
    document.body.appendChild(aviso);
    setTimeout(() => aviso.remove(), 2000);
  });
}
