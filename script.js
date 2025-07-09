window.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    const image = document.querySelector(".profile-img");
    const container = document.querySelector(".container");

    heading.style.opacity = 0;
    image.style.opacity = 0;
    container.style.opacity = 0;
    container.style.transform = "translateY(40px)";

    setTimeout(() => {
        heading.style.transition = "all 1s ease";
        heading.style.opacity = 1;
        heading.style.transform = "translateY(0)";

        image.style.transition = "all 1.2s ease";
        image.style.opacity = 1;
        image.style.transform = "scale(1)";

        container.style.opacity = 1;
        container.style.transform = "translateY(0)";
    }, 300);
});
