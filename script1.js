
 const img = document.getElementById('toggleImage');
  const div = document.getElementById('toggleDiv');

  img.onclick = function() {
    if (div.style.display === 'none' || div.style.display === '') {
      div.style.display = 'block';  
    } else {
      div.style.display = 'none';   
    }
  };
