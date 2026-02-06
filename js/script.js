const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const form = this;
        const data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert("Obrigado! Sua mensagem foi enviada com sucesso.");
                form.reset();
            } else {
                response.json().then(data => {
                    if (data.errors) {
                        console.error("Erro no envio:", data.errors);
                    }
                });
                alert("Oops! Ocorreu um problema ao enviar seu formulário. Verifique o console (F12) para mais detalhes.");
            }
        }).catch(error => {
            console.error("Erro de rede:", error);
            alert("Oops! Ocorreu um problema ao enviar seu formulário. Verifique sua conexão.");
        });
    });
}

console.log("Script da Daiana Contabilidade carregado com sucesso!");

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        menuToggle.classList.toggle('is-active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('is-active');
        });
    });
}

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-on-scroll').forEach(element => {
    observer.observe(element);
});

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(a => {
        a.classList.remove('active');
        if (current && a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});
