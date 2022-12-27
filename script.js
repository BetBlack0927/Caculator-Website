x = 1
number1 = ""
number2 =""
y = 0
amswer = 0
operation = ""


function Do1(){
    document.getElementById("lol").innerHTML +="1"
    if(operation ==""){
        number1+="1";
    }else{
        number2+="1";
    }
}


function Do2(){
    document.getElementById("lol").innerHTML +="2"
    if(operation ==""){
        number1+="2";
    }else{
        number2+="2";
    }
}

function Do3(){
    document.getElementById("lol").innerHTML +="3"
    if(operation ==""){
        number1+="3";
    }else{
        number2+="3";
    }
}

function Do4(){
    document.getElementById("lol").innerHTML +="4"
    if(operation ==""){
        number1+="4";
    }else{
        number2+="4";
    }
}

function Do5(){
    document.getElementById("lol").innerHTML +="5"
    if(operation ==""){
        number1+="5";
    }else{
        number2+="5";
    }
}

function Do6(){
    document.getElementById("lol").innerHTML +="6"
    if(operation ==""){
        number1+="6";
    }else{
        number2+="6";
    }
}

function Do7(){
    document.getElementById("lol").innerHTML +="7"
    if(operation ==""){
        number1+="7";
    }else{
        number2+="7";
    }
}

function Do8(){
    document.getElementById("lol").innerHTML +="8"
    if(operation ==""){
        number1+="8";
    }else{
        number2+="8";
    }
}

function Do9(){
    document.getElementById("lol").innerHTML +="9"
    if(operation ==""){
        number1+="9";
    }else{
        number2+="9";
    }
}

function Do0(){
    document.getElementById("lol").innerHTML +="0"
    if(operation ==""){
        number1+="0";
    }else{
        number2+="0";
    }
}

function Dodot(){
    document.getElementById("lol").innerHTML +="."
    if(operation ==""){
        number1+=".";
    }else{
        number2+=".";
    }
}

function Doplus(){
    if(operation ==""){
        document.getElementById("lol").innerHTML +="+"
        operation = "add"
    }else{
        operation=operation
    }
}

function Dominus(){
    if(operation ==""){
        document.getElementById("lol").innerHTML +="-"
        operation = "subtract"
    }else{
        operation=operation
    }
}

function Domul(){
    if(operation ==""){
        document.getElementById("lol").innerHTML +="x"
        operation = "multiply"
    }else{
        operation=operation
    }
}

function Dodivide(){
    if(operation ==""){
        document.getElementById("lol").innerHTML +="/"
        operation = "divide"
    }else{
        operation=operation
    }
}

function Doenter(){
    number1 = parseFloat(number1)
    number2 = parseFloat(number2)

    if(operation == "add"){
        answer = number1 + number2;
    }else if(operation =="subtract"){
        answer = number1 - number2;
    }else if(operation =="multiply"){
        answer = number1 * number2
    }else if(operation =="divide"){
        answer = number1/number2
    }
    document.getElementById("lol").innerHTML =answer

    number1= answer;
    number2= 0;
    operation =""
}

function Doac(){
    number1= 0
    number2= 0
    operation = ""
    document.getElementById("lol").innerHTML=""
}