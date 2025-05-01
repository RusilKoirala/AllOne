document.getElementById("theme-switch").addEventListener("change", function() {
    if (this.checked) {
      document.body.classList.add("dark-mode");
      document.querySelector("nav").classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.querySelector("nav").classList.remove("dark-mode");
    }
  });
  