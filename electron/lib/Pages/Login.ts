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
            hasShadow: true,
            maximizable: false,
            resizable: false,
            transparent: true,
            backgroundColor: '#00ffffff',
            webPreferences: {
                preload: `${this.root}/lib/preload.js`
            }
        })

        // Once ready tell the login page the root
        this.win.once('ready-to-show', () => {
            this.win.webContents.send("root", this.root);
        });

        this.win.loadURL(`file://${this.root}/app/login-app/index.html`)
        //this.win.loadURL('http://localhost:4200')
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

    window(): BrowserWindow{
        return this.win;
    }
}