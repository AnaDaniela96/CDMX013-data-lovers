//Imports the date of Harry Potter.
import data from './data/harrypotter/data.js';

//Imports the data.js functions to perform the filters
import { filterPatronus, filterGroups } from './data.js';

//Global functions
const root = document.getElementById('root');

//Functions
function createCards(characters) {
    const createCard = document.createElement('div');
    const cardBody = document.createElement('div');
    let characterName = document.createElement('h4');
    let birthCharacters = document.createElement('p');

    characterName.textContent = characters.name;
    birthCharacters.textContent = characters.birth;

    createCard.classList = 'card';
    characterName.classList = 'card-title';
    birthCharacters.classList = 'card-text';
    cardBody.classList = 'card-body';
    
    cardBody.append(characterName, birthCharacters);
    createCard.append(cardBody);
    return createCard
}
data.characters.forEach(oneCharacters => root.appendChild(createCards(oneCharacters)));









//user story two


let filteredPat = filterPatronus(data.characters)

console.log(filteredPat)

// create new cards for patronus
//const createCardP = document.getElementById('patronus')
//createCardP.addEventListener('click',patronus)

function patronus(filteredPat) {
    const createCard = document.createElement('div');
    createCard.classList = 'cards';
    createCard.classList = 'styleCards';
    let text = document.createElement('h4')
    text.textContent = filteredPat
    createCard.append(text)
    return createCard
}
filteredPat.forEach(oneCharacters => root.appendChild(patronus(oneCharacters)))

// first: clean dom
const clean = document.querySelector("main")
const cleanN = document.getElementById('patronus')
cleanN.addEventListener('click', () => {
    clean.innerHTML = " ";
})


//filter by "patronus"


//para filter groups
const select = document.getElementById("organ").value
let groups = filterGroups(data.characters, select)
console.log(groups);