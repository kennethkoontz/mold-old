var fs =  require('fs'),
    path = require('path');

/* Get all of the controllers in Mold app.
 */
var controllerPath = path.join(process.cwd(), 'app');
var contents = fs.readdir(controllerPath, function (err, files) {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
    }
});
