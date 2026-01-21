const nt = document.querySelector('.navbar-toggle');
const nm = document.querySelector('.navbar-menu');

nt.addEventListener('click' , () => {
    nt.classList.toggle('active');
    nm.classList.toggle('active');
});
// satisfies