export const filterAndCreateSpellCards = (dataArray) => {
    // Filter the spells according to some criterion
    const filteredSpells = dataArray;

    // Get the container element where you want to add the cards
    const container = document.getElementById('root');
    container.innerHTML = '';
    
    // Scroll through the filtered spells and create cards for each one.
    filteredSpells.forEach(spell => {
        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        card.classList.add('spell-card'); 
        card.classList.add('card');
        card.classList.add('rounded', 'shadow', 'my-3');
        card.style.borderColor = 'black';
        card.style.borderWidth = '6px';
        card.style.backgroundColor = '#ccb939';
        cardBody.classList = 'card-body';

        // Create HTML elements to display spell properties
        const nameElement = document.createElement('h4');
        nameElement.textContent = `${spell.name}`;
        nameElement.classList.add('card-title');

        const pronunciationElement = document.createElement('p');
        pronunciationElement.textContent = `Pronunciation: ${spell.pronunciation}`;

        const spellTypeElement = document.createElement('p');
        spellTypeElement.textContent = `Spell Type: ${spell.spell_type}`;

        const etymologyElement = document.createElement('p');
        etymologyElement.textContent = `Etymology: ${spell.etimology}`;

       // Add the elements to the card
        cardBody.append(nameElement, pronunciationElement, spellTypeElement, etymologyElement)
        card.append(cardBody);

       // Add the card to the container
        container.appendChild(card);
    });
}

export const sortAB = () => {
    const mainElement = document.querySelector('main'); // Obtén el elemento <main> donde están las tarjetas
    const tarjetas = Array.from(mainElement.children); // Convierte los elementos hijos de <main> en un array

    // Ordena el array de tarjetas en orden alfabético inverso por el texto del nombre
    tarjetas.sort((a, b) => {
        const nombreA = a.querySelector('.card-title').textContent;
        const nombreB = b.querySelector('.card-title').textContent;
        return nombreB.localeCompare(nombreA); // Invierte el orden de comparación
    });

    // Elimina las tarjetas actuales del <main>
    tarjetas.forEach(tarjeta => {
        mainElement.removeChild(tarjeta);
    });

    // Agrega las tarjetas ordenadas de nuevo al <main>
    tarjetas.forEach(tarjeta => {
        mainElement.appendChild(tarjeta);
    });
}

export const sortBA = () => {
    const mainElement = document.querySelector('main'); // Obtén el elemento <main> donde están las tarjetas
    const tarjetas = Array.from(mainElement.children); // Convierte los elementos hijos de <main> en un array

    // Ordena el array de tarjetas en orden alfabético inverso por el texto del nombre
    tarjetas.sort((a, b) => {
        const nombreA = a.querySelector('.card-title').textContent;
        const nombreB = b.querySelector('.card-title').textContent;
        return nombreB.localeCompare(nombreA); // Invierte el orden de comparación
    });

    // Elimina las tarjetas actuales del <main>
    tarjetas.forEach(tarjeta => {
        mainElement.removeChild(tarjeta);
    });

    // Agrega las tarjetas ordenadas de nuevo al <main>
    tarjetas.forEach(tarjeta => {
        mainElement.appendChild(tarjeta);
    });
}

