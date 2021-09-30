let points = document.getElementById('points');
let point1 = document.getElementById('point1');
let point2 = document.getElementById('point2');
let point3 = document.getElementById('point3');
let point4 = document.getElementById('point4');
let moreprojects = document.getElementById('moreprojects');
let allprojects = document.querySelectorAll('.not-show-projects');
console.log(points.offsetTop);
console.log(window.pageYOffset);
if (points.offsetTop > 0) {
    window.onscroll = function() {
        if ((window.pageYOffset + 450) >= points.offsetTop) {
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
}

moreprojects.addEventListener("click", () => {
    allprojects.forEach((x) => {
        // console.log(x);
        x.classList.remove('not-show-projects');
    });
    document.querySelector('.projects-more').classList.add('not-show-projects');
})