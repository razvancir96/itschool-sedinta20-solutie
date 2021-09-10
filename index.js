const dropdownButton = document.querySelector(".menu-icon");
const dropdownList = document.querySelector("nav ul");

dropdownButton.addEventListener("click", function () {
  // Metoda toggle adauga o clasa daca nu exista, respectiv o sterge, daca exista.
  dropdownList.classList.toggle("show-dropdown");
});
