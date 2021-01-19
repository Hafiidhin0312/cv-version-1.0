//Navigasi Mobile

function Navmobile() {
  var x = document.getElementById("linkmobile");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  x.onclick=function(){
    x.style.display = "none";
  }
}

//Sticky Navigasi

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//-------------------------------------Sertifikat----------

var modal = document.getElementById("myModal");
var foliomodal = document.getElementById("foliomodal");
var foliomodal2 = document.getElementById("foliomodal2");

var porto1 = document.getElementById("box1");
var porto2 = document.getElementById("box2");

var bnsp = document.getElementById("bnsp");
var bnsp2 = document.getElementById("bnsp2");
var dts = document.getElementById("dts");
var dqlabpy = document.getElementById("dqlabpy");
var datawragling = document.getElementById("datawragling");
var dicodingpy = document.getElementById("dicodingpy");
var datavisual = document.getElementById("datavisual");
var web = document.getElementById("web");
var line = document.getElementById("line");
var ibm = document.getElementById("ibm");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

bnsp.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

bnsp2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

dts.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

dqlabpy.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

datawragling.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

dicodingpy.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

datavisual.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

web.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

line.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

ibm.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var closes = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closes.onclick = function() { 
  modal.style.display = "none";
}




// ------------------------------------Portofolio Box
box1.onclick = function(){
  foliomodal.style.display = "block";
}

box2.onclick = function(){
  foliomodal2.style.display = "block";
}

var closefolio = document.getElementsByClassName("closefolio")[0];
closefolio.onclick = function() { 
  foliomodal.style.display = "none";
}

var closefolio2 = document.getElementsByClassName("closefolio2")[0];
closefolio2.onclick = function() { 
  foliomodal2.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

  else if (event.target == foliomodal) {
    foliomodal.style.display = "none";
  }

  else if (event.target == foliomodal2) {
    foliomodal2.style.display = "none";
  }
}