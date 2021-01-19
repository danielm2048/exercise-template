function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    // write your code here
    // out = input + 5;
    out = dashes(input);
    /**/
    output.innerText = out;
}

function dashes(input) {
    let res = input.split("");
    console.log(res);
    for (let i = 0; i < res.length - 1; i++) {
        if (Number(res[i]) % 2 === 0 && Number(res[i + 1]) % 2 === 0) {
            res.splice(i + 1, 0, "-");
        }
    }
    return res.join("");
}