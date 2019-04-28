window.onload = function() {
    console.log("hello");
    console.log(localStorage.getItem("step"));
}
function nextstep() {
    var step = Number(localStorage.getItem("step")) + 1;
    var stepturl = "../step" + step + "/step" + step + ".html";
    window.location.href = stepturl;
}