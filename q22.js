function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /**/
    // write your code here
    // out = input + 5;
    let arrays = JSON.parse(input);
    out = union(arrays[0], arrays[1]);
    /**/
    output.innerText = out;
}

//Solution with sets
function union(arr1, arr2) {
    let set = new Set(arr1);

    arr2.forEach(val => set.add(val));
    return Array.from(set).sort((a, b) => a - b);
}

//Solution without sets
function union1(arr1, arr2) {
    let res = {};

    for (let i = 0; i < arr1.length; i++) {
        if (!res[arr1[i]]) {
            res[arr1[i]] = arr1[i];
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (!res[arr2[j]]) {
            res[arr2[j]] = arr2[j];
        }
    }

    return Object.values(res).sort((a, b) => a - b);
}