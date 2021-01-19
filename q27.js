function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    // write your code here
    // out = input + 5;
    out = retrieveValue(JSON.parse(input), input2);
    /**/
    output.innerText = out;
}

function retrieveValue(arr, prop) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty(prop)) {
            res.push(arr[i][prop]);
        }
    }
    return res;
}