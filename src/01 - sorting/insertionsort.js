/**
 * insertion sorting
 */

function insertionSort(array) {
    let len = array.length,
        i, j, key;

    for (i = 2; i < len; i++) {
        key = array[i];
        j = i - 1;

        while (j > 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }

        array[j + 1] = key;
    }
}

export default insertionSort;
