document.addEventListener("DOMContentLoaded", () => {

  // MENU
  window.toggleMenu = function () {
    document.getElementById("menu").classList.toggle("active");
  };

  // ================= CARRUSELES =================
  document.querySelectorAll(".carousel").forEach((carousel) => {

    const images = carousel.querySelectorAll("img");
    const prev = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");
    const counter = carousel.querySelector(".carousel-counter");

    let index = 0;

    function show(i) {

      images.forEach((img) => {
        img.classList.remove("active");
      });

      images[i].classList.add("active");

      counter.textContent = `${i + 1} / ${images.length}`;
    }

    prev.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      show(index);
    });

    next.addEventListener("click", () => {
      index = (index + 1) % images.length;
      show(index);
    });

    setInterval(() => {
      index = (index + 1) % images.length;
      show(index);
    }, 4000);

    show(index);
  });

  // LOGIN
  window.abrirLogin = function () {
    document.getElementById("loginModal").style.display = "block";
  };

  window.cerrarLogin = function () {
    document.getElementById("loginModal").style.display = "none";
  };

  window.validarLogin = function () {
    const usuario = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    if (usuario === "admin" && password === "1234") {
      window.location.href = "clases.html";
    } else {
      alert("Credenciales incorrectas");
    }
  };

  // CERRAR TOCANDO AFUERA
  window.onclick = (e) => {
    const modal = document.getElementById("loginModal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

});