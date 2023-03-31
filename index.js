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

const titleCased = () => {

  const x = tutorials.map((element => element.split(" ")));

// console.log(x);

  for (let str of x){

    for (let i=0;i<str.length;i++){
      str[i] = (str[i].charAt(0).toUpperCase() + str[i].slice(1));
      }
   
    }
// console.log(x);

let y = x.map((element) => element.join(" "));

// console.log (y);



return y

}
