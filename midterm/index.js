let feeling = ["Good", "Bad", "Ugly"];
let images = ["Good.jpg", "Bad.jpg", "Ugly.jpg"]



for (i=0; i<document.getElementsByClassName("feeling").length; i++){
  document.getElementsByClassName("feeling")[i].innerHTML = "<h2>" + feeling[i] + "</h2>";
  document.getElementsByClassName("feeling")[i].addEventListener('click', setActive, false);
  document.getElementsByClassName("feeling")[i].id = feeling[i];
}

document.getElementById("Good").classList.toggle('active');
document.getElementById("image").innerHTML = "<img src='assets/" + images[0] + "' >";

function setActive(e){
  prevfeeling = document.getElementsByClassName("active")[0].id;
  if (prevfeeling != undefined){
    document.getElementById(prevfeeling).classList.toggle("active");
    document.getElementById(prevfeeling + "page").style.display = "none";
  }

  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle('active');
  }else{
    e.target.classList.toggle('active');
  }

  feelingpick = document.getElementsByClassName('active')[0].id;

  document.getElementById(feelingpick + "page").style.display = "block";
  document.getElementById('image').innerHTML = "<img src='assets/" + feelingpick + ".jpg' >";

}

This section allows for all  
var input = document.querySelector('#clear');
var goodarea = document.querySelector('#feelingventgood');
var badarea = document.querySelector('#feelingventbad');
var uglyarea = document.querySelector('#feelingventugly');
input.addEventListener('click', function () {
    goodarea.value = '';
    badarea.value = '';
    uglyarea.value = '';
}, false);
