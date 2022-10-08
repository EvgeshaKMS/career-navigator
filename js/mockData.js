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
  7: {
    id: 7,
    type: "Курс",
    name: "HTML",
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

let titleOut = "",
  dateOut = "",
  lastOnlineOut = "",
  salaryOut = "",
  skillsOut = "",
  contactsOut = "",
  additionalInformationOut = "",
  counter = 0;

let vacancyCounter = 0,
  resumeCounter = 0,
  courseCounter = 0;

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
    .querySelector(".contacts-popover__list")
    .appendChild(document.querySelector(".contact").cloneNode());

cardClass = document.querySelector(".cards__card");

for (let key in data) {

  if (data[key].type === "Вакансия") {
    cardClass.classList.add('vacancy');
    cardClass.classList.remove('resume');
    cardClass.classList.remove('course');
    vacancyCounter++;
  } else if (data[key].type === "Резюме") {
    cardClass.classList.add('resume');
    cardClass.classList.remove('vacancy');
    cardClass.classList.remove('course');
    resumeCounter++;
  } else if (data[key].type === "Курс") {
    cardClass.classList.add('course');
    cardClass.classList.remove('vacancy');
    cardClass.classList.remove('resume');
    courseCounter++;
  }
  titleOut = `${data[key].name}`;
  lastOnlineOut = data[key].lastOnline;
  dateOut = data[key].date;
  salaryOut = data[key].salary;

  document.getElementById("name").innerHTML = titleOut;
  document.getElementById("lastOnline").innerHTML = lastOnlineOut;
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

let mainTitleOut = ``;

if (counter === 0) {
  mainTitleOut = `Результатов не найдено`;
} else if (counter % 10 === 1 && counter % 100 !== 11) {
  mainTitleOut = `Найден ${counter} результат`;
} else if ((counter % 10 === 2 || counter % 10 === 3 || counter % 10 === 4) && (counter % 100 !== 12 || counter % 100 !== 13 || counter % 100 !== 14)) {
  mainTitleOut = `Найдено ${counter} результата`;
} else{
  mainTitleOut = `Найдено ${counter} результатов`;
}

document.getElementById("mainTitle").innerHTML = mainTitleOut;

document.getElementById("categoryTitle").innerHTML = 'Все элементы';


const allCategories = document.getElementById('category-1'),
  vacansies = document.getElementById('category-2'),
  resumes = document.getElementById('category-3'),
  courses = document.getElementById('category-4');

const vacancyList = document.querySelectorAll(".vacancy"),
  resumeList = document.querySelectorAll(".resume"),
  courseList = document.querySelectorAll(".course"),
  cards = document.querySelectorAll(".cards__card");


//Выбрать все категории
const showAll = allCategories.onclick = () => {
  document.getElementById("categoryTitle").innerHTML = 'Все элементы';
  cards.forEach(element => {
    element.style.display = 'flex';
  });
  document.querySelector(".cards__card").style.display = 'none';
  arrow.style.transform = "none";
  popover.classList.remove('active-popout');
  popover.classList.add('closed-popout');

  if (counter === 0) {
    mainTitleOut = `Результатов не найдено`;
  } else if (counter % 10 === 1 && counter % 100 !== 11) {
    mainTitleOut = `Найден ${counter} результат`;
  } else if ((counter % 10 === 2 || counter % 10 === 3 || counter % 10 === 4) && (counter % 100 !== 12 || counter % 100 !== 13 || counter % 100 !== 14)) {
    mainTitleOut = `Найдено ${counter} результата`;
  } else{
    mainTitleOut = `Найдено ${counter} результатов`;
  }
  document.getElementById("mainTitle").innerHTML = mainTitleOut;

}

//Выбрать только вакансии
const showVacancies = vacansies.onclick = () => {
  document.getElementById("categoryTitle").innerHTML = 'Вакансии';

  vacancyList.forEach(element => {
    element.style.display = 'flex';
  });
  resumeList.forEach(element => {
    element.style.display = 'none';
  });
  courseList.forEach(element => {
    element.style.display = 'none';
  });
  arrow.style.transform = "none";
  popover.classList.remove('active-popout');
  popover.classList.add('closed-popout');

  if (vacancyCounter === 0) {
    mainTitleOut = `Вакансий не найдено`;
  } else if (vacancyCounter % 10 === 1 && vacancyCounter % 100 !== 11) {
    mainTitleOut = `Найденa ${vacancyCounter} вакансия`;
  } else if ((vacancyCounter % 10 === 2 || vacancyCounter % 10 === 3 || vacancyCounter % 10 === 4) && (vacancyCounter % 100 !== 12 || vacancyCounter % 100 !== 13 || vacancyCounter % 100 !== 14)) {
    mainTitleOut = `Найдено ${vacancyCounter} вакансии`;
  } else{
    mainTitleOut = `Найдено ${vacancyCounter} вакансий`;
  }
  document.getElementById("mainTitle").innerHTML = mainTitleOut;

}

//выбрать только резюме
const showResumes = resumes.onclick = () => {
  document.getElementById("categoryTitle").innerHTML = 'Резюме';

  vacancyList.forEach(element => {
    element.style.display = 'none';
  });
  resumeList.forEach(element => {
    element.style.display = 'flex';
  });
  courseList.forEach(element => {
    element.style.display = 'none';
  });
  arrow.style.transform = "none";
  popover.classList.remove('active-popout');
  popover.classList.add('closed-popout');

  if (resumeCounter === 0) {
    mainTitleOut = `Резюме не найдено`;
  } else {
    mainTitleOut = `Найдено ${resumeCounter} резюме`;  
  document.getElementById("mainTitle").innerHTML = mainTitleOut;
  }

}

//Выбрать только курсы
const showCourses = courses.onclick = () => {
  document.getElementById("categoryTitle").innerHTML = 'Курсы';
  vacancyList.forEach(element => {
    element.style.display = 'none';
  });
  resumeList.forEach(element => {
    element.style.display = 'none';
  });
  courseList.forEach(element => {
    element.style.display = 'flex';
  });
  document.querySelector(".cards__card").style.display = 'none';
  arrow.style.transform = "none";
  popover.classList.remove('active-popout');
  popover.classList.add('closed-popout');

  if (courseCounter === 0) {
    mainTitleOut = `Курсов не найдено`;
  } else if (courseCounter % 10 === 1 && courseCounter % 100 !== 11) {
    mainTitleOut = `Найден ${courseCounter} курс`;
  } else if ((courseCounter % 10 === 2 || courseCounter % 10 === 3 || courseCounter % 10 === 4) && (courseCounter % 100 !== 12 || courseCounter % 100 !== 13 || courseCounter % 100 !== 14)) {
    mainTitleOut = `Найдено ${courseCounter} курса`;
  } else{
    mainTitleOut = `Найдено ${courseCounter} курсов`;
  }
  document.getElementById("mainTitle").innerHTML = mainTitleOut;

}