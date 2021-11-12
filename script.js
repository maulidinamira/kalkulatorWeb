let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

// Clear output
function forclear() {
    document.getElementById("output").innerHTML = "0";
}

// fungsi untuk mengantikan 0 jika ada inputan/ value maka 0 akan otomatis hilang
function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
        value = " "
        document.getElementById("output").innerHTML = value;
    }
}

// persentase
function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}

// fungssi untuk menampilkan value ke display
function fordisplay(value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
}

// perhitungan operasi bilangan
function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}

