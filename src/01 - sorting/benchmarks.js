var insertionSort = require('./insert');

function testSort() {
    var testCount = Math.random() * 1000,
        testArray = [],
        testArrayCopy;

    for (var i = 0; i < testCount; i++) {
        testArray.push(Math.random() * 1000);
    }

    console.log(testArray.length);
    console.time('insertion sort');
    console.timeEnd('insertion sort');

}

module.exports = testSort;
