function random()
{

var intVar = 10
var strVar = "Hello World"
var fltVar = 10.10
    
document.getElementById("intVar").innerHTML = intVar;
document.getElementById("strVar").innerHTML = strVar;
document.getElementById("fltVar").innerHTML = fltVar;
    
}
function resetVariables()
{
    document.getElementById("intVar").innerHTML = "intVar";
    document.getElementById("fltVar").innerHTML = "fltVar";
    document.getElementById("strVar").innerHTML = "strVar";
}
function loop()
{
    var numbers = [1,2,3,4,5,6,7,8,9,10];
    var output = [ ];
    for (var i = 0; i < numbers.length; i++)
        {
          output = output + " " + numbers[i];
          document.getElementById("loop").innerHTML = output;
        }
}
function resetLoop()
{
    document.getElementById("loop").innerHTML = "Run me!";
}
function conditional()
{
    
    var input1 = document.getElementById("number1").value;
    var input2 = document.getElementById("number2").value;
    if (input2 < input1){  
       document.getElementById("result").innerHTML = input1;
    }
    else{
         document.getElementById("result").innerHTML = input2;
        }

}
function resetConditional()
{
    document.getElementById("result").innerHTML = "Result will show here";
    document.getElementById("number1").value = 0;
    document.getElementById("number2").value = 0;
}

