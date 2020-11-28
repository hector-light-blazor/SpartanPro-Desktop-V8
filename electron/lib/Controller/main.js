let _self = null
const {ipcMain, screen, BrowserWindow} = require('electron');
class Controller{

    constructor(dir, Splash, Login){


        this.win =  {
            "Main" : null,
            "Splash" : new Splash(BrowserWindow, screen, dir),
            "Login"  : new Login(BrowserWindow, screen, dir),
            "Profile" : null,
            "GIS" : null,
            "TICKET" : null
         };

        _self = this;

    }

    start(){
        _self.splash.start();
        _self.login.start();
    }
    
    // Handle all the events from the browserwindows..
    ipcEvents(){

        // Window action for any window..
        ipcMain.on("window:action", (event, data) =>{

        });

        ipcMain.on('on:load', (event, data) =>{

        })

    }

}


module.exports = Controller;