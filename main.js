import './sass/main.scss'

let options = {
    strings: ['FRONTEND developer', 'BACKEND developer', 'BIKE rider', 'MTB rider'],
    typeSpeed: 120,
    startDelay: 500,
    loop: true,
    loopCount: Infinity,
};

let typed = new Typed('.typed', options);
