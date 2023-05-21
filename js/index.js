const modal = document.getElementById("feedback-modal");
const overlay = document.getElementById("overlay");

const openModal = () => {
  document.body.classList.add("overflow-hidden");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = () => {
  document.body.classList.remove("overflow-hidden");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

document
  .querySelectorAll(".trigger-open-modal")
  .forEach((element) => element.addEventListener("click", openModal));
document
  .querySelectorAll(".trigger-close-modal")
  .forEach((element) => element.addEventListener("click", closeModal));

document.querySelector("#feedback-form").addEventListener("submit", (event) => {
  event.preventDefault();

  // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target).then(
  emailjs.sendForm("service_zdsw2qr", "template_fq7fsk7", event.target).then(
    () => console.log("SUCCESS!"),
    (error) => console.log("FAILED...", error)
  );

  closeModal();
});
