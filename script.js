const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.classList.add('sending');
    setTimeout(() => {
        form.classList.remove('sending');
        alert('Formulario enviado correctamente. Gracias por contactarme!');
        form.reset();
    }, 1500);
});


