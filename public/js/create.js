const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#project-title').value.trim();
    const media_link = document.querySelector('#media-link').value.trim();
    const description = document.querySelector('#project-desc').value.trim();

    if (title && media_link && description) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ title, media_link, description }),
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