let phoneNumberInput = document.getElementById('phoneNumber');
let result = document.getElementById('result');

phoneNumberInput.addEventListener('input', function (event) {
  let phoneNumber = event.target.value.replace(/\D/g, '');
  let phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength >= 10) {
    phoneNumber = '+41' + phoneNumber.substring(1, 3) + ' ' + phoneNumber.substring(3, 6) + ' ' + phoneNumber.substring(6, 8) + ' ' + phoneNumber.substring(8, 10);
  } else {
    phoneNumber = phoneNumber.substring(0, 3) + ' ' + phoneNumber.substring(3, 6) + ' ' + phoneNumber.substring(6, 8) + ' ' + phoneNumber.substring(8, 10);
  }

  result.innerHTML = phoneNumber;

});
