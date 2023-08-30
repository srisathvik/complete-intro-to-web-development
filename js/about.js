function light(data){
    console.log("light Mode");
    data.style.backgroundColor = "White"
    data.style.color = "black";
}

function dark(data){
    console.log("dark mode");
    data.style.backgroundColor = "black"
    data.style.color = "white";
}
function changeMode(value){
    console.log("changemode called");
    console.log(value, typeof(value));
    const data = document.querySelector(".data")
    data.style.height = "100vh"
    if (value === "Light Mode"){
        light(data);
    }
    else if(value === "Dark Mode"){
        dark(data);
    }
}

document.querySelector(".display")
document.addEventListener("click", function(event){
    changeMode(event.target.innerText);
});
