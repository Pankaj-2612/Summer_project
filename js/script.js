// Dark mode button code
var themeButton = document.getElementById("themeBtn");
var htmlTag = document.documentElement;

// Load saved theme
var savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  htmlTag.setAttribute("data-theme", "dark");
  themeButton.textContent = "Light Mode";
}

themeButton.addEventListener("click", function () {
  var currentTheme = htmlTag.getAttribute("data-theme");

  if (currentTheme === "dark") {
    htmlTag.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    themeButton.textContent = "Dark Mode";
  } else {
    htmlTag.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeButton.textContent = "Light Mode";
  }
});