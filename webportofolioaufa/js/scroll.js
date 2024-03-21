// Array 
const sectionLinks = [
  { sectionId: "home", text: "Home" },
  { sectionId: "about", text: "About" },
  { sectionId: "skills", text: "Skills" },
  { sectionId: "Project", text: "Project" },
  { sectionId: "Contact", text: "Contact" }
];


let lists = document.querySelectorAll(".navbar-nav .nav-link");
let buttonScroll = document.getElementById("scrollToTopButton");


function activeLink(navLink) {
  lists.forEach(item => item.classList.remove("active"));
  navLink.classList.add("active");
}

lists.forEach((item, index) => {
  item.addEventListener("click", function () {
    activeLink(this);
  });
});


let sections = document.querySelectorAll("section");


function checkSectionInView() {
  sections.forEach((sec, index) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 60;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      activeLink(lists[index]);
    }
  });
}

window.addEventListener("scroll", checkSectionInView);


function toggleScrollToTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonScroll.style.display = "block";
  } else {
    buttonScroll.style.display = "none";
  }
}

window.addEventListener("scroll", toggleScrollToTopButton);


function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

buttonScroll.addEventListener("click", scrollToTop);
