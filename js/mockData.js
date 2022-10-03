const data = {
  1: {
    id: 1,
    type: "Вакансия",
    name: "Токарь-универсал",
    date: "5 июня",
    lastOnline: "Был в сети вчера",
    salary: "От 85 000 ₽",
    skills: [
      "Технология машиностроения",
      "Обработка разных металлов",
      "Работа на станках",
      "работа по чертежам и эскизам",
    ],
    contacts: ["+7(915) 709-88-42", "squanbri@gmail.com"],
    additionalInformation: [
      "Полная занятость",
      "Не готов к переезду",
      "Готов к командировкам",
    ],
  },

  2: {
    id: 2,
    type: "Резюме",
    name: "Бухгалтер",
    date: "5 июня",
    lastOnline: "Был в сети 2 дня назад",
    salary: "От 42 500 ₽",
    skills: ["Навыки ПК", "Бухгалтерский учет", "1с"],
    contacts: ["phone", "email"],
    additionalInformation: [
      "Полная занятость",
      "Можно удаленно",
      "Готов к переезду",
      "Готов к командировкам",
    ],
  },
  3: {
    id: 3,
    type: "Вакансия",
    name: "Водитель",
    date: "5 июня",
    lastOnline: "Был в сети 2 дня назад",
    salary: "От 42 500 ₽",
    skills: ["Навыки ПК", "Бухгалтерский учет", "1с"],
    contacts: ["phone", "email"],
    additionalInformation: [
      "Полная занятость",
      "Можно удаленно",
      "Готов к переезду",
      "Готов к командировкам",
    ],
  },
  4: {
    id: 4,
    type: "Резюме",
    name: "Учитель",
    date: "5 июня",
    lastOnline: "Был в сети 2 дня назад",
    salary: "От 42 500 ₽",
    skills: ["Навыки ПК", "Бухгалтерский учет", "1с"],
    contacts: ["phone", "email"],
    additionalInformation: [
      "Полная занятость",
      "Можно удаленно",
      "Готов к переезду",
      "Готов к командировкам",
    ],
  },
  5: {
    id: 5,
    type: "Курс",
    name: "JavaScript",
    date: "5 июня",
    lastOnline: "Был в сети 2 дня назад",
    salary: "От 42 500 ₽",
    skills: ["Навыки ПК", "Бухгалтерский учет", "1с"],
    contacts: ["phone", "email"],
    additionalInformation: [
      "Полная занятость",
      "Можно удаленно",
      "Готов к переезду",
      "Готов к командировкам",
    ],
  },
  6: {
    id: 6,
    type: "Вакансия",
    name: "Уборщик",
    date: "5 июня",
    lastOnline: "Был в сети 2 дня назад",
    salary: "От 42 500 ₽",
    skills: ["Навыки ПК", "Бухгалтерский учет", "1с"],
    contacts: ["phone", "email"],
    additionalInformation: [
      "Полная занятость",
      "Можно удаленно",
      "Готов к переезду",
      "Готов к командировкам",
    ],
  },
};

let titleOut = "";
let dateOut = "";
let lastOnlineOut = "";
let salaryOut = "";
let skillsOut = "";
let contactsOut = "";
let additionalInformationOut = "";
let counter = 0;

const createNewCard = () =>
  document
    .querySelector(".cards")
    .appendChild(document.querySelector(".cards__card").cloneNode(true));

const createNewTag = () =>
  document
    .querySelector(".card-information__tags")
    .appendChild(document.querySelector(".tags__tag").cloneNode(true));

const deleteTag = () => {
  let tags = document.querySelector(".card-information__tags");
  while (tags.firstChild) {
    tags.removeChild(tags.lastChild);
  }
};
const addContact = () =>
  document
    .querySelector(".popover-list")
    .appendChild(document.querySelector(".contact").cloneNode(true));

for (let key in data) {
  titleOut = `${data[key].name}`;
  lastOnlineOut = data[key].lastOnline;
  dateOut = data[key].date;
  salaryOut = data[key].salary;

  document.getElementById("name").innerHTML = titleOut;
  document.getElementById("last_online").innerHTML = lastOnlineOut;
  document.getElementById("date").innerHTML = dateOut;
  document.getElementById("salary").innerHTML = salaryOut;

  for (let skill of data[key].skills) {
    skillsOut = skill;
    document.getElementById("skills").innerHTML = skillsOut;
    if (data[key].skills.indexOf(skill) !== data[key].skills.length - 1) {
      createNewTag();
    }
  }

  for (let contact of data[key].contacts) {
    contactsOut = contact;
    document.getElementById("contact").innerHTML = contactsOut;
    if (data[key].contacts.indexOf(contact) !== data[key].contacts.length - 1) {
      addContact();
    }
  }

  if (data[key].id !== data.length) {
    createNewCard();
    // deleteTag();
  }
  counter++;
}

let mainTitleOut = `Найдено ${counter} результатов`;
document.getElementById("main__title").innerHTML = mainTitleOut;
