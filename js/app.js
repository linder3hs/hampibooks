gsap.fromTo(".hero__text", { x: "-100vw" }, { x: 0, duration: 1.5 });
gsap.fromTo(".hero__image", { x: "100vw" }, { x: 0, duration: 1.5 });
gsap.fromTo(
    ".container__header",
    { y: "-30vh" },
    { y: 0, duration: 1.5, delay: 1 }
);
