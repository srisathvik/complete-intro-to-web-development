var operator;
var num1, num2;
var display = document.querySelector(".display");
function onClickNumber(e) {
    if(display.innerHTML === "0"){
        display.innerHTML = e.target.innerHTML;
    }
    else{
        display.innerHTML += e.target.innerHTML;
    }
    
}
var element = document.querySelector('.num1');
element.addEventListener("click", onClickNumber);
element = document.querySelector('.num2');
element.addEventListener("click", onClickNumber);
element = document.querySelector('.num3');
element.addEventListener("click", onClickNumber);
element = document.querySelector('.num4');
element.addEventListener("click", onClickNumber);
element = document.querySelector('.num5');
element.addEventListener("click", onClickNumber);
element = document.querySelector('.num6');
element.addEventListener("click", onClickNumber);
element = document.querySelector('.num7');
element.addEventListener("click", onClickNumber);
element = document.querySelector('.num8');
element.addEventListener("click", onClickNumber);
element = document.querySelector('.num9');
element.addEventListener("click", onClickNumber);
element = document.querySelector('.num0');
element.addEventListener("click", onClickNumber);

element = document.querySelector(".clr");
element.addEventListener("click", function(){
    display.innerHTML = "0";
});

element=document.querySelector(".rem");
element.addEventListener("click", function(){
    if (display.innerHTML.length == 1){
        display.innerHTML = "0"
    }
    else{
    display.innerHTML = display.innerHTML.slice(0, -1);
    }
});


element = document.querySelector(".mul");
element.addEventListener("click", function(){
    operator = "*";
    num1 = Number(display.innerHTML);
    display.innerHTML = "";
});

element = document.querySelector(".add");
element.addEventListener("click", function(){
    operator = "+";
    num1 = Number(display.innerHTML);
    display.innerHTML = "";
});

element = document.querySelector(".sub");
element.addEventListener("click", function(){
    operator = "-";
    num1 = Number(display.innerHTML);
    display.innerHTML = "";
});

element = document.querySelector(".division");
element.addEventListener("click", function(){
    operator = "/";
    num1 = Number(display.innerHTML);
    display.innerHTML = "";
});

function operation(){
    // console.log(operator , typeof(operator));
    // console.log(num1 , typeof(num1));
    // console.log(num2 , typeof(num2));
        if(operator == "+"){
            return num1 + num2;
        }
        else if(operator == "-"){
            return num1 - num2;
        }
        else if(operator == "*"){
            return num1 * num2;
        }
        else if (operator == "/"){
            return Math.round(num1 / num2);
        }
    
}
element = document.querySelector(".sol");
element.addEventListener("click", function(){
    // console.log(operator, typeof(operator));
    num2 = Number(display.innerHTML);
    display.innerHTML = operation();
    // console.log(display.innerHTML);
})