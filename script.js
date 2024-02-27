const heroSection = document.getElementById("hero-section");
const parentHeight = heroSection.clientHeight;
const divHeight = 10; // Assuming each div has a height of 50px
const numberOfDivs = Math.ceil(parentHeight / divHeight);

for (let i = 0; i < numberOfDivs; i++) {
    const fxDiv = document.createElement("div");
    fxDiv.classList.add("fx-div");
    
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("inner-div");
    
    fxDiv.appendChild(innerDiv);
    heroSection.appendChild(fxDiv);
}

