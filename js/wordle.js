function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
  }
function alphaKey(value){
    for(i = 0; i< length.boxes; i++){
        if(isLetter(value)){

        }
    }
}

function init(){
    document
        .querySelectorAll(".wordle-item");
        .addEventListener("keyup", function(event){
                alphaKey(event.target.innerText);
            });
}
init();
