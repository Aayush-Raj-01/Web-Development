const nt = document.querySelector('.navbar-toggle');
const nm = document.querySelector('.navbar-menu');

nt.addEventListener('click' , () => {
    nt.classList.toggle('active');
    nm.classList.toggle('active');
});

window.addEventListener('scroll',function() {
    var header = this.document.querySelector('.navbar');
    header.classList.toggle("sticky",window.scrollY > 0);
});