var lesson = "Multiplication of Numbers"
document.getElementById("lesson").innerHTML = lesson
document.write

function multiply(a = 2) {
    var b = 5
    return a * b
}
document.write(multiply(2, 5))
document.write("<br>")

function multiply(a = 3) {
    var b = 5
    return a * b
}
document.write(multiply(3, 5))
document.write("<br>")

function multiply(a = 12.12) {
    var b = 1.11
    return a * b
}
document.write(multiply(12.12, 1.11))
document.write("<br>")

function multiply(a = 20000) {
    var b = 25
    return a * b
}
document.write(multiply(20000, 25))
document.write("<br>")