export const calculateAllCategories = (counter) => {
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
  
export const calculateVacancies = (counter) => {
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

export const calculateResume = (counter) => {
  if (counter === 0) {
    return `Резюме не найдено`;
  } else {
    return `Найдено ${counter} резюме`;
  }
}

export const calculateCourses = (counter) => {
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