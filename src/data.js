// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterPatronus = (arrData)=>{
  return arrData.filter(character=>{
    return character.patronus !== null && character.patronus !=="None";
  })
}
export const filterSpecies =  (arrData, specie)=> {
  let filteredData = arrData.filter((element) => {
    return element.species === specie;
  });
  return filteredData;
}