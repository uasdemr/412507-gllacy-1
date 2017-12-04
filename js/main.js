var button = document.querySelector(".map-contacts-btn");
var formFlag = 0;

button.addEventListener("click", function () {
  var modalForm = document.querySelector(".modal-feedback");
  if(formFlag == 0) {
    formFlag = 1;
    modalForm.style.display = "block";
  }
});

var modalClose = document.querySelector(".modal-close");

modalClose.addEventListener("click", function () {
  var modalForm = document.querySelector(".modal-feedback");
  if(formFlag == 1) {
    formFlag = 0;
    modalForm.style.display = "none";
  }
});