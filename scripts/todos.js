"use strict";

const userDropdown = document.getElementById("userDropdown");
const userDetailsRow = document.getElementById("userDetailsRow");
const addUserBtn = document.getElementById("addUserBtn");


window.onload = function () {
    userDataDisplay();
    populateUserDropdown();
    hideUserDetailsRow();
}
//function shows the user Cards and data displayed once a drop down is chosen from the info of the API
function userDataDisplay(){
  let getElementValue = (id) => document.getElementById(id).value;

let data = {
  userid: getElementValue("user"),
  category: getElementValue("category"),
  description: getElementValue("description"),
  deadline: getElementValue("deadline"),
  priority: getElementValue("priority")
};

  fetch("http://localhost:8083/api/todos", {
        method: "Post",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json; charset=UTF-8"

        }
        
    })
    .catch(error => {
      console.error("error",error)
  })

}

function populateUserDropdown(){
  console.log("selected user");

  fetch("http://localhost:8083/api/users")
    .then(response = response.json())
    .then(userName => {
        console.log(userName.name);
    })
}


//function for hiding user details before being chosen form the dropdown.
function hideUserDetailsRow(){
  userDetailsRow.style.display = "none";

}

// To get all categories of ToDos, send a GET request to:
//http://localhost:8083/api/categories
//----------------------------------------------------------------------------------------------
// To get all ToDos, send a GET request to:
//http://localhost:8083/api/todos
//----------------------------------------------------------------------------------------------
// To get a specific ToDos, send a GET request to the following where **id** is the id of
// the ToDo you want:
//http://localhost:8083/api/todos/
//example http://localhost:8083/api/todos/1
//----------------------------------------------------------------------------------------------
// To get all users (excluding passwords), send a GET request to:
// http://localhost:8083/api/users
//----------------------------------------------------------------------------------------------
// To get ToDos for a specific registered users, send a GET request to the following where
// **id** is the id of the registered user whose ToDos you want:
//http://localhost:8083/api/todos/byuser/
//example http://localhost:8083/api/todos/byuser/1



// function userDataDisplay(){
//     console.log("selected user");

//   let theUrl = "http://localhost:8083/api/todos";
//   fetch(theUrl)
//   .then((response) => response.json())
//   .then(data => {
//     console.log(data);
      
//   });
// }