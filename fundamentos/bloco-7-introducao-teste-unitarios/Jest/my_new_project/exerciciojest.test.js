const { sum, myRemove, myFizzBuzz, encode, decode } = require('./exerciciojest.js');

describe('Teste soma números', () => {
  it ('Somando 4 + 5', () => {
    expect(sum(4, 5)).toEqual(9);
  })
  it ('Somando 0 + 0', () => {
    expect(sum(0, 0)).toEqual(0);
  })
  it ('Somando 4 + "5"', () => {
    expect(() => { sum(4, "5") }).toThrow('parameters must be numbers');
  })
});

describe('Verificando array [1, 2, 3, 4]', () => {

  it ('Retorna array, sem o 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })

  it ('Não retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it ('Retorna array com intem que não existe', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});

describe('Verificando divisibilidade de números', () => {
  it ('Verificando se o número é divisivel por 3 é 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it ('Verificando se o número é divisivel por 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  })

  it ('Verificando se o número é divisivel por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })

  it ('Número não divisivel por 3 nem 5 ou não seja um número', () => {
    expect(myFizzBuzz(0)).toBeFalsy();
  })

  it ('Verifica retornando uma letra', () => {
    expect(myFizzBuzz("a")).toBeFalsy();
  })
})

describe('Decodificando e codificando vogais é números', () => {
  it ('Verificando se encode e decode é uma função', () => {
    expect(encode() && decode()).toBe('fuction');
  })

  it ('Verificando se encode decodifica vogais', () => {
    expect(encode(['a', 'e', 'i', 'o', 'u'])).toEqual([1, 2, 3, 4, 5]);
  })
})