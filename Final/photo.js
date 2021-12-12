document.getElementById("photo").addEventListener("click",photobuttonClicked);

function photobuttonClicked(){
  console.log("photo")
  window.location.href = "photo.html";
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

document.getElementById("name-home").addEventListener("click", namehomeClicked);

function namehomeClicked(){
  console.log("name-home")
  window.location = "index.html";
}
