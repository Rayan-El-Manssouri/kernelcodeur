const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');
const electronAPI = {
    
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
                }
            });
        } catch (error) {
            console.error(error);
            return null;
        }
    },

};

contextBridge.exposeInMainWorld('electronAPI', electronAPI);