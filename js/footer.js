const footer = document.createElement('footer');

const logo = document.createElement('img')
logo.src = "images/logo.png"
logo.style.cssText = "width: 250px; height: 55px; grid-row: 2; grid-column: 2;"
footer.appendChild(logo);

const cities_div = document.createElement('div');
cities_div.style.cssText = "grid-row: 2; grid-column: 3; font-size: 16px;"
cities_div.innerHTML = "Міста, де працюємо:<br>• Житомир • Рівне"
footer.appendChild(cities_div);

const contacts_div = document.createElement('div');
contacts_div.style.cssText = "grid-row: 3; grid-column: 3; font-size: 16px;"
contacts_div.innerHTML = `
    Контакти:<br>
    Телефон: +38 (0XX) XXX-XX-XX<br>
    Telegram: @laplap_dog<br>
    Email: hello@laplap.com
`;
footer.appendChild(contacts_div);

const button = document.createElement('a');
button.className = "blue_button";
button.style.cssText = "grid-row: 2; grid-column: 4;"
button.innerHTML = "Написати нам";
button.href = "https://docs.manim.community/en/stable/reference/manim.mobject.graphing.coordinate_systems.Axes.html";
footer.appendChild(button);

const schedule_div = document.createElement('div');
schedule_div.style.cssText = "grid-row: 3; grid-column: 4; font-size: 16px;"
schedule_div.innerHTML = `
    Графік:<br>
    Пн — Нд • 08:00 — 22:00<br>
    Можливі нічні та індивідуальні вигули
`;
footer.appendChild(schedule_div);

const laplap_div = document.createElement('div');
laplap_div.style.cssText = "grid-row:4; grid-column:2; font-size: 16px;"
laplap_div.innerHTML = "© ЛапЛап, 2025";
footer.appendChild(laplap_div);

document.body.appendChild(footer);