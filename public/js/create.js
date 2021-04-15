const newFormHandler = async (event) => {
    event.preventDefault();

    const new_project = document.querySelector('#new-project').value.trim();

    if (new_project) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ new_project }),
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