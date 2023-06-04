import { sortTasks } from "./taskMethods";

function addProject(projectName) {
    const domElement = addProjectToDom(projectName);
    projectList.addProject({name: projectName, element: domElement, tasks: []})
};

function addProjectToDom(projectName) {
    const sideNavBar = document.querySelector('.sideNavBar');
    const addProjectButton = document.querySelector('.addNewProjectButton');

    const newProject = document.createElement('div');
    newProject.dataset.index = projectList.projects.length;
    newProject.classList.add('project');

    const projectTitle = document.createElement('input');
    projectTitle.classList.add('projectTitle');
    projectTitle.value = projectName;
    projectTitle.disabled = 'disabled';
    projectTitle.addEventListener('focusout', () => {
        projectTitle.disabled = 'disabled';
    });
    projectTitle.addEventListener('input', function() {
        projectList.editProject(newProject.dataset.index, this.value);
    });
    newProject.appendChild(projectTitle);

    const editButton = document.createElement('button');
    editButton.addEventListener('click', () => {
        projectTitle.disabled = '';
        projectTitle.focus();
    });
    editButton.classList.add('editProjectButton');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteProjectButton');
    newProject.appendChild(editButton);
    newProject.appendChild(deleteButton);

    newProject.addEventListener('click', () => {
        projectList.selectProject(newProject.dataset.index);
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
    selectProject: function(index) {
        for (let i = 0; i < this.projects.length; i++) {
            if (i === index) {
                this.projects[i].element.classList.add('selected');
                this.activeProject = projects[i];
            } else {
                this.projects[i].element.classList.remove('selected');
            };
        };

        sortTasks();
    },
    editProject: function(index, newName) {
        this.projects[index].name = newName;
        this.addToStorage();
    },
    addTask: function(task) {
        this.activeProject.tasks.push(task);
    },
    addToStorage: function() {
        window.localStorage.projects = JSON.stringify(this.projects);
    },
};

export { addProject, projectList };