//Imports the date of Harry Potter.
import data from './data/harrypotter/data.js';

//Imports the data.js functions to perform the filters
import { createCards, filterForPatronus, filterGroups, filterByHouse, getUniqueSpecies, filterBySpecies } from './data.js';

//Global functions
const root = document.getElementById('root');
const characterButton = document.getElementById('filterForCharacters');
const patronusButton = document.getElementById('filterForPatronus');
const groupList = document.getElementById('groupList');
const housesButton = document.getElementById('houses');
const buttonSpecies = document.getElementById('filterForSpecies');

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

// Funcion for groups
groupList.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        const selectedValue = event.target.parentElement.getAttribute('data-value'); // Obtener el valor seleccionado del data-value del li
        const filteredCharacters = filterGroups(data.characters, selectedValue); // Filtrar los personajes

        // Limpia el contenido actual y muestra los personajes filtrados
        root.innerHTML = '';
        filteredCharacters.forEach((character) => {
            const card = createCards({ name: character.name });
            root.appendChild(card);
        });
    }
});

housesButton.addEventListener('click', () => {
    root.innerHTML = '';

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


// Function by species
// Función para mostrar las especies en un contenedor específico y agregar eventos de clic
function displayUniqueSpecies() {
    root.innerHTML = '';
    // Obtener una lista de especies únicas
    const uniqueSpecies = getUniqueSpecies(data.characters);
  
    // Crear un contenedor para la lista de especies
    const speciesListContainer = document.createElement('div');
    speciesListContainer.id = 'species-list-container'; // Asignar un ID al contenedor
    root.appendChild(speciesListContainer);
  
    // Crear un elemento de lista ul
    const speciesList = document.createElement('ul');
    speciesList.classList.add('species-list'); // Agregar una clase CSS para personalizar la lista
  
    // Recorrer las especies únicas y agregarlas como elementos de lista li
    uniqueSpecies.forEach((species) => {
      const listItem = document.createElement('li');
      listItem.textContent = species;
      listItem.classList.add('species-item'); // Agregar una clase CSS para personalizar los elementos de la lista
      listItem.addEventListener('click', () => {
        // Filtrar personajes por la especie seleccionada
        const filteredCharacters = filterBySpecies(data.characters, species);
  
        // Crear un contenedor para los "cards"
        const cardsContainer = document.createElement('div');
        cardsContainer.id = 'cards-container'; // Asignar un ID al contenedor
        root.appendChild(cardsContainer);
  
        // Mostrar los personajes filtrados en los "cards"
        filteredCharacters.forEach((character) => {
            cardsContainer.innerHTML = '';
          const card = createCards(character);
          cardsContainer.appendChild(card);
        });
      });
      speciesList.appendChild(listItem);
    });
  
    // Agregar la lista de especies al contenedor de la lista de especies
    speciesListContainer.appendChild(speciesList);
  }
  
  // Agregar un evento de clic al botón "buttonSpecies" para mostrar las especies
  buttonSpecies.addEventListener('click', displayUniqueSpecies);
  



