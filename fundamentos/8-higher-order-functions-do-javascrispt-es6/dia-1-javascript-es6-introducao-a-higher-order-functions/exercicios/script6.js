// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
//   ];
  

// const flatten = (charmander) => charmander.reduce((acc, cur) => acc.concat(cur))
// console.log(flatten(arrays));

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// const reduceNames = () => books.reduce((acc, book) => `${acc} ${book.author.name},`, '')
// console.log(reduceNames());
const reduceNames = () => books.reduce((acc, book) => acc + book.author.name + ' ', ' ')
// console.log(reduceNames());


// const expectedResult = 43;

const averageAge = () => {
 let idade = books.reduce((acc, book) => acc + (book.releaseYear - book.author.birthYear), 0)
 return idade / books.length
}
// console.log(averageAge());


// const expectedResult = {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   };
  
  const longestNamedBook = () => books.reduce((acc, book) => (acc.name.length < book.name.length) ? book : acc)
//   console.log(longestNamedBook());

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
  const containsA = () => {
     let totalOfLettersA = 0;
     names.forEach((nome) =>  {
        let lettersFromName = nome.split('');
        totalOfLettersA += lettersFromName.reduce((acc, currentLetter) => (currentLetter === 'a' || currentLetter === 'A') ? acc + 1 : acc, 0)
        
    });
    return totalOfLettersA
    }
console.log(containsA());
//   const containsA = () => {
     
//      names.forEach((nome) =>  {
//         let lettersFromName = nome.split('')

//         .reduce((acc, currentLetter) => (currentLetter === 'a' || currentLetter === 'A') ? acc + 1 : acc, 0)
        
//         return lettersFromName
//     });
//     }
// console.log(containsA());




