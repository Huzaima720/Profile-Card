let btn = document.querySelector("button");
let info = document.querySelector(".info");
let Name = document.querySelector(".name");
let img = document.querySelector("img");
let backIcon = document.querySelector(".back");

let mernText =
  "The MERN stack is a web development technology that includes MongoDB, Express.js, React, and Node.js. It allows developers to build full-stack applications using JavaScript for both the front-end and back-end.";

let infoDefault = `My name is Abdulrehman, and I am 19 years old from Township, Lahore. I have finished my Matric and am now in my second year of ICS at GCT College. I am learning skills, and I have already learned HTML, CSS, and JavaScript with some basic knowledge of the MERN stack. Currently, I am taking a MERN stack course from Bano Qabil.`;

btn.addEventListener("click", function () {
  backIcon.style.display = "flex";
  Name.innerText = "Mern Stack";
  img.parentElement.style.display = "none";
  info.innerText = mernText;
  btn.style.display = "none";
});

backIcon.addEventListener("click", function () {
  backIcon.style.display = "none";
  info.innerText = infoDefault;
  Name.innerText = "Abdulrehman Asghar";
  img.parentElement.style.display = "block";
  btn.style.display = "block";
});
