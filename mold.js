#!/usr/bin/env node

var fs =  require('fs'),
    path = require('path'),
    cli = require('commander');


function makeMold(moldName) {
    /* Make the initial directories/files mold.
     *
     * [moldName]/app/models
     * [moldName]/app/views
     * [moldName]/app/controllers
     * [moldName]/routes.js
     */
    var moldDir = path.join(process.cwd, moldName),
        appDir = path.join(moldDir, 'app'),
        appSubDirs = ['models', 'views', 'controllers'],
        routesJsFile = path.join(moldDir, 'routes.js'),
        curSubDir,
        d;

    console.log('Creating %s mold...', moldName);

    // Create mold directory.
    fs.mkdirSync(moldDir);
    console.log('[Created]: %s', moldDir);

    // Create the app directory.
    fs.mkdirSync(appDir);
    console.log('[Created]: %s', appDir);

    // Create the models, views, controllers directories.
    for (d in appSubDirs) {
        curSubDir = path.join(appDir, appSubDirs[d]);
        fs.mkdirSync(curSubDir);
        console.log('[Created]: %s', curSubDir);
    }

    // Create the routes.js File.
    fs.writeFileSync(routesJsFile);
    console.log('[Created]: %s', routesJsFile);
}

cli .version('0.0.1')

    // mold create [name]
cli .command('create [name]')
    .description('create directories/files for mold')
    .action( function(name) {
        var noNameMsg = 'Could not create Mold app, please specify an app name.';
        if (typeof name === "undefined") {
            console.log(noNameMsg);
            process.exit(1);
        } else {
            makeMold(name);
        }
    });

cli.parse(process.argv);
