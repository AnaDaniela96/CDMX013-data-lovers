// Create cards
export const createCards = (dataArray) => {
  const createCard = document.createElement('div');
  const cardBody = document.createElement('div');
  let characterName = document.createElement('h4');
  let birthCharacters = document.createElement('p');
  let patronus = document.createElement('p');

  characterName.textContent = dataArray.name;
  birthCharacters.textContent = dataArray.birth;
  patronus.textContent = dataArray.patronus

  createCard.classList = 'card';
  characterName.classList = 'card-title text-black fw-700';
  birthCharacters.classList = 'card-text text-black';
  cardBody.classList = 'card-body';

  createCard.classList.add('rounded', 'shadow', 'my-3');
  createCard.style.borderColor = '#431E15';
  createCard.style.borderWidth = '6px';
  createCard.style.backgroundColor = '#D9AC36';

  cardBody.append(characterName, birthCharacters, patronus);
  createCard.append(cardBody);
  return createCard;
};

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


//filter groups associated
export const filterGroups = (arrData, selectValue) => {
  return arrData.filter(character => {
    if (selectValue == "2") {
      return character.associated_groups.find(e => e == "Order of the Phoenix")
    } else if (selectValue == "3") {
      return character.associated_groups.find(e => e == "Hogwarts School of Witchcraft and Wizardry")
    } else if (selectValue == "4") {
      return character.associated_groups.find(e => e == "British Ministry of Magic")
    } else if (selectValue == "5") {
      return character.associated_groups.find(e => e == "Dumbledore's Army")
    } else if (selectValue == "6") {
      return character.associated_groups.find(e => e == "Death Eaters")
    } else {
      return character
    }
  })
}

