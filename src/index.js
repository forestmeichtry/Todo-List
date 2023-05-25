import './style.css';
import { addTask } from './taskMethods';
import { addProject } from './projectMethods';

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
sideNavBar.appendChild(addNewProjectButton);

addProject('Work');
addProject('Home');

const taskContainer = document.createElement('div');
taskContainer.classList.add('taskContainer');
document.body.appendChild(taskContainer);

pageHeader.textContent = "Taskmaster";

const sortButton = document.createElement('button');
sortButton.classList.add('sortButton');
sortButton.textContent = "Sort By: Priority";
pageHeader.appendChild(sortButton);

sortButton.addEventListener('click', () => {
    if (sortButton.textContent === 'Sort By: Priority') {
        sortButton.textContent = "Sort By: Due Date";
    } else {
        sortButton.textContent = "Sort By: Priority";
    }
});

const addTaskButton = document.createElement('button');
addTaskButton.classList.add('addTaskButton');
addTaskButton.textContent = "Add Task";
pageHeader.appendChild(addTaskButton);

addTaskButton.addEventListener('click', () => {
    addTask('Complete Todo List', 'Finish TOP coding project', '10/10/2023', 'High', 'Coding Projects');
});

if (window.screen.width <= 1024) {
    const expandSideNavButton = document.createElement('button');
    expandSideNavButton.classList.add('expandSideNavButton');
    pageHeader.appendChild(expandSideNavButton);

    expandSideNavButton.addEventListener('click', () => {
        document.body.classList.toggle('mobileMenu');
    });
}