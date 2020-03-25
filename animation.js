// SCRIPT ANIMATION DU TEXTE <h1> 
var typed = new Typed('#typed', {
    strings: ["le contenu.", "l'essentiel.", "le style bro'.", "git push"],
    typeSpeed : 50,
    backSpeed : 50,
    loop: true,
    showCursor: true
})
// FIN SCRIPT ANIMATION DU TEXTE <h1> 


// SCRIPT TOGGLE 
const checkbox = document.querySelector('input[name=theme]');
const currentTheme = localStorage.getItem('data-theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light') {
        checkbox.checked = true;
    }
}
        checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans()
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('data-theme', 'light');
            } else {
                trans()
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('data-theme', 'dark');
            }
        })

        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition')
            }, 1000)
        }
// FIN SCRIPT TOGGLE 


// SCRIPT BURGER 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Apparition menu 
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Apparition liens
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
            
        });

        // Animation burger menu
        burger.classList.toggle('burgerShut');
    });
}

navSlide();
// FIN SCRIPT BURGER 
