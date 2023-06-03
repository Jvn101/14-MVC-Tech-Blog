const commentFormHandler = async function (event) {
	event.preventDefault();

	const blog_id = document.querySelector('.new-comment-form').dataset.blogid;

	const comment_description = document.querySelector('#comment_description').value.trim();

	if (comment_description) {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				blog_id,
				comment_description,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		document.location.reload();
	}
};

document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);












// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#blog-name').value.trim();
//   //const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querySelector('#blog-desc').value.trim();

//   if (name && description) {
//     const response = await fetch(`/api/blog`, {
//       method: 'POST',
//       body: JSON.stringify({ name, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to create blog post');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/blog/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/blog');
//     } else {
//       alert('Failed to delete blog post');
//     }
//   }
// };

// document
//   .querySelector('.new-blog-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.blog-list')
//   .addEventListener('click', delButtonHandler);
