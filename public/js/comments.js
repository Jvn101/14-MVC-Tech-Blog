const commentFormHandler = async function (event) {
	event.preventDefault();

	const blog_id = document.querySelector('.new-comment-form').dataset.blogid;

	const comment_description = document.querySelector('#comment_description').value.trim();

	console.log('comment_description');
	console.log(comment_description);

	if (comment_description) {
		console.log(JSON.stringify({
			blog_id,
			comment_description,
		}))
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				blog_id,
				comment_description,
			}),
			
	// 	const response = await fetch('/api/comments', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			blog_id,
	// 			comment_description,
	// 		}),
	// 	});
    // const data = await response.json();
	// console.log(data);
	// 	document.location.reload();
	// }
});
//document.location.reload();
}
};


console.log('the selector');
console.log(document
	.querySelector('.new-comment-form'));

document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);

