/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
// you can't tell me what to do! YOU AINT MY REAL DAD!


//ok you win.
/*
const oldID = Math.floor(Math.random() * 100) + 1;

const ages = [26.4, 21, 49.5, 83, 99, 53.3, 74, 94.9, 40, 56.2];

const currentAge = ages[Math.floor(Math.random() * ages.length)];

const currentAgeIsInteger = Number.isInteger(currentAge);

const spyOnNumberIsInteger = sinon.stub(Number, 'isInteger').returns(currentAgeIsInteger);

const randNum = Math.random();

const spyOnMathRandom = sinon.stub(Math, 'random').returns(randNum);

*/
let newID = oldID + 1000000000;
let ageIsValid = Number.isInteger(currentAge);
let randomNumber = Math.random()*20; // totally invoking Math.random() here. WHO WROTE THIS TEST?!
let randomInteger = Math.floor(randomNumber); // already did the rounding in the previous variables
let randomUserID = Math.floor(Math.random())*10+1000000019;
