const repeatString = (string,num) => {
    if (string < 0) {
        return 'Error!'
    };
    let word = '';
    for (let i = 0; i < num; i++) {
        word += string;
    }
    return  word;
};



// const repeatString = function(word, times) {
    //     if (times < 0) return 'ERROR';
    //     let string = '';
    //     for (let i = 0; i < times; i++) {
        //       string += word;
        //     }
        //     return string;
        //   };
        
        
  module.exports = repeatString;





