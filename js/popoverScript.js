const popover = document.getElementById('popover-categories'),
      popoverToggle = document.getElementById('category'),
      popoverClose = document.querySelector('.close-popover-button '),
      arrow = document.querySelector('.popover__arrow-down');
    
let isPopoverOpen = false;



export const openPopover = () => {
  arrow.classList.add('popover__arrow-flip');  
  popover.classList.remove('closed-popover');
  popover.classList.add('active-popover');
  isPopoverOpen = true;
}

export const closePopover = () => {
  arrow.classList.remove('popover__arrow-flip');  
  popover.classList.remove('active-popover');
  popover.classList.add('closed-popover');
  isPopoverOpen = false;
}

