function starter() {
    functionpull();
    localStorage.setItem("step", 6);
}
var key;
function functionpull() {
    var expression = localStorage.getItem("equation")
    if (expression == "equation1") {
        document.getElementById('choice1').innerHTML = "(-∞,-1) AND (2,∞)";
        document.getElementById('choice2').innerHTML = "(-0.907, 5) AND (0.37,10)";
        document.getElementById('choice3').innerHTML = "(∞,5)";
        key = 1;
    }
    if (expression == "equation2") {
        document.getElementById('choice1').innerHTML = "(-∞,-1) AND (2,∞)";
        document.getElementById('choice2').innerHTML = "(-0.907, 5) AND (0.37,10)";
        document.getElementById('choice3').innerHTML = "(-1, +1)";
        key = 3;
    }
    if (expression == "equation3") {
        document.getElementById('choice1').innerHTML = "(-∞,1) AND (3,∞)";
        document.getElementById('choice2').innerHTML = "(-0.907, 5) AND (0.37,10)";
        document.getElementById('choice3').innerHTML = "(-1, +1)";
        key = 1;
    }
    if (expression == "equation4") {
        document.getElementById('choice2').innerHTML = "(-∞, 0) AND (2, ∞)";
        document.getElementById('choice1').innerHTML = "(-7, 5) AND (3.7,10)";
        document.getElementById('choice3').innerHTML = "(-0.5, +1.5)";
        key = 2;
    }
    if (expression == "equation5") {
        document.getElementById('choice2').innerHTML = "(-∞, 3) AND (5, ∞)";
        document.getElementById('choice1').innerHTML = "(-0.907, 5) AND (0.37,10)";
        document.getElementById('choice3').innerHTML = "(2, 3)";
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