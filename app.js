

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


/** let head = document.querySelector("h1");
console.dir(head);
head.innerText = "Spider Peter parker";
head.innerHTML = "<u> Spider Peter Parker </u>"; **/

//Select the first <p> tag on your page and use innerText to change its text to:
// "Spider-Man is also known as Peter Parker."

let paragraph = document.querySelector("p");
console.dir(paragraph);
paragraph.innerText = "SpiderMan is also known as Peter Parker";

// Select the <div> with the class box and use innerHTML to replace its content with this HTML:



// Manipulating Attributes.. 
let picture = document.querySelector("img");
console.dir(picture);
console.dir(picture.style);

/** let heading = document.querySelector("h1");
console.dir(heading.style);
heading.style.fontSize = " 25px";
heading.style.color = "maroon";
heading.style.backgroundColor = " yellow"; **/

// Changing the anchor tags color to yellow as well as making it in italic form:- 
let anchors = document.querySelectorAll(".box a");

for ( let i=0; i<anchors.length; i++){
    anchors[i].style.color= "yellow";
    anchors[i].style.fontStyle  = "italic";
}


// Select all <li> elements inside the .box div and:
// Change their text color to green.
// Make their text bold.

let links = document.querySelectorAll(".box li");

for ( let i=0; i<links.length; i++){
    links[i].style.color = "green";
    links[i].style.fontWeight = "bold";
}

// Select the element with the id description and use innerHTML to add the following content:
let descp = document.querySelector("#description");
console.dir(descp);
descp.innerHTML = `<b> Origin: </b> Bitten by radioActive Spider Peter parker gained superhuman abilities and become a SpiderMan`;

// Select the <img> element with the id mainImg and use JavaScript to:
//Change its alt attribute to "Spider-Man swinging through the city".
//Change its src attribute to "assets/spiderman_alt.png" (make sure this image exists in your assets folder).

let myImage = document.querySelector("#mainImg");
myImage.setAttribute("alt", "Spiderman Swininging through the city");
myImage.setAttribute("src", "assets/creation_3.jpeg");

// Adding elements to the html page:- 

let newPara = document.querySelector("p");
console.dir(newPara);
let body = document.querySelector("body");
newPara.innerText = " I am learning webdev from Apna college ";
body.appendChild(newPara);

// Add a New Heading
// Create an <h2> element.
// Add text: "JavaScript DOM Practice".
// Append it to the body.


let newHead = document.createElement("h2");
newHead.innerText = " JavaScript DOM Practice";
body.appendChild(newHead);


//Add Multiple List Items
/** Create an <ul>.
Add 3 <li> items: "HTML", "CSS", "JavaScript".
Append the list to the body. **/

let un = document.createElement("ul");

let li = document.createElement("li");
li.innerText = "HTML DONE";

let li2 = document.createElement("li")
li2.innerText = "CSS DOne";

let li3 = document.createElement("li");
li3.innerText = "JavaScript Ongoing";

body.appendChild(li);
body.appendChild(li2);
body.appendChild(li3);

// Image task:- 
let newImage = document.querySelector("img");
newImage.setAttribute("src", "assets/creation_3.jpeg");
let imageSection = document.querySelector(".images");
imageSection.appendChild(newImage);

console.dir(newImage);
newImage.classList;
newImage.classList.add("newClass");

// Create a newButton tasks:- 
let button1 = document.createElement("button");
button1.innerText = "DOM here Please Click";

let box = document.querySelector(".box");
box.appendChild(button1);

// Creating a new class and deleting it...
newPara.classList;
console.dir(newPara);
console.log(newPara.classList);
newPara.classList.add("classA");
newPara.classList.toggle("classB");
// Now we removed that class:- 
newPara.classList.toggle("classA");


// Creating new button in the body:- 

let newButton = document.createElement("button");
newButton.innerText = "New Button Here !!";

body.appendChild(newButton);

// select h1 and change its text to " dom is powerful";
let newHeader = document.querySelector("h1");
console.dir(newHeader);
newHeader.innerText = " DOM IS POWERFUL";

newHeader.style.color = "purple";
newHeader.style.borderWidth = "2px";
newHeader.style.borderStyle = "solid";
newHeader.style.borderRadius = "5px";
newHeader.style.borderColor = "maroon";
newHeader.style.paddingLeft = " 30px";

// Creating new button again... 
let Button2 = document.querySelector("button");
Button2.innerText = " Don't click here";

let para = document.querySelector("p");

para.appendChild(Button2);
Button2.style.marginLeft = "20px";

// Task 1: Add a new list item to an existing <ul>
/** Select an unordered list <ul> in your HTML.
Create a new <li> element with text "New Item Added".
Append this <li> to the <ul>.
Style it (e.g., background color, padding). **/

let myUnorder = document.querySelector("ul");
let newList = document.createElement("li");
newList.innerText = "New Item Added";

