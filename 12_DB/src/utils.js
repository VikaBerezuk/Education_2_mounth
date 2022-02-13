const readline = require('node:readline');
const fs = require('fs');
const {createStreetTable, createPersonsTable, fillUpStreetTable, fillUpPersonTable} = require("./mysql");
const sqlite3 = require('sqlite3').verbose();

const dialog = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function question(text, callback) {
    dialog.question(text, callback);
}

function exitApplication() {
    process.exit(1);
}

function openConnection(path) {
    return new sqlite3.Database(path, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            throw err;
        }
    });
}

function table(data){
    console.table(data);
}

function makeDirectory(path) {
    fs.mkdirSync(path);
}

function writeFile(path, data) {
    fs.writeFileSync(path, data, (err) => {
        if (err) {
            throw err;
        }
    });
}

function checkFile(path, callback) {
    fs.stat(path, callback);
}

function createTables(database) {
    database.serialize(() => {
        database.run(createStreetTable())
            .run(createPersonsTable())
            .run(fillUpStreetTable())
            .run(fillUpPersonTable())
            .close();
    });
}

function createDatabase() {
    const db = openConnection('./db/mock.db');
    createTables(db);
}

function checkDatabase() {
    checkFile('./db', (err) => {
        if (err) {
            makeDirectory('./db');
            writeFile('./db/mock.db', '');
            createDatabase();
        }
        checkFile('./db/mock.db', (err) => {
            if (err) {
                writeFile('./db/mock.db', '');
                createDatabase();
            }
        })
    });
}

module.exports = {openConnection, exitApplication, question, checkDatabase, table}