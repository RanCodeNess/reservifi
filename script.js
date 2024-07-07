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
