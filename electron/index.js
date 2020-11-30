const { app } = require('electron');
const Controller = require("./lib/Controller/main");

//Is this windows....
const isOSWindows = process.platform == "win32";

// Spartan Controller does everything
//var splash = new Splash(BrowserWindow, screen, __dirname);
//var login = new Login(BrowserWindow, screen, __dirname);
const spartan = new Controller(__dirname, 
  require('./lib/Pages/splash'), 
  require('./lib/Pages/login')
);



// Making sure the app is ready for rendering..
app.whenReady().then(() => {
  spartan.start();
});

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
      spartan.start();
  }
})