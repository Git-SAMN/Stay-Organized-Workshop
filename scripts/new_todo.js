"use strict";

const addBtn = document.getElementById("addBtn");



window.onload = () => {
    addBtn.onclick = onAddBtnClicked;

    populateCategoryDrop();
    
    populateUserDrop();



}
//calls the api to display user names
function populateUserDrop() {
    fetch("http://localhost:8083/api/users")
        .then(response => response.json())
        .then(userName => {
           for(let userSelect of userName){
            let option = document.createElement("option");
            option.text = userSelect.name;
            option.value = userSelect.id;

            user.appendChild(option);
           }
        })
}
//calls the api to display categories
function populateCategoryDrop() {
    fetch("http://localhost:8083/api/categories")
        .then(response => response.json())
        .then(categories => {
           for(let cat of categories){
            let option = document.createElement("option");
            option.text = cat.name
            option.value = cat.id

            category.appendChild(option)
           }
        })
}


function onAddBtnClicked() {
    let bodyData = {
        userid: document.getElementById("user").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        deadline: document.getElementById("deadline").value,
        priority: document.getElementById("priority").value,
    }
    fetch("http://localhost:8083/api/todos", {
        method: "Post",
        body: JSON.stringify(bodyData),
        headers: {
            "content-type": "application/json; charset=UTF-8"

        }
        
    })
    .catch(error => {
        console.error("error",error)
    })

}