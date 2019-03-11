const editor = document.getElementById('mail-editor');
const sendMail = (isDraft) => {
  // Get all input fields and prepare data for sending mail
  const to = document.getElementById('to');
  const subject = document.getElementById('subject');
  let message;
  let draft

  if (!isDraft) {
    message = editor.root.innerHTML;
  } else {
    // If draft save contents as delta so user can keep editing later
    draft = editor.getContents();
    alert(JSON.stringify(draft));
  }
};

