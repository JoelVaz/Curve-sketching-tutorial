function starter() {
    functionpull();
    localStorage.setItem("step", 5);
}
var k;
function functionpull() {
    var expression = localStorage.getItem("equation");
    if (expression == "equation1") {
        document.getElementById('choice1').innerHTML = "LOCAL MIN(1,-2) ; ABS MAX(-1,2)";
        document.getElementById('choice2').innerHTML = "ABS MIN(1,-2) ; ABS MAX(-1,2)";
        document.getElementById('choice3').innerHTML = "LOCAL MIN(1,-2) ; LOCAL MAX(-1,2)";
        key = 3;
    }
    if (expression == "equation2") {
        document.getElementById('choice1').innerHTML = "LOCAL MIN(5,-2) ; ABS MAX(-1,0)";
        document.getElementById('choice2').innerHTML = "LOCAL MIN(-1,-2) ; LOCAL MAX(1,2)";
        document.getElementById('choice3').innerHTML = "ABS MIN(3,-2) ; ABS MAX(-1,0)";
        key = 2;
    }
    if (expression == "equation3") {
        document.getElementById('choice1').innerHTML = "LOCAL MAX (1,5) ; LOCAL MIN (3,1)";
        document.getElementById('choice2').innerHTML = "LOCAL MIN(-1,-2) ; LOCAL MAX(1,2)";
        document.getElementById('choice3').innerHTML = "ABS MIN(3,-2) ; ABS MAX(-1,0)";
        key = 1;
    }
    if (expression == "equation4") {
        document.getElementById('choice1').innerHTML = "LOCAL MAX (1,6) ; LOCAL MIN (4,1)";
        document.getElementById('choice2').innerHTML = "LOCAL MIN(1, 4) ; LOCAL MAX(0, 0)";
        document.getElementById('choice3').innerHTML = "ABS MIN(5, 0) ; ABS MAX(1,5)";
        key = 2;
    }
    if (expression == "equation5") {
        document.getElementById('choice2').innerHTML = "LOCAL MAX (1,5) ; LOCAL MIN (2,1)";
        document.getElementById('choice1').innerHTML = "LOCAL MIN(5, 0) ; LOCAL MAX(0, 4.76)";
        document.getElementById('choice3').innerHTML = "LOCAL MIN(5, 0) ; LOCAL MAX(1,3)";
        key = 1;
    }
}
function answer(choice) {
    if (choice == key) {
        window.location.href = '../correct/correct.html';
    }else{
        window.location.href = '../wrong/wrong.html';
        console.log("hello");
    }
}
function goback() {
    var step = Number(localStorage.getItem("step")) - 1;
    var stepturl = "../step" + step + "/step" + step + ".html";
    window.location.href = stepturl;
}