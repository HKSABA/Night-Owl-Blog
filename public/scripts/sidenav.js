/*
  ------------- Click Highlight -------------
*/

/* 
  Function to remove active class from all links 
*/
function removeAllActiveClasses() {
  document.querySelectorAll("#sidenav a").forEach((item) => {
    item.classList.remove("reading");
  });
}

/* 
  Function to add active class to the clicked link
*/
function addActiveClass(clickedLink) {
  removeAllActiveClasses();

  clickedLink.classList.add("reading");
}

/* 
  Function to scroll to the clicked section smoothly
*/
function scrollToSection(targetId) {
  const targetSection = document.getElementById(targetId);

  // Scroll to the target section smoothly
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }
}

/* 
  Event listener for click functionality on links
*/

document.querySelectorAll("#sidenav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);

    addActiveClass(this);

    scrollToSection(targetId);
  });
});

/*
  ------------- Scroll Highlight -------------
*/

/* 
  Function to handle intersection of sections
*/
// const sectionObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const targetId = entry.target.getAttribute("id");

//         removeAllActiveClasses();

//         const correspondingLink = document.querySelector(
//           `#sidenav a[href="#${targetId}"]`
//         );

//         if (correspondingLink) {
//           correspondingLink.classList.add("reading");
//         }
//       }
//     });
//   },
//   { threshold: 0.25 }
// );

// const sections = document.querySelectorAll("section");

// sections.forEach((section) => {
//   sectionObserver.observe(section);
// });