myUnorder.appendChild(newList);

// Task 2: Add an image inside a <div>
// Create a new <img> element.
// Set its src to any image link (e.g., "https://picsum.photos/200").
// Append it inside a <div> using appendChild().
// Set its width and border.

let imageBox = document.querySelector(".images");
let newImg = document.createElement("img");
newImg.setAttribute("src", "./assets/marvel.avif");

imageBox.appendChild(newImg);
newImg.style.height = "20px";
newImg.style.width = "20px";

// Task 3: Add a span to an existing paragraph
/** Select a <p> element.
Create a new <span> element with text " - Extra Info".
Use para.append(span) to attach it to the paragraph.
Style the span with different color and bold font. **/

let mySpan = document.createElement("span");
console.dir(mySpan);

mySpan.innerText = "-- Extra Info ";
para.appendChild(mySpan);

// Dealing with class Lists... 
let todayHead = document.querySelector("h1");
console.dir(todayHead.classList);
todayHead.classList.add("heading1");
todayHead.classList.add("tittle");
console.dir(todayHead.classList);
todayHead.classList.toggle("tittle");

console.dir(todayHead.classList);

// Select any <p> element.
// Add a class named "info" to it.
// Use classList.contains("info") and console.log() the result.
// If the class exists, also change its text color to "blue".
// 👉 This will help you practice checking for classes and using them conditionally.

let par = document.querySelector("p");
console.log(par.classList);
par.classList.add("info");
par.classList.contains("info");

// Creating one more button for practice:- 
let newBtn = document.createElement("button");
newBtn.innerText = "1st Click here ";

let mySecond = document.querySelector(".info");
mySecond.appendChild(newBtn);

// Now using append function:- 

let newP = document.querySelector("p");
newP.append(" This is new content added over here");

// Now I am appending text as well as elements together in my code:- 
let headingSector = document.querySelector("h1");

let newSpan = document.createElement("span");
newSpan.innerText = "I am the new span element";
newSpan.style.color = "purple";

headingSector.append(" Welcome to the club", newSpan); // Combining multiple text and elements together...

// Appending multiple lists together..

let codeLists = document.querySelector("ul");

let list1 = document.createElement("li");
list1.innerText = "NodeJs";

let list2 = document.createElement("li");
list2.innerText = "MongoDB";

let list3 = document.createElement("li");
list3.innerText = "React";

codeLists.append(list1, list2, list3); // Appended the list items 

console.dir(codeLists.classList);
codeLists.classList.add("aclass"); // Just a demo class added.. 

codeLists.classList.add("lists"); // A class already created in the css 

// Now we append the image as well as caption together..

let newPart = document.querySelector(".newSection");

let newHeroimage = document.createElement("img");
newHeroimage.src = "./assets/superheroes.jpg";
newHeroimage.style.width = "250px";
newHeroimage.style.height = " 200px";
newHeroimage.style.borderWidth = "2px";
newHeroimage.style.borderColor = "green";
newHeroimage.style.borderStyle = "solid";
newHeroimage.style.marginLeft = "20px";
newHeroimage.style.marginTop = "20px";



let Caption = document.createElement("p");
Caption.innerText = "Animated Superheroes";
Caption.style.fontStyle = "italic";

newPart.append(newHeroimage, Caption);

// using prepend element but this adds on the top of the webPage:-

let webBody = document.querySelector("body");

let pageBtn = document.createElement("button");
pageBtn.innerText = "Top Click";

webBody.prepend(pageBtn);  // This is basically used to add on the top of the page:- 

// Creting and alert banner on the top of the page:- 
let alertBanner = document.createElement("div");
alertBanner.innerText = " 🚨 System Maintenance: 2:00 AM - 4:00 AM";
alertBanner.style.color = "Crimson";
alertBanner.style.backgroundColor = " PeachPuff";
alertBanner.style.borderWidth = "2px";
alertBanner.style.borderColor = "maroon";
alertBanner.style.borderStyle = "solid";
alertBanner.style.borderRadius = "5px";
alertBanner.style.textAlign = "center"; 
alertBanner.style.fontSize = " 1.22em";
alertBanner.style.marginBottom = " 10px";

webBody.prepend(alertBanner);


// In this part I am using insertAdjacent:- 
let headerTool = document.querySelector("h1");

let uniqueBtn = document.createElement("button");
uniqueBtn.innerText = " UNIQUE !!";
headerTool.insertAdjacentElement("afterend", uniqueBtn);

// insert adjacent part 2; 

let Mypara = document.querySelector("p");

console.dir(Mypara);

let paraBTN = document.createElement("button");
paraBTN.innerText = "Paragraph BTN!! ";

// Now we want to add the button before the paragraph..
Mypara.insertAdjacentElement("beforebegin", paraBTN);


