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

// SCRIPT BOUTONS COULEURS

const iChangeColors = () => {
    
    // Sélectionnent les boutons switch (un par couleur) et activent setColor au clic
    document.querySelector('.toGreen').addEventListener('click', () => {
        setColor('#00FF0C')
    });
    document.querySelector('.toPink').addEventListener('click', () => {
        setColor('#FB28FF')
    });
    document.querySelector('.toYellow').addEventListener('click', () => {
        setColor('#fac51c')
    });
    document.querySelector('.toBlue').addEventListener('click', () => {
        setColor('#28FFFB')
    });

    // Sélectionne et modifie la couleur de tous les background, textes et bordures
    let setColor = (color) => {
        document.querySelectorAll('.backgroundChange').forEach(function (elem) {
            elem.style.backgroundColor = color;
        });
        document.querySelectorAll('.borderChange').forEach(function (elem) {
            elem.style.borderColor = color;
        });
        document.querySelectorAll('.textChange').forEach(function (elem) {
            elem.style.color = color;
        });
        document.querySelectorAll('.textHoveredChange').forEach(function (elem) {
            elem.addEventListener('mouseover', function() {
                this.style.color = color;
            });
            elem.addEventListener('mouseout', function() {
                this.style.color = '';
            });
        })
    };
};

iChangeColors();
// FIN SCRIPT BOUTONS COULEURS