// Select all the headings and the image container
const headings = document.querySelectorAll('.item');
console.log(headings);

const imgContainers = document.querySelectorAll('.tvc, .digital, .documnetary, .events, .corporate');
console.log(imgContainers);

// Function to check the current active heading
const crntActiveH = function (headings) {
	headings = document.getElementsByClassName('active');

	// Using for loop to remove the class
	for (let i = 0; i < headings.length; i++) {
		headings[i].classList.remove('active');
	}

	// Using for of loop
	// for (const heading of headings) {
	// 	heading.classList.remove('active');
	// }

	// // Using forEach loop (We have to convert the HTMlCollection into an array)
	// Array.from(headings).forEach(function (heading) {
	// 	heading.classList.remove('active');
	// });
};

// Function to check current active image container
const crntActiveImgC = function (imgContainers) {
	imgContainers = document.getElementsByClassName('image-active');

	// Using for loop to remove the class
	for (let i = 0; i < imgContainers.length; i++) {
		imgContainers[i].classList.remove('image-active');
	}
};

//Loop on the listItem
headings.forEach(function (heading) {
	heading.addEventListener('click', function (event) {
		// Remove current active heading
		crntActiveH(headings);

		// Remove current active image container
		crntActiveImgC(imgContainers);

		// Add class active to the current clicked heading
		console.log(event.currentTarget);
		event.currentTarget.classList.add('active');

		// Switch statement
		const activeImage = event.target.innerHTML;

		switch (activeImage) {
			case 'TVC':
				document.querySelector('.tvc').classList.add('image-active');
				break;
			case 'DIGITAL':
				document.querySelector('.digital').classList.add('image-active');
				break;
			case 'DOCUMENTARY':
				document.querySelector('.documentary').classList.add('image-active');
				break;
			case 'EVENTS':
				document.querySelector('.events').classList.add('image-active');
				break;
			case 'CORPORATE':
				document.querySelector('.corporate').classList.add('image-active');
				break;
		}
	});
});
