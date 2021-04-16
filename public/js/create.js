const newFormHandler = async (event) => {
    event.preventDefault();

    const projectTitle = document.querySelector('#project-title').value.trim();
    const mediaLink = document.querySelector('#media-link').value.trim();
    const projectDesc = document.querySelector('#project-desc').value.trim();

    if (projectTitle && mediaLink && projectDesc) {
        const response = await fetch(`/api/projects`, {
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
document.querySelector('#new-project-form').addEventListener('submit', newFormHandler);