/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Define Global Variables
const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section")


//End Global Variables
// Start Helper Functions

let scrollIntoSection = (element) => {

    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

}
// End Helper Functions
//Begin Main Functions
let getTopOfViewport = () => {
    for (let i = 0; i < sections.length; i++) {
        let TopOfViewport = sections[i].getBoundingClientRect();
        let dataNav = sections[i].getAttribute("data-nav");

        // Set sections as active

        if (TopOfViewport.top > 0 && TopOfViewport.top < 500) {
            sections[i].classList.add("your-active-class")

            // Set link as active
            let LinkName = document.querySelectorAll("a");
            for (let j = 0; j < LinkName.length; j++) {
                if (LinkName[i].innerText == dataNav) {
                    for (let i = 0; i < LinkName.length; i++) {
                        LinkName[i].style.background = "#000";
                    }
                    LinkName[i].style.background = "#fff";

                }
            }
        }
        else {
            sections[i].classList.remove("your-active-class");
        }
    }
}

// End Main Functions


// build the nav
for (let i = 0; i < sections.length; i++) {
    //Get data-nave to add it as LinkName
    let dataNav = sections[i].getAttribute("data-nav");
    let addLinkName = document.createTextNode(dataNav);
    // create li and a for the ui 
    let addNewList = document.createElement("li");
    let addNewLink = document.createElement("a");
    addNewList.appendChild(addNewLink);
    addNewLink.appendChild(addLinkName);
    navbarList.appendChild(addNewList);
    //Add class menu__link to to change the CSS of li 
    navbarList.classList.add("menu__link")
    // Scroll to anchor ID using scrollIntoSection & click event
    addNewLink.addEventListener("click", () => {
        scrollIntoSection(sections[i]);
    })
}



// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", getTopOfViewport);