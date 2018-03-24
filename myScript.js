//function that check if the number is prime. If is not prints it's divisors
function primeNumber(num){
  var divisibleBy=[];
  //check if number is natural number greater than 1
  if ( num<=0 || (num-Math.floor(num))!=0){document.getElementById("primeNumber").innerHTML = ("Number must be a natural integer number, greater than 1!")}
  else {
  for (var i=2;i<num;i++) {
      if (num%i==0){divisibleBy.push(i);}}
      if (divisibleBy.length >= 1){document.getElementById("primeNumber").innerHTML = ("Number "+num+" is not a prime number, it is divisible by "+divisibleBy)+"!"}
          else {document.getElementById("primeNumber").innerHTML =("Number "+num+" is a prime number!")}
      }
}
//get the number you input
 document.getElementById('myButton').onclick=myFunction;
  function myFunction (){
    let num = document.getElementById("numberInput").value;
    primeNumber(num);
}
