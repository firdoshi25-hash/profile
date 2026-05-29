function toggle(btn) {
  const details = btn.nextElementSibling;
  details.style.display =
    details.style.display === "block" ? "none" : "block";
}
