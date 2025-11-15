//   var dib = document.getElementById("slideit")
// if(dib.style.display == "none"){
// function slidemenu() {
 

//   dib.style.display = "block"
  
// }
// }
// if(dib.style.display == "block"){
// function slidemenu() {
 

//   dib.style.display = "none"
  
// }
// }

// function slidemenu() {
//  var dib = document.getElementById("slideit")

//   dib.style.display = "block"
  
// }
 const img = document.getElementById('toggleImage');
  const div = document.getElementById('toggleDiv');

  img.onclick = function() {
    if (div.style.display === 'none' || div.style.display === '') {
      div.style.display = 'block';  // Show div if hidden
    } else {
      div.style.display = 'none';   // Hide div if visible
    }
  };
