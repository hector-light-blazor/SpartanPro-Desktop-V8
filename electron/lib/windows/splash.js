let _self = null;
class Splash {

    constructor(browser, screen){
        this.BrowserWindow = browser;
        this.screen = screen;
        _self = this;
    }

    start() {
        const win = new _self.BrowserWindow({
            width: 1000,
            height: 928,
            frame: false,
            show: false,
            backgroundColor: "#00ffffff",
            hasShadow: true,
            transparent: true
          })
    
    
          win.loadURL(
            'http://localhost:4200/'
        )
    
        win.once('ready-to-show', () =>{
            win.center();
            win.show();
         })

    }
     


}

module.exports = Splash;