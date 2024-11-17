const feedbackBtn = document.querySelector('.feedback_btn');
const feedbackPopup = document.querySelector('.feedback_popup');
const feedbackCloseBtn = document.querySelector('.popup_close');
const forms = document.querySelectorAll('.vote_block');
const labelСheckin = document.querySelectorAll('.label_checkin');
let currentPopupSlideIndex = 0;

feedbackBtn.addEventListener('click', () => {
  feedbackBtn.classList.remove('active');
  feedbackPopup.classList.add('active');
  forms[currentPopupSlideIndex].classList.add('active');
});

feedbackCloseBtn.addEventListener('click', () => {
  feedbackPopup.classList.remove('active');
  feedbackBtn.classList.add('active');
  currentPopupSlideIndex = 0;
  forms.forEach(form => form.classList.remove('active'));
  forms[0].classList.add('active');
});

const submitBtns = document.querySelectorAll('.submit_btn');

submitBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    
    if (btn.id === 'upload_img_btn') {
      const fileInput = document.getElementById('file');
      if (!fileInput.files.length) {
        labelСheckin.forEach(label => label.style.border = "1px dashed #ED0000");
        return;
      }
    }

    forms[currentPopupSlideIndex].classList.remove('active');
    
    currentPopupSlideIndex++;

    if (currentPopupSlideIndex < forms.length) {
      forms[currentPopupSlideIndex].classList.add('active');
    } else {
      currentPopupSlideIndex = forms.length - 1;
      forms[currentPopupSlideIndex].classList.add('active');
    }
  });
});

const fileInput = document.getElementById('file');
const fileLabel = document.querySelector('label[for="file"]');

fileInput.addEventListener('change', function() {
  if (this.files && this.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      fileLabel.innerHTML = '<img src="' + e.target.result + '">';
    }
    reader.readAsDataURL(this.files[0]);
  }
});
