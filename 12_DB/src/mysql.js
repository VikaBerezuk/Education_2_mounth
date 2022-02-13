function getPopulation() {
    console.log('Task 1: "Вывести общее число жителей"');
    return 'SELECT COUNT(Id) AS Population FROM person';
}

function getAverageAge() {
    console.log('Task 2: "Вывести средний возраст жителей"');
    return 'SELECT AVG(Age) FROM person';
}

function getSortOfLastNames() {
    console.log('Task 3: "Вывести отсортированный по алфавиту список фамилий без повторений"');
    return 'SELECT DISTINCT LastName FROM person ORDER BY LastName';
}

function getDuplicatedLastNames() {
    console.log('Task 4: "Вывести список фамилий, с указанием количества повторений этих фамилий в общем списке"');
    return 'SELECT LastName, COUNT(LastName) AS Count FROM person GROUP BY LastName HAVING Count > 1'
}

function getListOfLastnamesWithSymbol() {
    console.log('Task 5: "Вывести фамилии, которые содержат в середине букву \"б\""');
    return 'SELECT LastName FROM person WHERE LastName LIKE("%_б_%")'
}

function getPersonsWithoutHome() {
    console.log('Task 6: "Вывести список \"бомжей\""');
    return 'SELECT * FROM person WHERE Id_Street IS NULL'
}

function getNotAdultsOnStreet() {
    console.log('Task 7: "Вывести список несовершеннолетних, проживающих на проспекте Правды"');
    return 'SELECT * FROM person INNER JOIN street ON person.Id_Street = street.Id ' +
        'WHERE street.Street = "Правды" AND person.Age < 18'
}

function getListOfStreetAndPopulation() {
    console.log('Task 8: "Вывести упорядоченный по алфавиту список всех улиц с указанием,сколько жильцов живёт на улице"');
    return 'SELECT street.Street AS Street, COUNT(person.Id) AS Population FROM street ' +
        'LEFT OUTER JOIN person ON street.Id = person.Id_Street GROUP BY person.Id_Street'
}

function getSixCharStreets() {
    console.log('Task 9: "Вывести список улиц, название которых состоит из 6-ти букв"');
    return 'SELECT LENGTH(Street) AS length, Street AS name FROM street WHERE LENGTH(Street) = 6';
}

function getLessThanThreeStreet() {
    console.log('Task 10: "Вывести список улиц с количеством жильцов на них меньше 3"');
    return 'SELECT street.Street, COUNT(person.Id) AS Count FROM street INNER JOIN person ' +
        'ON street.Id = person.Id_Street GROUP BY person.Id_Street HAVING Count < 3';
}

function createStreetTable() {
    return 'CREATE TABLE street (Id INTEGER PRIMARY KEY AUTOINCREMENT, Street TEXT(50))';
}

function createPersonsTable() {
    return 'CREATE TABLE person (Id INTEGER PRIMARY KEY AUTOINCREMENT, FirstName TEXT(50), LastName TEXT(50), ' +
        'Age INTEGER(3), Id_Street INTEGER, FOREIGN KEY(Id_Street) REFERENCES street (Id))';
}

function fillUpStreetTable() {
    return 'INSERT INTO street (Street) ' +
        'VALUES ("Кузнечная"), ' +
        '("Гагарина"), ' +
        '("Сумская"), ' +
        '("Пушкинская"), ' +
        '("Гагарина"), ' +
        '("Правды")';
}

function fillUpPersonTable() {
    return 'INSERT INTO person (FirstName, LastName, Age, Id_Street) ' +
        'VALUES ("Виктория", "Березюк", 26, 1), ' +
        '("Анатолий", "Василюк", 22, 2), ' +
        '("Егор", "Антонов", 18, 3), ' +
        '("Ирина", "Десятник", 23, 4), ' +
        '("Юлия", "Лихацкая", 25, 6), ' +
        '("Алина", "Малишевская", 30, NULL), ' +
        '("Вячеслав", "Порицкий", 23, 5), ' +
        '("Спирин", "Владислав", 21, 5), ' +
        '("Ольга", "Староста", 29, 5), ' +
        '("Наталия", "Сичевская", 28, 1), ' +
        '("Наталья", "Тихая", 33, 1), ' +
        '("Анастасия", "Храмова", 21, 6), ' +
        '("Александр", "Шевченко", 20, 6), ' +
        '("Артем", "Бабкин", 11, 6), ' +
        '("Сергей", "Бабкин", 43, 6)';
}

module.exports = { getPopulation, getAverageAge, getSortOfLastNames, getDuplicatedLastNames, getListOfLastnamesWithSymbol,
    getPersonsWithoutHome, getNotAdultsOnStreet, getListOfStreetAndPopulation, getSixCharStreets, getLessThanThreeStreet,
    createStreetTable, createPersonsTable, fillUpStreetTable, fillUpPersonTable}