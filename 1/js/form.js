$(document).ready(function() {
    formSubmit()
})
/* Отправка форм */
function formSubmit() {
	const forms = document.forms
	if (forms.length) {
		for (const form of forms) {
			form.addEventListener('submit', function (e) {
				const form = e.target
				formSubmitAction(form, e)
			})
			form.addEventListener('reset', function (e) {
				const form = e.target
				form.reset()
			})
		}
	}

	async function formSubmitAction(form, e) {
		e.preventDefault()
		const formData = new FormData(form)

		const response = await fetch('mail.php', {
			method: 'POST',
			body: formData,
		})
		if (response.ok) {
			let responseResult = await response.json()
			formSent(form, responseResult)
		} else {
			alert('Ошибка')
		}
	}
	// Действия после отправки формы
	function formSent(form, responseResult = ``) {
		// Создаем событие отправки формы
		document.dispatchEvent(
			new CustomEvent('formSent', {
				detail: {
					form: form,
				},
			})
		)
	
		setTimeout(() => {
			 window.location.href = 'thanks.html'
		}, 100)
		// Очищаем форму
		form.reset()
	}
}





