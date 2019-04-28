function openequations() {
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("equations");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}
function equationselected(equation) {
    localStorage.setItem("equation", equation);
    console.log(equation);
    localStorage.setItem("score", 0);
    window.location.href = '../step1/step1.html';
}
// <p onclick="equationselected('equation6')">F(X) = (X^2) * (X^2 + 4)</p>
// <p onclick="equationselected('equation7')">F(X) = (X^3) - (3X^2) + 2X</p>
// <p onclick="equationselected('equation8')">F(X) = SIN(X)*SIN(2X)</p>