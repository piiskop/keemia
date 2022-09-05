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
  a.setAttribute("href", "manual-for-rstudio.pdf");
  a.innerHTML = "View printable book ";
  let p = document.createElement("p");
  p.appendChild(a);
  div.appendChild(p);
}

window.onload = function () {
  setTargets();
};
