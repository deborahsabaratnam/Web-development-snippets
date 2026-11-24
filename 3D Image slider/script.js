
const slides = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let active = 3;

function updateSlider() {
    slides.forEach((slide, index) => {
        const offset = index - active;
        const distance = Math.abs(offset);

        const scale = Math.max(
            0.45,
            1 - distance * 0.16
        );

        const rotate = offset === 0
            ? 0
            : offset < 0 ? 12 : -12;

        slide.style.transform = `
            translate(-50%, -50%)
            translateX(${offset * 100}px)
            rotateY(${rotate}deg)
            scale(${scale})
        `;

        slide.style.zIndex = slides.length - distance;

        slide.style.opacity = Math.max(
            0.35,
            1 - distance * 0.18
        );

        slide.classList.toggle(
            "active",
            index === active
        );
    });
}

next.addEventListener("click", () => {
    if (active < slides.length - 1) {
        active++;
        updateSlider();
    }
});

prev.addEventListener("click", () => {
    if (active > 0) {
        active--;
        updateSlider();
    }
});

updateSlider();
