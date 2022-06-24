let firstInput = prompt('welcom!...Enter the operation name you want to perform...(addition,subtraction,multplication, division)');

let firstdigit = parseInt(prompt('firstdigit'));
let seconddigit = parseInt(prompt('seconddigit'));

let result;

if (firstInput == 'addition') {
    result = firstdigit + seconddigit;
    alert('the reult is ' + result)
}

else if (firstInput == 'subtraction') {
    result = firstdigit - seconddigit;
    alert('the reult is ' + result)
}

else if (firstInput == 'multiplication') {
    result = firstdigit * seconddigit;
    alert('the reult is ' + result)
}

else {
   result = firstdigit / seconddigit
}
 alert('the reult is ' + result)
















