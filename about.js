
var i = 0;

var txt = 'I am Deepak Mathew, a first year student at Govt.Model Engineering college, majoring in Computer Engineering and currently staying in Kottayam.Initially i was not much interested in Computer Science,but over time i have developed a liking for it.Having started learning HTML during lockdown period,i began spending most of my time in front of my laptop.As of now,I am proficient in different computer languages like C,C++,Python etc.and familiar with web development basics such as HTML,CSS and Javascript.I am also eagerly interested in learning more about this field.Apart from web development and programming,I love reading and watching web series. '; 



var speed = 50;
document.getElementById("demo").addEventListener("load", typeWriter());

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

