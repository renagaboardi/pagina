function toggleText(button) {
  const extra = button.previousElementSibling.querySelector('.extra');
  if (extra.style.display === "inline") {
    extra.style.display = "none";
    button.textContent = "Leer más";
  } else {
    extra.style.display = "inline";
    button.textContent = "Leer menos";
  }
}
