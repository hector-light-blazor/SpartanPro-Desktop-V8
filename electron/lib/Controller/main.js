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

    }

    start(){
        this.win['Splash'].start();
        this.win['Login'].start();
    }
    
    // Handle all the events from the browserwindows..
    ipcEvents(){

        // Window action for any window..
        ipcMain.on("window:action", (event, data) =>{

        });

        ipcMain.on('on:load', (event, data) =>{

        })

    }

    showForm(page){
        this.win[page].show();
    }
    closeForm(page){
        this.win[page].close();
    }

}


module.exports = Controller;