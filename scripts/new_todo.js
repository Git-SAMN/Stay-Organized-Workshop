"use strict";




window.onload = () => {
    addBrn.onclick = onAddBtnClicked;

    populateCategoryDrop();
    populateUrgencyDrop();
    populateUserDrop();



}
//calls the api to display user names
function populateUserDrop() {
    fetch("http://localhost:8083/api/users")
        .then(response = response.json())
        .then(userName => {
            console.log(userName.name);
        })
}
//calls the api to display categories
function populateCategoryDrop() {
    fetch("http://localhost:8083/api/categories")
        .then(response = response.json())
        .then(categories => {
            console.log(categories.name);
        })
}
//displays the level of urgency
function populateUrgencyDrop() {

}

function onAddBtnClicked() {
    let bodyData = {
        title: todoTitle.value,
        completed: todoCompleted.value,
        userId: todoUserId.value,
    }
    fetch("", {
        method: "Post",
        body: JSON.stringify(bodyData),
        headers: {
            "content-type": "application/json; charset=UTF-8"

        }
    })

}