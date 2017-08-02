function insertionSort(array) {
    var len = array.length,
        i, j, key;

    for (i = 2; i < len; i++) {
        key = array[i];
        j = i - 1;

        while (j > 0 && array[j] > key) {
            array[j + 1] = array[i];
            i = i - 1;
        }

        array[i + 1] = key;
    }
}

module.exports = insertionSort;
