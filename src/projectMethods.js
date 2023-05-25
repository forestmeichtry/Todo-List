function addProject(projectName) {
    addProjectToDom(projectName);
};

function addProjectToDom(projectName) {
    const sideNavBar = document.querySelector('.sideNavBar');
    const addProjectButton = document.querySelector('.addNewProjectButton');

    const newProject = document.createElement('div');
    newProject.classList.add('project');
    newProject.textContent = projectName;

    const editButton = document.createElement('button');
    editButton.classList.add('editProjectButton');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteProjectButton');
    newProject.appendChild(editButton);
    newProject.appendChild(deleteButton);

    sideNavBar.insertBefore(newProject, addProjectButton);
}

export { addProject };