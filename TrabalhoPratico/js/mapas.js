// Get the modal
var modalMapas = document.getElementById("modalMapas");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgMapas = document.getElementsByClassName("thumb");

for ( var i = 0; i < imgMapas.length; i++ ) (function(i){ 
	imgMapas[i].onclick = function() {
		modalMapas.style.display = "block";
	}
  })(i);

// Get the <span> element that closes the modal
var spanMapa = document.getElementById("modalMapas");

// When the user clicks on <span> (x), close the modal
spanMapa.onclick = function() {
    modalMapas.style.display = "none";
}