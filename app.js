//day3 -- Todo list
var todoArray = ['Go Shopping', 'Study JS', 'Clean House'];




//Create
function addTask(){
  var newTaskToAdd = document.getElementById("taskBox").value;
  todoArray.push(newTaskToAdd);
  display();
  clearBox();
}

//Read
function display() {
  //h will act as a temporary string holder
  var h = '';
  //Loop throuth array to create table row and table column dynamically
     for (var i = 0; i < todoArray.length; i++) {
       h += `<tr>`;
       h += `<td>${todoArray[i]}</td>`;
       h += `<td><button onclick="deleteTask(${i})">Done</button><button onclick="updateTask(${i})">Edit</button></td>`;
       h += `</tr>`;
      //  h += `<th><td><button></button></td></tr>`
     }
     document.getElementById('taskList').innerHTML = h;
}
//Update
function updateTask(i){
  var taskToUpdate = document.getElementById('taskBox').value;
  todoArray[i] = taskToUpdate;
  display();
  clearBox();
}

//Delete
function deleteTask(i){
  todoArray.splice(i, 1);
  display();
}

//other functions
function clearBox(){
  document.getElementById('taskBox').value = '';
}

//Execute
display();

//homework = contact list with full 크러드??
