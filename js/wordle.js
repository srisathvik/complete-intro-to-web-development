var i = 0;
var word = "";
var ans = "hover";
console.log(ans[0]);
const word_URL = "https://words.dev-apis.com/word-of-the-day";

function getWord(){
    const promise = fetch(word_URL);
    promise
        .then(function (response){
            return response.json();
        }).then(val => {
            ans = val.word;
        })
}
getWord();

function checkmatch(row){
    // if(ans === word.toUpperCase()){
    //     console.log("correct answer");
    //     const rows = document.querySelectorAll(`.row-${row}`);
    //    for(var j = 0; j<5; j++){
    //         rows[j].style.backgroundColor = "green";
    //     }
        
    // }
    // console.log(word, row);
    // word = "";
    // row += 1;
    // const rows = document.querySelectorAll(`.row-${row}`);
    // console.log(word, ans, rows[0]);
    // for(var i = 0; i < 5; i++){
    //     if(ans.indexOf(word[i].toUpperCase()) > -1){
    //         console.log(ans.indexOf(word[i]));
    //         if (i === ans.indexOf(word[i].toUpperCase())){
    //             rows[i].style.backgroundColor = "green";
    //         }
    //         else{
    //             rows[i].style.backgroundColor = "yellow";
    //         }
    //     }
    // }
    // if(word.toUpperCase() === ans){
    //     alert("Correct Answer");
    //     exit();
    // }

    const rows = document.querySelectorAll(`.row-${row}`);
    let ansArr = ans.split('')
    for(let i=0; i<5; i++){
        if(ansArr[i] === word[i]){
            rows[i].style.backgroundColor = "green";
        }
        else if(ansArr.indexOf(word[i]) > -1){
            rows[i].style.backgroundColor = "yellow";
            ansArr[ansArr.indexOf(word[i])] = ''
        }
    }
}
document.addEventListener('keydown', function(e){
    if(/^[a-zA-Z]$/.test(e.key)){
        document.querySelector(`#block-${i+1}`).innerHTML = e.key;
        word += e.key;
        if(i <= 29){
            i += 1;
        }
    }
    else if(e.key === "Backspace"){
        if(document.querySelector(`#block-${i+1}`).innerHTML === "" && i > i - i%5){
                i -= 1;
        }
        document.querySelector(`#block-${i+1}`).innerHTML = ""
        word = word.slice(0, -1);
        document.querySelector(`#block-${i+1}`).style.backgroundColor = "white";
    }
    if(i % 5 === 0 && i > 0){
        console.log("row", i/5);
        checkmatch(i/5);
        if(word === ans){
            setTimeout(() => {
            alert('Hey! You won.');
            }, "0");
            
        }
        word = "";
    }
    if(i===30){
        setTimeout(() => {
          alert("Sorry, you lost. Correct Answer is "+ ans);
          }, "0");
        
    }
})
