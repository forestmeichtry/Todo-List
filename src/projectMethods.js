import { sortTasks } from "./taskMethods";

function addProject(projectName) {
    const domElement = addProjectToDom(projectName);
    projectList.addProject({name: projectName, element: domElement, tasks: []})
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

    newProject.addEventListener('click', () => {
        projectList.selectProject(projectName);
    });

    sideNavBar.insertBefore(newProject, addProjectButton);

    return newProject;
}

const projectList = {
    sortBy: 'Priority',
    activeProject: null,
    projects: [],
    addProject: function(project) {
        this.projects.push(project);
        if (this.projects.length < 2) {
            project.element.classList.add('selected');
            this.activeProject = project;
        };
    },
    selectProject: function(projectName) {
        if (projectName === this.activeProject.name) {
            return;
        };

        for (let project of this.projects) {
            if (project.name === projectName) {
                project.element.classList.add('selected');
                this.activeProject = project;
            } else {
                project.element.classList.remove('selected');
            };
        };

        sortTasks();
    },
    addTask: function(task) {
        this.activeProject.tasks.push(task);
    },
    addToStorage: function() {
        window.localStorage.projects = JSON.stringify(this.projects);
    },
};

export { addProject, projectList };