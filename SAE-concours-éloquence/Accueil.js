const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')
let openMenu;

menu.addEventListener('click', function(){
    if (nav.style.display != 'flex') {
        nav.style.display = 'flex'
        menu.src = './Assets/close.svg'
        openMenu = true;
    } else {
        nav.style.display = 'none'
        menu.src = './Assets/menu.svg'
        openMenu = false;
    }}
)

window.addEventListener('resize', function(){
    if (this.innerWidth > 1200 && !openMenu) {
        nav.style.display = 'flex'
    } else{
        nav.style.display = 'none'
    }
})
