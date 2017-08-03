import insertionSort from './insertionsort';
import mergeSort from './mergesort';

function testSort() {
    let testCount = Math.random() * 100000,
        testArray = [],
        testArrayCopy = [];

    for (let i = 0; i < testCount; i++) {
        testArray.push(Math.random() * 100000);
    }

    for (let j = 0; j < testArray.length; j++) {
        testArrayCopy[j] = testArray[j];
    }

    console.log(testArray.length);
    console.time('insertion sort');
    insertionSort(testArray);
    console.timeEnd('insertion sort');

    console.log(testArrayCopy.length);
    console.time('merge sort');
    mergeSort(testArrayCopy);
    console.timeEnd('merge sort');
}

export default testSort;
