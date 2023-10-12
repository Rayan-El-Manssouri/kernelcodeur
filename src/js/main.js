var textInput = document.getElementById("text-input");
var div2 = document.getElementById("div2");
let parent = document.getElementById("line-container");

function changeOpacity(id) {
    id = "textCode_" + id;
    var lineBalise = document.getElementById(id);
    var span = document.querySelectorAll('span');
    // Parcourir la collection de span
    for (var i = 0; i < span.length; i++) {
        // Enlever la classe selected de chaque span
        span[i].classList.remove("selected");
    }
    // Vérifier que l'élément lineBalise existe
    if (lineBalise) {
        // Ajouter la classe selected à l'élément lineBalise
        lineBalise.classList.add("selected");
    }
}

function getCursorLine(textarea) {
    var cursorPos = textarea.selectionStart;
    var lineCount = 0;
    for (var i = 0; i < cursorPos; i++) {
        if (textarea.value[i] == "\n") {
            lineCount++;
        }
    }
    return lineCount + 1;
}

function countLineBreaks(str) {
    return (str.match(/\n/g) || []).length;
}

function createSpan(num) {
    var span = document.createElement("span");
    span.textContent = num;
    span.id = "textCode_" + num;
    return span;
}

function updateLineCount() {
    var text = textInput.value;
    var lineCount = countLineBreaks(text) + 1;
    var lineContainer = document.getElementById("line-container");
    lineContainer.innerHTML = "";
    for (var i = 1; i <= lineCount; i++) {
        var span = createSpan(i);
        lineContainer.appendChild(span);
    }
}

textInput.addEventListener("scroll", function () {
    div2.scrollTop = textInput.scrollTop;
    div2.scrollLeft = textInput.scrollLeft;
});

textInput.addEventListener("click", function () {
    var line = getCursorLine(textInput);
    changeOpacity(line)
});

textInput.addEventListener("keyup", function () {
    var line = getCursorLine(textInput);
    changeOpacity(line)
});

document.getElementById("text-input").addEventListener("input", updateLineCount);