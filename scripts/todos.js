"use strict";
//------------------------------------------------------------------------------------------
const userDropdown = document.getElementById("userDropdown");
const userDetailsRow = document.getElementById("userDetailsRow");
const addUserBtn = document.getElementById("addUserBtn");
//------------------------------------------------------------------------------------------
window.onload = function () {
    // userDataDisplay();
    
    populateUserDropdown();
    userDropdown.onchange = dropDownOnChange;

    hideUserDetailsRow();
  }
  
  function populateUserDropdown(){
    console.log("selected user");
  
    fetch("http://localhost:8083/api/users")
      .then(response => response.json())
      .then(userName => {
        for(let user of userName){
          let option = document.createElement("option");
          option.text = user.name;
          option.value = user.id;
          userDropdown.appendChild(option);
        }
      })

  }
  //function shows the user Cards and data displayed once a drop down is chosen from the info of the API
  function dropDownOnChange(){
    let selectedUser = userDropdown.value;
    const taskFilter = data.filter(user => user.userid === selectedUser)
    console.log(taskFilter);

      userDetailsRow.innerHTML = "";

    if (taskFilter.length > 0) {
      for (let task of taskFilter) {
        makeTaskCard(task);
      }
    }

    let data = {
        userid: document.getElementById("user").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        deadline: document.getElementById("deadline").value,
        priority: document.getElementById("priority").value,
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
//------------------------------------------------------------------------------------------
  // function userDataDisplay(){
  //   let col = document.createElement("div");
  //   col.className = "col-6 my-5";
  //   userDetailsRow.appendChild(col);
  //   //-----------------------CARD-------------------------------------------------------------
  //   let card = document.createElement("div");
  //   card.className = "card";
  //   col.appendChild(card);
  //   //-----------------------CARD BODY-------------------------------------------------------------
  //   let cardBody = document.createElement("div");
  //   cardBody.className = "card-body";
  //   card.appendChild(cardBody);
  //   //--------------------------H4-------------------------------------------------------------
  //   let h4user = document.createElement("h4");
  //   h4user.className = "card-title";
  //   h4user.innerHTML = user.userid;
  //   cardBody.appendChild(h4user);
  //   //------------------------------------------------------------------------------------
  //   let ulList = document.createElement("ul");
  //   ulList.className = "ul";
  //   h4user.appendChild(ulList);
  //   //------------------------------------------------------------------------------------
  //   let listCategory = document.createElement("li");
  //   listCategory.className = "category";
  //   listCategory.innerHTML = "Category: " + user.category;
  //   ulList.appendChild(listCategory);
  //   //------------------------------------------------------------------------------------
  //   let listDescription = document.createElement("li");
  //   listDescription.className = "description";
  //   listDescription.innerHTML = "Description: " + user.description;
  //   listCategory.appendChild(listDescription);
  //   //------------------------------------------------------------------------------------
  //   let listDeadline = document.createElement("li");
  //   listDeadline.className = "deadline";
  //   listDeadline.innerHTML = "Deadline: " + user.deadline;
  //   listDescription.appendChild(listDeadline);
  //   //------------------------------------------------------------------------------------
  //   let listPriority = document.createElement("li");
  //   listPriority.className = "Priority";
  //   listPriority.innerHTML = "Priority: " + user.priority;
  //   listDeadline.appendChild(listPriority);
  // }

//------------------------------------------------------------------------------------------
function makeTaskCard(){
  let col = document.createElement("div");
    col.className = "col-6 my-5";
    userDetailsRow.appendChild(col);
    //-----------------------CARD-------------------------------------------------------------
    let card = document.createElement("div");
    card.className = "card";
    col.appendChild(card);
    //-----------------------CARD BODY-------------------------------------------------------------
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);
    //--------------------------H4-------------------------------------------------------------
    let h4user = document.createElement("h4");
    h4user.className = "card-title";
    h4user.innerHTML = user.userid;
    cardBody.appendChild(h4user);
    //------------------------------------------------------------------------------------
    let ulList = document.createElement("ul");
    ulList.className = "ul";
    h4user.appendChild(ulList);
    //------------------------------------------------------------------------------------
    let listCategory = document.createElement("li");
    listCategory.className = "category";
    listCategory.innerHTML = "Category: " + user.category;
    ulList.appendChild(listCategory);
    //------------------------------------------------------------------------------------
    let listDescription = document.createElement("li");
    listDescription.className = "description";
    listDescription.innerHTML = "Description: " + user.description;
    listCategory.appendChild(listDescription);
    //------------------------------------------------------------------------------------
    let listDeadline = document.createElement("li");
    listDeadline.className = "deadline";
    listDeadline.innerHTML = "Deadline: " + user.deadline;
    listDescription.appendChild(listDeadline);
    //------------------------------------------------------------------------------------
    let listPriority = document.createElement("li");
    listPriority.className = "Priority";
    listPriority.innerHTML = "Priority: " + user.priority;
    listDeadline.appendChild(listPriority);
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