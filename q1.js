function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    // write your code here
    // out = input + 5;
    out = isArray(JSON.parse(input))
    /**/
    output.innerText = out;
}

function isArray(input) {
    return input.constructor === Array;
}