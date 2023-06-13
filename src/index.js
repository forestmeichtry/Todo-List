import './style.css';
import { addTask, sortTasks, animateTaskBackground } from './taskMethods';
import { addProject, projectList } from './projectMethods';

const pageHeader = document.createElement('div');
pageHeader.classList.add('pageHeader');
document.body.appendChild(pageHeader);

const sideNavBar = document.createElement('div');
sideNavBar.classList.add('sideNavBar');
document.body.appendChild(sideNavBar);

const projectHeader = document.createElement('span');
projectHeader.classList.add('projectHeader');
projectHeader.textContent = "Projects";
sideNavBar.appendChild(projectHeader);

const addNewProjectButton = document.createElement('button');
addNewProjectButton.classList.add('addNewProjectButton');
addNewProjectButton.textContent = 'Add Project';
addNewProjectButton.addEventListener('click', () => {
    const newProjectInput = addProject('').querySelector('.projectTitle');
    newProjectInput.disabled = '';
    newProjectInput.focus();
});
sideNavBar.appendChild(addNewProjectButton);

const addTaskPopup = document.createElement('div');
createTaskForm();

const warningPopup = document.createElement('div');
warningPopup.classList.add('warningPopup');
const warningText = document.createElement('span');
warningText.classList.add('warningText');
warningText.textContent = "This project contains unfinished tasks, do you still want to delete it?";
warningPopup.appendChild(warningText);
const warningCancel = document.createElement('button');
warningCancel.textContent = "Cancel";
warningCancel.classList.add('warningCancel');
warningCancel.addEventListener('click', () => {
    warningPopup.classList.remove('active');
});
const warningDelete = document.createElement('button');
warningDelete.classList.add('warningDelete');
warningDelete.textContent = "Delete";
warningDelete.addEventListener('click', () => {
    projectList.deleteProject(warningPopup.dataset.projectIndex);
    warningPopup.classList.remove('active');
});
warningPopup.appendChild(warningCancel);
warningPopup.appendChild(warningDelete);
document.body.appendChild(warningPopup);


const taskContainer = document.createElement('div');
taskContainer.classList.add('taskContainer');
document.body.appendChild(taskContainer);

const logo = document.createElement('span');
logo.classList.add('logo');
pageHeader.appendChild(logo);

const sortButton = document.createElement('button');
sortButton.classList.add('sortButton');
sortButton.textContent = "Sort By: Priority";
pageHeader.appendChild(sortButton);

sortButton.addEventListener('click', () => {
    if (sortButton.textContent === 'Sort By: Priority') {
        sortButton.textContent = "Sort By: Due Date";
        projectList.sortBy = 'Date';
    } else {
        sortButton.textContent = "Sort By: Priority";
        projectList.sortBy = 'Priority';
    }

    sortTasks();
});

const addTaskButton = document.createElement('button');
addTaskButton.classList.add('addTaskButton');
addTaskButton.textContent = "Add Task";
pageHeader.appendChild(addTaskButton);

addTaskButton.addEventListener('click', () => {
    if (!addTaskPopup.classList.contains('active')) {
        addTaskPopup.classList.add('active');
        addTaskPopup.dataset.mode = 'add';
        addTaskPopup.querySelector('.fieldsetLegend').textContent = 'New Task';
    }
});

if (window.screen.width <= 1024) {
    const expandSideNavButton = document.createElement('button');
    expandSideNavButton.classList.add('expandSideNavButton');
    pageHeader.appendChild(expandSideNavButton);

    expandSideNavButton.addEventListener('click', () => {
        document.body.classList.toggle('mobileMenu');
    });

    taskContainer.addEventListener('click', () => {
        if (document.body.classList.contains('mobileMenu')) {
            document.body.classList.toggle('mobileMenu');
        };
    });
}

if (storageAvailable('localStorage') && window.localStorage.getItem("projects")) {
    let projects = JSON.parse(window.localStorage.getItem("projects"));
    for (let project of projects) {
        const projectDomElement = addProject(project.name);
        projectList.selectProject(projectDomElement.dataset.index);
        for (let task of project.tasks) {
            addTask(task.taskName, task.description, task.dueDate, task.importance);
        };
    };
} else {
    addProject('Work');
    addProject('Home');
};

animateTaskBackground();

