const fs = require ("fs");
const path = require ("path");

const copyFile = () => {
    if (process.argv[2] === "-r") {} else {
        const read = fs.createReadStream(process.argv[2]);
        const write = fs.createWriteStream(process.argv[3]);
        read.pipe(write);
    }
}
copyFile() 

const pathToFile = path.join(__dirname, "movetodir.txt")
const pathToNewDestination = path.join(__dirname, "backups", "movetodir.txt")

fs.copyFile(pathToFile, pathToNewDestination, function(err) {
    if (err) {
        throw err
    } else {
        console.log("Sucess")
    }
})



