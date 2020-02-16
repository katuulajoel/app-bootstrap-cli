#!/usr/bin/env node
const readline = require("readline");
const fs = require('fs'); // todo: manage file creation in separate.
const process = require('process'); // todo: manage this in separate file.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var repository = null
var repository = null
var directory = null

/**
 * Read initial information on your user.
 * @param repo User repository where they want to set the new project
 * @param fwork the javascript framework that the user wants to use
 */
rl.question("Git Repository ? ", function(repo) {
    rl.question("Frontend Framework ? ", function(fwork) {
        rl.question("Application Name ? ", function(dir) {
            repository = repo
            framework = fwork
            directory = dir
            rl.close();
        });
    });
});

rl.on("close", function() {
    if(repository && framework){

        if (!fs.existsSync(directory)){
            fs.mkdirSync(directory);

            try {
                process.chdir(directory);
                
            }
            catch (err) {
                console.log('chdir: ' + err);
            }

        }else{
            console.log('failed to create directory')
        }

        var react_repo = 'https://github.com/katuulajoel/react-temp.git'

        console.log(`Repo: ${repository} and framework is ${framework}`)
    }
    process.exit(0);
});