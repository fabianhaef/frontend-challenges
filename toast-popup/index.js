const placement = document.getElementById("placement");
const text = document.getElementById("text");
const duration = document.getElementById("duration");
const type = document.getElementById("type");
const submitButton = document.querySelector('button');
const body = document.getElementsByTagName("body")[0];

submitButton.addEventListener('click', () => {
  const placementValue = placement.value;
  const textValue = text.value;
  const durationValue = duration.value * 1000;
  const typeValue = type.value;
  const placementClass = placementValue === 'bottom-right' ? 'bottom-right'
    : placementValue === 'bottom-left' ? 'bottom-left' 
    : placementValue === 'top-right' ? 'top-rigtht'
    : 'top-left';

  const typeClass = typeValue === 'success' ? 'success'
    : typeValue === 'error' ? 'error'
    : typeValue === 'warning' ? 'warning'
    : 'info';

  createToastUp(placementClass, textValue, durationValue, typeClass);
});

const deleteToastUp = () => {
  const toastUp = document.querySelectorAll(".toast-up-elem");
  if (toastUp !== null) {
    for (let i = 0; i < toastUp.length; i++) {
      toastUp[i].remove();
    }
  }
}

const createToastUp = (placementClass, textValue, durationValue, typeClass) => {
  deleteToastUp();
  const toastUp = document.createElement("div");
  toastUp.classList.add("toast-up-elem", placementClass, typeClass);
  toastUp.innerHTML = textValue;
  body.appendChild(toastUp);
  setTimeout(() => {
    toastUp.remove();
  }, durationValue);
}
