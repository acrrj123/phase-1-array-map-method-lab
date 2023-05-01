const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials.map(tutorial => tutorial.split(' ')
//   .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
// }

const titleCased = () => {
  
  return tutorials.map(tutorial => {

    //Split each tutotial string into separate strings
    const eachTutorial = tutorial.split(' ');
    
     //Capitalize the first letter of each string join the capitalized letter back to a single string 
     const capitalize = eachTutorial.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
     })

    // Join the words together with a space between them.
    return capitalize.join(' ')
  }) 
}
console.log(titleCased())

