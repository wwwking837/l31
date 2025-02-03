function getHistory() {
    return document.getElementById
    ("history-value").innerText;
}
function printHistory(num) {
    document.getElementById("history-value").
innertext = num;
}
function getOutput() {
    return document.getElementById
    ("Output-value").innerText;
} 
function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value")
        innerText = num
    }


else {
    Document.getElementById("output-value").
    innerText = getFormattedNumber(num);
}
}
function getFormattedNumber(num) {
    if (num == "-") {
        return  "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName
("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListner('click', function () 
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
    )
        else if (this.id == "backspace") {
            var output = reverseNumberFormat
            (getOutput()).toString();
            if (output) {//if output has a value 
                output = output.substr(0, output.
                    length - 1);
                    printOutput(output):
                
        }
    }


