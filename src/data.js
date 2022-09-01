// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//filter Patronus
export const filterPatronus = (arrData)=>{
  return arrData.filter(character=>{
    return character.patronus !== null && character.patronus !=="None";
  }).map(x => x.patronus + x.name)
}

//filter groups associated
export const filterGroups = (arrData,group) =>{
  return arrData.filter(character => { return character.associated_groups.find(e => e == group) })
}

