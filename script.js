const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const btn = item.querySelector(".accordion-btn");
  btn.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    accordionItems.forEach((i) => i.classList.remove("active"));
    if (!isActive) {
      item.classList.add("active");
    }
  });
});
