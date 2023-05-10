/**
 DOM is an API that represents and interacts with HTML
 or XML documents
 */
const button = document.getElementById("button");
// 1. Listen for the click on the button
button.addEventListener("click", addImage);

// 2.a Get the input
const input = document.getElementById("input");
const header = document.getElementById("header");
const form = document.getElementById("form");
const projectsContainer = document.getElementById("projectsContainer");

// Add Image

function addImage(event){
    event.preventDefault();
    // 3. create a new image element
    const img = document.createElement("img");

    // div.appendChild(img)

    // 2b. Get the contents of the input
    // 4. use those contents as the "src" of the image
    // that you just created 
    img.src = input.value;

    img.style.height = "250px";
    img.style.width = "250px";
    img.style.marginRight = "10px";
    img.style.marginTop = "10px";
    img.style.marginLeft = "10px";
    // img.setAttribute("id", "image");
    // document.body.insertBefore(img, form); 
    projectsContainer.appendChild(img);
    // do appendChild: so it appends a node(element)
    // as the last child of the element
}

