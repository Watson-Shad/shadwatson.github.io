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

var noun;
var verb;
var adjective;



function playMadLib(noun, verb, adjective) 
{
    noun = document.getElementById("noun").value;
    verb = document.getElementById("verb").value;
    adjective = document.getElementById("adjective").value;
    
    var madLib = "Once upon a time, in a galaxy far far away.... There was a " + noun + " sitting in the tree playing " + verb + ". While there was a big " + adjective + " bear waiting for him at the base of the tree. The End."
    
    document.getElementById("story").innerHTML = madLib;   
}
function resetGame()
{
    document.getElementById("noun").value= "";
    document.getElementById("verb").value = "";
    document.getElementById("adjective").value = "";
    
    document.getElementById("story").innerHTML = "Story will appear here.";
}
function favoriteStuff()
{
    var favorite = new Array();
    favorite["food"] = document.getElementById("food").value;
    favorite["color"] = document.getElementById("color").value;
    favorite["sport"] = document.getElementById("sport").value;
    
    var reply = "It is great to meet you! Here is what I have learned about you! Your favorite food is "  + favorite["food"] + ". Your favorite color is " + favorite["color"] + ". And your favorite sport to play is " + favorite["sport"] + "."
    
    document.getElementById("know").innerHTML = reply;
    
    
}
function resetFavorite()
{
    document.getElementById("food").innerHTML = "";
    document.getElementById("color").innerHTML = "";
    document.getElementById("sport").innerHTML = "";
    
    document.getElementById("know").innerHTML = "";
}