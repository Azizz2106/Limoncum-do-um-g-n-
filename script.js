function checkPassword() {
  const password = document.getElementById("password").value;
  const correctPassword = "pspsps"; // kendi şifreni yaz
  const letter = document.getElementById("letter");

  if (password === correctPassword) {
    letter.classList.remove("hidden");
  } else {
    document.getElementById("error-message").classList.add("hidden");
   document.getElementById("error-message").classList.remove("hidden");
    

  }
}

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleBtn = document.getElementById("toggleBtn");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "🙈";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "👁️";
  
  }
  
}
