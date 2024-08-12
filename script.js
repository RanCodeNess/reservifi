//
// Variables declaration
//

// let toggleMenu = document.querySelector('.menu-toggle');
// console.log(toggleMenu)

// //
// // Functions declaration
// //

// //
// // Main code
// //
// toggleMenu.addEventListener('click',() =>{
//     document.querySelector('.nav-links').classList.toggle('show');
//     console.log('f')
// } )
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    if (navLinks.classList.contains('show')) {
        navLinks.style.height = '0px';
    } else {
        navLinks.style.height = navLinks.scrollHeight + 'px';
    }
    navLinks.classList.toggle('show');
});

// console.log("hi")

// handle the svgs

let children = [];
childrenLength = 8;

for (let i = 0; i < childrenLength; i++) {
    children.push(document.querySelector(`.child-${i}`));
}

window.addEventListener('resize', () => {

})

let points = document.getElementsByClassName('before');
let sticks = document.getElementsByClassName('after')
console.log(points.length);
let initialValue
// console.log(points[4])

function stickresize() {
    let stickHeight = [];
    // console.dir(points[0])
    for(let i = 0; i < points.length - 1; i++) {
        stickHeight.push(Math.abs(points[i].getBoundingClientRect().y - points[i+1].getBoundingClientRect().y))
        // console.log(stickHeight)
        sticks[i].style.height = `${stickHeight[i]}px`;
        // console.log(sticks[i].style.height)
    };
}


document.addEventListener('DOMContentLoaded', () => {
    stickresize()
})

window.addEventListener('resize', () => {
    stickresize()
})