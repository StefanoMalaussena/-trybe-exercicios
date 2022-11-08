function formatedBookNames() {
    return books.map((array) => {  
      let ageAuthor = array.releaseYear - array.author.birthYear;
      let resultado = {
        author: array.name,
        age: ageAuthor,
      }
    }).sort((idade1, idade2) => idade1.age - idade2.age);
      return resultado;
  }