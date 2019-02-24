const toggleForms = ($formId) => {
  // Get sign and sign up forms
  const $signin = document.getElementById('signin');
  const $signup = document.getElementById('signup');

  switch ($formId) {
    case 'signin':
      // Toggle signup form
      $signin.style.display = 'none';
      $signup.style.display = 'flex';
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