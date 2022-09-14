import { example, anotherExample, filterHouses } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

describe('prueba unitaria para filtro casas', () => {
  it('is a function', () => {
    expect(typeof filterHouses).toBe('function');
  });

  it('retorna un arreglo con casas', () => {
 //   expect(filterHouses(frutas,color=="rojo")).toBe([frutas[0]]);
  });
});

//const frutas =[{name:manzana,color:roja},{name:limón,color:verde},{name:uvas,color:morado}]