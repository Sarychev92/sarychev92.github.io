let page = document.querySelector('.page');
let themeButtun = document.querySelector('.theme-button');
themeButtun.onclick = function () {
    page.classList.toggle('dark-theme');
}