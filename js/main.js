// Rolagem suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito parallax simples no mouse (opcional)
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const heroContent = document.querySelector('.hero-content');
    const moveX = (mouseX - window.innerWidth / 2) * 0.02;
    const moveY = (mouseY - window.innerHeight / 2) * 0.02;
    
    heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
});