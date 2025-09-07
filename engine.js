const img_container = document.querySelector("ul");
const heading = document.querySelector("h1");
const cl = document.querySelector("button");

cl.addEventListener("click", () => {
  heading.style.display = "block";
  img_container.style.display = "flex";
});
