function factorial(number) {
  var total = number;
  for (var i = number - 1; i>0; i--) {
    total *= i;
  }
  return total;
};

function factorialRecursion(number) {
  if(number == 0) {
    return 1;
  } else {
    return number * factorialRecursion(number - 1)
  }
};

$(document).ready(function(){
  console.log(factorial(5));
  console.log(factorialRecursion(5));
});
