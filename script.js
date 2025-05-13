function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert("Script copiado com sucesso!");
    });
}
