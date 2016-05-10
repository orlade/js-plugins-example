#!/usr/bin/env node

var Plugins = require('js-plugins');
var pluginManager = new Plugins();

// A sample host object that will be available to the plugins when they register themselves.
var host = {
    debug: true
};

// Scan for plugin packages defined elsewhere in this repository.
// These will be processed on pluginManager.connect().
pluginManager.scanSubdirs([__dirname, __dirname + '/local']);

// Scan for plugin packages installed globally.
// These will also be processed on pluginManager.connect().
pluginManager.scan();

// Register a plugin within the app.
// This will also be processed on pluginManager.connect().
pluginManager.register('multigreet:audience', 'world', function (data, host, options) {
    if (host && host.debug) {
        console.log("Registering 'World' as an audience from within host application");
    }
    return {
        getDisplayName: function () {
            return "World";
        }
    }
});

// Process all the plugins detected through scanning and direct registration.
// Once processed, generate an appropriate output string for the connected audiences.
pluginManager.connect(host, 'multigreet:audience', {multi: true}, function (err, outputs, names) {
    if (host.debug) {
        console.log("Connected plugins", names);
    }
    var names = outputs.map(function (plugin) {
        return plugin.getDisplayName();
    });

    console.log('Hello', names.join(', ').replace(/, ([^,]*)$/, ' and $1!'));
});


