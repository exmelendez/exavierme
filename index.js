const interestBtn = document.getElementById('interest-btn');
const signupBtn = document.getElementById('email-signup');
const contactBtn = document.getElementById('contact');

const interestSelectModal = document.getElementById('int-select-modal');
const signupModal = document.getElementById('signup-container');
const contactModal = document.getElementById('inquire-container');

const interestCloseBtn = document.getElementById('int-select-closeBtn');
const signupCloseBtn = document.getElementById("signup-close-btn");
const contactCloseBtn = document.getElementById("inquiry-close-btn");

const contactSubmitBtn = document.getElementById('contact-submit');
const signupSubmitBtn = document.getElementById('signup-submit');

const bg = document.getElementById('wave');

const contactForm = document.getElementById('contact-form');
const signupForm = document.getElementById('signup-form');

const toast = document.getElementById('snackbar');

const addShowClass = (elem) => {
  elem.classList.add('show');
};
const removeShowClass = (elem) => {
  elem.classList.remove('show');
};

const resetForm = (formType, form, userObj) => {
  form.reset();

  if (formType === "signup") {
    toast.textContent = `You rock ${userObj.fName}, Thanks for signing up to receive news, updates and give aways.`;
    toast.className = 'show';
  } else {
    toast.textContent = `Thank you for writing ${userObj.name}, someone will respond back to you within 5-7 business days.`;
    toast.className = 'show';
  }

  setTimeout(() => {
    toast.classList.remove('show')
  }, 4000);
};

const contactFormSubmit = (e) => {
  e.preventDefault();
  contactSubmitBtn.value = 'Submitting';
  let formData = new FormData();

  formData.append(
    'name',
    contactForm.querySelector('input[name="name"]').value
  );

  formData.append(
    'email',
    contactForm.querySelector('input[name="email"]').value
  );

  formData.append(
    'phone',
    contactForm.querySelector('input[name="phone"]').value
  );

  formData.append(
    'msg',
    contactForm.querySelector('textarea[name="msg"]').value
  );

  formData.append(
    'device',
    window.navigator.userAgent
  );

  fetch("https://script.google.com/macros/s/AKfycby-vYMUyg9B5Kzly5cwu2-xMgf1-baAKTXZOQ0Zw_F1LeEoePRAFBK2LP9bOCJrSkA5-g/exec",
    {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      contactSubmitBtn.value = 'Submit';
      resetForm('contact', contactForm, data);
      removeShowClass(contactModal);
    })
    .catch(error => console.log(error))
};

const signupFormSubmit = (e) => {
  e.preventDefault();
  signupSubmitBtn.value = 'Submitting';
  let formData = new FormData();

  formData.append(
    'firstName',
    signupForm.querySelector('input[name="fname"]').value
  );

  formData.append(
    'lastName',
    signupForm.querySelector('input[name="lname"]').value
  );

  formData.append(
    'email',
    signupForm.querySelector('input[name="email"]').value
  );

  formData.append(
    'ageRange',
    signupForm.querySelector('select[name="age"]').value
  );

  formData.append(
    'country',
    signupForm.querySelector('select[name="country"]').value
  );

  formData.append(
    'postcode',
    signupForm.querySelector('input[name="zcode"]').value
  );

  formData.append(
    'phone',
    signupForm.querySelector('input[name="phone"]').value
  );

  formData.append(
    'device',
    window.navigator.userAgent
  );

  fetch("https://script.google.com/macros/s/AKfycbx21tCMPM0Gk-spNNw-sDukkyzleDd3wfK2yBUGBLIDjsFiHFZquQnOaB1Z9ZOxsFxh/exec",
    {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      signupSubmitBtn.value = 'Submit';
      resetForm('signup', signupForm, data);
      removeShowClass(signupModal);
    })
    .catch(error => console.log(error))
};

/* INTEREST MAIN */

interestBtn.addEventListener('click', () => {
  addShowClass(interestSelectModal);
});

interestCloseBtn.addEventListener('click', () => {
  removeShowClass(interestSelectModal);
});


/* SIGNUP */

signupBtn.addEventListener('click', () => {
  removeShowClass(interestSelectModal);
  addShowClass(signupModal);
});

signupCloseBtn.addEventListener('click', () => {
  removeShowClass(signupModal);
});

signupForm.addEventListener('submit', signupFormSubmit);


/* CONTACT */

contactBtn.addEventListener('click', () => {
  removeShowClass(interestSelectModal);
  addShowClass(contactModal);
});

contactCloseBtn.addEventListener('click', () => {
  removeShowClass(contactModal);
});

contactForm.addEventListener('submit', contactFormSubmit);


/* AUTO CLOSE - CLICK OUT OF MODALS */

window.onclick = function (event) {
  if (event.target == wave) {
    removeShowClass(interestSelectModal);
    removeShowClass(signupModal);
    removeShowClass(contactModal);
  }
}
