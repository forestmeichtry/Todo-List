function addTask(taskName, description, dueDate, importance, project) {
    const newTask = taskFactory(taskName, description, dueDate, importance);
    // create projectMethods, and export add to project function. 
    // function should return error if project does not exist

    // Task needs to be added to DOM as well
    addTaskToDOM(newTask);
};

function addTaskToDOM(task) {
    const taskContainer = document.querySelector('.taskContainer');
    // create visual representation of task and add to DOM

    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('taskWrapper');

    const taskName = document.createElement('span');
    taskName.textContent = task.taskName;
    taskName.classList.add('taskName');
    taskWrapper.appendChild(taskName);

    const dueDate = document.createElement('span');
    dueDate.textContent = task.dueDate;
    dueDate.classList.add('dueDate');
    taskWrapper.appendChild(dueDate);

    const taskImportance = document.createElement('span');
    taskImportance.textContent = task.importance;
    taskImportance.classList.add('taskImportance');
    taskWrapper.appendChild(taskImportance);

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;
    taskDescription.classList.add('taskDescription');
    taskWrapper.appendChild(taskDescription);

    taskContainer.appendChild(taskWrapper);
};

const taskFactory = (taskName, description, dueDate, importance) => {
    // const thisIsAnExample = () => console.log('this is a function');
    // then include the function in returned properties
    return {taskName, description, dueDate, importance};
};

export { addTask };