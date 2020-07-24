
var i = 0;

var txt = 'I am Deepak Mathew, a first year student at Govt.Model Engineering college, majoring in Computer Engineering and currently staying in Kochi.Ever since I was a kid, Ive wanted to work in the field of Computers. I love reading and spent most of the time spending in front of my laptop. One of my dreams was to master in it and become one of the top Software Engineers in the world and now I am working towards it. I do work for what I dream. I had always showed keen interest in this field. I have developed skills in different computer languages like C, C++, Python, Dart etc..With my experience in computer programming , I am able to create different projects and help others with that knowledge. I try different things in my idle hours and try to make best use of it. Apart from this, I love playing and watching both football and cricket.'; 



var speed = 50;
document.getElementById("demo").addEventListener("load", typeWriter());

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

