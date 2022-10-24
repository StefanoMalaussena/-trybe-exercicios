// const lesson1 = {
//     materia: 'Matemática',
//     numeroEstudantes: 20,
//     professor: 'Maria Clara',
//     turno: 'manhã',
//   };
  
//   const lesson2 = {
//     materia: 'História',
//     numeroEstudantes: 20,
//     professor: 'Carlos',
//   };
  
//   const lesson3 = {
//     materia: 'Matemática',
//     numeroEstudantes: 10,
//     professor: 'Maria Clara',
//     turno: 'noite',
//   };

//   const addKeysValues = (obj, key, value) => {
//    obj[key] = value
//   };
//   const returnKeys = (obj) => {
//     let keys = Object.keys(obj)
//     return keys;
//   };

//   const returnObject = (obj) => {
//     let objectLength = Object.entries(obj)
//     return objectLength;
//   };

//   const returnValues = (obj) => {
//     let value = Object.values(obj)
//     return value;
//   };
  
//  const allLessons =  Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);
  
  
//   addKeysValues(lesson2, 'turno', 'noite');
//   console.log(lesson2)
//   console.log(returnKeys(lesson3));
//   console.log(returnObject(lesson3));
//   console.log(returnValues(lesson3));

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };




  const addKeysValues = (obj, key, value) => {
    obj[key] = value;
}
addKeysValues(lesson2, 'turno', 'noite');
console.log(lesson2)


