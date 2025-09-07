const img_container = document.querySelector("ul");
const heading = document.querySelector("h1");
const cl = document.querySelector("button");
const audio = document.querySelector("audio");

cl.addEventListener("click", () => {
  heading.style.display = "block";
  img_container.style.display = "flex";
  audio.autoplay = true;
  audio.play();
});
