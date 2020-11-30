let _self = null
class Login{



    constructor(browser, screen, dir){
        this.BrowserWindow = browser;
        this.screen = screen;
        this.root = dir;
        this.height = 812;
        this.width = 375;
        this.win = null;
        _self = this;
    }


    start() {
       
        const {width, height} = _self.screen.getPrimaryDisplay().workAreaSize;
        if(_self.height > height){
            console.log("YES I AM greater")
            _self.height = _self.height - 20;
        }
        this.win = new _self.BrowserWindow({
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

        this.win.loadURL('http://localhost:4200');

        this.win.once('ready-to-show', () =>{
            this.win.center();
            this.win.show();
         })

    }

    show()
    {
        this.win.show();
    }

    close(){
        this.win.close();
    }

    hide(){
        this.win.hide();
    }

}

module.exports = Login;