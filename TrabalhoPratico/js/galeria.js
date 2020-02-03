var modal = document.getElementById("modalImagens");

var img = document.getElementsByClassName("imgT");
var modalImg = document.getElementById("modalImagens_img");

for ( var i = 0; i < img.length; i++ ) (function(i){ 
	img[i].onclick = function() {
		modal.style.display = "block";
		modalImg.src = img[i].src;
	}
  })(i);

var span = document.getElementById("modalImagens");

modal.onclick = function() {
  modal.style.display = "none";
}
