    var contactLink = document.querySelector(".contact-button");
    var contactPopup = document.querySelector(".modal");
    var contactForm = contactPopup.querySelector(".contact-form");
    var closeButton = contactPopup.querySelector(".modal-close");
    var nameField = contactForm.querySelector("[name=name]");
    var emailField = contactForm.querySelector("[name=email]");
    var textField = contactForm.querySelector("[name=textarea]");

    var isStorageSupport = true;
    var nameFieldStorage = "";
    var emailFieldStorage = "";

    try {
      nameFieldStorage = localStorage.getItem("name");
      emailFieldStorage = localStorage.getItem("email");
    } catch (err) {
      isStorageSupport = false;
    }

    contactLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      contactPopup.classList.add("modal-show");

    if (nameFieldStorage && emailFieldStorage) {
      nameField.value = nameFieldStorage;
      emailField.value =  emailFieldStorage;
      textField.focus();
     } else {
      nameField.focus();
     }
    });

    closeButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-error");
      contactPopup.classList.remove("modal-show");
    });

    contactForm.addEventListener("submit", function (evt) {
      if (!nameField.value || !emailField.value || !textField.value) {
        evt.preventDefault();
        contactPopup.classList.remove("modal-error");
        contactPopup.offsetWidth = contactPopup.offsetWidth;
        contactPopup.classList.add("modal-error");
        console.log(nameField.value);
        console.log(emailField.value);
        console.log(textField.value);
      } else {
        if (isStorageSupport) {
          localStorage.setItem("name", nameField.value);
          localStorage.setItem("email", emailField.value);
        }
      }
    });

    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (contactPopup.classList.contains("modal-show")) {
        contactPopup.classList.remove("modal-show");
        contactPopup.classList.remove("modal-error");
      }
    }
  });
