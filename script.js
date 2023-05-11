document.querySelector('#submit').onclick = function (event){
    event.preventDefault();

    const name = document.getElementById('first-name').value;
    const lastname = document.getElementById('last-name').value;
    const data = document.getElementById('birth-data').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const languages = [];
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
        languages.push(checkboxes[i].value);
    }

    const div = document.createElement('div');
    div.classList.add('div-info');
    const table = document.createElement('table');
    div.appendChild(table);
    document.body.appendChild(div);

    const rowStart = document.createElement('caption');
    rowStart.textContent = 'Інформація про покупця';
    table.appendChild(rowStart);

    const row1 = document.createElement('tr');
    const head1 = document.createElement('th');
    head1.textContent = "Ім'я";
    row1.appendChild(head1)
    const coll1 = document.createElement('td');
    coll1.textContent = name;
    row1.appendChild(coll1);
    table.appendChild(row1);

    const row2 = document.createElement('tr');
    const head2 = document.createElement('th');
    head2.textContent = "Прізвище";
    row2.appendChild(head2);
    const coll2 = document.createElement('td');
    coll2.textContent = lastname;
    row2.appendChild(coll2);
    table.appendChild(row2);

    const row3 = document.createElement('tr');
    const head3 = document.createElement('th');
    head3.textContent = "Дата народження";
    row3.appendChild(head3);
    const coll3 = document.createElement('td');
    coll3.textContent = data;
    row3.appendChild(coll3);
    table.appendChild(row3);

    const row4 = document.createElement('tr');
    const head4 = document.createElement('th');
    head4.textContent = "Стать";
    row4.appendChild(head4);
    const coll4 = document.createElement('td');
    coll4.textContent = gender;
    row4.appendChild(coll4);
    table.appendChild(row4);

    const row5 = document.createElement('tr');
    const head5 = document.createElement('th');
    head5.textContent = "Місто";
    row5.appendChild(head5);
    const coll5 = document.createElement('td');
    coll5.textContent = city;
    row5.appendChild(coll5);
    table.appendChild(row5);

    const row6 = document.createElement('tr');
    const head6 = document.createElement('th');
    head6.textContent = "Адреса";
    row6.appendChild(head6);
    const coll6 = document.createElement('td');
    coll6.textContent = address;
    row6.appendChild(coll6);
    table.appendChild(row6);

    const row7 = document.createElement('tr');
    const head7 = document.createElement('th');
    head7.textContent = "Мова";
    row7.appendChild(head7);
    const coll7 = document.createElement('td');
    coll7.textContent = languages;
    row7.appendChild(coll7);
    table.appendChild(row7);

    const form = document.querySelector('#registration-form');
    form.style.display = 'none';
}

