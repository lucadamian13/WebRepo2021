const imagesArray = ["RandallPark.jpeg", "StevenYeun.jpeg", "SimuLiu.jpeg"];
let index = 0;

document.getElementById("buttonImage").addEventListener("click", buttonClicked);

function buttonClicked() {
  console.log(imagesArray[index]);
  document.getElementById("theImage").src = imagesArray[index];
  if (index >= 2) {
    index = 0;
  } else {
    index++;
  }
}
