function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    // write your code here
    // out = input + 5;
    out = first1(JSON.parse(input), Number(input2));
    /**/
    output.innerText = JSON.stringify(out);
}

//Solution with no built-in functions
function first(arr, n = 1) {
    if (arr.length === 0 || n < 1) {
        return [];
    }
    if (n === 1) {
        return arr[0];
    }
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(arr[i]);
    }
    return res;
}

//Another solution
function first1(arr, n = 1) {
    return arr.length === 0 || n < 1 ? [] :
        n === 1 ? arr[0] : arr.slice(0, n);
}