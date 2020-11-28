let _self = null
class Login{



    constructor(browser, screen, dir){
        this.BrowserWindow = browser;
        this.screen = screen;
        this.root = dir;
        this.height = 812;
        this.width = 375;
        _self = this;
    }


    start() {
       
        const {width, height} = _self.screen.getPrimaryDisplay().workAreaSize;
        if(_self.height > height){
            console.log("YES I AM greater")
            _self.height = _self.height - 20;
        }
        const win = new _self.BrowserWindow({
            width: _self.width,
            height: _self.height,
            frame: false,
            show: false,
            hasShadow: true,
            maximizable: false,
            resizable: false,
            transparent: true,
            backgroundColor: "#00ffffff"
        });

        win.loadURL('http://localhost:4200');

        win.once('ready-to-show', () =>{
            win.show();
        })
    }

}

module.exports = Login;