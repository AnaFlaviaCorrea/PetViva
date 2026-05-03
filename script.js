const form = document.getElementById('formulario');
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav ul');

// --- MENU MOBILE ---
toggle?.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede fechar ao clicar no próprio botão
    menu.classList.toggle('open');
});

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll('.nav ul a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
});

// --- SCROLL SUAVE ---
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const targetId = a.getAttribute('href');
        if (targetId !== "#") {
            e.preventDefault();
            const target = document.querySelector(targetId);
            target?.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// --- VALIDAÇÃO ---
form?.addEventListener('submit', e => {
    e.preventDefault();
    
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');
    const msgStatus = document.getElementById('msg');

    // Regex: Pelo menos nome e um sobrenome
    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}(\s[A-Za-zÀ-ÖØ-öø-ÿ]{2,})+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexNome.test(nome.value.trim())) {
        msgStatus.textContent = 'Digite seu nome completo (apenas letras).';
        msgStatus.style.color = 'red';
        nome.focus();
        return;
    }

    if (!regexEmail.test(email.value.trim())) {
        msgStatus.textContent = 'E-mail inválido.';
        msgStatus.style.color = 'red';
        email.focus();
        return;
    }

    // Se passar nas validações
    msgStatus.textContent = 'Enviando...';
    msgStatus.style.color = 'var(--roxo)';

    setTimeout(() => {
        msgStatus.textContent = 'Mensagem enviada com sucesso! 🐾';
        msgStatus.style.color = 'green';
        form.reset();
    }, 1500);
});
// --- MENU ATIVO (SCROLL SPY) ---
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
const header = document.querySelector('.cabecalho');

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            const headerHeight = header.offsetHeight;

            const targetPosition = target.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
