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
myStirng = evenOdd('amar matha');
console.log(myStirng);