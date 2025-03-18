Your mission, should you choose to accept it ...

index.html: 
Write a single page html file with links to the css files, an <h1> title over a nav bar which has four navigation buttons, and three sections with IDs "sunset", "children", and "pond".

The four navbar <a> tags should also have IDs (e.g. "titleButton", "sunsetButton", "childrenButton", and "pondButton"); 

style.css:
Give basic styling to your html document. 

main.js: 
Inside a document.addEventListener('DOMContentLoaded', (event) => { }) statement,
write a javascript program which listens for when each of the navbar buttons are clicked, and displays the relevant section, and hides the others.
hint: for example, use document.getElementById('sunset'), sunset.style.display = 'none'; sunset.style.display = 'flex';

Also inside the DOMContentLoaded statement, write an addEventListener which will change the <h1> title ... to be continued