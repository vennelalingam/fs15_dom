/** 
DOM
Document Object Model

The DOM model is structured like a tree.
*   Root
*   Element
*   Node
*   Text Node
*   Attribute

Manipulating DOM with Js
* JS can add, change and remove all of the HTML elements
and attributes in the page.
- By adding: Query elements and change attributes.
* JS can change all of the CSS styles in the page.
- By adding: Change style.attributes or classLists names.
* JS can react to all of the existing events in the page.
- By adding: addEventListeners
* JS can create new events within the page.
- By adding: new Event() 
*/

// To make changes on the browser dynamically :
// in the console type:
// demo.innerText = "Document Object Model - DOM"
/***
 But this dosen't make any changes in the html file and
 once we refresh the browser the original html file loads.
 So connect html to js and make changes in js file
*/

/******************  DEMO  **********************/

// const demo = document.getElementById("demo");

// demo.innerText = "Document Object Model - DOM";

// demo.addEventListener("mousemove", handleClick);

// function handleClick(event){

//     demo.innerText = `You clicked on x:${event.x}
//     y:${event.y}`;

//     if(event.x > 300) {
//         demo.style.backgroundColor = "orange";
//     } else {
//         demo.style.backgroundColor = "green";
//     }
// }

// // adding eventListener

// demo.addEventListener("click", () => {
//     const newElement = document.createElement("div");
//     newElement.innerText = "Hello";
//     document.body.appendChild(newElement);
// });

/***********
 * For Input: there is one specific attribute to access
    the inner contents/text  i.e the "value"
 * The appendChild() method appends a node (element) as the last child of an element
 */