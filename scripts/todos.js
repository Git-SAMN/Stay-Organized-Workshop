"use strict";

const userDropdown = document.getElementById("userDropdown")
const userDetailsRow = document.getElementById("userDetailsRow")


window.onload = function () {
    userDataDisplay();

    hideUserDetailsRow();
}
//function shows the user Cards and data displayed once a drop down is choses from the info of the API
function userDataDisplay(){
    console.log("selected user");

  let theUrl = "http://localhost:8083/api/todos";
  fetch(theUrl)
  .then((response) => response.json())
  .then(data => {
    console.log(data);
      
  });
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

//function for hiding user details before being chosen form the dropdown.
function hideUserDetailsRow(){
    


}




// function userDataDisplay(){
//     console.log("selected user");

//   let theUrl = "http://localhost:8083/api/todos";
//   fetch(theUrl)
//   .then((response) => response.json())
//   .then(data => {
//     console.log(data);
      
//   });
// }