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
const MENU_SRC = '/images/menu.svg';
const MENU_CHANGE_SRC = '/images/menu-close.svg';

menuChange.addEventListener('click',()=>{
    let currentMenu = menuChange.getAttribute('src');
    if( currentMenu.includes(MENU_SRC) )
    {
        currentMenu = currentMenu.replace(MENU_SRC,MENU_CHANGE_SRC)
    }
    else{
        currentMenu = currentMenu.replace(MENU_CHANGE_SRC,MENU_SRC)
    }
   
    menuChange.src = currentMenu
})