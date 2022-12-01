const radioButton = document.querySelector('.light-dark-mode');
const lightMode = document.querySelector('.lightmode');
const darkMode = document.querySelector('.darkmode');

const switchTheme = (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        lightMode.classList.remove('lightmode--active');
        darkMode.classList.add('darkmode--active');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        darkMode.classList.remove('darkmode--active');
        lightMode.classList.add('lightmode--active');
    }    
}

radioButton.addEventListener('change', switchTheme, false);

