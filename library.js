let books = [];
function Book(){
//TODO
}


function addBookToLibrary(book){
    books.push(book)
}
function DisplayBooks(){

}



let menuChange = document.querySelector('.menu')
let navBackground = document.querySelector('.nav-background')
let container = document.querySelector('.container')
let nav = document.querySelector('.nav')
const MENU_SRC = '/images/menu.svg';
const MENU_CHANGE_SRC = '/images/menu-close.svg';

menuChange.addEventListener('click',(e)=>{
    e.stopPropagation()
    changeMenuIcon()
    
})
nav.addEventListener('click',(e)=>{
    e.stopPropagation()
})
container.addEventListener('click',(e)=>{
    if(nav.classList.contains('active')){
        
        navBackground.classList.remove('active')
        nav.classList.remove('active')
        changeMenuIcon()
    }
});


function changeMenuIcon(){
    let currentMenu = menuChange.getAttribute('src');
    if( currentMenu.includes(MENU_SRC) )
    {   navBackground.classList.add('active')
        nav.classList.add('active')
        currentMenu = currentMenu.replace(MENU_SRC,MENU_CHANGE_SRC)
        
    }
    else{
        navBackground.classList.remove('active')
        nav.classList.remove('active')
        currentMenu = currentMenu.replace(MENU_CHANGE_SRC,MENU_SRC)
    }
   
    menuChange.src = currentMenu
}