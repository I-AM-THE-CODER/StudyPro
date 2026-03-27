// This file implements search functionality for study materials and resources.

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        searchResultsContainer.innerHTML = '';

        if (query) {
            const materials = JSON.parse(localStorage.getItem('studyMaterials')) || [];
            const resources = JSON.parse(localStorage.getItem('studyResources')) || [];

            const filteredMaterials = materials.filter(material => 
                material.title.toLowerCase().includes(query) || 
                material.description.toLowerCase().includes(query)
            );

            const filteredResources = resources.filter(resource => 
                resource.title.toLowerCase().includes(query) || 
                resource.description.toLowerCase().includes(query)
            );

            const results = [...filteredMaterials, ...filteredResources];

            if (results.length > 0) {
                results.forEach(result => {
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('search-result');
                    resultItem.innerHTML = `<strong>${result.title}</strong>: ${result.description}`;
                    searchResultsContainer.appendChild(resultItem);
                });
            } else {
                searchResultsContainer.innerHTML = '<p>No results found.</p>';
            }
        }
    });
});