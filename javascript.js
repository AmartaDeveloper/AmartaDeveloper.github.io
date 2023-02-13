// Text Fade In Effect

let observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
	console.log(entry)
	if (entry.isIntersecting) {
		entry.target.classList.add('show');
	} else {
		entry.target.classList.remove('show');
	}
	});
});

let hiddenElements = document.querySelectorAll('.heading');
hiddenElements.forEach((el) => observer.observe(el));

//////////////////////////////////////////////////////////////

// Icon Fade In Effect

observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
	console.log(entry)
	if (entry.isIntersecting) {
		entry.target.classList.add('show2');
	} else {
		entry.target.classList.remove('show2');
	}
	});
});

hiddenElements = document.querySelectorAll('.circle-icons');
hiddenElements.forEach((el) => observer.observe(el));

//////////////////////////////////////////////////////////////