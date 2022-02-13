const {getAverageAge, getDuplicatedLastNames, getListOfLastnamesWithSymbol, getListOfStreetAndPopulation,
    getLessThanThreeStreet, getNotAdultsOnStreet, getPersonsWithoutHome, getPopulation, getSixCharStreets,
    getSortOfLastNames} = require("./mysql");

const {openConnection, exitApplication, question, table} = require('./utils');
const {tasks} = require("./table");

function renderUI() {
    console.clear();
    tasks.printTable();
    question('Insert option here: ', (answer) => {
        const db = openConnection('./db/mock.db');
        switch (answer) {
            case '1':
                getRequest(db, getPopulation());
                break;
            case '2':
                getRequest(db, getAverageAge());
                break;
            case '3':
                getRequest(db, getSortOfLastNames());
                break;
            case '4':
                getRequest(db, getDuplicatedLastNames());
                break;
            case '5':
                getRequest(db, getListOfLastnamesWithSymbol());
                break;
            case '6':
                getRequest(db, getPersonsWithoutHome());
                break;
            case '7':
                getRequest(db, getNotAdultsOnStreet());
                break;
            case '8':
                getRequest(db, getListOfStreetAndPopulation());
                break;
            case '9':
                getRequest(db, getSixCharStreets());
                break;
            case '10':
                getRequest(db, getLessThanThreeStreet());
                break;
            case '0':
                exitApplication();
                break;
        }
    });
}

function getRequest(database, query) {
    database.serialize(() => {
        database.all(query, (err, rows) => {
            if (err) {
                return err;
            }
            table(rows);
        }).close((err) => {
            if (err) {
                throw err;
            }
            repeat();
        });
    });
}

function repeat() {
    question('Continue Y/N?: ', (answer) => {
        if (answer.toUpperCase() === 'Y') {
            renderUI();
        } else {
            exitApplication();
        }
    })
}


module.exports = {renderUI}