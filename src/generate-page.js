const fs = require('fs');
const dir = 'dist';

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        //make sure the dist directory exists. Create it if not.
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        fs.writeFile('./dist/index.html', fileContent, err =>{
            //if there's an error, reject the promise and send the error to the catch() method
            if(err){
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Dashboard Created!'
            });
        });
    });
};

module.exports = writeFile;