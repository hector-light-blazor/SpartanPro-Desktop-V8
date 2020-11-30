let _self = null;
class Splash {

    constructor(browser, screen, root){
        this.BrowserWindow = browser;
        this.screen = screen;
        this.root = root;
        this.win = null;
        _self = this;
    }

    start() {
        this.win = new _self.BrowserWindow({
            width: 1000,
            height: 680,
            frame: false,
            show: false,
            resizable: false,
            backgroundColor: "#00ffffff",
            hasShadow: true,
            transparent: true
          })

          this.win.loadURL(`file://${_self.root}/app/splash-app/index.html`)
    
        this.win.once('ready-to-show', () =>{
            this.win.center();
            this.win.show();
         })

    }


     


}

module.exports = Splash;