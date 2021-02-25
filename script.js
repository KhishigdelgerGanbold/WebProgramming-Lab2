
var monthNames = ["January ", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysOfTheWeek = ["S", "M", "T", "W", "T", "F", "S"]

var d = new Date();
var year = d.getFullYear();

var curMonth = d.getMonth();
var today = d.getDate();

var calendar_msgs = {
    JAN: { 1: "1 - Сайхан амарна" },
    FEB: { 1: "1 - Сагсны тэмцээнтэй", 3: "3 - Шагнал гардуулна даа", 17: "17 - Жавхлан багшийн лаб 2-ыг хийнэ" },
    MAR: { 2: "2 - Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ", 6: "6 - Энд юу бичье дээ байз", 8: "8 - Эмэгтэйчүүддээ баяр хүргэнэ дээ" },
    APR: { 1: "1 - Бүгдээрээ худлаа ярьцаагаагаарай" },
    MAY: { 10: "10 - Энэ сард ч ёстой юу ч болдоггүй сар даа" },
    JUN: { 6: "6 - Жавхлан багшийн төрсөн өдөр" },
    JUL: { 4: "4 - Хичээл амарсаан ураа" },
    AUG: { 1: "1 - Хөдөө явдаг цаг даа", 25: "25 - Хичээл сонголт эхэллээ" },
    SEP: { 1: "1 - 9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа" },
    OCT: { 13: "13 - Сур сур бас дахин сур" },
    NOV: { 2: "2 - Сурсаар л бай" },
    DEC: { 20: "20 - Өвлийн семистер хаагдах нь дээ", 30: "30 - Дүн гаргаж дууслаа баярлалаа баяртай" }
}


window.addEventListener("load", function () {
    var daysOfTheMonthDiv = document.querySelectorAll(".daysOfTheMonth");
    for (var month = 0; month < 12; month++) {
        createCalendar(month);
    }
})

function createCalendar(month) {
    var monthDiv = createMonthHeader(month);

    var firstDayOfTheMonth = getFirstDayOfTheMonth(year, month);
    var daysinmonth = daysInMonth(year, month)
    var counter = 0, order = 6;

    for (var i = 0; i < firstDayOfTheMonth + 7; i++) {
        order++;
        createDay(month, "&nbsp;", order, monthDiv);
    }
    for (var i = firstDayOfTheMonth; i < daysInMonth(year, month) + firstDayOfTheMonth; i++) {
        counter++;
        order++;
        createDay(month, counter, order, monthDiv);
    }

    for (var i = firstDayOfTheMonth + daysinmonth; i < 6 * 7; i++) {
        order++;
        createDay(month, "&nbsp;", order, monthDiv);
    }
}

function createDay(month, counter, order, monthDiv) {

    var day = document.createElement("div");
    if (month == curMonth && counter == today) {
        day.setAttribute("class", "to day");

    } else if (month == 0 && counter == 1) {
        day.setAttribute("id", "holiday1");
        day.setAttribute("class", "day");

    } else if (month == 1 && counter == 1) {
        day.setAttribute("id", "bask");
        day.setAttribute("class", "day");

    } else if (month == 1 && counter == 3) {
        day.setAttribute("id", "awards");
        day.setAttribute("class", "day");

    } else if (month == 1 && counter == 17) {
        day.setAttribute("id", "lab2");
        day.setAttribute("class", "day");

    } else if (month == 2 && counter == 2) {
        day.setAttribute("id", "extend");
        day.setAttribute("class", "day");

    } else if (month == 2 && counter == 6) {
        day.setAttribute("id", "whattowrite");
        day.setAttribute("class", "day");

    } else if (month == 2 && counter == 8) {
        day.setAttribute("id", "women");
        day.setAttribute("class", "day");

    } else if (month == 3 && counter == 1) {
        day.setAttribute("id", "telllies");
        day.setAttribute("class", "day");

    } else if (month == 4 && counter == 10) {
        day.setAttribute("id", "nothing");
        day.setAttribute("class", "day");

    } else if (month == 5 && counter == 6) {
        day.setAttribute("id", "birthday");
        day.setAttribute("class", "day");

    } else if (month == 6 && counter == 4) {
        day.setAttribute("id", "holiday2");
        day.setAttribute("class", "day");

    } else if (month == 7 && counter == 1) {
        day.setAttribute("id", "countryside");
        day.setAttribute("class", "day");

    } else if (month == 7 && counter == 25) {
        day.setAttribute("id", "lesson");
        day.setAttribute("class", "day");

    } else if (month == 8 && counter == 1) {
        day.setAttribute("id", "celeb");
        day.setAttribute("class", "day");

    } else if (month == 9 && counter == 13) {
        day.setAttribute("id", "learn");
        day.setAttribute("class", "day");

    } else if (month == 10 && counter == 2) {
        day.setAttribute("id", "keeplearning");
        day.setAttribute("class", "day");

    } else if (month == 11 && counter == 20) {
        day.setAttribute("id", "endofsem");
        day.setAttribute("class", "day");

    } else if (month == 11 && counter == 30) {
        day.setAttribute("id", "marks");
        day.setAttribute("class", "day");

    } else {
        day.setAttribute("class", "day");
    }
    day.setAttribute("style", "order:" + order);
    day.innerHTML = counter;
    monthDiv.appendChild(day);
}

function createMonthHeader(month) {
    var calendar = document.querySelector(".calendar");

    var monthDiv = document.createElement("div");
    monthDiv.setAttribute("class", "month");
    calendar.appendChild(monthDiv);

    var h4 = document.createElement("h4");
    h4.innerHTML = monthNames[month];
    monthDiv.appendChild(h4);

    for (var i = 0; i < 7; i++) {
        var hday = document.createElement("div");
        hday.setAttribute("class", "day OfWeek");
        hday.setAttribute("style", "order:" + i);
        hday.innerHTML = daysOfTheWeek[i].toUpperCase();
        monthDiv.appendChild(hday);
    }

    return monthDiv;
}

function eventList() {

    jQuery(document).ready(function ($) {

        var $ul = $('<ul></ul>');

        function getList(item, $list) {

            $.each(item, function (key, value) {
                var $li = $('<li />');
                $li.append(key);

                var $subul = $("<ul/>");

                $.each(value, function (i) {
                    var subli = $('<li/>').text(value[i]).appendTo($subul);
                });

                $li.append($subul).appendTo($list);

            });
        }
        getList(calendar_msgs, $ul);
        $ul.appendTo("#events");
    });

}


eventList();

function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getMonthName(month) {
    return monthNames[month];
}
function getDayName(day) {
    return daysOfTheWeek[day];
}

function getFirstDayOfTheMonth(y, m) {
    var firstDay = new Date(y, m, 1);
    return firstDay.getDay();
}
function getLastDayOfTheMonth(y, m) {
    var lastDay = new Date(y, m + 1, 0);
    return lastDay.getDay();
}
