const { screen, app, BrowserWindow } = require('electron')
const Splash = require("./lib/windows/splash")
const Login = require("./lib/windows/login");



//Is this windows....
const isOSWindows = process.platform == "win32";

//Setup Window SPlash..
var splash = new Splash(BrowserWindow, screen, __dirname);
var login = new Login(BrowserWindow, screen);

// Making sure the app is ready for rendering..
app.whenReady().then(splash.start);




//If all windows are close quit the app..
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


// If the app is activated show splash screen..
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    
    //1.) Show the Splash...
      splash.start();
  }
})