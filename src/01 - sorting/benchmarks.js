var insertionSort = require('./insert');

function testSort() {
    var testCount = Math.random() * 1000,
        testArray = [],
        testArrayCopy;

    for (var i = 0; i < testCount; i++) {
        testArray.push(Math.random() * 1000);
    }

    testArrayCopy = JSON.parse(JSON.stringify(testArray));

    console.log(testArray);
    // console.time('insertion sort');
    insertionSort(testArrayCopy);
    // console.timeEnd('insertion sort');
    console.log(testArrayCopy);

}

module.exports = testSort;
