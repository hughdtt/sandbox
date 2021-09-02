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
  
  console.log(firstThree)