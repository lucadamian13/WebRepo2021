
const imagesArray = ["photo_assets/1.jpg", "photo_assets/2.jpg", "photo_assets/3.jpg"];
let index = 0;

document.getElementById("carousel_button_right").addEventListener("click", buttonClicked);

function buttonClicked(){
  console.log(imagesArray[index]);
  document.getElementById("carousel_image").src = imagesArray[index];
  if (index >=2) {
    index=0;
  } else {
    index++;
  }
}

document.getElementById("carousel_button_left").addEventListener("click", buttonClicked);

function buttonClicked(){
  console.log(imagesArray[index]);
  document.getElementById("carousel_image").src = imagesArray[index];
  if (index <=0) {
    index=2;
  } else {
    index--;
  }
}

document.getElementById("photo").addEventListener("click",photobuttonClicked);

function photobuttonClicked(){
  console.log("photo")
  window.location = "photo.html";
}

document.getElementById("video").addEventListener("click",videobuttonClicked);

function videobuttonClicked(){
  console.log("video")
  window.location = "video.html";
}

document.getElementById("about").addEventListener("click",aboutbuttonClicked);

function aboutbuttonClicked(){
  console.log("about")
  window.location = "about.html";
}

document.getElementById("contact").addEventListener("click",contactbuttonClicked);

function contactbuttonClicked(){
  console.log("contact")
  window.location = "contact.html";
}
