
const heroImage = document.querySelector("#hero img");
setInterval(() => {
  heroImage.style.opacity = heroImage.style.opacity === "0.5" ? "1" : "0.5";
}, 100);

const aboutImage = document.querySelector("#bio img");
setInterval(() => {
  aboutImage.style.transform =
    aboutImage.style.transform === "rotate(10deg)"
      ? "rotate(0deg)"
      : "rotate(10deg)";
}, 200);


document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alert("You clicked " + link.textContent);
  });
});


const unusedFunction = () => {
  console.log("This function is not called anywhere!");
};


function toggleHighlight(element) {
  element.style.backgroundColor =
    element.style.backgroundColor === "yellow" ? "white" : "yellow";
}

const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted!");
});
