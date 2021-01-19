function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    // write your code here
    // out = input + 5;
    out = binarySearch1(JSON.parse(input), Number(input2));
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