/**
 * Handles toggling login and signup forms
 */
const toggleForms = ($formId) => {
  // Get sign and sign up forms
  const $signin = document.getElementById('signin');
  const $signup = document.getElementById('signup');

  switch ($formId) {
    case 'signin':
      // Toggle signup form
      $signin.style.display = 'none';
      $signup.style.display = 'flex';
      isSignupForm();
      break;

    case 'signup':
      // Toggle signin form
      $signup.style.display = 'none';
      $signin.style.display = 'flex';
      break;

    default:
      // Display sigin form by default
      $signup.style.display = 'none';
      $signin.style.display = 'flex';
  }
};

/**
 * Handles password and password confirmation checking
 */
const isSignupForm = () => {
  const $signupBtn = document.getElementById('signup-btn');
  const $password = document.getElementById('password');
  const $confirmPassword = document.getElementById('confirm-password');
  const $firstName = document.getElementById('fN');
  const $lastName = document.getElementById('lN');
  const $email = document.getElementById('email-input');

  const validatePassword = () => {
    if ($password.value !== $confirmPassword.value) {
      $confirmPassword.setCustomValidity('Passwords do not match');
    } else {
      $confirmPassword.setCustomValidity('');
    }
  };
  $signupBtn.onclick = validatePassword;

  // Autofill email field with concatenated firstName and lastName
  $email.onclick = () => {
    // @TODO check that this combination of firstName and lastName is unique in the backend before suggesting. if it is not then append random strings to make it so.
    $email.value = $firstName.value + $lastName.value;
  }
};