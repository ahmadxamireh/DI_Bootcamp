/*
Exercise 6: Calendar
1. Create a function called createCalendar(year, month)
2. The function should create a calendar for the given year/month.
3. The calendar should be a table, where a week is <tr>, and a day is <td>.
The table top should be <th> with weekday names: the first day should be Monday, and so on until Sunday.

Hint: There shouldn’t be any code in the HTML file. The table should be created from the JS file using the DOM.
 */

function createCalendar(year, month) {

    month -= 1; // adjust month to be 0-based for JS Date

    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // create header row
    const headerRow = document.createElement('tr');
    for (let day of daysOfWeek) {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // start on the first day of the month
    const date = new Date(year, month, 1);

    // calculate the day of the week (Mon=0 ... Sun=6)
    let startDay = (date.getDay() + 6) % 7;

    let row = document.createElement('tr');

    // add empty cells before the first day
    for (let i = 0; i < startDay; i++) {
        row.appendChild(document.createElement('td'));
    }

    // fill in the days
    while (date.getMonth() === month) {
        const td = document.createElement('td');
        td.textContent = date.getDate();
        row.appendChild(td);

        // if the week is complete (Sun), append row
        if ((date.getDay() + 6) % 7 === 6) {
            tbody.appendChild(row);
            row = document.createElement('tr');
        }

        date.setDate(date.getDate() + 1);
    }

    // append any leftover days in the last row
    if (row.children.length > 0) {
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    document.body.appendChild(table);
}

// test
createCalendar(2012, 9);
createCalendar(1997, 5);