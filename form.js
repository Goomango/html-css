"use strict";

document.getElementById("formBG").style.display = "none";

document.getElementById("add").onclick = function () {
  document.getElementById("formBG").style.display = "block";
};

document.getElementById("form-X").onclick = function () {
  document.getElementById("formBG").style.display = "none";
};

function buttonClose() {
  document.getElementById("formBG").style.display = "none";
}

function buttonClickAdd(name, image, content) {
  const div = document.createElement("div");
  div.classList.add("item");
  div.innerHTML = `
            <img src="${image}" alt="${name}" />
            <span>${content}</span>
        `;
  document.querySelector(".container").appendChild(div);

  const span = document.createElement("span");
  span.innerHTML = name;
  document.querySelector("aside").appendChild(span);
}

function submitHandle(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const image = document.getElementById("image").value;
  const content = document.getElementById("content").value;
  buttonClickAdd(name, image, content);
  buttonClose();
}
document.getElementById("form").addEventListener("submit", submitHandle);
