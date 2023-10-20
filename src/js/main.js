const textInput = document.getElementById("text-input");
const div2 = document.getElementById("div2");
const onglets = document.querySelectorAll('.onglets')
const file_onglets = document.querySelectorAll('.file_onglets');
const contenue = document.querySelectorAll('.file')
const files = document.querySelectorAll('.file_onglets')

let index = 0;

function changeOpacity(id) {
    var t = document.querySelectorAll("p");
    for (var n = 0; n < t.length; n++) {
        t[n].classList.remove("selected");
        if (t[n].id === "textCode_" + id) {
            t[n].classList.add("selected");
        }
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
    var span = document.createElement("p");
    span.textContent = num;
    span.id = "textCode_" + num;
    return span;
}

function updateLineCount(textarea_value, line_contenaire) {
    var text = textarea_value.value;
    var lineCount = countLineBreaks(text) + 1;
    var lineContainer = document.getElementById(line_contenaire);
    lineContainer.innerHTML = "";
    for (var i = 1; i <= lineCount; i++) {
        var span = createSpan(i);
        lineContainer.appendChild(span);
    }
}

function init(onglet, id_onglet) {
    const textareaonglet = document.getElementById(`text-input-data-anim-${id_onglet}`);
    const div_container = document.getElementById("div-line-contenaire-" + id_onglet);
    const line_container = "line-container-" + id_onglet;
    // Sélectionner tous les éléments qui ont la classe onglets
    var list_onglets = document.querySelectorAll('.onglets');

    if (onglet.classList.contains('active')) {
        // Parcourir tous les éléments et supprimer la classe active
        for (var i = 0; i < list_onglets.length; i++) {
            list_onglets[i].classList.remove('active');
        }
        onglet.classList.add('active')

        return;
    } else {
        // Parcourir tous les éléments et supprimer la classe active
        for (var i = 0; i < list_onglets.length; i++) {
            list_onglets[i].classList.remove('active');
        }
        onglet.classList.add('active')
    }

    const file_onglet_test = document.querySelectorAll('.file');
    for (var j = 0; j < file_onglet_test.length; j++) {
        var dataAnim = file_onglet_test[j].getAttribute('data-anim');

        if (dataAnim == id_onglet) {
            file_onglet_test[j].classList.add('activeContenu');
        } else {
            file_onglet_test[j].classList.remove('activeContenu');
        }
    }

    function clickHandler() {
        var line = getCursorLine(textareaonglet);
        changeOpacity(line);
        updateLineCount(textareaonglet, line_container);
    }
    textareaonglet.removeEventListener("input", clickHandler);
    textareaonglet.removeEventListener("keyup", keyupHandler);

    textareaonglet.addEventListener("scroll", function () {
        div_container.scrollTop = textareaonglet.scrollTop;
        div_container.scrollLeft = textareaonglet.scrollLeft;
    });

    textareaonglet.addEventListener("input", clickHandler);
    textareaonglet.addEventListener("keyup", keyupHandler);

    function keyupHandler() {
        var line = getCursorLine(textareaonglet);
        changeOpacity(line);
    }

    textareaonglet.addEventListener("input", function () {
        updateLineCount(textareaonglet, line_container);
    });
}

function ongletsfetch() {
    onglets.forEach(onglet => {
        const index = onglet.getAttribute('data-anim')
        onglet.addEventListener('click', () => {
            init(onglet, index)
        })
    });
}


// Cette fonction crée un nouvel onglet avec le contenu et le titre spécifiés
function ajouterOnglet(contenu, titre) {
    // On récupère les éléments du document
    let sectionOnglet = document.getElementById("section_onglet");
    let onglets = sectionOnglet.querySelectorAll(".onglets");
    let corps = sectionOnglet.nextElementSibling;

    // On crée le nouvel élément onglet
    let nouvelOnglet = document.createElement("section");
    nouvelOnglet.className = "onglets";
    nouvelOnglet.dataset.anim = onglets.length + 1;
    let id = nouvelOnglet.dataset.anim
    

    // On crée le logo du fichier
    let logo = document.createElement("object");
    logo.data = "../assets/logo_file.svg";
    logo.type = "image/svg+xml";
    let img = document.createElement("img");
    img.src = "../assets/logo_file.svg";
    logo.appendChild(img);

    // On crée le paragraphe avec le titre
    let p = document.createElement("p");
    p.textContent = titre;

    // On ajoute le logo et le paragraphe à l'onglet
    nouvelOnglet.appendChild(logo);
    nouvelOnglet.appendChild(p);
    

    // On ajoute l'onglet à la section des onglets
    sectionOnglet.appendChild(nouvelOnglet);

    // On crée le nouvel élément corps
    let nouveauCorps = document.createElement("section");
    nouveauCorps.classList.add('file')
    nouveauCorps.dataset.anim = onglets.length + 1;
    nouveauCorps.innerHTML = contenu;
    
    // On ajoute le corps à la section des corps
    corps.appendChild(nouveauCorps);
    nouvelOnglet.addEventListener('click', function () {
        init(nouvelOnglet, id)
    })
    if (id == 1) {
        nouvelOnglet.click()
    }
}


document.addEventListener("DOMContentLoaded", function () {
    ongletsfetch(),
        ajouterOnglet(`
    <div class="file" data-anim="1">
        <div class="count" id="div-line-contenaire-1" >
            <div id="line-container-1" style="height: 100%;">
                <p>1</p>
            </div>
        </div>
        
        <div class="text_code" >
            <div class="text_area">
                <textarea type="text" id="text-input-data-anim-1" autofocus></textarea>
            </div>
            <div class="text_separator"></div>
        </div>
    </div > 
    `, "Autre onglet");
    ajouterOnglet(`
    <div class="file" data-anim="2">
        <div class="count" id="div-line-contenaire-2" >
            <div id="line-container-2" style="height: 100%;">
                <p>1</p>
            </div>
        </div>
        
        <div class="text_code" >
            <div class="text_area">
                <textarea type="text" id="text-input-data-anim-2" autofocus></textarea>
            </div>
            <div class="text_separator"></div>
        </div>
    </div > 
    `, "Autre onglet 2");

});