// practise for getting the absolute value//
// fifth problem//

function gemsToDiamond(gems1, gems2, gems3) {
    const firstFriendGems = gems1;
    const secondFriendGems = gems2;
    const thirdFriendGems = gems3;

    const firstFriendGemsPower = gems1 * 21;
    const secondFriendGemsPower = gems2 * 32;
    const thirdFriendGemsPower = gems3 * 43;

    const totalDiamond = firstFriendGemsPower + secondFriendGemsPower + thirdFriendGemsPower;

    // const diamondCount = totalDiamond > 1000 * 2;

    if (totalDiamond > 1000 * 2) {

        return totalDiamond - 2000;
    } else {
        return totalDiamond;
    }

}
let gemsGiven = gemsToDiamond(100, 5, 1);
console.log(gemsGiven);