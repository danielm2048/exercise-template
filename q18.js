function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    // write your code here
    // out = input + 5;
    out = binarySearch2(JSON.parse(input), Number(input2));
    /**/
    output.innerText = out;
}

//Solution without built-in function
function binarySearch(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

//Solution with built-in function
function binarySearch1(arr, item) {
    return arr.indexOf(item);
}

//Solution to better match question description
function binarySearch2(arr, item) {
    return helper(arr, item, 0, arr.length);
}

function helper(arr, item, low, high) {
    console.log(low, high);
    const mid = ~~((low + high) / 2);
    console.log(mid);
    if (arr[mid] === item) {
        return mid;
    }
    if (mid === 0 || mid === high) {
        return -1;
    }
    if (arr[mid] < item) {
        return helper(arr, item, mid + 1, high);
    }
    else {
        return helper(arr, item, low, mid - 1);
    }
}