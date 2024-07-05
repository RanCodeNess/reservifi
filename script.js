//
// Variables declaration
//

let toggleMenu = document.querySelector('.menu-toggle');
console.log(toggleMenu)

//
// Functions declaration
//

//
// Main code
//
toggleMenu.addEventListener('click',() =>{
    document.querySelector('.nav-links').classList.toggle('show');
    console.log('f')
} )