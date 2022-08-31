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
  }).map(x => x.patronus)
}

//filter groups associated
export const filterGroups = (arrData,selectValue) =>{
  return arrData.filter(character=>{
    if(selectValue == "2"){
      return character.associated_groups.find(e => e == "Order of the Phoenix")
    } else if(selectValue == "3"){
      return character.associated_groups.find(e => e == "Hogwarts School of Witchcraft and Wizardry")
    } else if(selectValue == "4"){
      return character.associated_groups.find(e => e == "British Ministry of Magic")
    } else if(selectValue == "5"){
      return character.associated_groups.find(e => e == "Dumbledore's Army")
    } else if(selectValue == "6"){
      return character.associated_groups.find(e => e == "Death Eaters")
    } else {
      return character
    }
  })
}
