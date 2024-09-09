const taskList = document.getElementById('taskList');
let tasks = []; // Array for regular tasks
let aiB4Tasks = []; // Array for ai_b4 tasks
let uiUxTasks = []; // Array for UI/UX tasks
let mode = 'regular'; // Current mode: 'regular', 'ai_b4', 'ui_ux'

// Function to add tasks based on input
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim(); // Normalize input to lowercase and trim whitespace

    if (task) {
        if (task.toLowerCase().includes('ai_b4')) {
            aiB4Tasks.push(task);  // Add to ai_b4 tasks
            mode = 'ai_b4';        // Switch to ai_b4 mode
            displayAiB4Tasks();    // Display only ai_b4 tasks
        } else if (task.toLowerCase().includes('ui/ux')) {
            uiUxTasks.push(task);  // Add to UI/UX tasks
            mode = 'ui_ux';        // Switch to UI/UX mode
            displayUiUxTasks();    // Display only UI/UX tasks
        } else {
            tasks.push(task);  // Add to regular tasks
            mode = 'regular';  // Switch to regular task mode
            displayTasks(tasks);  // Display only regular tasks
        }

        taskInput.value = ''; // Clear input field after adding the task
    }
}

// Function to display regular tasks
function displayTasks(tasksArray) {
    taskList.innerHTML = '';  // Clear the current task list
    mode = 'regular';  // Switch to regular task mode

    tasksArray.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

// Function to display ai_b4 tasks
function displayAiB4Tasks() {
    taskList.innerHTML = '';  // Clear the current task list
    mode = 'ai_b4';  // Switch to ai_b4 mode

    aiB4Tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

// Function to display UI/UX tasks
function displayUiUxTasks() {
    taskList.innerHTML = '';  // Clear the current task list
    mode = 'ui_ux';  // Switch to UI/UX mode

    uiUxTasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

// Function to search tasks and handle switching between modes
function searchTask() {
    const searchBar = document.getElementById('searchBar');
    const searchQuery = searchBar.value.toLowerCase().trim(); // Normalize the search query

    if (searchQuery === 'ai_b4') {
        // Show ai_b4 tasks only when 'ai_b4' is searched
        displayAiB4Tasks();
    } else if (searchQuery === 'ui/ux') {
        // Show UI/UX tasks only when 'ui/ux' is searched
        displayUiUxTasks();
    } else if (mode === 'regular') {
        // Filter and display regular tasks when in regular mode
        const filteredTasks = tasks.filter(task => task.includes(searchQuery));
        displayTasks(filteredTasks);
    } else if (mode === 'ai_b4') {
        // Filter and display ai_b4 tasks when in ai_b4 mode
        const filteredAiB4Tasks = aiB4Tasks.filter(task => task.includes(searchQuery));
        displayAiB4Tasks(filteredAiB4Tasks);
    } else if (mode === 'ui_ux') {
        // Filter and display UI/UX tasks when in UI/UX mode
        const filteredUiUxTasks = uiUxTasks.filter(task => task.includes(searchQuery));
        displayUiUxTasks(filteredUiUxTasks);
    }
}
