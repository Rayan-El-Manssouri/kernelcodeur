const { app, BrowserWindow } = require('electron')

const createLoadingWindow = () => {
  const loadingWindow = new BrowserWindow({
    width: 400,
    height: 400,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
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
    frame: false,
    show: false,
    backgroundColor: "rgb(38, 39, 40)",
    webPreferences: {
      nodeIntegration: true
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