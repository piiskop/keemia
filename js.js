/**
 * This function creates a link.
 * 
 * @param string div the <code>div</code> the link should be appended to
 * @param string id the identifier of the link anchor
 * @param string href the hyperlink
 * @param string text the link text
 */
function createLink(div, id, href, text) {
  let a = document.createElement("a");
  a.setAttribute("id", id);
  a.setAttribute("href", href);
  a.innerHTML = text;
  let p = document.createElement("p");
  p.appendChild(a);
  div.appendChild(p);
}

function setTargets() {

  let divs = document.getElementsByClassName("csl-entry");
  
  for (let i = 0; i < divs.length; i++) {
    let as = divs[i].getElementsByTagName("a");
    
    for (let j = 0; j < as.length; j++)
    {
       as[j].target = "_blank";
    }
  
  }
  
  document.getElementById("book-edit").target = "GitHub";
  document.getElementById("book-repo").target = "GitHub";
  document.getElementById("book-source").target = "GitHub";
  
  let div = document.getElementById("main-nav").getElementsByTagName("nav")[0].getElementsByClassName("book-extra")[0];
  let a = document.createElement("a");
  a.setAttribute("id", "book-print");
  a.setAttribute("href", "keemia.pdf");
  a.innerHTML = "trükiteisend";
  let p = document.createElement("p");
  p.appendChild(a);
  div.appendChild(p);
  let nameOfPresentation = "presentation";
  createLink(div, "presentation-" + nameOfPresentation, "qmd/" + nameOfPresentation + "/" + nameOfPresentation + ".html", "esitlus");
  createLink(div, "presentation-speaker-" + nameOfPresentation, "qmd/" + nameOfPresentation + "/" + nameOfPresentation + "-speaker.html", "kaugjuhtimine");
}

window.onload = function () {
  setTargets();
};
