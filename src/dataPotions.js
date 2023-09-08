export const createTableForPotions = (dataArray) => {
    const table = document.createElement('table');
    table.classList = 'table';

    const tableBody = document.createElement('tbody');

    const row1 = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = 'Nombre';
    const nameValueCell = document.createElement('td');
    nameValueCell.textContent = dataArray.name;
    row1.appendChild(nameCell);
    row1.appendChild(nameValueCell);

    const row2 = document.createElement('tr');
    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = 'Descripción';
    const descriptionValueCell = document.createElement('td');
    descriptionValueCell.textContent = dataArray.description;
    row2.appendChild(descriptionCell);
    row2.appendChild(descriptionValueCell);

    tableBody.appendChild(row1);
    tableBody.appendChild(row2);

    table.appendChild(tableBody);

    return table;
};