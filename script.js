document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    noBtn.style.position = "absolute"; // Para que el botón se mueva
    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    yesBtn.addEventListener("click", () => {
        document.body.innerHTML = "<h1>Tomaste la decisión correcta 💖</h1>";
    });
});
