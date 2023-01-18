const interestBtn = document.getElementById('interest-btn');
const signupBtn = document.getElementById('email-signup');
const contactBtn = document.getElementById('contact');

const interestSelectModal = document.getElementById('int-select-modal');
const signupModal = document.getElementById('signup-form');
const contactModal = document.getElementById('inquire-form');

const interestCloseBtn = document.getElementById('int-select-closeBtn');
const signupCloseBtn = document.getElementById("signup-close-btn");
const contactCloseBtn = document.getElementById("inquiry-close-btn");

const bg = document.getElementById('wave');

const contactForm = document.getElementById('contact-form');

const addShowClass = (elem) => {
  elem.classList.add('show');
};
const removeShowClass = (elem) => {
  elem.classList.remove('show');
};

const contactFormSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();

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

  fetch("https://exavier.getform.com/rj587",
    {
      method: "POST",
      body: formData,
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))

  // const name = contactForm.querySelector('input[name="name"]').value;
  // const email = contactForm.querySelector('input[name="email"]').value;
  // const phone = contactForm.querySelector('input[name="phone"]').value;
  // const msg = contactForm.querySelector('textarea[name="msg"]').value;

  // console.log(name);
  // console.log(email);
  // console.log(phone);
  // console.log(msg);
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


/* CONTACT */

contactBtn.addEventListener('click', () => {
  console.log('Contact btn clicked');
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
