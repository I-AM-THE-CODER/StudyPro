// This file handles the addition and management of study resources.

const resourceManager = (() => {
    const resources = JSON.parse(localStorage.getItem('studyResources')) || [];

    const saveResources = () => {
        localStorage.setItem('studyResources', JSON.stringify(resources));
    };

    const addResource = (resource) => {
        resources.push(resource);
        saveResources();
    };

    const editResource = (id, updatedResource) => {
        const index = resources.findIndex(resource => resource.id === id);
        if (index !== -1) {
            resources[index] = { ...resources[index], ...updatedResource };
            saveResources();
        }
    };

    const deleteResource = (id) => {
        const index = resources.findIndex(resource => resource.id === id);
        if (index !== -1) {
            resources.splice(index, 1);
            saveResources();
        }
    };

    const getResourcesBySubject = (subjectId) => {
        return resources.filter(resource => resource.subject_id === subjectId);
    };

    return {
        addResource,
        editResource,
        deleteResource,
        getResourcesBySubject,
    };
})();