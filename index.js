// App container
const app = document.getElementById('app');

// Current date
const date = new Date();
const day = date.getDate();
let month = date.getMonth() + 1; // January is 0
const year = date.getFullYear();

// Change the date from number to string
switch(month){ 
    case 1: month = 'January'; break;
    case 2: month = 'February'; break;
    case 3: month = 'March'; break;
    case 4: month = 'April'; break;
    case 5: month = 'May'; break;
    case 6: month = 'June'; break;
    case 7: month = 'July'; break;
    case 8: month = 'August'; break;
    case 9: month = 'September'; break;
    case 10: month = 'October'; break;
    case 11: month = 'November'; break;
    case 12: month = 'December'; break;
}

// Show the date
const showDate = document.createElement('h3'); // Create h3 element
showDate.classList.add('date'); // Add class to h3 element
showDate.innerHTML = `${month} ${day}, ${year}`; // Fill h3 element with date
app.appendChild(showDate); // Append h3 element to app

// Create button to add new task
const addTask = document.createElement('button');
addTask.classList.add('add-task');
addTask.innerHTML = '+';
app.appendChild(addTask);

// Create alert to display the adding task form
const showAlert = document.createElement('div');
showAlert.classList.add('alert');
showAlert.classList.add('hide')
app.appendChild(showAlert);

// Create the x button to close the alert
const closeAlert = document.createElement('button');
closeAlert.classList.add('close-alert');
closeAlert.innerHTML = 'x';
showAlert.appendChild(closeAlert);

closeAlert.addEventListener('click', () => {
    showAlert.classList.add('hide');
    showAlertInput.value = '';
});

// Create the title of the alert
const showAlertText = document.createElement('p');
showAlertText.classList.add('alert-text');
showAlertText.innerHTML = 'Add a task';
showAlert.appendChild(showAlertText);

// Create the input field for the task
const showAlertInput = document.createElement('input');
showAlertInput.classList.add('alert-input');
showAlertInput.setAttribute('placeholder', 'Buy milk');
showAlert.appendChild(showAlertInput);

// Create the button to add the task
const showAlertButton = document.createElement('button');
showAlertButton.classList.add('alert-button');
showAlertButton.innerHTML = 'Add';
showAlert.appendChild(showAlertButton);

showAlertButton.addEventListener('click', () => { // Add event listener to the button
    if(showAlertInput.value !== ''){ // If the input is not empty
        addTaskFunction(showAlertInput.value); // Add the task to the list
        showAlertInput.value = ''; // Clear the input
        showAlert.classList.add('hide'); // Hide the alert
    }else{
        alert('Please enter a task');
    }
});

function addTaskFunction(value){ // Function to add the task
    const todoListItem = document.createElement('li'); // Create li element
    todoListItem.classList.add('todo-list-item'); // Add class to li element

    const todoListItemText = document.createElement('p'); // Create p element
    todoListItemText.classList.add('todo-list-item-text'); // Add class to p element
    todoListItemText.innerHTML = value; // Fill p element with value
    todoListItem.appendChild(todoListItemText); // Append p element to li element

    const todoListItemDelete = document.createElement('button'); // Create button element
    todoListItemDelete.classList.add('todo-list-item-delete'); // Add class to button element
    todoListItemDelete.innerHTML = 'X'; // Fill button element with X
    todoListItem.appendChild(todoListItemDelete); // Append button element to li element

    todoList.appendChild(todoListItem); // Append li element to todo list

    todoListItemDelete.addEventListener('click', deleteTaskFunction);
}

function deleteTaskFunction(){ // Function to delete the task
    const todoListItem = this.parentElement; // Get the li element
    todoListItem.remove(); // Remove the li element
}

// Add task
addTask.addEventListener('click', () => {
    showAlert.classList.remove('hide');
});

// Responsive add task
const addTaskDesktopContainer = document.createElement('div');
addTaskDesktopContainer.classList.add('add-task-desktop-container');

const addTaskDesktop = document.createElement('input');
addTaskDesktop.classList.add('add-task-desktop');
addTaskDesktop.setAttribute('placeholder', 'Buy milk');
addTaskDesktopContainer.appendChild(addTaskDesktop);

const addTaskDesktopButton = document.createElement('button');
addTaskDesktopButton.classList.add('add-task-desktop-button');
addTaskDesktopButton.innerHTML = 'Add';
addTaskDesktopContainer.appendChild(addTaskDesktopButton);
app.appendChild(addTaskDesktopContainer);

addTaskDesktopButton.addEventListener('click', () => {
    if(addTaskDesktop.value !== ''){
        addTaskFunction(addTaskDesktop.value);
        addTaskDesktop.value = '';
    }else{
        alert('Please enter a task');
    }
});

function addTaskDesktopFunction(value){
    const todoListItem = document.createElement('li'); // Create li element
    todoListItem.classList.add('todo-list-item'); // Add class to li element

    const todoListItemText = document.createElement('p'); // Create p element
    todoListItemText.classList.add('todo-list-item-text'); // Add class to p element
    todoListItemText.innerHTML = value; // Fill p element with value
    todoListItem.appendChild(todoListItemText); // Append p element to li element

    const todoListItemDelete = document.createElement('button'); // Create button element
    todoListItemDelete.classList.add('todo-list-item-delete'); // Add class to button element
    todoListItemDelete.innerHTML = 'X'; // Fill button element with X
    todoListItem.appendChild(todoListItemDelete); // Append button element to li element

    todoList.appendChild(todoListItem); // Append li element to todo list

    todoListItemDelete.addEventListener('click', deleteTaskFunction);
}


// Todo list
const todoList = document.createElement('ul');
todoList.classList.add('todo-list');
app.appendChild(todoList);