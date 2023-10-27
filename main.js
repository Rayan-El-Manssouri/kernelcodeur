const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    icon: "./public/assets/logo.png",
    width: 800,
    height: 600,
    frame: false
  })
  mainWindow.maximize()
  mainWindow.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})