const formDOM = document.querySelector('#form');
const modalDOM = document.querySelector('#modal');
const closeModalDOM = document.querySelector('#btn_close-modal');

function openModal() {
	modalDOM.open = true;
}

function closeModal() {
	modalDOM.open = false;
}

function getInputsData(e) {
	e.preventDefault();
	const infoInputs = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		subject: document.getElementById('subject').value,
		message: document.getElementById('message').value,
	};

	if (
		infoInputs.name &&
		infoInputs.email &&
		infoInputs.message &&
		infoInputs.subject
	) {
		emailjs.send('service_4l0rdvp', 'template_kdtysec', infoInputs).then(
			(response) => {
				console.log('SUCCESS!', response.status, response.text);
				openModal();
			},
			(error) => {
				console.log('FAILED...', error);
			},
		);
	}
}

function sendEmail() {
	formDOM.addEventListener('submit', getInputsData);
}

closeModalDOM.addEventListener('click', closeModal);
export default sendEmail;
// NO OLVIDES HACER TU CUENTA https://www.emailjs.com/
