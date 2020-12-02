import { app, BrowserWindow } from "electron";
import Main from "./lib/Controller/main";

const root: string = __dirname;


const isWindows = process.platform == "win32";
const spartan = new Main(root);

app.whenReady().then(() =>{
    spartan.startApp();
})

app.on("window-all-closed", () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on("activate", () =>{
    if(BrowserWindow.getAllWindows().length === 0){
        
    }
})
