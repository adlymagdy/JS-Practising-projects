function arrayToList (array) {
	let list = {};
	for (let i = array.length - 1; i >= 0; i--) {
		list = { value: array[i], rest: list };
	}
	return list;
}

function listToArray (list) {
	const array = [];
	for (let item = list; item; item = item.rest) {
		array.push(item.value);
	}
	return array;
}

function prepend (item, list) {
	return { value: item, rest: list };
}


console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20])));
console.log(prepend(10, arrayToList([10, 20])));
// let list = {}
// list.test = "yeah";
// console.log(list)
