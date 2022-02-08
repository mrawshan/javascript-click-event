// Select all the headings and the image container
const headings = document.querySelectorAll('.item');

const imgContainer = document.querySelectorAll('.tvc, .digital, .documnetary, .events, .corporate');

// Function to check the current active heading
const crntActiveH = function (headings) {
	headings = document.getElementsByClassName('active');

	// Using for loop
	for (let i = 0; i < headings.length; i++) {
		headings[i].classList.remove('active');
	}

	// Using for of loop
	// for (const heading of headings) {
	// 	heading.classList.remove('active');
	// }

	// Using forEach loop
	// Array.from(headings).forEach(function (heading) {
	// 	heading.classList.remove('active');
	// });
};

// Function to check current active image container
const crntActiveImgC = function (imgContainer) {
	imgContainer = document.getElementsByClassName('image-active');

	// Using for loop
	for (let i = 0; i < imgContainer.length; i++) {
		imgContainer[i].classList.remove('image-active');
	}
};

//Loop on the headings
headings.forEach(function (heading) {
	heading.addEventListener('click', function (event) {
		// Removing the current active heading
		crntActiveH(headings);

		// Removing the current active image container
		crntActiveImgC(imgContainer);

		// Add class active to the current clicked heading
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
