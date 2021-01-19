function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    // write your code here
    // out = input + 5;

    // Input's format: yyyy-yyyy
    const years = input.split("-");
    let minYear = Math.min(years[0], years[1]);
    let maxYear = Math.max(years[0], years[1]);
    let i = minYear;
    while (i <= maxYear) {
        if (checkIfLeap(i)) {
            out += i + "\n";
        }
        i++
    }
    /**/
    output.innerText = out;
}

function checkIfLeap(year) {
    if (year % 4 !== 0) {
        return false;
    }
    else if (year % 100 !== 0) {
        return true;
    }
    else if (year % 400 !== 0) {
        return false;
    }
    else {
        return true;
    }
}