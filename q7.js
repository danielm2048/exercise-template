function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    // write your code here
    // out = input + 5;
    out = quickSort(JSON.parse(input));
    /**/
    output.innerText = out;
}

//Solution using built-in sort
function sort(arr) {
    return arr.sort((a, b) => a - b);
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

//Another solution implementing a basic bubble sort
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

//Another solution implementing quick sort
function quickSort(arr) {
    quickSortHelper(arr, 0, arr.length - 1);
    return arr;
}

function quickSortHelper(arr, low, high) {
    if (low < high) {
        let p = partition(arr, low, high);
        quickSortHelper(arr, low, p);
        quickSortHelper(arr, p + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[~~((high + low) / 2)];
    let i = low - 1;
    let j = high + 1;
    while (true) {
        do {
            i++;
        }
        while (arr[i] < pivot);

        do {
            j--;
        }
        while (arr[j] > pivot);

        if (i >= j) {
            return j;
        }
        swap(arr, i, j);
    }
}