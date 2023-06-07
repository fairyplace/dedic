const nameInput = document.getElementById("name-input");
const phoneInputs = document.querySelectorAll("input[data-tel-input]");
const formBtn = document.querySelector('.form-button')
const formSuccessModal = document.getElementById("success");
const formErrorModal = document.getElementById("error");
// phone mask
function getInputNumbersValue(input) {
	return input.value.replace(/\D/g, "");
}
function onPhoneInput(e) {
	let input = e.target;
	let inputNumbersValue = getInputNumbersValue(input);
	let formattedInputValue = "";

	if (!inputNumbersValue) return (input.value = "");

	if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
		if (inputNumbersValue[0] == "9")
			return (input.value = `+7 ${inputNumbersValue}`);

		let firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
		formattedInputValue = firstSymbols;

		if (inputNumbersValue.length > 1)
			formattedInputValue += ` (${inputNumbersValue.substring(1, 4)}`;

		if (inputNumbersValue.length >= 5)
			formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;

		if (inputNumbersValue.length >= 8)
			formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;

		if (inputNumbersValue.length >= 10)
			formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
	} else {
		formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
	}
	input.value = formattedInputValue;
}
for (let i = 0; i < phoneInputs.length; i++) {
	let input = phoneInputs[i];
	input.addEventListener("input", onPhoneInput);
}
// end phone mask

const SEND_MAIL_URL = "http://localhost:5050/sendMail"

async function sendData(data) {

	return await fetch(SEND_MAIL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((data) => data.json());
}
const getFormData = (formNode) => {
	const data = new FormData(formNode);
  console.log(formNode.getAttribute('name'))
	const result = {
    meta: {
      type: formNode.getAttribute('name'),
    },
    form: {
    },
    services: [],
	};
	for (const [k, v] of data) {
		if (v === "on") {
			result.services.push(k);
			continue;
		}
		result.form[k] = v;
	}


  // configData comes from template
  if (typeof configData !== 'undefined') {
    result['config'] = configData
  }

	return result;
	// return new FormData(formNode);
};

async function handleFormSubmit(e) {
	e.preventDefault();
	// // phone validation


  // TODO:
  // if (!checkValidity(e)) {
  //   return;
  // }



	const data = getFormData(e.target);
	toggleLoader(e.target);
	const response = await sendData(data);

	if (response.result) {
		setTimeout(() => {
			toggleLoader(e.target);
		}, 400);
		// e.target.reset();
		openModal(formSuccessModal);
	} else {
		console.log("error");
		toggleLoader(e.target);
		openModal(formErrorModal);
	}
}
function toggleLoader(formNode) {
	formNode.classList.toggle("load");
}

function phoneIsValid(phoneInput) {
	return !(phoneInput.value.replace(/[^0-9]/g, "").length < 11);
}

function checkValidity(event) {
  const formNode = event.target.form
  const isValid = formNode.checkValidity() && phoneIsValid(formNode.elements.phone)
  if (isValid) {
    formBtn.classList.remove('disabled')
  } else{
    formBtn.classList.add('disabled')
  }

  return isValid;
  // formNode.querySelector('button').disabled = !isValid
}

for (var form of document.forms) {
	form.addEventListener("submit", handleFormSubmit);
	form.addEventListener("input", checkValidity);

}

function openModal(modalNode) {
	if (!modalNode.classList.contains("open")) {
		const modalbtn = document.querySelector('.modal__close-btn')
    modalbtn.focus()
    modalNode.classList.add("open");
		document.body.classList.add("_scroll-lock");

		modalNode.addEventListener("click", function (e) {
			if (
				!e.target.closest(".modal-body") ||
				e.target.classList.contains("modal__close-btn")
			) {
				closeModal(e.target.closest(".modal"));
			}
		});
	}
}
function closeModal(modalNode) {
	modalNode.classList.remove("open");
	document.body.classList.remove("_scroll-lock");
}
