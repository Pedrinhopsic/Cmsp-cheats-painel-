
function copyCode(id) {
    const text = id === 'codigo1' ? 'console.log("Código 1 copiado");' : 'console.log("Código 2 copiado");';
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('toast');
        toast.className = 'toast show';
        setTimeout(() => { toast.className = 'toast'; }, 3000);
    });
}
