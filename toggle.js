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