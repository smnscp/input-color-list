document.addEventListener("DOMContentLoaded", () => {
  const colorInputsWithList = document.querySelectorAll(
    "input[type=color][list]"
  );

  for (let input of colorInputsWithList) {
    const menu = document.createElement("menu");
    menu.style.visibility = "hidden";

    for (let color of input.list?.options) {
      console.log(color);
      const colorValue = color.value;
      const item = menu.appendChild(document.createElement("li"));
      item.style.backgroundColor = colorValue;
      item.onclick = () => {
        input.value = colorValue;
      };
    }

    const extraItem = menu.appendChild(document.createElement("li"));
    extraItem.innerText = "…";
    extraItem.onclick = () => input.click();

    const closeItem = menu.appendChild(document.createElement("li"));
    closeItem.innerText = "✕";
    closeItem.onclick = () => menu.style.visibility = "hidden";

    input.after(menu);

    input.onclick = (e) => {
      if (menu.style.visibility == "hidden") {
        menu.style.visibility = "visible";
        e.preventDefault();
      } else {
        menu.style.visibility = "hidden";
      }
    };
  }
});
