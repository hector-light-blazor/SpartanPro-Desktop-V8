let _self = null
class Login{



    constructor(browser, screen){
        this.BrowserWindow = browser;
        this.screen = screen;
        this.height = 780;
        this.width = 375;
        _self = this;
    }


    start() {
       
        const {width, height} = _self.screen.getPrimaryDisplay().workAreaSize;
        if(_self.height < height){
            console.log("YES I AM SMALLER")
            _self.height = _self.height - 20;
        }
        const win = new _self.BrowserWindow({
            width: _self.width,
            height: _self.height,
            frame: false,
            resizable: false,
            hasShadow: true,
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