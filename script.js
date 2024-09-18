document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Team Algorithm Tech Institute!");
  
    // Smooth scroll effect for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  