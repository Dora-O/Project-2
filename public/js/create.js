const addNewProject = async (event) => {
    event.preventDefault();

    const projectTitle = document.querySelector('#project-title-input').value.trim();
    const mediaLink = document.querySelector('#media-link-input').value.trim();
    const projectDesc = document.querySelector('#project-desc-input').value.trim();

    if (projectTitle && mediaLink && projectDesc) {
        const response = await fetch(`/dashboard/projects`, {
            method: 'POST',
            body: JSON.stringify({ projectTitle, mediaLink, projectDesc }),
            headers: { 'Content-Type': 'application/json', },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};
document.querySelector('#new-project-form').addEventListener('submit', addNewProject);