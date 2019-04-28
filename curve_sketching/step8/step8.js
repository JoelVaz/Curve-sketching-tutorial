    var elt = document.getElementById('calculator');
    var calculator = Desmos.GraphingCalculator(elt);
    var slideIndex = 0;
    showSlides(slideIndex);
    starter()
    function starter() {
        localStorage.setItem("step", 8);
    }
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    var key;
    function showSlides(n) {
      var expression = localStorage.getItem("equation");
      if (expression == "equation1") {
        var function1 = 'x^2';
        var function2 = '(3x^5)-(5x^3)';
        var function3 = 'x^4'; 
        key = 2;
      }
      if (expression == "equation2") {
        var function1 = '(4x) / (x^2 + 1)';
        var function2 = 'x^3';
        var function3 = 'x^4'; 
        key = 1;
      }
      if (expression == "equation3") {
        var function1 = '4x';
        var function2 = '(x^3)-(6x^2)+(9x)+1';
        //(X^3)−(6X^2)+(9X)+1
        var function3 = 'x^4'; 
        key = 2;
      }
      if (expression == "equation4") {
        var function1 = '(x^2) / (x - 1)';
        var function2 = '(x^7)-(6x^5)+(9x)+1';
        //(X^3)−(6X^2)+(9X)+1
        var function3 = 'x^9'; 
        key = 1;
      }
      if (expression == "equation5") {
        var function1 = '(x^2) / (x - 1)';
        var function2 = '(x^7)-(6x^5)+(9x)+1';
        //(X^3)−(6X^2)+(9X)+1
        var function3 = 'x(5 - x) ^ \\frac 2 3';
        key = 3;
      }
      functionarray = [function1, function2, function3];
      if (n > 2) {slideIndex = 0}    
      if (n < 0) {slideIndex = 2}
      var graphnum = slideIndex + 1;
      document.getElementById('ansnum').innerHTML = "OPTION : " + graphnum;
      var equation = (functionarray[slideIndex]);
      calculator.setExpression({id:'graph1', latex: equation})
      calculator.updateSettings({expressions: false})
      calculator.updateSettings({keypad: false});
    }
    function goback() {
        var step = Number(localStorage.getItem("step")) - 1;
        var stepturl = "../step" + step + "/step" + step + ".html";
        window.location.href = stepturl;
    }
    function answer() {
        var expression = localStorage.getItem("equation");
        var graphnum = slideIndex + 1;
        if (graphnum == key) {
            window.location.href = '../end/end.html';
        } else {
            window.location.href = '../wrong/wrong.html';
        }
    }