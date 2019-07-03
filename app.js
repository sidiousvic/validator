document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.getElementById("name");
  const rx = /^[A-Za-z]{6,10}$/;
  if (!rx.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validateZip() {
  const zip = document.getElementById("zip");
  const rx = /^[0-9]{5}(-[0-9]{4})?$/;
  if (!rx.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const rx = /\S+@\S+\.[a-zA-Z]+$/i;
  if (!rx.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

function validatePhone() {
  const phone = document.getElementById("phone");
  const rx = /^(\([0-9]{3}\)|[0-9]{3})([ \.\-]?)([0-9]{3})([ \.\-]?)([0-9]{4})$/;
  if (!rx.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
