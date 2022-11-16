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
      if (!/#([0-9a-f]{2}){3,4}/i.test(color.value)) {
        console.warn(
          `${color.value} is not a valid value for a color input! Use #rrggbb(aa) format.`
        );
        continue;
      }
      const item = menu.addItem("", () => {
        input.value = color.value.slice(0, 7);
        input.dataset.alpha = Number.parseInt(color.value.slice(7) || 'ff', 16) / 255;
      });
      item.style.color = color.value;
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
