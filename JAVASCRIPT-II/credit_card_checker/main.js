// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

//Function to check wheter the card is valid or not
//Use Lunh Algorithm

let testArray = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];

const validateCred = (array) => {
  // slice the hug chunk of array
  let x = array.slice();

  // reverse the chunked array

  x.reverse();

  let doubleOddDigit;
  let sumOddDigit = 0;
  let sumEvenDigit = 0;
  for (let i = 0; i < x.length; i++) {
    if (i % 2 !== 0) {
      doubleOddDigit = x[i] * 2;
      // if that odd digit that have been doubled greater than 9 minus it by 9
      if (doubleOddDigit > 9) {
        doubleOddDigit = doubleOddDigit - 9;
      }
      sumOddDigit += doubleOddDigit;
      // for the even digit
    } else if (i % 2 === 0) {
      sumEvenDigit += x[i];
    }
  }
  // Check if Card Number Valid or not
  let sum = sumEvenDigit + sumOddDigit;
  if (sum % 10 == 0) {
    // Return True when valid Cred
    console.log("true");
  } else {
    // Return False when invalid Cred
    console.log("false");
  }
};

// function for finding the invalid cards in a list of array
let invalidCreditCard;
let listInvalidCard = [];
const findInvalidCards = (nestedArray) => {
  // loop through the nested array
  for (let j = 0; j < nestedArray.length; j++) {
    if(validateCred(nestedArray) == 'false'){
      listInvalidCard.push(nestedArray[j]);
    }
  }
};

// Function call
// validateCred(invalid3);
findInvalidCards(batch);
