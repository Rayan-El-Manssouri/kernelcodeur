const textInput = document.getElementById("text-input");
const div2 = document.getElementById("div2");
const onglets = document.querySelectorAll('.onglets')
const files = document.querySelectorAll('.file')
const file = document.querySelector(".file");

let index = 0;

function changeOpacity(id) {
    var e = document.getElementById("textCode_" + id),
        t = document.querySelectorAll("p");
    for (var n = 0; n < t.length; n++)t[n].classList.remove("selected"); e && e.classList.add("selected")
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
    var span = document.createElement("p");
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

onglets.forEach(onglet => {
    onglet.addEventListener('click', () => {
        if (onglet.classList.contains('active')) {
            return;
        } else {
            onglet.classList.add('active')
        }
        index = onglet.getAttribute('data-anim')
        for (i = 0; i < onglets.length; i++) {
            if (onglets[i].getAttribute('data-anim') != index) {
                onglets[i].classList.remove('active')
            }
        }

        for (j = 0; j < files.length; j++) {
            if (files[j].getAttribute('data-anim') == index) {
                files[j].classList.add('activeContenu')
            } else {
                files[j].classList.remove('activeContenu')
            }
        }

        textInput.addEventListener("keyup", function () {
            var line = getCursorLine("#text-input");
            changeOpacity(line)
        });

    })
});