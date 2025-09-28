/*
  ------------- Click Highlight -------------
*/

/* 
  Function to remove active class from all links 
*/
function removeAllActiveClasses() {
  document.querySelectorAll("#navbar a").forEach((item) => {
    item.classList.remove("active");
  });
}

/* 
  Function to add active class to the clicked link
*/
function addActiveClass(clickedLink) {
  // Remove active classes from all links
  removeAllActiveClasses();

  // Add active class to clicked link
  clickedLink.classList.add("active");
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

document
  .querySelectorAll("#navbar a:not([href='/blogs'])")
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target section ID from the href attribute
      // .substring(1) gives the ID only as the '#' is in index-0
      const targetId = this.getAttribute("href").substring(1);

      // Add active class to the clicked link
      addActiveClass(this);

      if (targetId !== "blogs") {
        // Scroll to the target section smoothly
        scrollToSection(targetId);
      }
    });
  });

/*
  ------------- Scroll Highlight -------------
*/

/* 
  Function to handle intersection of sections
*/
const sectionObserver = new IntersectionObserver(
  // Callback function triggered when sections intersect
  (entries) => {
    entries.forEach((entry) => {
      // If section is intersecting with viewport
      if (entry.isIntersecting) {
        const targetId = entry.target.getAttribute("id");

        // Remove active class from all links
        removeAllActiveClasses();

        const correspondingLink = document.querySelector(
          `#navbar a[href="#${targetId}"]`
        );

        if (correspondingLink) {
          // Add active class to corresponding link
          correspondingLink.classList.add("active");
        }
      }
    });
  },
  // Adjust the threshold as needed (50% visibility)
  { threshold: 0.5 }
);

// Get all sections
const sections = document.querySelectorAll("section:not(#blogs)");

sections.forEach((section) => {
  // Start observing each section
  sectionObserver.observe(section);
});
