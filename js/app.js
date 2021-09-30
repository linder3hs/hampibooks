gsap.fromTo(".hero__text", { x: "-100vw" }, { x: 0, duration: 1.5 });
gsap.fromTo(".hero__image", { x: "100vw" }, { x: 0, duration: 1.5 });
gsap.fromTo(
    ".container__header",
    { y: "-30vh" },
    { y: 0, duration: 1.5, delay: 1 }
);
gsap.fromTo(".social__media", { y: 200 }, { y: 0, delay: 2 });

window.addEventListener("scroll", function () {
    let social = document.querySelector(".social__media");
    social.classList.toggle("socialMedia__scroll", window.scrollY > 300);
    console.log("funco");
});
