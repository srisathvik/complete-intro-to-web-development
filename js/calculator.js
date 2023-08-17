var display = document.querySelector(".display");
function onClickNumber(e) {
    display.innerHTML += e.target.innerHTML;
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
    display.innerHTML = "";
});

element=document.querySelector(".rem");
element.addEventListener("click", function(){
    display.innerHTML = display.innerHTML.slice(0, -1);
});
