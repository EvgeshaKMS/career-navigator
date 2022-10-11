import { data } from './mockData.js'

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

const calculateAllCategories = (counter) => {
  if (counter === 0) {
    return `Результатов не найдено`;
  } else if (counter % 10 === 1 && counter % 100 !== 11) {
    return `Найден ${counter} результат`;
  } else if ((counter % 10 === 2 || counter % 10 === 3 || counter % 10 === 4) && (counter % 100 !== 12 || counter % 100 !== 13 || counter % 100 !== 14)) {
    return `Найдено ${counter} результата`;
  } else{
    return `Найдено ${counter} результатов`;
  }
}

const calculateVacancies = (counter) => {
  if (counter === 0) {
    return `Вакансий не найдено`;
  } else if (counter % 10 === 1 && counter % 100 !== 11) {
    return `Найденa ${counter} вакансия`;
  } else if ((counter % 10 === 2 || counter % 10 === 3 || counter % 10 === 4) && (counter % 100 !== 12 || counter % 100 !== 13 || counter % 100 !== 14)) {
    return `Найдено ${counter} вакансии`;
  } else{
    return `Найдено ${counter} вакансий`;
  }
}

const calculateResume = (counter) => {
  if (counter === 0) {
    return `Резюме не найдено`;
  } else {
    return `Найдено ${counter} резюме`;  
  }
} 

const calculateCourses = (counter) => {
  if (counter === 0) {
    return `Курсов не найдено`;
  } else if (counter % 10 === 1 && counter % 100 !== 11) {
    return `Найден ${counter} курс`;
  } else if ((counter % 10 === 2 || counter % 10 === 3 || counter % 10 === 4) && (counter % 100 !== 12 || counter % 100 !== 13 || counter % 100 !== 14)) {
    return `Найдено ${counter} курса`;
  } else{
    return `Найдено ${counter} курсов`;
  }
}

let cardClass = document.querySelector(".cards__card");

for (let key of data) {

  if (key.type === "Вакансия") {
    cardClass.classList.add('vacancy');
    cardClass.classList.remove('resume');
    cardClass.classList.remove('course');
    vacancyCounter++;
  } else if (key.type === "Резюме") {
    cardClass.classList.add('resume');
    cardClass.classList.remove('vacancy');
    cardClass.classList.remove('course');
    resumeCounter++;
  } else if (key.type === "Курс") {
    cardClass.classList.add('course');
    cardClass.classList.remove('vacancy');
    cardClass.classList.remove('resume');
    courseCounter++;
  }
  titleOut = key.name;
  lastOnlineOut = key.lastOnline;
  dateOut = key.date;
  salaryOut = key.salary;

  document.getElementById("name").innerHTML = titleOut;
  document.getElementById("lastOnline").innerHTML = lastOnlineOut;
  document.getElementById("date").innerHTML = dateOut;
  document.getElementById("salary").innerHTML = salaryOut;

  for (let skill of key.skills) {
    skillsOut = skill;
    document.getElementById("skills").innerHTML = skillsOut;
    if (key.skills.indexOf(skill) !== key.skills.length - 1) {
      createNewTag();
    }
  }

  for (let contact of key.contacts) {
    contactsOut = contact;
    document.getElementById("contact").innerHTML = contactsOut;
    if (key.contacts.indexOf(contact) !== key.contacts.length - 1) {
      addContact();
    }
  }
  createNewCard();
 
  counter++;

}

let mainTitleOut = ``;

mainTitleOut = calculateAllCategories(counter);

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
    // element.classList.add('card__show-card');
    element.classList.remove('card__hide-card');
  });
  document.querySelector(".cards__card").classList.add('card__hide-card');   
  arrow.classList.remove('popover__arrow-flip');  
  popover.classList.remove('active-popover');
  popover.classList.add('closed-popover');

  mainTitleOut = calculateAllCategories(counter);
  document.getElementById("mainTitle").innerHTML = mainTitleOut;

}

//Выбрать только вакансии
const showVacancies = vacansies.onclick = () => {
  document.getElementById("categoryTitle").innerHTML = 'Вакансии';

  vacancyList.forEach(element => {
    // element.classList.add('card__show-card');
    element.classList.remove('card__hide-card');
  });
  resumeList.forEach(element => {
    element.classList.add('card__hide-card');
    // element.classList.remove('card__show-card');
  });
  courseList.forEach(element => {
    element.classList.add('card__hide-card');
    // element.classList.remove('card__show-card');
  });
  arrow.classList.remove('popover__arrow-flip');  
  popover.classList.remove('active-popover');
  popover.classList.add('closed-popover');

  mainTitleOut = calculateVacancies(vacancyCounter); 
  document.getElementById("mainTitle").innerHTML = mainTitleOut;

}

//выбрать только резюме
const showResumes = resumes.onclick = () => {
  document.getElementById("categoryTitle").innerHTML = 'Резюме';

  vacancyList.forEach(element => {
    element.classList.add('card__hide-card');
    // element.classList.remove('card__show-card');
  });
  resumeList.forEach(element => {
    // element.classList.add('card__show-card');
    element.classList.remove('card__hide-card');
  });
  courseList.forEach(element => {
    element.classList.add('card__hide-card');
    // element.classList.remove('card__show-card');
  });
  arrow.classList.remove('popover__arrow-flip');   
  popover.classList.remove('active-popover');
  popover.classList.add('closed-popover');


  mainTitleOut = calculateResume(resumeCounter) ;
  document.getElementById("mainTitle").innerHTML = mainTitleOut;

}

//Выбрать только курсы
const showCourses = courses.onclick = () => {
  document.getElementById("categoryTitle").innerHTML = 'Курсы';
  vacancyList.forEach(element => {
    element.classList.add('card__hide-card');
    // element.classList.remove('card__show-card');
  });
  resumeList.forEach(element => {
    element.classList.add('card__hide-card');
    // element.classList.remove('card__show-card');
  });
  courseList.forEach(element => {
    // element.classList.add('card__show-card');
    element.classList.remove('card__hide-card');
  });
  document.querySelector(".cards__card").classList.add('card__hide-card');   
  arrow.classList.remove('popover__arrow-flip');   
  popover.classList.remove('active-popover');
  popover.classList.add('closed-popover');

  
  mainTitleOut = calculateCourses(courseCounter);
  document.getElementById("mainTitle").innerHTML = mainTitleOut;
}

