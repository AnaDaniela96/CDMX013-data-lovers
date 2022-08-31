import data from './data/harrypotter/data.js';//data de Harry Potter
import { filterPatronus, filterGroups } from './data.js';
const root = document.getElementById('texto')
root.classList = 'card'

//user story one
function createCards (characters){
    const createCard = document.createElement('div');
    createCard.classList = 'cards'
    let text = document.createElement('h4')
    text.textContent=characters.name 
    createCard.append(text)
    return createCard
}
data.characters.forEach(oneCharacters=>root.appendChild(createCards(oneCharacters)))

 //user story two


let filteredPat = filterPatronus(data.characters)

console.log(filteredPat)

   // create new cards for patronus
    //const createCardP = document.getElementById('patronus')
    //createCardP.addEventListener('click',patronus)
    
function patronus(filteredPat){
    const createCard = document.createElement('div');
    createCard.classList = 'cards'
    let text = document.createElement('h4')
    text.textContent=filteredPat
    createCard.append(text)
    return createCard
}
filteredPat.forEach(oneCharacters=>root.appendChild(patronus(oneCharacters)))

// first: clean dom
const clean = document.querySelector("main")
const cleanN= document.getElementById('patronus')
cleanN.addEventListener('click',()=>{
    clean.innerHTML =" ";  
})


//filter by "patronus"


//para filter groups
const select = document.getElementById("organ").value
let groups = filterGroups(data.characters,select)
console.log(groups);