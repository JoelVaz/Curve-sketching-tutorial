function starter() {
    functionpull();
    localStorage.setItem("step", 2);
}
var key;
function functionpull() {
    var expression = localStorage.getItem("equation")
    if (expression == "equation1") {
        document.getElementById('choice1').innerHTML = "X = 5 ; Y = 4";
        document.getElementById('choice2').innerHTML = "X = ±1.291 ; Y = 0";
        document.getElementById('choice3').innerHTML = "X = ±1.8 ; Y = -4";
        //answer is A
        key = 2;
    }
    if (expression == "equation2") {
        document.getElementById('choice1').innerHTML = "X = 0 ; Y = 0";
        document.getElementById('choice2').innerHTML = "X = ±1.291 ; Y = 0";
        document.getElementById('choice3').innerHTML = "X = ±1.8 ; Y = -4";
        key = 1;
    }
    if (expression == "equation3") {
        document.getElementById('choice1').innerHTML = "Y = 8";
        document.getElementById('choice2').innerHTML = "X = ±1.9 ; Y = 3";
        document.getElementById('choice3').innerHTML =  "Y = 1 ; X = -0.1";
        key = 3;
    }
    if (expression == "equation4") {
        document.getElementById('choice1').innerHTML = "Y = 0 ; X = 0";
        document.getElementById('choice2').innerHTML = "X = ±1.9 ; Y = 3";
        document.getElementById('choice3').innerHTML =  "Y = 1 ; X = -0.1";
        key = 1;
    }
    if (expression == "equation5") {
        document.getElementById('choice1').innerHTML = "Y = 0 ; X = 0";
        document.getElementById('choice2').innerHTML = "X = 5 ; Y = 0";
        document.getElementById('choice3').innerHTML =  "Y = 7 ; X = -8.1";
        key = 2;
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