function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    // write your code here
    // out = input + 5;
    out = findDuplicates(JSON.parse(input));
    /**/
    output.innerText = out;
}

function findDuplicates(arr) {
    let checked = {};
    let res = {}; // Can also be implemented with Set, pretty much the same
    for (let i = 0; i < arr.length; i++) {
        if (!checked[arr[i]]) {
            checked[arr[i]] = arr[i];
        }
        else if (!res[arr[i]]) {
            res[arr[i]] = arr[i];
        }
    }
    return Object.values(res);
}