// Open / Close Login
function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}
function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

// Open / Close Register
function openRegister() {
  document.getElementById("registerModal").style.display = "flex";
}
function closeRegister() {
  document.getElementById("registerModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
}
