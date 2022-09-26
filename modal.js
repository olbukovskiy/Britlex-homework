(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    submitBtn: document.querySelector(".blank"),
  };

  refs.openModalBtn.addEventListener("click", toggleModalAdd);
  refs.closeModalBtn.addEventListener("click", toggleModalRemove);
  refs.modal.addEventListener("click", onBackdropClick);

  refs.submitBtn.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
      elements: { name, tel, mail, cities },
    } = event.currentTarget;
    console.log(name.value, tel.value, mail.value, cities.value);
    event.currentTarget.reset();
    toggleModalRemove();
  });

  function toggleModalAdd() {
    window.addEventListener("keydown", onEscPush);
    document.body.classList.add("modal-open");
    refs.modal.classList.remove("is-hidden");
  }

  function toggleModalRemove() {
    window.removeEventListener("keydown", onEscPush);
    document.body.classList.remove("modal-open");
    refs.modal.classList.add("is-hidden");
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      toggleModalRemove();
    }
  }

  function onEscPush(event) {
    if (event.code === "Escape") {
      toggleModalRemove();
    }
  }
})();
