var button = document.querySelector(".map-contacts-btn");

button.addEventListener("click", function () {
  var modalForm = document.querySelector(".modal-feedback");
  modalForm.style.display = "block";
});

var modalClose = document.querySelector(".modal-close");

modalClose.addEventListener("click", function () {
  var modalForm = document.querySelector(".modal-feedback");
  modalForm.style.display = "none";
});