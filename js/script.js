import { data } from './mockData.js'
import { openPopover, closePopover } from './popoverScript.js'
import { createNewCard } from './card.js';
import { calculateAllCategories, calculateVacancies, calculateResume, calculateCourses } from './categoryCounter.js';
// import { openContacts, closeContacts } from './contactsPopover.js'

const popoverToggle = document.getElementById('category'),
  popoverClose = document.querySelector('.close-popover-button ');

let isPopoverOpen = false;

//поповер с категориями
popoverToggle.onclick = () => {
  if (isPopoverOpen === false) {
    openPopover();
    isPopoverOpen = true;
  }
  else {
    closePopover()
    isPopoverOpen = false;
  }
}

popoverClose.onclick = () => {
  closePopover();
  isPopoverOpen = false;
}

window.addEventListener('click', (e) => {
  const isClosest = e.target.closest('.main__category-popover');
  if (!isClosest && isPopoverOpen) {
    closePopover();
    isPopoverOpen = false;
  }
})


const allCards = document.getElementById('cards');

let counter = 0,
  vacancyCounter = 0,
  resumeCounter = 0,
  courseCounter = 0;

//создание карточки и подсчет типов
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
  isPopoverOpen = false;

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
  isPopoverOpen = false;

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
  isPopoverOpen = false;

  mainTitleOut = calculateResume(resumeCounter);
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
  isPopoverOpen = false;

  mainTitleOut = calculateCourses(courseCounter);
  getTitle.innerHTML = mainTitleOut;
}

//кнопка с контактами
const openContacts = (e) => {
  e.classList.add('open');
}

const closeContacts = (e) => {
  e.classList.remove('open');
}

const contactsButton = document.querySelectorAll('#contacts')

contactsButton.forEach(e => {
  let isContactsOpen = false;
  const contacts = e.nextElementSibling;
  e.onclick = () => {
    if (isContactsOpen === false) {
      openContacts(contacts);
      isContactsOpen = true;
    } else {
      closeContacts(contacts);
      isContactsOpen = false;
    }
  }

  const closeContactsButton = contacts.firstElementChild.lastElementChild;
  closeContactsButton.onclick = () => {
    closeContacts(contacts);
    isContactsOpen = false;
  }

  window.addEventListener('click', (elem) => {
    const isClosest = elem.target.closest('.contacts');
    if (!isClosest && isContactsOpen) {
      closeContacts(contacts);
      isContactsOpen = false;
    }
  })
})