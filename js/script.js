import { data } from './mockData.js'
import { openPopover, closePopover} from './popoverScript.js'

const createNewCard = (type, lastOnline, date, name, additionalInformation, salary, skills, contacts) => `
<div id="card" class="cards__card${addCardType(type)}">
    <div class="card__card-information">                
      <div class="card-information__dates">
        <span id="lastOnline" class="dates__text">${lastOnline}</span>
        <span id="date" class="dates__text">${date}</span>
      </div>

      <div class="card-information__info-block">
        <h2 class="info-block__title">
          <a id="name" href="#" class="title__link">${name}</a>
        </h2>
        <span id="additionalInformation" class="info-block__description">${additionalInformation.join(', ')}</span>
        <span class="info-block__info">
          Работа на лето, работа во время учёбы
        </span>
        <span id="salary" class="info-block__salary">${salary}</span>
      </div>

      <div id="tags" class="card-information__tags">
        ${createNewTag(skills)}
      </div>
    </div>

    <div class="card__buttons">
      <div class="buttons__left-buttons">
        <button class="respond">Откликнуться</button>
        <button id="contacts" class="contacts">
          <span>
            Показать контакты
          </span>
          <div class="contacts-popover">
            <span class="contacts-popover__title">Контакты
              <img id="closeButton" src="./icons/main/closeIcon.svg" alt=""/>
            </span>
            <ul class="contacts-popover__list">
              ${addContact(contacts)}
            </ul>
          </div>
        </button>
      </div>
      <button class="favorites"></button>
    </div>
</div>`

const createNewTag = (skill) => {
  let tags = '';
  skill.forEach(elem => {
    tags += `<div class="tags__tag">
    <span id="skills" class="tag__name">${elem}</span>
</div>`;
  })
  return tags;
}

const addContact = (contactArr) => {
  let contacts = '';
  contactArr.forEach(elem => {
    contacts += `<li id="contact" class="contact">${elem}</li>`
  })
  return contacts;
}

const addCardType = (type) => {
  if (type === 'Вакансия') {
    return ' vacancy';
  } else if (type === 'Резюме'){
    return ' resume';
  } else if (type === 'Курс') {
    return ' course';
  }
}

const calculateAllCategories = (counter) => {
  if (counter === 0) {
    return `Результатов не найдено`;
  } else if (counter % 10 === 1 && counter % 100 !== 11) {
    return `Найден ${counter} результат`;
  } else if ((counter % 10 === 2 || counter % 10 === 3 || counter % 10 === 4) && (counter % 100 !== 12 || counter % 100 !== 13 || counter % 100 !== 14)) {
    return `Найдено ${counter} результата`;
  } else {
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
  } else {
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
  } else {
    return `Найдено ${counter} курсов`;
  }
}

const popover = document.getElementById('popover-categories'),
popoverToggle = document.getElementById('category'),
popoverClose = document.querySelector('.close-popover-button '),
arrow = document.querySelector('.popover__arrow-down');

let isPopoverOpen = false;

//поповер с категориями
popoverToggle.onclick = () => { 
  if(isPopoverOpen === false){
    openPopover();
  } 
  else {
    closePopover()
  }
}

popoverClose.onclick = () => {
  closePopover();
}

const allCards = document.getElementById('cards');

let counter = 0,
  vacancyCounter = 0,
  resumeCounter = 0,
  courseCounter = 0;

data.forEach(elem => {
  allCards.innerHTML += createNewCard(elem.type, elem.lastOnline, elem.date, elem.name, elem.additionalInformation, elem.salary, elem.skills, elem.contacts);
  if (elem.type === "Вакансия") {
    vacancyCounter++;
  } else if (elem.type === "Резюме") {
    resumeCounter++;
  } else if (elem.type === "Курс") {
    courseCounter++;
  }
  counter++;
})

let mainTitleOut = ``;
const getTitle = document.getElementById("mainTitle");

mainTitleOut = calculateAllCategories(counter);
getTitle.innerHTML = mainTitleOut;

const allCategories = document.getElementById('category-1'),
  vacansies = document.getElementById('category-2'),
  resumes = document.getElementById('category-3'),
  courses = document.getElementById('category-4');

const vacancyList = document.querySelectorAll(".vacancy"),
  resumeList = document.querySelectorAll(".resume"),
  courseList = document.querySelectorAll(".course"),
  cards = document.querySelectorAll(".cards__card");


//Выбрать все категории
allCategories.onclick = () => {
  document.getElementById("categoryTitle").innerHTML = 'Все элементы';
  cards.forEach(element => {
    element.classList.remove('card__hide-card');
  });
  closePopover();

  mainTitleOut = calculateAllCategories(counter);
  getTitle.innerHTML = mainTitleOut;

}

//Выбрать только вакансии
vacansies.onclick = () => {
  document.getElementById("categoryTitle").innerHTML = 'Вакансии';

  vacancyList.forEach(element => {
    element.classList.remove('card__hide-card');
  });
  resumeList.forEach(element => {
    element.classList.add('card__hide-card');
  });
  courseList.forEach(element => {
    element.classList.add('card__hide-card');
  });
  closePopover();

  mainTitleOut = calculateVacancies(vacancyCounter); 
  getTitle.innerHTML = mainTitleOut;

}

//выбрать только резюме
resumes.onclick = () => {
  document.getElementById("categoryTitle").innerHTML = 'Резюме';

  vacancyList.forEach(element => {
    element.classList.add('card__hide-card');
  });
  resumeList.forEach(element => {
    element.classList.remove('card__hide-card');
  });
  courseList.forEach(element => {
    element.classList.add('card__hide-card');
  });
  closePopover();

  mainTitleOut = calculateResume(resumeCounter) ;
  getTitle.innerHTML = mainTitleOut;

}

//Выбрать только курсы
courses.onclick = () => {
  document.getElementById("categoryTitle").innerHTML = 'Курсы';
  vacancyList.forEach(element => {
    element.classList.add('card__hide-card');
  });
  resumeList.forEach(element => {
    element.classList.add('card__hide-card');
  });
  courseList.forEach(element => {
    element.classList.remove('card__hide-card');
  });
  closePopover();

  mainTitleOut = calculateCourses(courseCounter);
  getTitle.innerHTML = mainTitleOut;
}

