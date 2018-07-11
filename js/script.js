    var contactLink = document.querySelector(".contact-button");
    var contactPopup = document.querySelector(".modal");
    var contactForm = contactPopup.querySelector(".contact-form");
    var closeButton = contactPopup.querySelector(".modal-close");
    var nameField = contactForm.querySelector("[name=name]");
    var passField = contactForm.querySelector("[name=email]");

    var isStorageSupport = true;
    var storage = "";

    try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }

    contactLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      contactPopup.classList.add("modal-show");

    if (storage) {
      nameField.value = storage;
      passField.focus();
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
      if (!login.value || !password.value) {
        evt.preventDefault();
        contactPopup.classList.remove("modal-error");
        contactPopup.offsetWidth = popup.offsetWidth;
        contactPopup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("login", login.value);
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
