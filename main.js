const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

let selectedFolder;
let mainWindow; 

const createLoadingWindow = () => {
  const loadingWindow = new BrowserWindow({
    icon: "./public/assets/logo.png",
    width: 400,
    height: 400,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: false
    }
  })
  loadingWindow.loadFile('./loader/loading.html')
  return loadingWindow
}

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    icon: "./public/assets/logo.png",
    width: 800,
    height: 600,
    // frame: false,
    show: false,
    backgroundColor: "rgb(38, 39, 40",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true
    }
  })
  mainWindow.maximize()
  mainWindow.loadURL('http://localhost:3000')
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    loadingWindow.close()
  })
}

let loadingWindow

app.whenReady().then(() => {
  loadingWindow = createLoadingWindow()
  createMainWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      loadingWindow = createLoadingWindow()
      createMainWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.handle('open-folder', async (event) => {
  const result = await dialog.showOpenDialog({
    properties: ['openDirectory']
  });

  if (!result.canceled && result.filePaths.length > 0) {
    selectedFolder = result.filePaths[0];
    return selectedFolder;
  }
});

ipcMain.handle('open-file-directory', async (event, fileName) => {
  try {
    if (selectedFolder) {
      const filePath = path.join(selectedFolder, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      return fileContent;
    } else {
      return null; // Ou une erreur spécifique si selectedFolder n'est pas défini
    }
  } catch (error) {
    console.error(error);
    return null;
  }
});
