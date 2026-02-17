// Efeito Parallax no Hero
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const content = document.querySelector('.hero-content');
    if(content) {
        const moveX = (mouseX - window.innerWidth / 2) * 0.01;
        const moveY = (mouseY - window.innerHeight / 2) * 0.01;
        content.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});