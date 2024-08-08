const heroBtn = document.querySelector(".main-button");
const modalWindow = document.querySelector(".backdrop");

heroBtn.addEventListener("click", toggleModal);

modalWindow.addEventListener("click", (e) => {
  const target = e.target.closest(".exit-button");
  if (!target) return;

  toggleModal();
});

function toggleModal() {
  modalWindow.classList.toggle("is-open");
}
