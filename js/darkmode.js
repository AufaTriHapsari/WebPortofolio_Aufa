const toggleBtn = document.getElementById("button-theme");
let darkMode = localStorage.getItem("dark-mode");

// Membuat Fungsi dengan Tanda Panah
const enableDarkMode = () => {
  document.documentElement.setAttribute("data-bs-theme", "dark");
  toggleBtn.classList.remove("btn-light");
  toggleBtn.classList.add("btn-dark");
  toggleBtn.innerHTML = '<i class="bi-sun"></i>';
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  document.documentElement.setAttribute("data-bs-theme", "light");
  toggleBtn.classList.remove("btn-dark");
  toggleBtn.classList.add("btn-light");
  toggleBtn.innerHTML = '<i class="bi-moon-stars"></i>';
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); 
}

toggleBtn.addEventListener("click", e => {
  darkMode = localStorage.getItem("dark-mode"); //
  if (darkMode) {
    if (darkMode === "disabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  } else {
    enableDarkMode();
  }
});
