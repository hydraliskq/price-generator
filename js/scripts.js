document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add");
  const itemsContainer = document.querySelector(".main__items");
  const items = document.querySelectorAll(".main__item");
  const generateBtn = document.getElementById("generate");
  const header = document.querySelector(".header");

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const description = document.getElementById("description");
    const price = document.getElementById("price");

    if (name && description && price) {
      const newItem = document.createElement("div");
      newItem.classList.add("main__item");

      newItem.innerHTML = `
			<div class="item__logo">
				<img src="images/logo.png" alt="" />
			</div>
			<div class="item__body">
				<div class="item__header">
					<div class="item__name">${name.value}</div>
					<div class="item__description">${description.value}</div>
				</div>
				<div class="item__price">${price.value}</div>
			</div>
		`;

      itemsContainer.appendChild(newItem);

      name.value = "";
      description.value = "";
      price.value = "";
    }
  });

  itemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("main__item")) {
      e.target.remove();
    }
  });

  generateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    header.style.display = "none";

    window.print();

    header.style.display = "";
  });
});
