'use strict';

window.calculator = window.calculator || {};

(function() {

    var valueAsInt = function(id) {
		return parseInt(document.getElementById(id).value, 10);
	};

    var calculate = function() {
        var x = valueAsInt('x');
        var y = valueAsInt('y');
        var sum = x+y;
        document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
    };

    window.calculator.init = function() {
		document.getElementById('add').addEventListener('click', calculate);
	};
}());