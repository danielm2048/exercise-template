function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    // write your code here
    // out = input + 5;

    /**/

    out = removeFalsyValues(Function('"use strict";return (' + input + ')')()); // JSON.parse can't parse NaN and '
    output.innerText = out;
}

function removeFalsyValues(arr) {
    let i = 0;
    while (i < arr.length) {
        if (!arr[i]) {
            arr.splice(i, 1);
        }
        else {
            i++;
        }
    }
    return arr;
}