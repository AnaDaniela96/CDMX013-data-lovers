import data from './data/harrypotter/data.js';//data de Harry Potter
import { filterPatronus, filterGroups, filterHouses, sortAZ, sortZA,percentage} from './data.js';
const root = document.getElementById('root')
    root.classList = 'card'
const characters = data.characters
//create cards 
function createCards(arrData) {
    const cardsPat = document.createElement('div');
    cardsPat.classList = 'cards'
    let text = document.createElement('p')
    text.textContent = arrData
    text.textContent.classList
    cardsPat.append(text)
    return cardsPat
}
//Event for load a page
window.addEventListener('load', () => {
        document.querySelector('.mensajes')
})
//Menu
    //Button "Principal"
    const btnPrincipal = document.getElementById("btnPrincipal")
    btnPrincipal.addEventListener('click',()=>{
        let welcome = document.createElement('p')
        let welcomeTxt = document.createTextNode('Bienvenide a Amortentia. Una página para conocer a los personajes de Harry Potter y algunos secretos mágicos.')
        let welcomeQuery = document.querySelector('.mensajes')
            welcomeQuery.innerHTML= " ";
            welcomeQuery.appendChild(welcome);
            welcome.appendChild(welcomeTxt);
        let characters= data.characters
            characters.forEach(p => root.appendChild(createCards(p)))//Show characters. Use function "showCharacters"
    })
    //Button of Patronus
    const btnPatronus = document.getElementById("patronus")
    btnPatronus.addEventListener('click', ()=>{
        const arrayFilPatronus = filterPatronus(data.characters)
        let welcomeQuery = document.querySelector('.mensajes')
            welcomeQuery.innerHTML= "";
            root.innerHTML = '';
        arrayFilPatronus.forEach(p => root.appendChild(createCards(p)))//Show patronus whit characters. Use function "patrnous"
    })
    //Button Select Organizations
    const btnSelect = document.getElementById("slctMenu") //take element "slectMnu" and its value. document.getElementById('slctMenu').value
    btnSelect.addEventListener('change',()=>{
        let members = []
        if(btnSelect.value =="1"){
            let welcomeQuery = document.querySelector('.mensajes')
            welcomeQuery.innerHTML= "";
            root.innerHTML = '';
        }else if(btnSelect.value == "2"){
            members = filterGroups(data.characters,"Order of the Phoenix").map(x => x.name + ", " + x.house)
            root.innerHTML = '';
            members.forEach(p => root.appendChild(createCards(p)))
        } else if(btnSelect.value == "3"){
            members = filterGroups(data.characters,"Hogwarts School of Witchcraft and Wizardry").map(x => x.name + "," + x.house)
            root.innerHTML = '';
            members.forEach(p => root.appendChild(createCards(p)))
        } else if(btnSelect.value == "4"){
            members = filterGroups(data.characters,"British Ministry of Magic").map(x => x.name + ", " + x.house)
            root.innerHTML = '';
            members.forEach(p => root.appendChild(createCards(p)))
        } else if(btnSelect.value == "5"){
            members = filterGroups(data.characters,"Dumbledore's Army").map(x => x.name + ", " + x.house)
            root.innerHTML = '';
            members.forEach(p => root.appendChild(createCards(p)))
        } else if(btnSelect.value == "6"){
            members = filterGroups(data.characters, "Death Eaters").map(x => x.name + ", " + x.house)
            root.innerHTML = '';
            members.forEach(p => root.appendChild(createCards(p)))
        }else {
            members = data.characters.forEach(oneCharacters => root.appendChild(createCards(oneCharacters)))
        }
    })
    //Button select Houses
    const btnSelHouse = document.getElementById("slectHouse")
    btnSelHouse.addEventListener("change",() => {
        let percentageTotal = filterHouses(data.characters).length
        if (btnSelHouse.value == "1"){
            let welcomeQuery = document.querySelector('.mensajes')
            welcomeQuery.innerHTML= "";
            root.innerHTML = '';
            }else if (btnSelHouse.value == "2"){
            let houses = filterHouses(data.characters,"Gryffindor").map(x => x.name + x.species + x.house)
            let per = percentage(percentageTotal,houses.length) 
            let parrafo = document.createElement('p');
            let textParrafo = document.createTextNode('El porcentaje de estudiantes de estudiantes que pertenecen a esta casa es  '+'%'+ per +'.')
            let appenQuary = document.querySelector('.mensajes')
                appenQuary.innerHTML='';
                root.innerHTML = '';
                appenQuary.appendChild(parrafo);
                parrafo.appendChild(textParrafo);
                houses.forEach(p => root.appendChild(createCards(p)))
        } else if (btnSelHouse.value == "3"){
            let houses =filterHouses(data.characters,"Hufflepuff").map(x => x.name + x.species+ x.house)
            let per = percentage(percentageTotal,houses.length) 
            let parrafo = document.createElement('p');
            let textParrafo = document.createTextNode('!!!!!El porcentaje de estudiantes de estudiantes que pertenecen a esta casa es  '+'%'+ per +'.')
            let appenQuary = document.querySelector('.mensajes')
                appenQuary.innerHTML='';
                root.innerHTML = '';
                appenQuary.appendChild(parrafo);
                parrafo.appendChild(textParrafo);
                houses.forEach(p => root.appendChild(createCards(p)))
        }else if (btnSelHouse.value == "4"){
            let houses =filterHouses(data.characters,"Slytherin").map(x => x.name + x.species+ x.house)
            let per = percentage(percentageTotal,houses.length) 
            let parrafo = document.createElement('p');
            let textParrafo = document.createTextNode('!!!!!El porcentaje de estudiantes de estudiantes que pertenecen a esta casa es  '+'%'+ per +'.')
            let appenQuary = document.querySelector('.mensajes')
                appenQuary.innerHTML='';
                root.innerHTML = '';
                appenQuary.appendChild(parrafo);
                parrafo.appendChild(textParrafo);
                houses.forEach(p => root.appendChild(createCards(p)))
        }else if(btnSelHouse.value == "5"){
            let houses =filterHouses(data.characters,"Ravenclaw").map(x => x.name + x.species+ x.house)
            let per = percentage(percentageTotal,houses.length) 
            let parrafo = document.createElement('p');
            let textParrafo = document.createTextNode('!!!!!El porcentaje de estudiantes de estudiantes que pertenecen a esta casa es  '+'%'+ per +'.')
            let appenQuary = document.querySelector('.mensajes')
                appenQuary.innerHTML='';
                root.innerHTML = '';
                appenQuary.appendChild(parrafo);
                parrafo.appendChild(textParrafo);
                houses.forEach(p => root.appendChild(createCards(p)))
        }
})
   //Storie three: Sort A-Z Sort Z-A
    const sortCharactersAZ = document.getElementById("sortAZ")
    sortCharactersAZ.addEventListener("click",() => {
            root.innerHTML = '';
            let orderedCards = sortAZ(characters).map(x => x.name)
            orderedCards.forEach(p => root.appendChild(createCards(p)))
    })
    const sortCharactersZA = document.getElementById("sortZA")
    sortCharactersZA.addEventListener("click",() => {
            root.innerHTML = '';
            let orderedCards = sortZA(characters).map(x => x.name)
            orderedCards.forEach(p => root.appendChild(createCards(p)))
            
    })