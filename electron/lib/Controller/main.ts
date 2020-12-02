import Login from "../Pages/Login";
import Splash from "../Pages/Splash";
import {ipcMain} from "electron";
import  * as io from "socket.io-client";
import Knex = require("knex");

export default class Main{
    root: String;
    win: any;
    loSocket: typeof io.Socket;
    remoteSocket: typeof io.Socket;
    localNetwork: boolean;
    pg: Knex;
    constructor(root: String) {
        this.root = root;
        
        this.win = {
            "Main": null,
            "Splash" : new Splash(root),
            "LOGIN": new Login(root),
            "Profile": null,
            "GIS" : null,
            "TICKET" : null
        }

        

        // Connect to local server socket..
        //this.loSocket = io("http://localhost:3000");
        // Connect to remote server
        // this.remoteSocket = io("");

        this.ipcEvents();
        this.setupDBCON();
    }

    startApp(){
        this.win['Splash'].start();
        this.win['LOGIN'].start();
    }

    setupDBCON():void{
        this.pg =  Knex({
            client: 'pg',
            

        })
        
    }

    ipcEvents() {
        ipcMain.on("window:action", (event, data) =>{

        })

        ipcMain.on('on:load', (event, data)=>{
            this.win[data.page].show();
        })
    }

    showForm(page:any){
        this.win[page].show();
    }

    closeForm(page: any){
        this.win[page].close();
    }
    
}