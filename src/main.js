import data from './data/harrypotter/data.js';//data de Harry Potter
import { filterPatronus, filterGroups, filterHouses, sortAZ, sortZA} from './data.js';
const root = document.getElementById('root')
    root.classList = 'card'
const characters = data.characters
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
    text.textContent.classList
    cardsPat.append(text)
    return cardsPat
}
//function three: Show cards groups
function organization(filterGroups){
    const createCard = document.createElement('div');
    createCard.classList = 'cards'
    let text = document.createElement('h4')
    text.textContent = filterGroups
    createCard.append(text)
    return createCard
}
//Event for load a page
window.addEventListener('load', () => {
    data.characters.forEach(oneCharacters => root.appendChild(showCharacters(oneCharacters)))//Show characters. Use function "showCharacters"
})
    //Button of Patronus
    const btnPatronus = document.getElementById("patronus")
    btnPatronus.addEventListener('click', ()=>{
        const arrayFilPatronus = filterPatronus(data.characters)
        root.innerHTML = '';
        arrayFilPatronus.forEach(p => root.appendChild(patronus(p)))//Show patronus whit characters. Use function "patrnous"
    })
    //Button Select Organizations
    document.getElementById("btnCharacters").addEventListener("click",() => {
        console.log(characters);
        root.innerHTML = '';
        characters.forEach(oneCharacters => root.appendChild(showCharacters(oneCharacters)))
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
    //Button select Houses
    const btnSelHouse = document.getElementById("slectHouse")
    btnSelHouse.addEventListener("change",() => {
        if (btnSelHouse.value == "1"){
            let houses = filterHouses(data.characters).map(x => x.name + x.species + x.house)
                root.innerHTML = '';
                houses.forEach(p => root.appendChild(patronus(p)))
            }else if (btnSelHouse.value == "2"){
        let houses = filterHouses(data.characters,"Gryffindor").map(x => x.name + x.species + x.house)
            root.innerHTML = '';
            console.log(houses);
            houses.forEach(p => root.appendChild(patronus(p)))
        } else if (btnSelHouse.value == "3"){
        let houses =filterHouses(data.characters).map(x => x.name + x.species)
            root.innerHTML = '';
            houses.forEach(p => root.appendChild(patronus(p)))
        }

})
   //Storie three: Sort A-Z 
document.getElementById("btnSortAZ").addEventListener("click", () => {
        root.innerHTML = '';
        let ordenado =  sortAZ(characters).map(x => x.name)
        ordenado.forEach(p => root.appendChild(patronus(p)))
        
    })
    //Sort Z-A
document.getElementById("btnSortZA").addEventListener("click", () => {
        root.innerHTML = '';
        let ordenado =  sortZA(characters).map(x => x.name)
        ordenado.forEach(p => root.appendChild(patronus(p)))
        
    })