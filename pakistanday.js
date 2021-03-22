var i = 0;
var image = [];

var pics = document.getElementById('img')

image[0] = "Pakistan_1.jpg";
image[1] = "Pakistan_2.jpg";
image[2] = "Pakistan_3.jpg";
image[3] = "Pakistan_4.jpg";
image[4] = "Pakistan_5.jpg";
image[5] = "Pakistan_6.jpg";

image[6] = "Pakistan_7.jpg";
image[7] = "Pakistan_8.jpg";
image[8] = "Pakistan_9.jpg";
image[9] = "Pakistan_10.jpg";
image[10] = "Pakistan_11.jpg";
image[11] = "Pakistan_12.jpg";



function change() {
  pics.src = image[i];
  if(i < image.length - 1){
    i++
  }else{
    i = 0;
  }
  
  setTimeout("change()", 3000);
  
}

window.onload = change;


var myName = document.getElementById("name");

var whatsYoursName = prompt("What is your name ?");


var result = myName.innerHTML = whatsYoursName;


if (whatsYoursName === "") {
  myName.innerHTML="Name"
}


 









