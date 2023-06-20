import { projectList } from "./projectMethods";
import { compareAsc, parseISO, set } from "date-fns";

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

    if (window.screen.width <= 1024) {
        while (taskContainer.firstChild) {
            taskContainer.removeChild(taskContainer.lastChild);
        };
    } else {
        const trackOne = document.querySelector('.trackOne');
        while (trackOne.firstChild) {
            trackOne.removeChild(trackOne.lastChild);
        };

        const trackTwo = document.querySelector('.trackTwo');
        while (trackTwo.firstChild) {
            trackTwo.removeChild(trackTwo.lastChild);
        };
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

    for (let i = 0; i < project.tasks.length; i++) {
        addTaskToDOM(project.tasks[i], i);
    }
}

function addTaskToDOM(task, index) {
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
    completeButton.addEventListener('click', () => {
        projectList.removeTask(index);
    });
    taskWrapper.appendChild(completeButton);

    const editButton = document.createElement('button');
    editButton.classList.add('editButton');
    editButton.textContent = "Edit";
    editButton.addEventListener('click', () => {
        activateEditTaskForm(
            index,
            task.taskName,
            task.dueDate,
            task.importance,
            task.description);
    });
    taskWrapper.appendChild(editButton);

    if (window.screen.width <= 1024) {
        taskContainer.appendChild(taskWrapper);
    } else {
        console.log('test');
        const trackOne = document.querySelector('.trackOne');
        const trackTwo = document.querySelector('.trackTwo');

        if (trackOne.childElementCount > trackTwo.childElementCount) {
            trackTwo.appendChild(taskWrapper);
        } else {
            trackOne.appendChild(taskWrapper);
        };
    };
};

function activateEditTaskForm(taskIndex, taskName, dueDate, taskImportance, taskDescription) {
    const popup = document.querySelector('.addTaskPopup');
    popup.classList.add('active');
    popup.dataset.mode = 'edit';
    popup.dataset.editIndex = taskIndex;

    popup.querySelector('.fieldsetLegend').textContent = 'Edit Task';

    popup.querySelector('[id="Task Name"]').value = taskName;

    if (dueDate != 'No Due Date') {
        popup.querySelector('[id="Task Due Date"]').value = dueDate;
    };

    let radioElements = document.getElementsByName('importance');
    for (let i = 0; i < 3; i++) {
        if (radioElements[i].value === taskImportance) {
            radioElements[i].checked = 'true';
        };
    };

    if (taskDescription != 'None') {
        popup.querySelector('[id="Task Description"]').value = taskDescription;
    };
};

const taskFactory = (taskName, description, dueDate, importance) => {
    // const thisIsAnExample = () => console.log('this is a function');
    // then include the function in returned properties
    return {taskName, description, dueDate, importance};
};

function animateTaskBackground() {
    const root = document.querySelector(':root');
    const gradientStop = getComputedStyle(root).getPropertyValue('--gradientStop');
    const gradientColorOne = getComputedStyle(root).getPropertyValue('--gradientColorOne');
    const gradientColorTwo = getComputedStyle(root).getPropertyValue('--gradientColorTwo');
    const parsedStop =  parseInt(gradientStop.replace(/\D/g, ''));
    
    if (parsedStop < 101) {
        root.style.setProperty('--gradientStop', (parsedStop + 1) + '%');
    } else {
        root.style.setProperty('--gradientStop', '0%');
        root.style.setProperty('--gradientColorOne', gradientColorTwo);
        root.style.setProperty('--gradientColorTwo', gradientColorOne);
    };

    setTimeout(animateTaskBackground, 10);
};

export { addTask, sortTasks, animateTaskBackground };