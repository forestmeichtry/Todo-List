import { projectList } from "./projectMethods";
import { compareAsc, parseISO } from "date-fns";

function addTask(taskName, description, dueDate, importance) {
    const newTask = taskFactory(taskName, description, dueDate, importance);
    projectList.addTask(newTask);
    sortTasks();
    projectList.addToStorage();
};

function sortTasks() {
    const project = projectList.activeProject;
    const sortType = projectList.sortBy;
    const taskContainer = document.querySelector('.taskContainer');

    while (taskContainer.firstChild) {
        taskContainer.removeChild(taskContainer.lastChild);
    };

    if (sortType === 'Date') {
        project.tasks.sort((a, b) => {
            if (a.dueDate === 'No Due Date') {
                return 1;
            } else if (b.dueDate === 'No Due Date') {
                return -1;
            } else {
                 return compareAsc(parseISO(a.dueDate), parseISO(b.dueDate));
            }
        });
    } else {
        project.tasks.sort((a, b) => {
            if (a.importance === b.importance) {
                return 0;
            } else if (a.importance === 'High' || b.importance === 'Low') {
                return -1;
            } else if (b.importance === 'High' || a.importance === 'Low') {
                return 1;
            };
        });
    };

    for (let task of project.tasks) {
        addTaskToDOM(task);
    }
}

function addTaskToDOM(task) {
    const taskContainer = document.querySelector('.taskContainer');

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

    const chevron = document.createElement('div');
    chevron.classList.add('chevron');
    chevron.addEventListener('click', () => {
        taskWrapper.classList.toggle('expanded');
    });
    taskWrapper.appendChild(chevron);

    const completeButton = document.createElement('button');
    completeButton.classList.add('completeButton');
    completeButton.textContent = "Complete";
    taskWrapper.appendChild(completeButton);

    const editButton = document.createElement('button');
    editButton.classList.add('editButton');
    editButton.textContent = "Edit";
    taskWrapper.appendChild(editButton);

    taskContainer.appendChild(taskWrapper);
};

const taskFactory = (taskName, description, dueDate, importance) => {
    // const thisIsAnExample = () => console.log('this is a function');
    // then include the function in returned properties
    return {taskName, description, dueDate, importance};
};

export { addTask, sortTasks };