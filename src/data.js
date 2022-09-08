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

//filter houses
export const filterHouses = (arrData, house='all') =>{
    if(house=='all'){
      return arrData.filter(character => {return character.house !== null && character.house !=="None"})
    }else{
      return arrData.filter(character => {return character.house==house})
    }

}
//calculate
export const percentage = (total, piece) =>{ // Recieve two numbers
  return (piece/total)*100
};

//sort by A-Z
export const sortAZ= (arrData)=> arrData.sort((a, b) => {
  if(a.name< b.name){ 
  return -1
  } if (a.name> b.name){
  return 1}
  return 0
  });

  //sort by Z-A
export const sortZA= (arrData)=> arrData.sort((a, b) => {
  if(a.name< b.name){ 
    return 1
    } if (a.name> b.name){
    return -1
    } 
    return 0
});