function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    // write your code here
    // out = input + 5;
    out = rows(JSON.parse(input));
    /**/
    output.innerText = out;
}

function rows(matrix) {
    let res = "";
    for (let i = 0; i < matrix.length; i++) {
        res += `row ${i} \n`;
        for (let j = 0; j < matrix[i].length; j++) {
            res += `${matrix[i][j]} \n`;
        }
    }
    return res;
}