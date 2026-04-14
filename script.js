document.addEventListener("DOMContentLoaded", () => {

  // MENU
  window.toggleMenu = function () {
    document.getElementById("menu").classList.toggle("active");
  };

  // CARRUSEL
  const images = document.querySelectorAll(".carousel img");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const counter = document.querySelector(".carousel-counter");

  if (images.length > 0) {
    let index = 0;

    function show(i) {
      images.forEach(img => img.classList.remove("active"));
      images[i].classList.add("active");
      counter.textContent = `${i + 1} / ${images.length}`;
    }

    if (prev) {
      prev.onclick = () => {
        index = (index - 1 + images.length) % images.length;
        show(index);
      };
    }

    if (next) {
      next.onclick = () => {
        index = (index + 1) % images.length;
        show(index);
      };
    }

    setInterval(() => {
      index = (index + 1) % images.length;
      show(index);
    }, 4000);

    show(index);
  }

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