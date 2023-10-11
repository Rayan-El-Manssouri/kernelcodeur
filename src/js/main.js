var textInput = document.getElementById("text-input");
var div2 = document.getElementById("div2");

textInput.addEventListener("scroll", function () {
  div2.scrollTop = textInput.scrollTop;
  div2.scrollLeft = textInput.scrollLeft;
});

div2.addEventListener("scroll", function () {
  textInput.scrollTop = div2.scrollTop;
  textInput.scrollLeft = div2.scrollLeft;
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