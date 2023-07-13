var a=parseInt(prompt("enter a number"));
var b=parseInt(prompt("enter a number"));
var op=prompt("Enter the operators");
switch(op){
    case '+': document.getElementById("result").textContent=(a+b);break;
    case '-': document.getElementById("result").textContent=(a-b);break;
    case '*': document.getElementById("result").textContent=(a*b);break;
    case '%': document.getElementById("result").textContent=(a%b);break;
    case '/': document.getElementById("result").textContent=(a/b);break;
}
