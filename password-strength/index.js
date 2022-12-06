// get the password input
const passwordInput = document.querySelector('#password');

// get all strength bars
const strengthBars = document.querySelectorAll('.bar');

// create a function to update the strength bars
const updateStrengthBars = (strength) => {
  strengthBars.forEach((bar, index) => {
    if (index < strength) {
      bar.classList.add('active');
    } else {
      bar.classList.remove('active');
    }
  });
}


// create five criterias for password strength
const criteria = {
  length: {
    test: (password) => {
      return password.length >= 8;
    }
  },
  lowercase: {
    test: (password) => {
      return /[a-z]/.test(password);
    }
  },
  uppercase: {
    test: (password) => {
      return /[A-Z]/.test(password);
    }
  },
  number: {
    test: (password) => {
      return /[0-9]/.test(password);
    }
  },
  special: {
    test: (password) => {
      return /[!@#$%^&*]/.test(password);
    }
  }
};

// create a function to check password strength
const checkPasswordStrength = (password) => {
  let strength = 0;
  for (let key in criteria) {
    if (criteria[key].test(password)) {
      strength++;
    }
  }
  return strength;
}


// call the function
passwordInput.addEventListener('keyup', (e) => {
  let strength = checkPasswordStrength(e.target.value);
  updateStrengthBars(strength);
});
