const {Table} = require("console-table-printer");

const tasks = new Table({
    columns: [
        {
            name: "right_align_text",
            alignment: "left",
            maxLen: 110,
            title: "tasks",
            color: "blue"
        },
        {name: "button", alignment: "center", color: "green"},
    ],
});
tasks.addRow({
    right_align_text: "1.Вывести общее число жителей",
    button: 1,
});
tasks.addRow({
    right_align_text: "2.Вывести средний возраст жителей",
    button: 2,
});
tasks.addRow({
    right_align_text: "3.Вывести отсортированный по алфавиту список фамилий без повторений",
    button: 3,
});
tasks.addRow({
    right_align_text: "4.Вывести список фамилий, с указанием количества повторений этих фамилий в общем списке",
    button: 4,
});
tasks.addRow({
    right_align_text: "5.Вывести фамилии, которые содержат в середине букву \"б\"",
    button: 5,
});
tasks.addRow({
    right_align_text: "6.Вывести список \"бомжей\"",
    button: 6,
});
tasks.addRow({
    right_align_text: "7.Вывести список несовершеннолетних, проживающих на проспекте Правды",
    button: 7,
});
tasks.addRow({
    right_align_text: "Task 8: Вывести упорядоченный по алфавиту список всех улиц с указанием, сколько жильцов живёт на улице",
    button: 8,
});
tasks.addRow({
    right_align_text: "Task 9: Вывести список улиц, название которых состоит из 6-ти букв",
    button: 9,
});
tasks.addRow({
    right_align_text: "Task 10: Вывести список улиц с количеством жильцов на них меньше 3",
    button: 10,
});
tasks.addRow({
    right_align_text: "Закрыть таблицу",
    button: 0,
});

module.exports = {tasks};
