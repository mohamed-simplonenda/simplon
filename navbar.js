console.log('hello');
const barre = document.querySelector('.navbar');
window.onscroll = function() {
    var top = window.scrollY;
    console.log(top);
    if (top >= 10) {
        barre.classList.add('active')
    }
    else{
        barre.classList.remove('active')
    }
}