let points = document.getElementById('points');
let point1 = document.getElementById('point1');
let point2 = document.getElementById('point2');
let point3 = document.getElementById('point3');
let point4 = document.getElementById('point4');
console.log(points.offsetTop);
console.log(window.pageYOffset);
window.onscroll = function() {
    if ((window.pageYOffset + 400) >= points.offsetTop) {
        console.log(window.pageYOffset);
        point1.classList.add('animation-to-right');
        point1.classList.remove('animation-point');
        point2.classList.add('animation-to-top');
        point2.classList.remove('animation-point');
        point3.classList.add('animation-to-top');
        point3.classList.remove('animation-point');
        point4.classList.add('animation-to-left');
        point4.classList.remove('animation-point');
    }
}