
document.addEventListener("DOMContentLoaded", function() {
    const text = "CMSP CHEATS PANEL";
    const typedText = document.getElementById("typed-text");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});
