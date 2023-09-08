//Imports the date of Harry Potter.
import data from './data/harrypotter/data.js';

//Imports the data.js functions to perform the filters
import { createCards, filterForPatronus, filterGroups, filterByHouse, getUniqueSpecies, filterBySpecies } from './dataCharacters.js';
import { filterAndCreateSpellCards, sortAB, sortBA  } from './dataSpells.js';
import { createTableForPotions } from './dataPotions.js';

//Global functions
const root = document.getElementById('root');
const lateralMenu = document.getElementById('lateral-menu');
const characterButton = document.getElementById('filterForCharacters');
const patronusButton = document.getElementById('filterForPatronus');
const groupList = document.getElementById('groupList');
const housesButton = document.getElementById('houses');
const buttonSpecies = document.getElementById('filterForSpecies');
const buttonBySpells = document.getElementById('showSpells');
const characterButtonMenu = document.getElementById('showCharacters');
const submenuCharacters = document.getElementById('menu-charcters');
const sortAZ = document.getElementById('buttonAZ'); 
const sortZA = document.getElementById('buttonZA'); 
const buttonsSort = document.getElementById('container-buttons');
const buttonPotions = document.getElementById('showPotions');

//Function for button characters and button characters for menu.
characterButtonMenu.addEventListener('click', () => {
    submenuCharacters.classList.remove('d-none');
    buttonsSort.classList.add('d-none');
    root.innerHTML = ' ';
    lateralMenu.innerHTML = ' ';
    createCards(data.characters);
    data.characters.forEach(oneCharacters => root.appendChild(createCards(oneCharacters)));
})

characterButton.addEventListener('click', () => {
    root.innerHTML = ' ';
    buttonsSort.classList.add('d-none');
    submenuCharacters.classList.remove('d-none');
    lateralMenu.innerHTML = ' ';
    createCards(data.characters);
    data.characters.forEach(oneCharacters => root.appendChild(createCards(oneCharacters)));
})

//Function for button patronus
patronusButton.addEventListener('click', () => {
    submenuCharacters.classList.remove('d-none');
    buttonsSort.classList.add('d-none');
    root.innerHTML = '';
    lateralMenu.innerHTML = ' ';

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

// Funcion for groups
groupList.addEventListener('click', (event) => {
    submenuCharacters.classList.remove('d-none');
    if (event.target.tagName === 'A') {
        const selectedValue = event.target.parentElement.getAttribute('data-value'); // Obtener el valor seleccionado del data-value del li
        const filteredCharacters = filterGroups(data.characters, selectedValue); // Filtrar los personajes

        // Limpia el contenido actual y muestra los personajes filtrados
        root.innerHTML = '';
        lateralMenu.innerHTML = ' ';
        filteredCharacters.forEach((character) => {
            const card = createCards({ name: character.name });
            root.appendChild(card);
        });
    }
});

housesButton.addEventListener('click', () => {
    submenuCharacters.classList.remove('d-none');
    buttonsSort.classList.add('d-none');
    root.innerHTML = '';
    lateralMenu.innerHTML = ' ';

    const charactersByHouse = filterByHouse(data.characters);
    const createHouseButtons = () => {
        const houseButtons = document.createElement('div');
        houseButtons.classList.add('house-buttons');

        // Crea un botón para cada casa
        const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

        houses.forEach((houseName) => {
            const button = document.createElement('button');
            button.textContent = houseName;
            button.classList.add('house-button', houseName.toLowerCase()); // Agrega una clase CSS para personalizar cada botón

            // Agrega un evento de clic que llama a la función de filtro
            button.addEventListener('click', () => {
                root.innerHTML = '';
                const filteredCharacters = charactersByHouse[houseName];
                filteredCharacters.forEach(oneCharacters => root.appendChild(createCards(oneCharacters)));
            });

            houseButtons.appendChild(button);
        });

        return houseButtons;
    };

    // Agrega los botones al documento
    root.appendChild(createHouseButtons());
});


//To display the species in a specific container and add click events.
function displayUniqueSpecies() {
    submenuCharacters.classList.remove('d-none');
    buttonsSort.classList.add('d-none');
    root.innerHTML = '';
    lateralMenu.innerHTML = ' ';
    // Obtain a list of unique species.
    const uniqueSpecies = getUniqueSpecies(data.characters);
  
    // Create a container for the species list.
    const speciesListContainer = document.createElement('div');
    speciesListContainer.id = 'species-list-container'; 
    lateralMenu.appendChild(speciesListContainer);
  
    // Create a list item ul.
    const speciesList = document.createElement('ul');
    speciesList.classList.add('species-list'); 
  
    // Scroll through the unique species and add them as list items li 
    uniqueSpecies.forEach((species) => {
      const listItem = document.createElement('li');
      listItem.textContent = species;
      listItem.classList.add('species-item'); 
      listItem.addEventListener('click', () => {
        // Filter characters by the selected species
        const filteredCharacters = filterBySpecies(data.characters, species);
  
        // Create a container for the cards
        const cardsContainer = document.createElement('div');
        cardsContainer.id = 'cards-container'; 
        root.innerHTML = '';
        root.appendChild(cardsContainer);
  
       // Show the filtered characters in the "cards".
        filteredCharacters.forEach((character) => {
            cardsContainer.innerHTML = '';
          const card = createCards(character);
          cardsContainer.appendChild(card);
        });
      });
      speciesList.appendChild(listItem);
    });
  
   // Add species list to species list container
    speciesListContainer.appendChild(speciesList);
  }
  
// Add a click event to the "buttonSpecies" button to display species
  buttonSpecies.addEventListener('click', displayUniqueSpecies);
  
// Function for spells
  buttonBySpells.addEventListener('click', () => {
    submenuCharacters.classList.add('d-none');
    buttonsSort.classList.remove('d-none');
    
    filterAndCreateSpellCards(data.spells);
  })

  sortAZ.addEventListener('click', sortAB );

  sortZA.addEventListener('click', sortBA );

//Function for potions
buttonPotions.addEventListener('click', () => {
    submenuCharacters.classList.add('d-none');
    buttonsSort.classList.add('d-none');
    root.innerHTML = ' ';
    lateralMenu.innerHTML = ' ';
    console.log('li');
    data.potions.forEach(onePotion => {
        const table = createTableForPotions(onePotion);
        root.appendChild(table);
    });
});