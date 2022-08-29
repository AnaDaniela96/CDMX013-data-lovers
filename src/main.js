import data from './data/harrypotter/data.js';//data de Harry Potter
import { filterPatronus } from './data.js';
const root = document.getElementById('root')

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

 
const patronus = document.getElementById("patronus")
patronus.addEventListener("click",()=>{
    console.log(filterPatronus(data.characters))
})
