// material-manager.js

// Function to upload study materials
function uploadMaterial(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const material = {
            id: Date.now(),
            content: event.target.result,
            type: file.type,
            name: file.name,
            subject: '', // To be set when associating with a subject
            tags: [] // To be set when tagging
        };
        saveMaterial(material);
    };
    reader.readAsText(file); // Assuming text files; adjust for other types
}

// Function to save material to localStorage
function saveMaterial(material) {
    let materials = JSON.parse(localStorage.getItem('studyMaterials')) || [];
    materials.push(material);
    localStorage.setItem('studyMaterials', JSON.stringify(materials));
}

// Function to get all materials
function getMaterials() {
    return JSON.parse(localStorage.getItem('studyMaterials')) || [];
}

// Function to delete a material
function deleteMaterial(id) {
    let materials = getMaterials();
    materials = materials.filter(material => material.id !== id);
    localStorage.setItem('studyMaterials', JSON.stringify(materials));
}

// Function to tag a material
function tagMaterial(id, tags) {
    let materials = getMaterials();
    const material = materials.find(material => material.id === id);
    if (material) {
        material.tags = tags;
        localStorage.setItem('studyMaterials', JSON.stringify(materials));
    }
}

// Function to search materials by tag
function searchMaterialsByTag(tag) {
    const materials = getMaterials();
    return materials.filter(material => material.tags.includes(tag));
}