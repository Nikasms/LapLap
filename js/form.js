const defaultForm = document.getElementById("Form");

function createDropdown(questionText, questionId, answers, form = defaultForm) {
    const question = document.createElement("div");
    question.className = "question";
    question.textContent = questionText;

    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.id = questionId;
    hiddenInput.name = questionId;
    hiddenInput.required = true;

    const customSelectBlock = document.createElement("div");
    customSelectBlock.className = "custom-select";
    customSelectBlock.id = questionId;

    const listOptions = document.createElement("div");
    listOptions.className = "list_options";

    const selectedBlock = document.createElement("div");
    selectedBlock.className = "selected";
    selectedBlock.textContent = "Обрати";

    answers.forEach(answer => {
        const listOption = document.createElement("div");
        listOption.className = "list_option";
        listOption.dataset.value = answer;
        listOption.textContent = answer;

        listOption.addEventListener("click", () => {
            selectedBlock.textContent = answer;
            hiddenInput.value = answer;
            customSelectBlock.classList.remove("open");
            listOptions.style.maxHeight = "0px";
        });

        listOptions.appendChild(listOption);
    });

    selectedBlock.addEventListener("click", () => {
        customSelectBlock.classList.toggle("open");
        listOptions.style.maxHeight = customSelectBlock.classList.contains("open")
            ? answers.length * 41 + "px" : "0px";
    });

    customSelectBlock.appendChild(selectedBlock);
    customSelectBlock.appendChild(listOptions);

    form.appendChild(question);
    form.appendChild(hiddenInput);
    form.appendChild(customSelectBlock);
}

function createTextInput(questionText, questionId, questionPlaceholder = "", form = defaultForm) {
    const question = document.createElement("div");
    question.className = "question";
    question.textContent = questionText;

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.id = questionId;
    textInput.name = questionId;
    textInput.required = true;
    textInput.placeholder = questionPlaceholder;

    form.appendChild(question);
    form.appendChild(textInput);
}

//type 1 для кількох варіантів відповіді, 0 для одного
function createChoice(questionText, questionId, type, answers, form = defaultForm) {
    const question = document.createElement("div");
    question.className = "question";
    question.textContent = questionText;
    form.appendChild(question);

    answers.forEach(answer => {
        const optionLabel = document.createElement("label");
        optionLabel.className = "option";

        const inputElement = document.createElement("input");
        inputElement.type = (type) ? "checkbox" : "radio";
        inputElement.name = questionId;
        inputElement.value = answer;

        const circleLabel = document.createElement("div");
        circleLabel.className = (type) ? "squircle" : "circle";

        const answerText = document.createElement("div");
        answerText.textContent = answer;

        optionLabel.appendChild(inputElement);
        optionLabel.appendChild(circleLabel);
        optionLabel.appendChild(answerText);

        form.appendChild(optionLabel);
    });
}

createDropdown("Оберіть місто*", "city", ["Житомир", "Рівне"]);

createTextInput("Кличка вашого хвостика*", "dog_name", "Честер");

createTextInput("Порода*", "breed", "Коргі");

createTextInput("Вік*", "age", "6 місяців");

createTextInput("Вага*", "weight", "2 кг");

createChoice("Стать*", "gender", 0, ["Чоловіча", "Жіноча"]);

createChoice("Що є у вашого хвостика ?*", "what_is_there", 1, [
    "Ветеринарний паспорт", "Актуальні щеплення", "Захист від кліщів / бліх",
    "Кастрація / стерилізація", "Нічого з цього"
]);

createTextInput("Чи були якісь травми чи хвороби у вашого хвостика? Якщо так, то які?*", "traumas");

createChoice("Чи тягне повідок?*", "pulls_the_leach", 0, ["Сильно", "Іноді", "Ні"]);

createChoice("Чи підбирає з землі?*", "picks_things_up", 0, ["Так", "Іноді", "Ні"]);

createChoice("Якщо підбере, чи дає віддати?*", "gives_back", 0, ["Так", "Не варто пробувати"]);

createTextInput("Чого боїться ваш хвостик?", "fears", "голосні звуки, котів");

createChoice("Чи є у вашого хвостика агресія до когось чи когось?*", "aggression", 1, [
    "До інших песиків(сучок)", "Людей", "Котів", "Машин", "Велосипелистів", "Агресія відсутня"
]);

createChoice("Чи можна контактувати з іншими собаками?*", "contacts", 0, ["Так", "Ні"]);

createChoice("Чи потрібен догляд за хвостиком після прогулянки?*", "care", 0, ["Так", "Ні"]);

createTextInput("Який саме догляд?", "care_type");

createDropdown("Яка тривалість вигулу?", "walk_time",
    ["45 хвилин", "60 хвилин", "90 хвилин", "120 хвилин"]);

createChoice("Як вигульник потрапить до хвостика?*", "how_to_get_to_you", 0, [
    "Ключі залишу в домовленому місці", "Передам ключі сервісу ЛапЛап", "Забрати з певної адреси"
]);

createTextInput("Можливо, є важливі нюанси, які ми не спитали?", "nuances", "напишіть");

createTextInput("Ваше імʼя*", "your_name", "");

createTextInput("Нік у Telegram*", "nickname", "");

createTextInput("Адреса (вулиця, будинок, під’їзд, поверх, квартира, домофон)*", "address", "");

createDropdown("О котрій зручно прийняти дзвінок*", "time_of_call", [
    "Нема необхідності в спілкуванні голосом", "10:00-11:00", "11:00-12:00", "12:00-13:00", "13:00-14:00", 
    "14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00", "18:00-19:00", "19:00-20:00"
]);

createTextInput("Звідки ви дізнались про нас? *", "how_you_found_out", "");

const submissionButton = document.createElement('button');
submissionButton.className = "blue_button";
submissionButton.style = "width: 1220px; margin: 40px 0px; border: 0px;";
submissionButton.textContent = "Надіслати"
defaultForm.appendChild(submissionButton);
