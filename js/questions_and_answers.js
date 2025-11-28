const container = document.getElementById("q&a");

function createQAndA(question, answer) {
    const qAndABlock = document.createElement('div');
    qAndABlock.className = "q_and_a_block";

    const plusIcon = document.createElement('div');
    plusIcon.className = "plus";

    const questionBlock = document.createElement('div');
    questionBlock.className = "question_block";
    questionBlock.innerText = question;
    questionBlock.appendChild(plusIcon);

    const answerBlock = document.createElement('div');
    answerBlock.className = "answer_block";
    answerBlock.innerText = answer;

    const answerBlockWrapper = document.createElement('div');
    answerBlockWrapper.className = "answer_block_wrapper";
    answerBlockWrapper.appendChild(answerBlock)

    questionBlock.addEventListener("click", () => {
        const openQAndABlock = document.querySelector(".q_and_a_block.open");

        if (openQAndABlock && openQAndABlock !== qAndABlock) {
            const openAnswerBlockWrapper = openQAndABlock.querySelector(".answer_block_wrapper");
            openQAndABlock.classList.remove("open");
            openAnswerBlockWrapper.style.maxHeight = "0px";
        }

        qAndABlock.classList.toggle("open");
        answerBlockWrapper.style.maxHeight =
            (qAndABlock.classList.contains("open")) ? (answerBlock.scrollHeight) + "px" : "0px"
    });


    qAndABlock.appendChild(questionBlock);
    qAndABlock.appendChild(answerBlockWrapper);
    container.appendChild(qAndABlock);
}

createQAndA(
    "В яких випадках я можу потребувати допомогу від лап лап?",
    "Коли у вас немає часу на прогулянки, ви працюєте допізна, їдете у відрядження чи просто хочете, щоб собака отримувала більше активності та уваги."
);

createQAndA(
    "Як зробити замовлення?",
    "Заповніть форму на сайті або напишіть нам у Telegram. Ми уточнимо інформацію про собаку і підберемо догсітера поруч."
);

createQAndA(
    "Чи підписується договір?",
    "Так. Ми працюємо офіційно, тому укладаємо договір, де прописані всі умови і відповідальність."
);

createQAndA(
    "Чи працюєте ви з собаками без щеплень та обробки від паразитів?",
    "Ні. Це важливо для безпеки вашого улюбленця та інших собак."
);

createQAndA(
    "Чи впорається догсіттер з моєю собакою?",
    "Так. Ми враховуємо характер, розмір, енергійність та можливі особливості собаки, і підбираємо відповідного спеціаліста."
);

createQAndA(
    "Чи можна спершу зустрітися з догсітером?",
    "Так. Можлива безкоштовна попередня зустріч, щоб познайомитися та переконатися, що собака комфортно почувається."
);

createQAndA(
    "Що входить у вигул?",
    "Прогулянка, час на туалет, активність. За бажанням — миття лап, свіжа вода, корм."
);

createQAndA(
    "Моя собака буде гуляти на повідку?",
    "Так, завжди. Ми використовуємо надійну амуніцію і дотримуємося правил безпеки."
);

createQAndA(
    "Скільки часу триває вигул?",
    "Стандартні варіанти — 45, 60, 90 або 120 хвилин. Можливі індивідуальні тривалості."
);

createQAndA(
    "Чи можете ви годувати або мити лапи після прогулянки?",
    "Так, це входить у послугу за вашим запитом."
);

createQAndA(
    "Як відбувається оплата?",
    "Оплата здійснюється на рахунок сервісу за погодженим тарифом. Доступні разові вигули або абонементи на вигідних умовах."
);



