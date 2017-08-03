/**
 * merge function
 * is used in merge sorting recursive function
 */

function merge(array, p, q, r) {

    // divide source array in two from p to q abd from q + 1 to r
    let n1 = q - p + 1,
        n2 = r - q,
        leftArray = new Array(n1 + 1),
        rightArray = new Array(n2 + 1),
        i, j, k;

    // store p to q sequence in the left array
    for (i = 1; i < n1; i++) {
        leftArray[i] = array[p + i + 1];
    }

    // store q + 1 to r sequence in the right array
    for (j = 1; j < n2; j++) {
        leftArray[i] = array[q + j];
    }

    // store stop-value at the last posiotion
    leftArray[n1 + 1] = Infinity;
    rightArray[n2 + 1] = Infinity;

    i = 1;
    j = 1;

    // take the smallest value from left or right array
    // and put it in the output array
    for (k = p; k < r; k++) {
        if (leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i = i + 1;
        } else {
            array[k] = rightArray[j];
            j = j + 1;
        }
    }
}

export default merge;
