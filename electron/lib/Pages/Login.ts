import {  BrowserWindow} from "electron";
import {screen} from "electron/main"
export default class Login{

    root: String;
    height: number = 812;
    width: number = 375;
    win: BrowserWindow;

    constructor(root: String)
    {
        this.root = root;
    }

    start(): void{
        
        const {width, height} = screen.getPrimaryDisplay().workAreaSize;
        this.win = new BrowserWindow({
            width: this.width,
            height: this.height,
            frame: false,
            show: false,
            hasShadow: true,
            maximizable: false,
            resizable: false,
            transparent: true,
            backgroundColor: '#00ffffff',
            webPreferences: {
                preload: `${this.root}/lib/preload.js`
            }
        })

        this.win.loadURL('http://localhost:4200')
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