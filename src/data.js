// Create cards
export const createCards = (dataArray) => {
  const createCard = document.createElement('div');
  const cardBody = document.createElement('div');
  let characterName = document.createElement('h4');
  let birthCharacters = document.createElement('p');
  let patronus = document.createElement('p');
  let species = document.createElement('p');
  let gender = document.createElement('p');

  characterName.textContent = dataArray.name;
  birthCharacters.textContent = dataArray.birth;
  patronus.textContent = dataArray.patronus;
  species.textContent = dataArray.species;
  gender.textContent = dataArray.gender;

  createCard.classList = 'card';
  characterName.classList = 'card-title text-black fw-700';
  birthCharacters.classList = 'card-text text-black';
  cardBody.classList = 'card-body';

  createCard.classList.add('rounded', 'shadow', 'my-3');
  createCard.style.borderColor = '#431E15';
  createCard.style.borderWidth = '6px';
  createCard.style.backgroundColor = '#D9AC36';

  cardBody.append(characterName, birthCharacters, patronus, species, gender);
  createCard.append(cardBody);
  return createCard;
};

// Filter for patronus
export const filterForPatronus = (arrData) => {
  return arrData.reduce((result, character) => {
    const patronus = character.patronus;
    if (patronus !== null && patronus !== "None") {
      // Agrupar en 'Non-corporeal'
      if (patronus === 'Non-corporeal') {
        if (!result['Non-corporeal']) {
          result['Non-corporeal'] = [];
        }
        result['Non-corporeal'].push(patronus);
      } else {
        // Agrupar en 'No Non-corporeal'
        if (!result['No Non-corporeal']) {
          result['No Non-corporeal'] = [];
        }
        result['No Non-corporeal'].push({ name: character.name, patronus: patronus });
      }
    }
    return result;
  }, {});
};

//Filter for gropus.
// Mapping of select values to partner groups
const groupMappings = {
  "2": "Order of the Phoenix",
  "3": "Hogwarts School of Witchcraft and Wizardry",
  "4": "British Ministry of Magic",
  "5": "Dumbledore's Army",
  "6": "Death Eaters",
};

export const filterGroups = (arrData, selectValue) => {
  // Get the associated group corresponding to the value of the select
  const selectedGroup = groupMappings[selectValue];

  if (!selectedGroup) {
    // If no group is selected, return all characters.
    return arrData;
  }

  // Filter the characters that have the group associated with them
  return arrData.filter((character) =>
    character.associated_groups.includes(selectedGroup)
  );
};

export const filterByHouse = (dataArray) => {
  const filteredData = {
    Gryffindor: [],
    Slytherin: [],
    Hufflepuff: [],
    Ravenclaw: [],
  };

  dataArray.forEach((character) => {
    const house = character.house;
    if (house) {
      // Checks which group the character belongs to and adds him/her to that group.
      switch (house) {
        case 'Gryffindor':
          filteredData.Gryffindor.push(character);
          break;
        case 'Slytherin':
          filteredData.Slytherin.push(character);
          break;
        case 'Hufflepuff':
          filteredData.Hufflepuff.push(character);
          break;
        case 'Ravenclaw':
          filteredData.Ravenclaw.push(character);
          break;
        default:
          break;
      }
    }
  });

  return filteredData;
};

// Filter by species
// Función para filtrar personajes por especie
export const filterBySpecies = (arrData, species) => {
  return arrData.filter((character) => {
    return character.species === species;
  });
};

export const getUniqueSpecies = (arrData) => {
  const uniqueSpecies = new Set(); // Usamos un conjunto para garantizar valores únicos
  
  arrData.forEach((character) => {
    uniqueSpecies.add(character.species);
  });
  
  return Array.from(uniqueSpecies); // Convertimos el conjunto en un array
};


