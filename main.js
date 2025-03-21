document.addEventListener('DOMContentLoaded', (event) => { 
    // Associates the variable name with the section ID
    const titleSection = document.getElementById('title');
    const sunsetSection = document.getElementById('sunset');
    const childrenSection = document.getElementById('children');
    const pondSection = document.getElementById('pond');

    // Associates the variable with the naviagation bar id
    const titleButton = document.getElementById('titleButton');
    const sunsetButton = document.getElementById('sunsetButton');
    const childrenButton = document.getElementById('childrenButton');
    const pondButton = document.getElementById('pondButton');

    // Sets title page as front page
    titleSection.style.display = "flex";
    sunsetSection.style.display = "none";
    childrenSection.style.display = "none";
    pondSection.style.display = "none";

    // These are the event listeners for the nav bar
    titleButton.addEventListener('click', function() {
        console.log('titleButton eventListener triggered');
        titleSection.style.display = "flex";
        sunsetSection.style.display = "none";
        childrenSection.style.display = "none";
        pondSection.style.display = "none";
    });
    sunsetButton.addEventListener('click', function() {
        console.log('sunsetButton eventListener triggered');
        titleSection.style.display = "none";
        sunsetSection.style.display = "flex";
        childrenSection.style.display = "none";
        pondSection.style.display = "none";
    });
    childrenButton.addEventListener('click', function() {
        console.log('childrenButton eventListener triggered');
        titleSection.style.display = "none";
        sunsetSection.style.display = "none";
        childrenSection.style.display = "flex";
        pondSection.style.display = "none";
    });
    pondButton.addEventListener('click', function() {
        console.log('pondButton eventListener triggered');
        titleSection.style.display = "none";
        sunsetSection.style.display = "none";
        childrenSection.style.display = "none";
        pondSection.style.display = "flex";
    });
});