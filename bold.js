let boldBtn = document.getElementById('Bold-Btn');
let boldClickListener = (event) => {
    event.preventDefault();
    // Get selection
    let selection = window.getSelection();
    // Get string of text from selection
    let text = selection.toString();
    // Create bolded element that will replace the selected text
    let final = `<span class="text-bold">${text}</span>`;
    // Replace the selected text with the bolded element
    selection.anchorNode.parentElement.innerHTML = selection.anchorNode.parentElement.innerHTML.replace(text, final);
};