const buttonTabs = document.querySelectorAll('.tab-button')
const allDetails = document.querySelectorAll('.details-article')

buttonTabs.forEach(button => {
	button.addEventListener('click', (e) => {
		e.preventDefault()

		// Remove active class from all buttons and hide all details
		buttonTabs.forEach(button => button.classList.remove('active'))
		allDetails.forEach(detail => detail.classList.remove('active'))

		// Add active class to clicked button and show clicked detail
		button.classList.add('active')
		const target = button.getAttribute('aria-controls')
		document.querySelector(`#${target}`).classList.add('active')
	})
})


const shirtColorInputs = document.querySelectorAll('input[name="shirt-color"]')
const shirtSvg = document.querySelector('svg#shirt')

shirtColorInputs.forEach(input => {
	input.addEventListener('change', () => {
		const shirtColor = input.value
		shirtSvg.style.fill = shirtColor
	})
})