let books = [];

let submitBtn = document.querySelector('.btn')
let menuChange = document.querySelector('.menu')
let navBackground = document.querySelector('.nav-background')
let container = document.querySelector('.container')
let addBook = document.querySelector('.nav :nth-child(1)')
let form = document.querySelector('.nav :nth-child(2)')
let nav = document.querySelector('.nav')
let inputs = document.querySelectorAll('input:not([type=checkbox])')
let removeBooks = document.querySelector('div.nav-el:last-of-type')
let removePopUp = document.querySelector('.nav-el .sm-text')
let addPopUp = document.querySelector('form .sm-text')
let cards = document.querySelector('.cards')
let init = document.querySelector('.init')


const MENU_SRC = '/images/menu.svg';
const MENU_CHANGE_SRC = '/images/menu-close.svg';




function Book(author, title, numPages , read){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = read;
}



function addBookToLibrary(book){
    books.push(book)
    
    

}
function addToCard(book , property ){
    let Info = document.createElement('div')
    if(property == 'read'){
        if(book[property] == false){
            Info.textContent = `Book isn't read!`
        }
        else{
            Info.textContent = `Book read!`
        }
    }
    else
        Info.textContent = `${property}: ${book[property]}`
    return Info
}


function DisplayBooks(book){
   
        let card = document.createElement('div')
        card.classList.add('card')
        card.setAttribute('id', books.length-1)
        for(const property in book){
            card.appendChild(addToCard(book , property))
        }
        cards.appendChild(card)
         card.append(createRemoveBtn(card))
         cards.removeChild(init)
        
    

}
function createRemoveBtn(card){
    let btn = document.createElement('button')
        btn.textContent = 'Delete Book'
        btn.setAttribute('connection' , card)
        console.log(new DOMParser().parseFromString(btn.getAttribute('connection'),'text/html') == card)
        btn.className = 'remove-btn btn'
        btn.addEventListener('click',()=>{
            cards.removeChild(card)
            books.splice(btn.id , 1)
            if(books.length == 0 ){
                cards.appendChild(init)
            }
            })
        return btn

       
}

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let authorInput = document.getElementById('author');
    let titleInput = document.getElementById('title');
    let numberInput = document.getElementById('numPages');
    let readValue = document.getElementById('read');
    if(checkValidity(authorInput.value , titleInput.value , numberInput.value))
    {
        const book = new Book(authorInput.value , titleInput.value , numberInput.value , readValue.checked)
    addBookToLibrary(book)
    addPopUp.classList.add('green');
    addPopUp.textContent = 'Books added successfully!'
    DisplayBooks(book)
    authorInput.value = ''
    titleInput.value = ''
    numberInput.value = ''
    readValue.checked = false
    setTimeout(()=>{
        addPopUp.textContent = ''
        addPopUp.classList.remove('green')
    },2000);
    }
    else{
    addPopUp.textContent = 'Please fill in all the fields!'
    addPopUp.classList.add('red')
    setTimeout(()=>{
        addPopUp.textContent = ''
        addPopUp.classList.remove('red')
    },2000);
    }
    
})

function checkValidity(first,second,third){
    if(first == '' || second == '' || third == ''){
        return false
    }
    if(!Number.isInteger(+third)){
        return false
    }
    return true
}

removeBooks.addEventListener('click',()=>{

    if(books.length == 0){
        removePopUp.classList.add('red')
        removePopUp.textContent = 'Add books first!';
    setTimeout(()=>{
        removePopUp.textContent = ''
        removePopUp.classList.remove('red')
    },2000);

    return
    }

    
    for(let i = 0 ; i < books.length ; i++){
        books.pop()
    }
    Array.from(cards.children).forEach(child =>{
        cards.removeChild(child)
    })
    removePopUp.textContent = 'All Books removed successfully';
    cards.appendChild(init)
    removePopUp.classList.add('green')
    setTimeout(()=>{
        removePopUp.textContent = '';
        removePopUp.classList.remove('green')
    },2000)

})
inputs.forEach(input =>{
    input.addEventListener('input',()=>{
        if(input.value != ''){
            input.parentElement.querySelector('label').classList.add('not-empty')
        }
        else{
            input.parentElement.querySelector('label').classList.remove('not-empty')
        }
    })
})

menuChange.addEventListener('click',(e)=>{
    e.stopPropagation()
    changeMenuIcon()
    
})
nav.addEventListener('click',(e)=>{
    e.stopPropagation()
})

addBook.addEventListener('click', (e)=>{
    if(form.classList.contains('hidden'))
    {
        form.classList.add('active')
        form.classList.remove('hidden')
    }
    else{
        form.classList.remove('active')
        form.classList.add('hidden')
    }
    
    
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