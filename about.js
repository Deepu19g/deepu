
var i = 0;

var txt = 'I am Deepak Mathew, a first year student at Govt.Model Engineering college, majoring in Computer Engineering and currently staying in Kottayam.i didnt have much interest in computer science but in time i started to like it.i started to learn html during lockdown days,and after some time i thought about doing a website for practice. I spent most of the time spending in front of my laptop. i am interested in learning more in this field. I have learned different computer languages like C, C++, Python along with html,css,javascript etc.. I try to watch webseries and read a bit in my free time'; 



var speed = 50;
document.getElementById("demo").addEventListener("load", typeWriter());

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

