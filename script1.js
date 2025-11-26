
const img = document.getElementById('toggleImage');
const sidebarDiv = document.getElementById('toggleDiv');

img.onclick = function() {
  if (sidebarDiv.style.display === 'none' || sidebarDiv.style.display === '') {
    sidebarDiv.style.display = 'block';
  } else {
    sidebarDiv.style.display = 'none';
  }
};
  
