let a = document.querySelectorAll('.nav-links ul li a');

a.forEach((element) => {
  element.addEventListener("click", () => {
    a.forEach((l) => {
      l.classList.remove("active");
    });
    element.classList.add("active");
  });
});

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