function createTaskForm() {
    addTaskPopup.classList.add('addTaskPopup');
    document.body.appendChild(addTaskPopup);

    const taskFieldset = document.createElement('fieldset');
    addTaskPopup.appendChild(taskFieldset);
    const legend = document.createElement('legend');
    legend.classList.add('fieldsetLegend');
    taskFieldset.appendChild(legend);

    const formList = document.createElement('form');
    formList.classList.add('formList');
    taskFieldset.appendChild(formList);
    const labelOne = document.createElement('label');
    formList.appendChild(labelOne);
    const nameInput = document.createElement('input');
    nameInput.required = 'true';
    nameInput.autocomplete = 'off';
    formList.appendChild(nameInput);
    labelOne.htmlFor = 'Task Name';
    labelOne.textContent = 'Task Name:';
    nameInput.type = 'text';
    nameInput.id = 'Task Name';
    nameInput.name = 'task_name';
    const labelTwo = document.createElement('label');
    formList.appendChild(labelTwo);
    const dateInput = document.createElement('input');
    formList.appendChild(dateInput);
    labelTwo.htmlFor = 'Task Due Date';
    labelTwo.textContent = 'Due Date:';
    dateInput.type = 'date';
    dateInput.id = 'Task Due Date';
    dateInput.name = 'due_date';
    const labelThree = document.createElement('label');
    formList.appendChild(labelThree);
    const radioWrap = document.createElement('div');
    radioWrap.classList.add('radioWrap');
    formList.appendChild(radioWrap);
    const radioLow = document.createElement('input');
    radioWrap.appendChild(radioLow);
    const labelLow = document.createElement('label');
    radioWrap.appendChild(labelLow);
    radioLow.type = 'radio';
    radioLow.id = 'importanceLow';
    radioLow.name = 'importance';
    radioLow.value = 'Low';
    labelLow.htmlFor = 'importanceLow';
    labelLow.textContent = 'Low';
    labelThree.textContent = 'Importance:';
    const radioMed = document.createElement('input');
    radioWrap.appendChild(radioMed);
    const labelMed = document.createElement('label');
    radioWrap.appendChild(labelMed);
    radioMed.type = 'radio';
    radioMed.id = 'importanceMed';
    radioMed.name = 'importance';
    radioMed.value = 'Medium';
    radioMed.checked = true;
    labelMed.htmlFor = 'importanceMedium';
    labelMed.textContent = 'Medium';
    const radioHigh = document.createElement('input');
    radioWrap.appendChild(radioHigh);
    const labelHigh = document.createElement('label');
    radioWrap.appendChild(labelHigh);
    radioHigh.type = 'radio';
    radioHigh.id = 'importanceHigh';
    radioHigh.name = 'importance';
    radioHigh.value = 'High';
    labelHigh.htmlFor = 'importanceHigh';
    labelHigh.textContent = 'High';
    const labelFour = document.createElement('label');
    formList.appendChild(labelFour);
    const descriptionInput = document.createElement('textarea');
    descriptionInput.rows = '8';
    formList.appendChild(descriptionInput);
    labelFour.htmlFor = 'Task Description';
    labelFour.textContent = 'Task Description:';
    descriptionInput.id = 'Task Description';
    descriptionInput.name = 'description';
    const formButtonWrap = document.createElement('div');
    formButtonWrap.classList.add('formButtonWrap');
    formList.appendChild(formButtonWrap);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.type = 'button';
    formButtonWrap.appendChild(cancelButton);
    cancelButton.addEventListener('click', () => {
        addTaskPopup.classList.remove('active');
        formList.reset();
        radioMed.checked = true;
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.type = 'submit';
    formButtonWrap.appendChild(submitButton);

    formList.addEventListener('submit', function(event) {
        event.preventDefault();
        addTaskPopup.classList.remove('active');
        
        if (addTaskPopup.dataset.mode === 'edit') {
            projectList.removeTask(addTaskPopup.dataset.editIndex);
        };

        formSubmit(nameInput.value, descriptionInput.value, dateInput.value);

        formList.reset();
        radioMed.checked = true;
    });
};

function formSubmit(nameInput, descriptionInput, dateInput) {
    let dateValue = null;
    if (dateInput === '') {
        dateValue = 'No Due Date';
    } else {
        dateValue = dateInput;
    };

    let checkedRadio = null;
    let radioElements = document.getElementsByName('importance');
    for (let i = 0; i < 3; i++) {
        if (radioElements[i].checked) {
            checkedRadio = radioElements[i].value;
        };
    };

    let descriptionValue = null;
    if (descriptionInput === '') {
        descriptionValue = 'None';
    } else {
        descriptionValue = descriptionInput;
    };

    addTask(nameInput, descriptionValue, dateValue, checkedRadio);
}


function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    };
};

export { warningPopup };