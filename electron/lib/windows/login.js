let _self = null
class Login{



    constructor(browser){
        this.BrowserWindow = browser;

        _self = this;
    }


    start() {

        const win = new _self.BrowserWindow({
            width: 375,
            height: 812,
            frame: false,
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