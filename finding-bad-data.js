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
console.log(arrayNumber);