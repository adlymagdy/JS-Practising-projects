function reverseArray (array) {
    let reversedArray = [];
    for (let i = array.length - 1; i>=0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

function reverseArrayInPlace (array) {
    let old = []
    for (let i = array.length - 1; i >= 0; i--) {
        old.push(array.shift());
        let out = old[i];
        array.push(out);
    }
return array;
}

let array = ["A", "B", "C", "D"];
console.log(reverseArrayInPlace(array));