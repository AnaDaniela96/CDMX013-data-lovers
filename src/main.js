import data from './data/harrypotter/data.js';//data de Harry Potter
import { filterPatronus, filterGroups } from './data.js';

//function story one: "show cards whit characters"
function showCharacters(characters) {
    const createCard = document.createElement('div');
    createCard.classList = 'cards'
    let text = document.createElement('h4')
    text.textContent = characters.name
    createCard.append(text)
    return createCard
}
//function story two: "show cards patronus whit patronus and characters"
function patronus(filteredPat) {
    const cardsPat = document.createElement('div');
    cardsPat.classList = 'cardsPat'
    let text = document.createElement('p')
    text.textContent = filteredPat
    cardsPat.append(text)
    return cardsPat
}
//function three: take the value of "slctMenu" and have a new array whith name and college.
function organization(filterGroups){
    const createCard = document.createElement('div');
    createCard.classList = 'cards'
    let text = document.createElement('h4')
    text.textContent = filterGroups
    createCard.append(text)
    return createCard
}

    //create a variable whit the function "filterPatronus"
const arrayFilPatronus = filterPatronus(data.characters)
     //for filter groups



const filterHouse = document.getElementById("slectHouse")
filterHouse.addEventListener("change",function(){
    const house = filterHouse.value 
    console.log(house);
})



//Event for load a page
window.addEventListener('load', () => {
    const root = document.getElementById('root')
    root.classList = 'card'

    data.characters.forEach(oneCharacters => root.appendChild(showCharacters(oneCharacters)))//Show characters. Use function "showCharacters"
    //Buttons of menu
    const btnPatronus = document.getElementById("patronus")
    btnPatronus.addEventListener('click', ()=>{
        root.innerHTML = '';
        arrayFilPatronus.forEach(p => root.appendChild(patronus(p)))//Show patronus whit characters. Use function "patrnous"
    })

    const btnSelect = document.getElementById("slctMenu") //take element "slectMnu" and its value. document.getElementById('slctMenu').value
    btnSelect.addEventListener('change',()=>{
        let members = []
        if(btnSelect.value == "2"){
            members = filterGroups(data.characters,"Order of the Phoenix").map(x => x.name + ", " + x.house)
            root.innerHTML = '';
            members.forEach(p => root.appendChild(organization(p)))
        } else if(btnSelect.value == "3"){
            members = filterGroups(data.characters,"Hogwarts School of Witchcraft and Wizardry").map(x => x.name + "," + x.house)
            root.innerHTML = '';
            members.forEach(p => root.appendChild(organization(p)))
        } else if(btnSelect.value == "4"){
            members = filterGroups(data.characters,"British Ministry of Magic").map(x => x.name + ", " + x.house)
            root.innerHTML = '';
            members.forEach(p => root.appendChild(organization(p)))
        } else if(btnSelect.value == "5"){
            members = filterGroups(data.characters,"Dumbledore's Army").map(x => x.name + ", " + x.house)
            root.innerHTML = '';
            members.forEach(p => root.appendChild(organization(p)))
        } else if(btnSelect.value == "6"){
            members = filterGroups(data.characters, "Death Eaters").map(x => x.name + ", " + x.house)
            root.innerHTML = '';
            members.forEach(p => root.appendChild(organization(p)))
        }else {
            members = data.characters.forEach(oneCharacters => root.appendChild(showCharacters(oneCharacters)))
        }
    })
})

/*
    else if(selectValue == "3"){
        return character.associated_groups.find(e => e == "Hogwarts School of Witchcraft and Wizardry")
    } else if(selectValue == "4"){
        return character.associated_groups.find(e => e == "British Ministry of Magic")
    } else if(selectValue == "5"){
        return character.associated_groups.find(e => e == "Dumbledore's Army")
    } else if(selectValue == "6"){
        return character.associated_groups.find(e => e == "Death Eaters")
    } else {
        return character
    }
*/