"use strict"

const markCompleteBtn = document.getElementById("markCompleteBtn"); 
const tableComplete = document.getElementById("tableComplete"); 

window.onload = function (){
    console.log("Window is loading...."); 

    markCompleteBtn.onclick = markCompleteBtnClicked; 
}

// If the user clicks the button, send a PUT message to the endpoint
//  http://localhost:8083/api/todos/**id**
// where **id** is the id of the ToDo you want to mark complete. For example:
//  http://localhost:8083/api/todos/1

function markCompleteBtnClicked(){ 

}