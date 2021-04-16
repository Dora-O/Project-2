const addNewProject = async (event) => {
    event.preventDefault();

    const projectTitle = document.querySelector('#project-title').value.trim();
    const mediaLink= document.querySelector('#media-link').value.trim();
    const projectDesc = document.querySelector('#project-desc').value.trim();

    if (projectTitle && mediaLink && projectDesc) {
        const response = await fetch(`/api/projects`, {

            method: 'POST',
            body: JSON.stringify({ projectTitle, mediaLink, projectDesc }),
            headers: { 'Content-Type': 'application/json', },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

console.log('this works')
document.querySelector('#new-project-form').addEventListener('submit', addNewProject);