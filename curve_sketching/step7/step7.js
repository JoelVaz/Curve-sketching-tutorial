function starter() {
    functionpull();
    localStorage.setItem("step", 7);
}
var key;
function functionpull() {
    var expression = localStorage.getItem("equation")
    if (expression == "equation1") {
        document.getElementById('choice1').innerHTML = "(-0.707,1.34) AND (0.707,-1.34)";
        document.getElementById('choice2').innerHTML = "(-0.907,1.64) AND (0.37,-5.34)";
        document.getElementById('choice3').innerHTML = "NO INFLECTION POINTS !!!";
        key = 1;
    }
    if (expression == "equation2") {
        document.getElementById('choice1').innerHTML = "(-0.707,1.34) AND (0.707,-1.34)";
        document.getElementById('choice2').innerHTML = "(-1.73,-1.73) AND (1.73, 1.73)";
        document.getElementById('choice3').innerHTML = "NO INFLECTION POINTS !!!";
        key = 2;
    }
    if (expression == "equation3") {
        document.getElementById('choice1').innerHTML = "(-0.707,1.34) AND (0.707,-1.34)";
        document.getElementById('choice2').innerHTML = "(-1,-1) AND (2, 1.5)";
        document.getElementById('choice3').innerHTML = "(2, 3)";
        key = 3;
    }
    if (expression == "equation4") {
        document.getElementById('choice1').innerHTML = "(7, 4) AND (7,-1.4)";
        document.getElementById('choice2').innerHTML = "NONE !!";
        document.getElementById('choice3').innerHTML = "(3, 0)";
        key = 2;
    }
    if (expression == "equation5") {
        document.getElementById('choice1').innerHTML = "(-0.707,1.34) AND (0.707,-1.34)";
        document.getElementById('choice2').innerHTML = "(-0.907,1.64) AND (0.37,-5.34)";
        document.getElementById('choice3').innerHTML = "(6, 6)";
        key = 3;
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