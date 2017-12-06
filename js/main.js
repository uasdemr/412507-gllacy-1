var button = document.querySelector(".map-contacts-btn");
var modalClose = document.querySelector(".modal-close");
var modalForm = document.querySelector(".modal-feedback");
var form = modalForm.querySelector("form");

button.addEventListener("click", function (e) {
  e.preventDefault();
  modalForm.classList.add("modal-show");
  modalForm.querySelector("[name=name]").focus();
});

modalClose.addEventListener("click", function (e) {
  e.preventDefault();
  var modalForm = document.querySelector(".modal-feedback");
  modalForm.classList.remove("modal-show");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var isEmpty = false;
    for(var i = 0; i< form.length; i++){
      if(form.elements[i].type==="text" || form.elements[i].type==="email") {
        if(form.elements[i].value===''){
          form.elements[i].style.borderColor = "red";
          isEmpty = "true";
        }else{
          form.elements[i].style.borderColor = "";
        }
      }
    }
    if(isEmpty) return;
    else {
      form.submit();
      modalForm.classList.remove("modal-show");
    }
});