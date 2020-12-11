import {  BrowserWindow} from "electron";
import {screen} from "electron/main"
import { clearScreenDown } from "readline";
export default class Window{

    root: String;
    height: number;
    width: number;
    win: BrowserWindow;
    url: string;
    name: string;
    show: boolean;

    constructor(root: String,name: string, width: number, height: number, url: string, show: boolean = false)
    {
        this.root = root;
        this.width = width;
        this.height = height;
        this.url = url;
        this.name = name;
        this.show = show;
    }

    start(SCOption: boolean = false, devTools: boolean = false, once: boolean = false): void{
        
        console.log("starting");

        if(SCOption){
            const {width, height} = screen.getPrimaryDisplay().workAreaSize;
        }
       
        this.win = new BrowserWindow({
            width: this.width,
            height: this.height,
            frame: false,
            hasShadow: true,
            maximizable: false,
            resizable: false,
            show: this.show,
            transparent: true,
            backgroundColor: '#00ffffff',
            webPreferences: {
                preload: `${this.root}/lib/preload.js`
            }
        })

        if(devTools){
            this.win.webContents.openDevTools();
        }
       
        if(once){
            // Once ready tell the login page the root
            this.win.once('ready-to-show', () => {
                this.win.webContents.send("root", this.root);
            });
        }

        //this.win.loadURL(`file://${this.root}/app/login-app/index.html`)
        //this.win.loadURL('http://localhost:4200')
        console.log(this.url);
        this.win.loadURL(this.url);
    }


    display()
    {
        this.win.show();
    }

    close(){
        this.win.close();
    }

    hide(){
        this.win.hide();
    }

    send(event, data){
        this.win.webContents.send(event, data);
    }

}