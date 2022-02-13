const {getPopulation, getAverageAge, getSortOfLastNames, getDuplicatedLastNames, getListOfLastnamesWithSymbol,
    getPersonsWithoutHome, getNotAdultsOnStreet, getListOfStreetAndPopulation, getSixCharStreets, getLessThanThreeStreet,
    createStreetTable, createPersonsTable, fillUpStreetTable, fillUpPersonTable
} = require("../mysql");

describe('get population', () => {
    test('has to be defined', () => {
        expect(getPopulation).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof getPopulation).toBe('function');
    })
    test('should be get population', () => {
        expect(getPopulation()).toBe('SELECT COUNT(Id) AS Population FROM person');
    })
})

describe('get average age', () => {
    test('has to be defined', () => {
        expect(getAverageAge).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof getAverageAge).toBe('function');
    })
    test('should be get average age', () => {
        expect(getAverageAge()).toBe('SELECT AVG(Age) FROM person');
    })
})

describe('get sort of last names', () => {
    test('has to be defined', () => {
        expect(getSortOfLastNames).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof getSortOfLastNames).toBe('function');
    })
    test('should be get sort of last names', () => {
        expect(getSortOfLastNames()).toBe('SELECT DISTINCT LastName FROM person ORDER BY LastName');
    })
})

describe('get duplicated last names', () => {
    test('has to be defined', () => {
        expect(getDuplicatedLastNames).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof getDuplicatedLastNames).toBe('function');
    })
    test('should be get duplicated last names', () => {
        expect(getDuplicatedLastNames()).toBe('SELECT LastName, COUNT(LastName) AS Count FROM person GROUP BY LastName HAVING Count > 1');
    })
})

describe('get list of last names with symbol', () => {
    test('has to be defined', () => {
        expect(getListOfLastnamesWithSymbol).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof getListOfLastnamesWithSymbol).toBe('function');
    })
    test('should be get list of last names with symbol', () => {
        expect(getListOfLastnamesWithSymbol()).toBe('SELECT LastName FROM person WHERE LastName LIKE("%_б_%")');
    })
})

describe('get persons with out home', () => {
    test('has to be defined', () => {
        expect(getPersonsWithoutHome).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof getPersonsWithoutHome).toBe('function');
    })
    test('should be get persons with out home', () => {
        expect(getPersonsWithoutHome()).toBe('SELECT * FROM person WHERE Id_Street IS NULL');
    })
})

describe('get not adults on street', () => {
    test('has to be defined', () => {
        expect(getNotAdultsOnStreet).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof getNotAdultsOnStreet).toBe('function');
    })
    test('should be get not adults on street', () => {
        expect(getNotAdultsOnStreet())
            .toBe('SELECT * FROM person INNER JOIN street ON person.Id_Street = street.Id WHERE street.Street = "Правды" AND person.Age < 18');
    })
})

describe('get list of street and population', () => {
    test('has to be defined', () => {
        expect(getListOfStreetAndPopulation).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof getListOfStreetAndPopulation).toBe('function');
    })
    test('should be get list of street and population', () => {
        expect(getListOfStreetAndPopulation())
            .toBe('SELECT street.Street AS Street, COUNT(person.Id) AS Population FROM street ' +
                'LEFT OUTER JOIN person ON street.Id = person.Id_Street GROUP BY person.Id_Street');
    })
})

describe('get six char streets', () => {
    test('has to be defined', () => {
        expect(getSixCharStreets).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof getSixCharStreets).toBe('function');
    })
    test('should be get six char streets', () => {
        expect(getSixCharStreets())
            .toBe('SELECT LENGTH(Street) AS length, Street AS name FROM street WHERE LENGTH(Street) = 6');
    })
})

describe('get less than three street', () => {
    test('has to be defined', () => {
        expect(getLessThanThreeStreet).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof getLessThanThreeStreet).toBe('function');
    })
    test('should be get less than three street', () => {
        expect(getLessThanThreeStreet())
            .toBe('SELECT street.Street, COUNT(person.Id) AS Count FROM street INNER JOIN person ' +
                'ON street.Id = person.Id_Street GROUP BY person.Id_Street HAVING Count < 3');
    })
})

describe('create street table', () => {
    test('has to be defined', () => {
        expect(createStreetTable).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof createStreetTable).toBe('function');
    })
    test('should be create street table', () => {
        expect(createStreetTable())
            .toBe('CREATE TABLE street (Id INTEGER PRIMARY KEY AUTOINCREMENT, Street TEXT(50))');
    })
})

describe('create persons table', () => {
    test('has to be defined', () => {
        expect(createPersonsTable).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof createPersonsTable).toBe('function');
    })
    test('should be create persons table', () => {
        expect(createPersonsTable())
            .toBe('CREATE TABLE person (Id INTEGER PRIMARY KEY AUTOINCREMENT, FirstName TEXT(50), LastName TEXT(50), ' +
                'Age INTEGER(3), Id_Street INTEGER, FOREIGN KEY(Id_Street) REFERENCES street (Id))');
    })
})

describe('fill up street table', () => {
    test('has to be defined', () => {
        expect(fillUpStreetTable).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof fillUpStreetTable).toBe('function');
    })
    test('should be fill up street table', () => {
        expect(fillUpStreetTable())
            .toBe('INSERT INTO street (Street) ' +
                'VALUES ("Кузнечная"), ' +
                '("Гагарина"), ' +
                '("Сумская"), ' +
                '("Пушкинская"), ' +
                '("Гагарина"), ' +
                '("Правды")');
    })
})

describe('fill up person table', () => {
    test('has to be defined', () => {
        expect(fillUpPersonTable).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof fillUpPersonTable).toBe('function');
    })
    test('should be fill up person table', () => {
        expect(fillUpPersonTable())
            .toBe('INSERT INTO person (FirstName, LastName, Age, Id_Street) ' +
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
                '("Сергей", "Бабкин", 43, 6)');
    })
})