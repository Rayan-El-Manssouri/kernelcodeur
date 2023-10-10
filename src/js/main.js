// Sélectionner les éléments du DOM
var textarea = document.getElementById("text-input");
var lineContainer = document.getElementById("line-container");

// Ajouter un écouteur d'événement sur le scroll du textarea
textarea.addEventListener("scroll", function() {
  // Calculer le ratio de scroll
  var scrollRatio = textarea.scrollTop / (textarea.scrollHeight - textarea.clientHeight);
  // Appliquer le même ratio au line-container
  lineContainer.scrollTop = scrollRatio * (lineContainer.scrollHeight - lineContainer.clientHeight);
});

function countLineBreaks(str) {
    return (str.match(/\n/g) || []).length;
}

function createSpan(num) {
    var span = document.createElement("span");
    span.textContent = num;
    return span;
}

function updateLineCount() {
    var text = document.getElementById("text-input").value;
    var lineCount = countLineBreaks(text) + 1;
    var lineContainer = document.getElementById("line-container");
    lineContainer.innerHTML = "";
    for (var i = 1; i <= lineCount; i++) {
        var span = createSpan(i);
        lineContainer.appendChild(span);
    }
}

document.getElementById("text-input").addEventListener("input", updateLineCount);