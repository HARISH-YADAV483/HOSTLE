
 const img = document.getElementById('toggleImage');
  const div = document.getElementById('toggleDiv');

  img.onclick = function() {
    if (div.style.display === 'none' || div.style.display === '') {
      div.style.display = 'block';  // Show div if hidden
    } else {
      div.style.display = 'none';   // Hide div if visible
    }
  };
