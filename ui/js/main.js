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
  console.log("We got a sign up form!");
  const $password = document.getElementById('password');
  const $confirmPassword = document.getElementById('confirm-password');

  const validatePassword = () => {
    if ($password.value !== $confirmPassword.value) {
      $confirmPassword.setCustomValidity('Passwords do not match');
    } else {
      $confirmPassword.setCustomValidity('');
    }
  };

  $password.onchange = validatePassword;
  $confirmPassword.onchange = validatePassword;
};