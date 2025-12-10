
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.querySelector(".carousel .prev");
const nextBtn = document.querySelector(".carousel .next");
const counter = document.querySelector(".carousel-counter");

let index = 0;
const total = images.length;

function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
    counter.textContent = `${i + 1} / ${total}`;
}

prevBtn.addEventListener("click", () => {
    index = (index === 0) ? total - 1 : index - 1;
    showImage(index);
});

nextBtn.addEventListener("click", () => {
    index = (index === total - 1) ? 0 : index + 1;
    showImage(index);
});

// Auto-slide
setInterval(() => {
    index = (index === total - 1) ? 0 : index + 1;
    showImage(index);
}, 4000);

showImage(index);