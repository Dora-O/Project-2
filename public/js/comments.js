const commentsFormHandler = async (event) => {
    event.preventDefault();
    console.log('Your Comment was added')
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const projects_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            projects_id,
            comment_content
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);