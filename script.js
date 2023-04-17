function autoResizeTextarea() {
    const textarea = document.getElementById('textbox');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}