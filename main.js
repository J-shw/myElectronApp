const { app, BrowserWindow, ipcMain } = require('electron');

// Creates the main window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,              
    height: 600,             
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // Loads HTML file into the window
  win.loadFile('renderer/app.html');
}

// Calls createWindow() when the app is ready
app.whenReady().then(createWindow);

ipcMain.handle("console", (event, line) => {
  console.log(`Received from frontend: ${line}`)
  return `Backend confirms it received: ${line}`
})

// Quits the app when all windows are closed (Windows & Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Opens a window if none are open (macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});