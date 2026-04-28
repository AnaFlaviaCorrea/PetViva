const form = document.getElementById('formulario');
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav ul');
toggle?.addEventListener('click', () => menu.classList.toggle('open'));
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }); }));
form.addEventListener('submit', e => {
    e.preventDefault();
    const nome = nome.value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const msg = document.document.getElementById('msg');
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav ul');
    toggle?.addEvenmentById('msg');
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!nome || !ok || !mensagem) { msg.textContent = 'Preencha os campos corretamente.'; msg.style.color = 'red'; return; }
    msg.textContent = 'Mensagem enviada com sucesso!'; msg.style.color = 'green';
    form.reset();
});