/*
***********************************************************************
** Global variables
***********************************************************************
*/

var showClass = "show";
var errorClass= "error";

var popupFeedback = document.querySelector("#popup-feedback");
if (popupFeedback)
{
  var showFeadbackButton = document.querySelector(".company-info-right .btn-promo");

  var modalFeedback = popupFeedback.querySelector(".modal-feedback");
  var closeFeadbackButton = popupFeedback.querySelector(".bnt-modal-close");
  var feadbackForm = popupFeedback.querySelector(".feedback-form");
  var nameFeadbackField = feadbackForm.querySelector("input[name='name']");
  var emailFeadbackField = feadbackForm.querySelector("input[name='email']");
  var messageFeadbackField = feadbackForm.querySelector(".field-box-message");

  showFeadbackButton.addEventListener("click", onShowFeedbackPopup);
  closeFeadbackButton.addEventListener("click", onCloseFeedbackPopup);

  feadbackForm.addEventListener("submit", onSubmitFeadbackForm);
}

var popupCompanyLocation = document.querySelector("#popup-company-location");
if (popupCompanyLocation)
{
  var showCompanyLocationButton = document.querySelector(".company-info-right .company-location-preview");

  var modalCompanyLocation = popupCompanyLocation.querySelector(".modal-company-location");
  var closeCompanyLocationButton = popupCompanyLocation.querySelector(".bnt-modal-close");
  
  showCompanyLocationButton.addEventListener("click", onShowCompanyLocationPopup);
  closeCompanyLocationButton.addEventListener("click", onCloseCompanyLocationPopup);
}

var popupNewOrder = document.querySelector("#popup-new-order");
if (popupNewOrder)
{
  var modalNewOrder = popupNewOrder.querySelector(".modal-new-order");
  var closeNewOrderButton = popupNewOrder.querySelector(".bnt-modal-close");
  var сontinueShoppingButton = popupNewOrder.querySelector(".new-order-controls .btn-continue");

  closeNewOrderButton.addEventListener("click", onCloseNewOrderPopup);  
  сontinueShoppingButton.addEventListener("click", onCloseNewOrderPopup);

  var showNewOrderbButtons = document.querySelectorAll(".product-card-actions .btn-add-to-cart");
  for (var index = 0; index < showNewOrderbButtons.length; index++)
  {
   showNewOrderbButtons[index].addEventListener("click", onShowNewOrderbPopup);
  }
}

/*
***********************************************************************
** Subscription on events
***********************************************************************
*/

window.addEventListener("keydown", onKeyDown);

/*
***********************************************************************
** Global handlers
***********************************************************************
*/

function onKeyDown(event) {
  if (event.keyCode === 27) {
    hideElement(popupFeedback);
    cancelError(modalFeedback);

    hideElement(popupCompanyLocation);
    hideElement(popupNewOrder);
  }
}

/*
***********************************************************************
** Functions
***********************************************************************
*/

function loadData(element, field) {
  if (!element) {
    return;
  }
  var value = localStorage.getItem(field);
  if (value) {
    element.value = value;
  }
}

function showElement(element) {
  if (!element) {
    return;
  }
  if (!element.classList.contains(showClass)) {
    element.classList.add(showClass);
  }
}

function hideElement(element) {
  if (!element) {
    return;
  }
  if (element.classList.contains(showClass)) {
    element.classList.remove(showClass);
  }
}

function setError(element) {
  if (!element) {
    return;
  }
  if (!element.classList.contains(errorClass)) {
    element.classList.add(errorClass);    
  }
}

function cancelError(element) {
  if (!element) {
    return;
  }
  if (element.classList.contains(errorClass)) {
    element.classList.remove(errorClass);
  }  
}

/*
***************************************************************
**** FeedbackPopup ********************************************
*/

function onShowFeedbackPopup(event) {
  event.preventDefault(event);

  showElement(popupFeedback);
  showElement(modalFeedback);

  loadData(nameFeadbackField, "FeadbackName");
  loadData(emailFeadbackField, "FeadbackEmail");
  
  setFeadbackFocus();
}

function onCloseFeedbackPopup(event) {
  event.preventDefault(event);

  cancelError(modalFeedback);
  hideElement(popupFeedback);  
}

function onSubmitFeadbackForm(event)
{
  if (false 
      || !nameFeadbackField.value
      || !emailFeadbackField.value
      || !messageFeadbackField.value)
  {    
    event.preventDefault(event);
    setFeadbackFocus();

    cancelError(modalFeedback);
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    setError(modalFeedback);

    return;
  } 

  localStorage.setItem("FeadbackName", nameFeadbackField.value);
  localStorage.setItem("FeadbackEmail", emailFeadbackField.value);
}

function setFeadbackFocus() {
  var target = !nameFeadbackField.value
      ? nameFeadbackField
      : !emailFeadbackField.value
        ? emailFeadbackField
        : !messageFeadbackField.value
          ? messageFeadbackField
          : null;

  target.focus();
}

/*
**** FeedbackPopup ********************************************
***************************************************************
*//*
***************************************************************
**** CompanyLocation ******************************************
*/

function onShowCompanyLocationPopup(event) {
  event.preventDefault(event);

  showElement(popupCompanyLocation);
  showElement(modalCompanyLocation);
}

function onCloseCompanyLocationPopup(event) {
  event.preventDefault(event);

  cancelError(modalCompanyLocation);
  hideElement(popupCompanyLocation);  
}

/*
**** CompanyLocation ******************************************
***************************************************************
*//*
***************************************************************
**** NewOrder *************************************************
*/

function onShowNewOrderbPopup(event) {
  event.preventDefault(event);

  showElement(popupNewOrder);
  showElement(modalNewOrder);
}

function onCloseNewOrderPopup(event) {
  event.preventDefault(event);

  cancelError(modalNewOrder);
  hideElement(popupNewOrder);
}

/*
**** NewOrder *************************************************
***************************************************************
*/