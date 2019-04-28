window.onload = function() {
    console.log("hello");
    console.log(localStorage.getItem("step"));
}
function nextstep() {
    var step = Number(localStorage.getItem("step"));
    var stepturl = "../step" + step + "/step" + step + ".html";
    window.location.href = stepturl;
}
function help() {
    var expression = localStorage.getItem("equation");
    var step = Number(localStorage.getItem("step"));
    var func =  expression.substr(8,expression.length);
    var realfunc = Number(func) - 1;
    console.log(func);
    var stepturl = "../STP" + step + "/STEP" + step + "(" + realfunc + ")" + ".pdf";
    window.location.href = stepturl;
}
