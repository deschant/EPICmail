const container = document.getElementById('mail-editor');
const quillOptions = {
  theme: 'snow',
  placeholder: 'Start crafting your epic mail here'
};
const editor = new Quill(container, quillOptions);