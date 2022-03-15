const repeatString = (string, number) => {
    if (number < 0) return 'ERROR'
    let word = '';
    for (let i = 0; i < number; i++) {
            word += string; //code block to be executed
    }
    return word
}



console.log(repeatString('sssss ', 10));
module.exports = repeatString;




/* const repeatString = (string, num) => {
    if (string < 0) {
        return 'Error!'
    };
    
    let word = '';
    for (let i = 0; i < num; i++) {
        word = word + string;
    }
    return word;
}; */

/* const repeatString = function (word, times) {
    if (times <= 0) return 'ERROR';
    let string = '';
    for (let i = 0; i < times; i++) {
        string += word;
    }
    return string;
}; */
