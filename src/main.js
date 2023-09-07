//Imports the date of Harry Potter.
import data from './data/harrypotter/data.js';

//Imports the data.js functions to perform the filters
import { createCards, filterForPatronus, filterGroups } from './data.js';

//Global functions
const root = document.getElementById('root');
const characterButton = document.getElementById('filterForCharacters');
const patronusButton = document.getElementById('filterForPatronus');

//Function for button characters
characterButton.addEventListener('click', () => {
    root.innerHTML = ' ';
    createCards(data.characters);
    data.characters.forEach(oneCharacters => root.appendChild(createCards(oneCharacters)));
})

//Function for button patronus
patronusButton.addEventListener('click', () => {
    root.innerHTML = '';

    // Dynamic paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = "El Patronus, en el mundo mágico de Harry Potter, es una manifestación de la magia más profunda y poderosa que reside en cada mago. Se trata de una encarnación de la fortaleza interior, un guardián de luz y esperanza que surge para enfrentar las fuerzas oscuras y el miedo. Las tarjetas que estás viendo son un reflejo de los magos y brujas más fuertes, aquellos que han descubierto y dominado su Patronus. Cada una de estas tarjetas muestra el nombre del Patronus de estos valientes hechiceros, un recordatorio de que la luz siempre prevalece sobre la oscuridad en el mundo mágico de Harry Potter.";
    paragraph.style.textAlign = 'justify'; // Justificar el texto

    root.appendChild(paragraph);

    const patronusGroups = filterForPatronus(data.characters);
    const nonCorporealPatronus = patronusGroups['No Non-corporeal'];

    if (nonCorporealPatronus) {
        nonCorporealPatronus.forEach((character) => {
            const card = createCards({ name: character.name, patronus: character.patronus });
            root.appendChild(card);
        });
    }
});



// //para filter groups
// const select = document.getElementById("organ").value
// let groups = filterGroups(data.characters, select)
// console.log(groups);