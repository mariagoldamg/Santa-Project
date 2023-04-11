function xmasCountdown() {

    const xmasDate = new Date (`December 25,2022 00:00`);
    const now = new Date();

    const diff = xmasDate - now;

    const mInSecond = 1000;
    const mInMinute = 60*1000;
    const mInHour = 60*60*1000;
    const mInDay = 60*60*24*1000; 
    
    const displayDay = Math.floor(diff/mInDay);
    document.querySelector (`.days`).textContent = displayDay


    const displayHour = Math.floor(diff%mInDay/mInHour);
    document.querySelector (`.hours`).textContent = displayHour;

    const displayMinute = Math.floor(diff%mInHour/mInMinute);
    document.querySelector (`.minutes`).textContent = displayMinute;

    const displaySecond = Math.floor(diff%mInMinute/mInSecond);
    document.querySelector (`.seconds`).textContent = displaySecond;

    

    if (diff<0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;

        clearInterval(timerID);
        merryXmass (); 
    }

    
} 

let timerID = setInterval(xmasCountdown,1000);

xmasCountdown();

function merryXmass () {
    const header = document.querySelector (`h1`);
    header.textContent = `MERRY XMAS!!! HO-HO-HO!`;
    header.classList.add (`red`);

    const audio2 = document.querySelector (`#myAudio2`);
    audio2.play();


}

const btn = document.querySelector (`#btn`);
const audio = document.querySelector (`#myAudio`);

btn.addEventListener (`click`, function () {


    if (audio.paused) {
        audio.play();
        btn.classList.toggle (`pause`);

        
    }
    else {
        audio.pause();
        btn.classList.toggle(`pause`);
        
    }

});

particlesJS("particles-js",
 {"particles":
 {"number":
 {"value":800, "density":{"enable":true,"value_area":1000}},
 "color":{"value":"#fff"},
 "shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":7},"image":{"src":"img/github.svg","width":50,"height":50}},
 "opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
 "size":{"value":8.33451405615796,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
 "line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},
 "move":{"enable":true,"speed":5.333805622463184,"direction":"bottom","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement);

 count_particles = document.querySelector('.js-count-particles'); 
 update = function() { 
    stats.begin(); 
    stats.end(); 
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array)    
    { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } 
 
 requestAnimationFrame(update); }; 

 requestAnimationFrame(update);;


/*
const btn = document.querySelector (`#btn`);
const audio = document.querySelector (`#myAudio`);
const imgSrc = [`https://img.icons8.com/wired/2x/play.png`, `https://img.icons8.com/wired/2x/pause.png`];

btn.addEventListener (`click`, ()=>{
    if (audio.paused) {
        playSound();
    }
    else {
        pauseSound();
    }
})

function playSound() {
    document.querySelector (`.img_src`).src = imgSrc[0];
    audio.play ();
} 

function pauseSound() {
    document.querySelector (`.img_src`).src = imgSrc[0];
    audio.pause ();
} 
*/
