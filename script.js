/*Approach: We will have our end CSS written first and with Javascript 
we will simply switch through these styles*/
const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    removeActiveClass();
    panel.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
