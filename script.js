
function copyScript(scriptText) {
    navigator.clipboard.writeText(scriptText).then(() => {
        showToast("Script copiado com sucesso!");
    });
}
function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#222";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "6px";
    toast.style.color = "#fff";
    toast.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    document.body.appendChild(toast);
    setTimeout(() => document.body.removeChild(toast), 3000);
}
