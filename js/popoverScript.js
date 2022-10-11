const popover = document.getElementById('popover-categories'),
      popoverToggle = document.getElementById('category'),
      popoverClose = document.querySelector('.close-popover-button '),
      arrow = document.querySelector('.popover__arrow-down');
    
let isPopoverOpen = false;

popoverToggle.onclick = () => { 
  if(isPopoverOpen === false){
    arrow.classList.add('popover__arrow-flip');   // поменять
    popover.classList.remove('closed-popover');
    popover.classList.add('active-popover');
    isPopoverOpen = true;
  } 
  else {
    arrow.classList.remove('popover__arrow-flip');   // поменять
    popover.classList.remove('active-popover');
    popover.classList.add('closed-popover');
    isPopoverOpen = false;
  }
}

popoverClose.onclick = () => {
  arrow.classList.remove('popover__arrow-flip');   // поменять
  popover.classList.remove('active-popover');
  popover.classList.add('closed-popover');
}
