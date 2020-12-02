import { BrowserWindow } from "electron";
export default class Splash{
    root: String;
    win: BrowserWindow;

    constructor(root: String){
        this.root = root;
    }
    

    start():void{
        this.win = new BrowserWindow({
            width: 1000,
            height: 680,
            frame: false,
            show: false,
            resizable: false,
            backgroundColor: '#00ffffff',
            hasShadow: true,
            transparent: true
        })

        this.win.loadURL(`file://${this.root}/app/splash-app/index.html`)
        this.win.once('ready-to-show', () => {
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