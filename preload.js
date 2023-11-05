const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');
const electronAPI = {
    updateFileList: async (result) => {
        try {
            // Construisez l'URL avec le paramètre "result"
            const url = `http://localhost:3000/updateFileList?result=${result}`;
    
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Fetch failed with status ${response.status}`);
            }
    
            const htmlText = await response.text(); // Obtenez le texte de la réponse
    
            // Utilisez le DOMParser pour créer un document DOM à partir du texte HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');
    
            // Faites ce que vous voulez avec rootContent
            console.log(doc);
        } catch (error) {
            console.error(error);
        }
    },
    handleOpenFolder: async () => {
        try {
            const selectedFolder = await ipcRenderer.invoke('open-folder');
            const files = fs.readdirSync(selectedFolder);

            // Parcourir tous les fichiers et les transformer en éléments de liste avec icônes
            const fileList = files.map((file) => {
                return `<li>${file}</li>`;
            });

            // Récupérer les deux derniers mots du selectedFolder
            const folderWords = selectedFolder.split('\\');
            const lastTwoWords = folderWords.slice(-2).join('\\').replace('\\', ' / ');

            const DossierContenaire = document.getElementById('dosser-contenaire');
            DossierContenaire.innerHTML = `<h1>${lastTwoWords}</h1><ul>${fileList.join('')}</ul>`;
            // Dans le rendu (dans votre fichier HTML ou JS côté client)
            DossierContenaire.addEventListener('click', async (event) => {
                if (event.target.tagName === 'LI') {
                    const fileName = event.target.innerText;
                    const result = await ipcRenderer.invoke('open-file-directory', fileName);
                    const result_input = document.getElementById("result")
                    result_input.innerHTML = result
                    // Mettez à jour le fileList avec les résultats
                    electronAPI.updateFileList(result);
                }
            });
        } catch (error) {
            console.error(error);
            return null;
        }
    },

};

contextBridge.exposeInMainWorld('electronAPI', electronAPI);