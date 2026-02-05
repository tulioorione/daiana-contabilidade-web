document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const mensagem = this.querySelector('textarea').value;

    if (nome && email && mensagem) {
        alert(`Obrigado ${nome}! Sua mensagem foi enviada com sucesso.`);
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});

console.log("Script da Daiana Contabilidade carregado com sucesso!");

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    menuToggle.classList.toggle('is-active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

