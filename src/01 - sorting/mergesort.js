/**
 * merge sorting
 */

import merge from './merge';

function mergeSort(array, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2);

        mergeSort(array, p, q);
        mergeSort(array, q + 1, r);
        merge(array, p, q, r);
    }
}

export default mergeSort;
