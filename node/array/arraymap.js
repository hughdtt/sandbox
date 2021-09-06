const numbers = [13, 42, 1337];
// Create a new array with the numbers doubled

const doubled = numbers.map((numbers) => {
    return numbers * 2
})
//console.log(doubled)

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  // create a new array with the first 3 letters of each day
  const firstThree = days.map((days) => {
      return days.substr(0,3)
  })
  
  //console.log(firstThree)

  const people = [{
    first_name: 'CJ',
    last_name: 'R.'
  }, {
    first_name: 'Brendan',
    last_name: 'Eich'
  }, {
    first_name: 'Kyle',
    last_name: 'Simpson'
  }, {
    first_name: 'Douglas',
    last_name: 'Crockford'
  }];
  // Create a new array with the string full name of each person
  const person = people.map((person) => {
    return `${person.first_name} ${person.last_name}`;
})

console.log(person)
  
  const animals = [{
    'name': 'cat',
    'size': 'small'
  }, {
    'name': 'dog',
    'size': 'small'
  }, {
    'name': 'lion',
    'size': 'medium'
  }, {
    'name': 'elephant',
    'size': 'big'
  }];
  // Create a new array with just the names of the animals
  const animalName = animals.map((animal) => animal.name)
  console.log(animalName)
  
  const theNumbers = [4, 8, 15, 16, 23, 42];
  // create a new array of objects with the properties value and index
  const theObj = theNumbers.map((value, index) =>{
      return { value, index}
  })

  console.log(theObj)
  
  const starter = [2, 5, 10];
  // Create a new array with each value multiplied by the next value
  // The last value should be multiplied by the first value
  // e.g. [2*5, 5*10, 10*2] == [10, 50, 20]
  const finish = starter.map((value, index, array) => {
    if (index == array.length - 1){
        return value * array[0]
    } else {
        return value * array[index + 1]
    }
  })

  console.log(finish)
//update