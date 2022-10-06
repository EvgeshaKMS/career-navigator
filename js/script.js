// import { data } from "./mockData.js";

// let category = document.getElementsByClassName('main__category-popover');
// let popover = category.getElementsByClassName('all-categories')
// popover.addEventListener("click", function() {
//     popover.classList.toggle('active');
// })

let closeContacts = document.getElementById("closeButton");
closeContacts.addEventListener("click", function () {
  console.log("click");
  // let current = document.getElementsByClassName("contacts-popover");
  // current.classList.toggle("close");
});

// const closePopover = () => {
  
//   return console.log("click");
// };


// let titleOut = "";
// let dateOut = "";
// let lastOnlineOut = "";
// let salaryOut = "";
// let skillsOut = "";
// let contactsOut = "";
// let additionalInformationOut = "";
// let counter = 0;

// const createNewCard = () =>
//   document
//     .querySelector(".cards")
//     .appendChild(document.querySelector(".cards__card").cloneNode(true));

// const createNewTag = () =>
//   document
//     .querySelector(".card-information__tags")
//     .appendChild(document.querySelector(".tags__tag").cloneNode(true));

// const deleteTag = () => {
//   let tags = document.querySelector(".card-information__tags");
//   while (tags.firstChild) {
//     tags.removeChild(tags.lastChild);
//   }
// };
// const addContact = () =>
//   document
//     .querySelector(".popover-list")
//     .appendChild(document.querySelector(".contact").cloneNode(true));

// for (let key in data) {
//   titleOut = `${data[key].name}`;
//   lastOnlineOut = data[key].lastOnline;
//   dateOut = data[key].date;
//   salaryOut = data[key].salary;

//   document.getElementById("name").innerHTML = titleOut;
//   document.getElementById("last_online").innerHTML = lastOnlineOut;
//   document.getElementById("date").innerHTML = dateOut;
//   document.getElementById("salary").innerHTML = salaryOut;

//   for (let skill of data[key].skills) {
//     skillsOut = skill;
//     document.getElementById("skills").innerHTML = skillsOut;
//     if (data[key].skills.indexOf(skill) !== data[key].skills.length - 1) {
//       createNewTag();
//     }
//   }

//   for (let contact of data[key].contacts) {
//     contactsOut = contact;
//     document.getElementById("contact").innerHTML = contactsOut;
//     if (data[key].contacts.indexOf(contact) !== data[key].contacts.length - 1) {
//       addContact();
//     }
//   }

//   if (data[key].id !== data.length) {
//     createNewCard();
//     // deleteTag();
//   }
//   counter++;
// }

// let mainTitleOut = `Найдено ${counter} результатов`;
// document.getElementById("main__title").innerHTML = mainTitleOut;
