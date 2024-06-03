// Task constructor function
function Task(id, title, description, completed = false) {
    this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

     // To-Do List array
    let todoList = [];
     
    // Function to add a new task
    function addTask() {
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
     
        if (!title || !description) {
            alert("Title and Description are required!");
            return;
        }
      const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1;
      const newTask = new Task(id, title, description);
        todoList.push(newTask);
        displayTasks();
    }
     
    // Function to remove a task by ID
    function removeTask(id) {
    const index = todoList.findIndex(task => task.id === id);
        if (index !== -1) {
            todoList.splice(index, 1);
            displayTasks();
         } 
    }
     
    // Function to update a task by ID
    function updateTask(id) {
        const newTitle = prompt("Enter new title:");
        const newDescription = prompt("Enter new description:");
    const task = todoList.find(task => task.id === id); 
        if (task) { 
            task.title = newTitle || task.title;
            task.description = newDescription || task.description;
            displayTasks();
        } 
         }
     
    // Function to mark a task as completed by ID
    function markTaskCompleted(id) {
    const task = todoList.find(task => task.id === id);
        if (task) {
            task.completed=!task.completed;
            displayTasks();
         } 
        }
        
         // Function to count completed tasks
    function countCompletedTasks() {
        const completedCount = todoList.filter(task => task.completed).length;
        const completedCountDiv = document.getElementById('completedCount');
        completedCountDiv.textContent = `Number of completed tasks: ${completedCount}`;
    }
     
    // Function to display all tasks
    function displayTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        todoList.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.className = `task ${task.completed ? 'completed' : ''}`;
            taskDiv.innerHTML = `
            <strong>${task.id}</strong><br>
                <strong>${task.title}</strong><br>
                ${task.description}<br>
                <button onclick="markTaskCompleted(${task.id})">Mark ${task.completed ? 'Incomplete' : 'Completed'}</button>
                <button onclick="updateTask(${task.id})">Update</button>
                <button onclick="removeTask(${task.id})">Remove</button>
            `;
            taskList.appendChild(taskDiv);
        });
     
        countCompletedTasks();
    }
     
   
    
     
   
    


