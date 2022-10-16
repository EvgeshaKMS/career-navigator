export const createNewCard = (type, lastOnline, date, name, additionalInformation, salary, skills, contacts) => `
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
        <div class="contacts">
          <button id="contacts" class="contacts__button">
            <span>
              Показать контакты
            </span>
          </button>  
          <div id="contactsPopover" class="contacts-popover">
            <span class="contacts-popover__title">
              Контакты
              <img id="closeButton" class="contacts-popover__close" src="./icons/main/closeIcon.svg" alt=""/>
            </span>
            <ul class="contacts-popover__list">
              ${addContact(contacts)}
            </ul>
          </div>
        </div> 
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
  } else if (type === 'Резюме') {
    return ' resume';
  } else if (type === 'Курс') {
    return ' course';
  }
}