// Get the modal
var modal = document.getElementById("modalImagens");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("imgT");
var modalImg = document.getElementById("modalImagens_img");

for ( var i = 0; i < img.length; i++ ) (function(i){ 
	img[i].onclick = function() {
		modal.style.display = "block";
		modalImg.src = img[i].src;
	}
  })(i);

// Get the <span> element that closes the modal
var span = document.getElementById("modalImagens");

// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
  modal.style.display = "none";
}


