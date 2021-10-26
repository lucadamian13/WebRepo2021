feeling = ["Good", "Bad", "Ugly"];
for (i=0; i<document.getElementsByClassName("feeling").length; i++){
  document.getElementsByClassName("feeling")[i].innerHTML = "<h2>" + feeling[i] + "</h2>";
  document.getElementsByClassName("feeling")[i].id = feeling[i];
}
