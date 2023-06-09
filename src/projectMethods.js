import { sortTasks } from "./taskMethods";
import { warningPopup } from ".";

function addProject(projectName) {
    const domElement = addProjectToDom(projectName);
    projectList.addProject({name: projectName, element: domElement, tasks: []});
    return domElement;
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
        if (projectTitle.value === '') {
            projectTitle.value = 'Unnamed Project'
        };
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
    deleteButton.addEventListener('click', () => {
        if (!projectList.isProjectEmpty(newProject.dataset.index)) {
            warningPopup.classList.add('active');
            warningPopup.dataset.projectIndex = newProject.dataset.index;
        } else {
            projectList.deleteProject(newProject.dataset.index);
        }
    });

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
        this.addToStorage();
    },
    selectProject: function(index) {
        for (let i = 0; i < this.projects.length; i++) {
            if (i === parseInt(index)) {
                this.projects[i].element.classList.add('selected');
                this.activeProject = this.projects[i];
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
    removeTask: function(index) {
        this.activeProject.tasks.splice(index, 1);
        sortTasks();
        this.addToStorage();
    },
    addToStorage: function() {
        window.localStorage.projects = JSON.stringify(this.projects);
    },
    isProjectEmpty: function(index) {
        if (this.projects[index].tasks.length > 0) {
            return false;
        } else {
            return true;
        }
    },
    deleteProject: function(index) {
        const taskElements = document.querySelectorAll('.taskWrapper');
        for (let element of taskElements) {
            element.remove();
        }
        this.projects[index].element.remove();
        this.projects.splice(index, 1);
        this.addToStorage();
    }
};

export { addProject, projectList };