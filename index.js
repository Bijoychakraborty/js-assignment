// get the final result of mathmatics term///
// 1.First problem//

function mindGame(number) {
    let multiNumber = number * 3;
    let addNumber = multiNumber + 10;
    let divideNumber = addNumber / 2;
    let totalNumber = divideNumber - 5;
    console.log(totalNumber);
    return number;

}
mindGame(33);

// 2.Second Problem//

// geting an answer of a question if the value of string is odd or even///

function evenOdd(word) {
    let text = word.length;
    let remainder = text % 2;
    console.log(text);
    if (remainder === 0) {
        return 'even';
    } else {
        return 'odd';

    }

}
myStirng = evenOdd('phero');
// console.log(myStirng);


// Third problem//
// greater than and less than solution.
// if input number is less  than 7 seven you have to return of their deduction
// else you have to return of their double number.


function isLGSeven(input) {
    let inputNumber = input - 7;
    let doubleInput = input * 2;
    // console.log(inputNumber, doubleInput);

    if (inputNumber < 7) {
        return inputNumber;
    } else {
        return doubleInput;
    }
}
let number = isLGSeven(15);
// console.log(number);


// Fourth problem//

// providing the negative value of an array////

function findingBadData(array) {
    let badData = [];
    for (let i = 0; i < array.length; i++) {
        let index = i;
        if (array[index] < 0) {
            badData.push(array[index]);
        }
    }
    return badData;
}
let myarray = [-4, -9, -5, -33, -55];
let arrayNumber = findingBadData(myarray);
// console.log(arrayNumber);



// fifth problem  //

// providing diamond among friends..

function gemsToDiamond(gems1, gems2, gems3) {
    const firstFriendGems = gems1;
    const secondFriendGems = gems2;
    const thirdFriendGems = gems3;

    const firstFriendGemsPower = gems1 * 21;
    const secondFriendGemsPower = gems2 * 32;
    const thirdFriendGemsPower = gems3 * 43;

    const totalDiamond = firstFriendGemsPower + secondFriendGemsPower + thirdFriendGemsPower;

    if (totalDiamond > 1000 * 2) {

        return totalDiamond - 2000;
    } else {
        return totalDiamond;
    }

}
let gemsGiven = gemsToDiamond();
// console.log(gemsGiven);