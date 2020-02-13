#!/usr/bin/env node
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Git Repository ? ", function(repo) {
    rl.question("Frontend Framework ? ", function(framework) {
        console.log(`${repo}, is repo and framework ${framework}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});