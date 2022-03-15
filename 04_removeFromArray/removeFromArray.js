const removeFromArray = (...args) => {
    const array = args[0];
    const emptyArray = [];

    array.forEach(item => {
        if (!args.includes(item)) {
            emptyArray.push(item);
        }
    })
    return emptyArray
};

console.log(removeFromArray([1,2,3,4],3))



// Do not edit below this line
module.exports = removeFromArray; 




let animals = ['cow', 'cat', 'dog', 'snake']
let strings = 'is suuck'


animals.forEach(animal => {
    console.log(`${animal} ${strings}`)
})
 
