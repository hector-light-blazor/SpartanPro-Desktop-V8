import Login from "../Pages/Login";
import Splash from "../Pages/Splash";
import {ipcMain, BrowserWindow} from "electron";
import  * as io from "socket.io-client";
import Knex = require("knex");
import * as fs from "fs";
import * as dns from "dns";

var ini = require("ini");

export default class Main{
    root: String;
    win: any;
    loSocket: typeof io.Socket;
    remoteSocket: typeof io.Socket;
    localNetwork: boolean = false;
    pg: Knex;
    config: any;
    shell: any;

    constructor(root: String) {
        this.root = root;
        this.shell = (process.platform == "win32") ? require('node-powershell') : null;
        this.win = {
            "Main": null,
            "SPLASH" : new Splash(root),
            "LOGIN": new Login(root),
            "Profile": null,
            "GIS" : null,
            "TICKET" : null
        }
        


        //Read the configuration file.
        this.config = ini.parse(fs.readFileSync(`${root}/app/config/config.ini`));
        
        this.setupDBCON();
        this.ipcEvents();
        
    }

    startApp(){
        this.win['SPLASH'].start();
        this.win['LOGIN'].start();
    }



    setupSockets():void{
                // Connect to local server socket..
        //this.loSocket = io("http://localhost:3000");
        // Connect to remote server
        // this.remoteSocket = io("");
    }

    setupDBCON():void{

        //Before we setup pg we need to check if we are localNetwork
        let lookup: string = this.config.lookup.network;
        const dnsPromise: typeof dns.promises = dns.promises;
        const _self = this;
        dnsPromise.lookup(lookup).then((result) => {
            if(result){
                console.log("I FOUND DNS")
                _self.localNetwork = true;

                _self.pg =  Knex({
                    client: 'pg',
                    connection: {
                        host: _self.config.database.host,
                        user: _self.config.database.user,
                        database: _self.config.database.database
                    },
                    pool: {min: 0, max: 7}
                })
                _self.notifyAllPages();
            }
        }).catch((error) => {
            console.log("no dns")
            _self.localNetwork = false;
            _self.notifyAllPages();
        })
        
    }

    ipcEvents() {
        ipcMain.on("window:action", (event, data) =>{

        })

    }

    notifyAllPages(){
        console.log("I am going to notify all pages that local network")
        const loginWin: BrowserWindow = this.win.LOGIN.window()
        loginWin.webContents.send('on:local', this.localNetwork);
        
    }

    showForm(page:any){
        this.win[page].show();
    }

    closeForm(page: any){
        this.win[page].close();
    }
    
}