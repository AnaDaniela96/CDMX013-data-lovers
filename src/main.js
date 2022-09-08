import data from './data/harrypotter/data.js';//data de Harry Potter
import { filterPatronus, filterGroups, filterHouses, sortAZ, sortZA,percentage} from './data.js';
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
//window.addEventListener('load', () => {
    data.characters.forEach(oneCharacters => root.appendChild(showCharacters(oneCharacters)))//Show characters. Use function "showCharacters"
//})
    //Button of Patronus
    const btnPatronus = document.getElementById("patronus")
    btnPatronus.addEventListener('click', ()=>{
        const arrayFilPatronus = filterPatronus(data.characters)
        root.innerHTML = '';
        arrayFilPatronus.forEach(p => root.appendChild(patronus(p)))//Show patronus whit characters. Use function "patrnous"
    })
    //Button Select Organizations
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
        let percentageTotal = filterHouses(data.characters).length
        if (btnSelHouse.value == "1"){
            let houses = filterHouses(data.characters).map(x => x.name + x.species + x.house)
            root.innerHTML = '';
                houses.forEach(p => root.appendChild(patronus(p)))
            }else if (btnSelHouse.value == "2"){
            let houses = filterHouses(data.characters,"Gryffindor").map(x => x.name + x.species + x.house)
            let per = percentage(percentageTotal,houses.length) 
            let parrafo = document.createElement('p');
            let textParrafo = document.createTextNode('El porcentaje de estudiantes de estudiantes que pertenecen a esta casa es  '+'%'+ per +'.')
            let appenQuary = document.querySelector('.igual')
                appenQuary.innerHTML='';
                root.innerHTML = '';
                appenQuary.appendChild(parrafo);
                parrafo.appendChild(textParrafo);
                houses.forEach(p => root.appendChild(patronus(p)))
        } else if (btnSelHouse.value == "3"){
            let houses =filterHouses(data.characters,"Hufflepuff").map(x => x.name + x.species+ x.house)
            let per = percentage(percentageTotal,houses.length) 
            let parrafo = document.createElement('p');
            let textParrafo = document.createTextNode('!!!!!El porcentaje de estudiantes de estudiantes que pertenecen a esta casa es  '+'%'+ per +'.')
            let appenQuary = document.querySelector('.igual')
                appenQuary.innerHTML='';
                root.innerHTML = '';
                appenQuary.appendChild(parrafo);
                parrafo.appendChild(textParrafo);
                houses.forEach(p => root.appendChild(patronus(p)))
        }else if (btnSelHouse.value == "4"){
            let houses =filterHouses(data.characters,"Slytherin").map(x => x.name + x.species+ x.house)
            let per = percentage(percentageTotal,houses.length) 
            let parrafo = document.createElement('p');
            let textParrafo = document.createTextNode('!!!!!El porcentaje de estudiantes de estudiantes que pertenecen a esta casa es  '+'%'+ per +'.')
            let appenQuary = document.querySelector('.igual')
                appenQuary.innerHTML='';
                root.innerHTML = '';
                appenQuary.appendChild(parrafo);
                parrafo.appendChild(textParrafo);
                houses.forEach(p => root.appendChild(patronus(p)))
        }else if(btnSelHouse.value == "5"){
            let houses =filterHouses(data.characters,"Ravenclaw").map(x => x.name + x.species+ x.house)
            let per = percentage(percentageTotal,houses.length) 
            let parrafo = document.createElement('p');
            let textParrafo = document.createTextNode('!!!!!El porcentaje de estudiantes de estudiantes que pertenecen a esta casa es  '+'%'+ per +'.')
            let appenQuary = document.querySelector('.igual')
                appenQuary.innerHTML='';
                root.innerHTML = '';
                appenQuary.appendChild(parrafo);
                parrafo.appendChild(textParrafo);
                houses.forEach(p => root.appendChild(patronus(p)))
        }
})



   //Storie three: Sort A-Z Sort Z-A
    const slectCharacters = document.getElementById("slectCharacters")
    slectCharacters.addEventListener("change",() => {
        if (slectCharacters.value == "2"){
            root.innerHTML = '';
            //aquí va poner los porcentajes
            let orderedCards = sortAZ(characters).map(x => x.name)
            orderedCards.forEach(p => root.appendChild(patronus(p)))
        }else if(slectCharacters.value == "3"){
            root.innerHTML = '';
            let orderedCards = sortZA(characters).map(x => x.name)
            orderedCards.forEach(p => root.appendChild(patronus(p)))
        }else if(slectCharacters.value =="1"){
            root.innerHTML = ''
            let characters=data.characters.map(x=> x.name + x.birth)
            characters.forEach(p => root.appendChild(patronus(p)))
        }else(data.characters.forEach(oneCharacters => root.appendChild(showCharacters(oneCharacters))))
    })

   