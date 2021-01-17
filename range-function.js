function numRange (first, last, step) {
    let listOfNumbers = []
    listOfNumbers.push(first)
    for (i = first; i < last; i++) {
        first++
        listOfNumbers.push(first)
    }
    return listOfNumbers;
}

function numSum (range) {
    let total = 0;
    for (let value of range) {
        total += value;
    }
    return total;
}
console.log(numRange(4,16))
console.log(numSum(numRange(4,16)))