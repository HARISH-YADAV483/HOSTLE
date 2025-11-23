
const img = document.getElementById('toggleImage');
const sidebarDiv = document.getElementById('toggleDiv');

img.onclick = function() {
  if (sidebarDiv.style.display === 'none' || sidebarDiv.style.display === '') {
    sidebarDiv.style.display = 'block';
  } else {
    sidebarDiv.style.display = 'none';
  }
};
  let navbar = document.getElementById('navbar');
  let lastScrollTop = 0;
  let scrollTimeout;

  window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout); // Clear any pending timeout

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop) {
      // Scrolling down - hide navbar
      navbar.style.top = '-600px'; // Hide by moving it up
    } else {
      // Scrolling up - show navbar
      navbar.style.top = '0';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

    // Detect scroll stop after 150ms and show navbar
    scrollTimeout = setTimeout(function(){
      navbar.style.top = '0';
    }, 150);
  });

