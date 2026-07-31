const openModalBtnElement = document.querySelector("#openModal");
const modalElement = document.querySelector(".modal");
const modalContentElement = document.querySelector(".modal-content");


openModalBtnElement.addEventListener("click", () => {
  modalElement.classList.add("open");
});

modalElement.addEventListener("click", () => {
    modalElement.classList.remove("open");
  
});