

let myLink = document.getElementsByClassName("boxLink");

for ( let i=0; i<myLink.length; i++){
    myLink[i].style.color = "red";
}

let myTag = document.getElementsByTagName("h2");

for (let i=0; i<myTag.length; i++){
    myTag[i].style.backgroundColor = "yellow";
}

let ptag = document.getElementsByTagName("p");

for (let i=0; i<ptag.length; i++){
    ptag[i].style.color ="grey";
}

let myBorder = document.getElementsByClassName("oldImg");

for (let i=0; i<myBorder.length; i++){
    myBorder[i].style.border = "2px dashed purple";

}

let myLinks = document.getElementsByTagName("ul");

for ( let i=0; i<myLinks.length; i++){
    myLinks[i].style.fontSize = "20px";
}

let myUnder = document.getElementsByTagName("a");

for ( let i=0; i<myUnder.length; i++){
    myUnder[i].style.textDecoration = "underline";
}



console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".images"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll(" a "));

// using query selector to change the font family of h1:- 
let font = document.querySelector("h1");
font.style.fontFamily = " Comic Sans MS";

// using query selector to change class boxLink background to blue:- 
let back = document.querySelectorAll(".boxLink");
for ( let i=0; i<back.length; i++){
    back[i].style.backgroundColor = "maroon";
}

// Now using query selector change the text color to white of all the box links:- 
let text = document.querySelectorAll(".boxLink");
for ( let i=0; i<text.length; i++){
    text[i].style.color ="white";
}

let img = document.querySelector("#mainImg");
img.style.width = "300px";
img.style.boxShadow = "0 0px 2px 5px orange";


let head = document.querySelector("h1");
console.dir(head);
head.innerText = "Spider Peter parker";
head.innerHTML = "<u> Spider Peter Parker </u>";

//Select the first <p> tag on your page and use innerText to change its text to:
// "Spider-Man is also known as Peter Parker."

let paragraph = document.querySelector("p");
console.dir(paragraph);
paragraph.innerText = "SpiderMan is also known as Peter Parker";

// Select the <div> with the class box and use innerHTML to replace its content with this HTML:

let box = document.querySelector(".box");
console.dir(box);
box.innerHTML = ` <h4>Alter Ego</h4>
<ul>
  <li>Peter Parker</li>
  <li>Miles Morales</li>
</ul>`;
