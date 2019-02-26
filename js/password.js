/**
 * Handles submission of password forgotten form
 * Takes the number and checks in the database if it is present.
 * if the number is found the backend makes SMS verification with twilio and we display the password changing form
 * if it is not found a visual warning is given saying the number was not associated to any account
 */
const handlePasswordForgot = () => {
  const countryCode = document.getElementById('country-code').value;
  const phoneNumber = document.getElementById('phone-input').value;
  const $resetButton = document.getElementById('reset-password');
  const $passwordForgot = document.getElementById('password-forgot');
  const $newPassword = document.getElementById('new-password');
  const $noAccount = document.getElementById('account-nomatch');

  

  // Add loading icon to button
  $resetButton.innerHTML = "Reset Password&nbsp;<i class='fas fa-circle-notch fa-spin'></i>"
  // @TODO make AJAX call to backend to check if the number is associated with an account.
  // @TODO if it is toggle password reset form
    // $passwordForgot.style.display = 'none';
    // $newPassword.style.display = 'flex';
  

  // @TODO if AJAX call does not find account then display failed icon with red text
  $resetButton.innerHTML = "Reset Password&nbsp; <i class='fas fa-ban'></i>"
  $noAccount.style.display = 'inline';
};

/**
 * Handle new password submission
 * Makes AJAX call for new password
 */