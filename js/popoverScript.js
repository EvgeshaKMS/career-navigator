const popover = document.getElementById('popover-categories'),
  arrow = document.querySelector('.popover__arrow-down');

export const openPopover = () => {
  arrow.classList.add('popover__arrow-flip');
  popover.classList.remove('closed-popover');
  popover.classList.add('active-popover');
}

export const closePopover = () => {
  arrow.classList.remove('popover__arrow-flip');
  popover.classList.remove('active-popover');
  popover.classList.add('closed-popover');
}