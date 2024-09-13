  let menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const sidebar = document.querySelector('.sidebar');


menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  sidebar.classList.toggle('active');
});

// Get all navbar links
const navLinks = document.querySelectorAll('.navbar a');

// Function to handle link click
function handleLinkClick(event) {
  // Remove 'active' class from all links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Add 'active' class to the clicked link
  event.target.classList.add('active');
}

// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', handleLinkClick);
});


// ==========================================


document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  const menuIcon = document.getElementById('menu-icon');
  const navBar = document.getElementById('');

  // Function to handle scroll-based active link update
  const updateActiveLinkOnScroll = () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  };

  // Scroll event listener for updating active link
  window.addEventListener('scroll', updateActiveLinkOnScroll);

  // Function to handle menu icon click
  menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('open');
  });

  // Function to handle navbar link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
    });
  });
});

