const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File created!"
            });
        });

        console.log(`
        
        Done! You can find your README file in your dist folder.
        
        `)
    });
};

module.exports = newFile => {
    return writeFile(newFile);
}