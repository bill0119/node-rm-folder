function RemoveFolder (folderPath) {
    var path = require('path');
    var fs = require('fs');
    try {
        var fileList = fs.readdirSync(folderPath);
        for (var i = 0; i < fileList.length; ++i) {
            var file = path.join(folderPath, fileList[i]);

            var stat = fs.statSync(file);
            if (stat && stat.isDirectory()){
                RemoveFolder(file);
            } else {
				console.log('remove ' + file);
                fs.unlinkSync(file);
            }
        }

		console.log('remove ' + folderPath);
        fs.rmdirSync(folderPath);
    } catch(e) {
    }
}

exports.RemoveFolder = RemoveFolder;