/**
 DOM is an API that represents and interacts with HTML
 or XML documents
 */
const button = document.getElementById("button");
// 1. Listen for the click on the button
button.addEventListener("click", addImage);

// 2.a Get the input
const projectImage = document.getElementById("projectImage");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
// const header = document.getElementById("header");
// const form = document.getElementById("form");
const projectsContainer = document.getElementById("projectsContainer");
const newDiv = document.createElement("div");

const projects = [];
// Add / Display Image on screen
function addImage(event){
    event.preventDefault();
    // 3. create a new image element
    const img = document.createElement("img");

    newDiv.appendChild(img)

    // 2b. Get the contents of the input
    // 4. use those contents as the "src" of the image
    // that you just created 
    img.src = projectImage.value;

    img.style.height = "300px";
    img.style.width = "300px";
    img.style.marginRight = "10px";
    img.style.marginTop = "10px";
    img.style.marginLeft = "10px";
    
    // img.setAttribute("id", "image");
    // document.body.insertBefore(img, form); 
    projectsContainer.appendChild(newDiv);
    // do appendChild: so it appends a node(element)
    // as the last child of the element

    //store the project information
    const project = {
        title: projectTitle.value,
        image: projectImage.value,
        description: projectDescription.value
    };
    // console.log(project);
    projects.push(project);
}
// create a class - create an object if we do not call
// any methods and would like remember information
// to store information of title image 
// and description
// the obj can be inside an array to store the information
// everytime it is changed
// array is so called collection of obj

// type-- console.dir(projectImage) ---- to access all our values
// in the browser directly




