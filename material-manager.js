// material-manager.js

// Function to upload study materials
// meta (optional): { title, description, subject, tags }
function uploadMaterial(file, meta) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const material = {
            id: Date.now(),
            title: (meta && meta.title) || file.name,
            content: event.target.result,
            type: file.type,
            name: file.name,
            description: (meta && meta.description) || '',
            subject: (meta && meta.subject) || '',
            tags: (meta && meta.tags) || []
        };
        saveMaterial(material);
    };
    // Use readAsDataURL for binary files (images, PDFs) so content is preserved;
    // use readAsText only for plain text formats.
    const textTypes = ['text/plain', 'text/markdown', 'application/json'];
    if (textTypes.includes(file.type) || file.name.match(/\.(txt|md|json|csv)$/i)) {
        reader.readAsText(file);
    } else {
        reader.readAsDataURL(file);
    }
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