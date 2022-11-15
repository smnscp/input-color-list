document.addEventListener("DOMContentLoaded", () => {
  const colorInputsWithList = document.querySelectorAll(
    "input[type=color][list]"
  );

  for (let input of colorInputsWithList) {
    const menu = document.createElement("menu");
    menu.toggle = function () {
      this.hidden = !this.hidden;
    };
    menu.toggle();

    menu.addItem = function (label, action) {
      const item = this.appendChild(document.createElement("li"));
      item.innerText = label;
      item.onclick = action;
      return item;
    };

    for (let color of input.list.options) {
      const colorValue = color.value;
      const item = menu.addItem("", () => (input.value = colorValue));
      item.style.backgroundColor = colorValue;
    }

    menu.addItem("…", () => {
      input.showPicker();
      menu.toggle();
    });
    menu.addItem("✕", () => menu.toggle());

    input.after(menu);
    input.onclick = (e) => {
      e.preventDefault();
      menu.toggle();
    };
  }
});
