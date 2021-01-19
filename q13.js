let arr = [];

function add() {
    const input = document.getElementById("input").value;
    arr.push(input);
    document.getElementById("input").value = "";
}

function display() {
    const output = document.getElementById("output");
    let out = "";

    arr.map((val, i) => {
        out += `Element ${i} = ${val} \n`;
    });
    output.innerText = out;
}