"use strict";

const submitBtn = document.getElementById("submitBtn");

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const errorMessage = document.getElementById("errorMessage");


window.onload = () => {
    submitBtn.onclick = onSubmitBtn
}

function onSubmitBtn(){
    if(password1.value ==  password2.value){
        let bodyData = {
            name : document.getElementById("name").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
          
        }
        fetch("http://localhost:8083/api/todos", {
            method: "Post",
            body: JSON.stringify(bodyData),
            headers: {
                "content-type": "application/json; charset=UTF-8"
    
            }
            
        })
    }
    else{
        console.log("error")
        errorMessage.innerHTML = "Password does not match"
    }
}


