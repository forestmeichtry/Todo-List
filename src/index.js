import './style.css';

const pageHeader = document.createElement('div');
pageHeader.classList.add('pageHeader');
document.body.appendChild(pageHeader);

const sideNavBar = document.createElement('div');
sideNavBar.classList.add('sideNavBar');
document.body.appendChild(sideNavBar);

const taskContainer = document.createElement('div');
taskContainer.classList.add('taskContainer');
document.body.appendChild(taskContainer);

pageHeader.textContent = "Taskmaster";

const sortButton = document.createElement('button');
sortButton.classList.add('sortButton');
sortButton.textContent = "Sort By: Importance";
pageHeader.appendChild(sortButton);

const addTaskButton = document.createElement('button');
addTaskButton.classList.add('addTaskButton');
addTaskButton.textContent = "Add Task";
pageHeader.appendChild(addTaskButton);

if (window.screen.width <= 1024) {
    const expandSideNavButton = document.createElement('button');
    expandSideNavButton.classList.add('expandSideNavButton');
    pageHeader.appendChild(expandSideNavButton);

    expandSideNavButton.addEventListener('click', () => {
        document.body.classList.toggle('mobileMenu');
    });
}