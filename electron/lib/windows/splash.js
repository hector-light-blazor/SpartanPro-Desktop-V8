let _self = null;
class Splash {

    constructor(browser, screen, root){
        this.BrowserWindow = browser;
        this.screen = screen;
        this.root = root;
        _self = this;
    }

    start() {
        const win = new _self.BrowserWindow({
            width: 1000,
            height: 680,
            frame: false,
            show: false,
            backgroundColor: "#00ffffff",
            hasShadow: true,
            transparent: true
          })

          win.loadURL(`file://${_self.root}/app/splash-app/index.html`)
    
        win.once('ready-to-show', () =>{
            win.center();
            win.show();
         })

    }
     


}

module.exports = Splash;