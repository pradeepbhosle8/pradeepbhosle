console.log('index js working');

// fix nav 
let navBar = document.querySelector('.navigation');
// console.log(navBar);
let navHeight = navBar.getBoundingClientRect().height;
// console.log(navHeight);
window.addEventListener('scroll', ()=>{
    let scrollHeight = window.pageYOffset;
    // console.log(scrollHeight);
    if(scrollHeight > navHeight){
        navBar.classList.add('fix-nav');
    }else{
        navBar.classList.remove('fix-nav');
    }
});

// responsive navigation
let navMenu = document.querySelector('.nav-menu');
let navigation = document.querySelector('.navigation');
let openBtn = document.querySelector('.hamburger');
let closeBtn = document.querySelector('.close');
let nevLeft = navMenu.getBoundingClientRect().left;
// console.log(nevLeft);
openBtn.addEventListener('click', ()=>{
    console.log('Open click');
    navigation.classList.toggle('show');
    navMenu.classList.toggle('show');
    document.body.classList.toggle ('show');
    // if(nevLeft < 0){
    //     console.log(navMenu);
    //     navigation.classList.add('show');
    //     navMenu.classList.add('show');
    //     document.body.classList.add('show');
    // }
})
// close 
closeBtn.addEventListener('click', ()=>{
    console.log('close click');
    navigation.classList.toggle('show');
    navMenu.classList.toggle('show');
    document.body.classList.toggle ('show');
    // if(nevLeft < 0){
    //     navigation.classList.remove('show');
    //     navMenu.classList.remove('show');
    //     document.body.classList.remove('show');

    // }
})

//scroll navigation click
let links = [...document.querySelectorAll('.scroll-link')];
// console.log(links);
links.map(link =>{
    // console.log(link)
    link.addEventListener('click', e => {
        e.preventDefault();
        console.log(e.target);
        let id = e.target.getAttribute('href').slice(1);
        console.log(id);
    })
})



