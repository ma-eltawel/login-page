let home = document.querySelector('.home');
let cls = document.querySelector('.close');
let log = document.querySelector('.log-link');
let reg = document.querySelector('.reg-link');
let form = document.querySelector('.but-log');

reg.addEventListener('click', ()=> {
    home.classList.add('active');
});
log.addEventListener('click', ()=> {
    home.classList.remove('active');
});

form.addEventListener('click', ()=> {
    home.classList.add('pop');
});
cls.addEventListener('click', ()=> {
    home.classList.remove('pop');
});