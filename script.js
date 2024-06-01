"use strict";

// task 2

const box = document.querySelector("#box");
const image = document.createElement("img");
const title = document.createElement("h2");

box.classList.add("wraper");

image.setAttribute(
  "src",
  "https://assets-global.website-files.com/5e9aa66fd3886aa2b4ec01ca/6548605a76d8f3c0c708ffef_living%20in%20france%20(1).png"
);
image.setAttribute("alt", "image");

title.classList.add("title");
title.textContent = "Image Title";
title.style.color = "red";
title.style.fontSize = "30px";

box.appendChild(title);
box.appendChild(image);

// task 3
