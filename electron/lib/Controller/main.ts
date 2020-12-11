import Window from "../Controller/Window";
import {ipcMain, BrowserWindow} from "electron";
import  * as io from "socket.io-client";
import Knex = require("knex");
import * as fs from "fs";
import * as dns from "dns";

var ini = require("ini");

export default class Main{
    root: String;
    win: Page;
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
            "MAIN": new Window(root,Spartan.name,
                Spartan.width, Spartan.height,
                Spartan.url, true),
            "SPLASH" : new Window(root, Splash.name, 
                Splash.width, Splash.height,
                `file://${root}/${Splash.url}`
                
                ), //new Splash(root),
            "LOGIN": 
            new Window(root, Login.name,
            Login.width, Login.height, 
            `file://${root}/${Login.url}`
            ),
            //new Login(root),
            "PROFILE": null,
            "GIS" : null,
            "TICKET" : null
        }
        


        //Read the configuration file.
        this.config = ini.parse(fs.readFileSync(`${root}/app/config/config.ini`));
    }

    startApp(){
        this.win.MAIN.start();
        //this.win['SPLASH'].start();
        //this.win['LOGIN'].start();
       // this.setupDBCON();
       // this.ipcEvents();
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
            if(data.page == "login" && data.load){
                this.win.LOGIN.send('on:local', this.localNetwork);
            }
        })

    }

    notifyAllPages(){
       this.win.LOGIN.send('on:local', this.localNetwork);
    }

    showForm(page:any){
        this.win[page].show();
    }

    closeForm(page: any){
        this.win[page].close();
    }
    
}

interface Page{
    MAIN: Window,
    LOGIN: Window,
    SPLASH: Window,
    PROFILE: any,
    GIS: any,
    TICKET: any
}

enum Spartan{
    name = "SPARTAN",
    width = 1923,
    height = 1196,
    url = "http://localhost:4200",
}

enum Splash {
    name = "SPLASH",
    width = 1000,
    height = 680,
    url = "app/splash-app/index.html"
}

enum Login {
    name = "LOGIN",
    width = 375,
    height = 812,
    url = "app/login-app/index.html"
}