const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", expendCollapsible)
);
function expendCollapsible() {
  this.classList.toggle("collapsible--expanded");
}
