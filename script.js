document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-status").innerText = "Thanks for reaching out! I'll get back to you soon.";
  this.reset();
});


window.addEventListener('load', () => {
  document.querySelector('.photos').classList.add('show');
});