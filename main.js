

let boldBtn = document.getElementById('Bold-Btn');
let boldClickListener = (event) => {
  let selection = window.getSelection();
  let range = selection.getRangeAt(0);
  let parent = selection.anchorNode.parentElement;
  //if(selection.anchorNode.parentElement.innerHTM)
  let boldspan = document.createElement('span');
  boldspan.classList.add("text-bold");
  boldspan.textContent = selection;
  range.deleteContents();
  range.insertNode(boldspan);
  console.log(selection);
  console.log(parent);
  console.log(boldspan);
  console.log(selection.anchorNode.parentElement.innerHTML);
};


let italicBtn = document.getElementById('Italic-Btn');
let italicClickListener = (event) => {
  let selection = window.getSelection();
  let range = selection.getRangeAt(0);
  let parent = selection.anchorNode.parentElement;

  let boldspan = document.createElement('span');
  boldspan.classList.add("text-italic");
  boldspan.textContent = selection;
  range.deleteContents();
  range.insertNode(boldspan);
  console.log(boldspan);
  console.log(selection.anchorNode.parentElement.innerHTML);
};


let underlineBtn = document.getElementById('Underline-Btn');
let underLineClickListener = (event) => {
  let selection = window.getSelection();
  let range = selection.getRangeAt(0);
  let parent = selection.anchorNode.parentElement;

  let boldspan = document.createElement('span');
  boldspan.classList.add("text-underline");
  boldspan.textContent = selection;
  range.deleteContents();
  range.insertNode(boldspan);
  console.log(boldspan);
  console.log(selection.anchorNode.parentElement.innerHTML);
};

let leftalignBtn = document.getElementById('Left-Btn');
let leftalignClickListener = (event) => {
  let selection = window.getSelection();
  let range = selection.getRangeAt(0);
  let parent = selection.anchorNode.parentElement;
  let boldspan = document.createElement('span');
  boldspan.classList.add("text-left");
  boldspan.textContent = selection;
  range.deleteContents();
  range.insertNode(boldspan);
  console.log(boldspan);
  console.log(selection.anchorNode.parentElement.innerHTML);
};

let rightlineBtn = document.getElementById('Right-Btn');
let rightalignClickListener = (event) => {
  let selection = document.getElementById("contentEditable").innerHTML;
  let boldspan = document.createElement('span');
  boldspan.classList.add("text-right");
  boldspan.textContent = selection;
  console.log(boldspan);
  console.log(selection);
};

let centerlineBtn = document.getElementById('Center-Btn');
let centerLineClickListener = (event) => {
  let selection = document.getElementById("contentEditable").innerHTML;
  let range = selection.getRangeAt(0);
  let parent = selection.anchorNode.parentElement;

  let boldspan = document.createElement('span');
  boldspan.classList.add("text-center");
  boldspan.textContent = selection;
  range.deleteContents();
  range.insertNode(boldspan);
  console.log(boldspan);
  console.log(selection.anchorNode.parentElement.innerHTML);
};



boldBtn.addEventListener('click', boldClickListener);
italicBtn.addEventListener('click',italicClickListener);
underlineBtn.addEventListener('click',underLineClickListener);
leftalignBtn.addEventListener('click',leftalignClickListener);
rightlineBtn.addEventListener('click',rightalignClickListener);
centerlineBtn.addEventListener('click',centerLineClickListener);