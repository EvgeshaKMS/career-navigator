const popover = document.getElementById('popover-categories'),
      popoverToggle = document.getElementById('category'),
      popoverClose = document.querySelector('.close-popover-button '),
      arrow = document.querySelector('.popover__arrow-down');
    
let isPopoverOpen = false;

popoverToggle.onclick = () => { 
  if(isPopoverOpen === false){
    arrow.style.transform = "rotateX(180deg)";
    popover.classList.remove('closed-popout');
    popover.classList.add('active-popout');
    isPopoverOpen = true;
  } 
  else {
    arrow.style.transform = "none";
    popover.classList.remove('active-popout');
    popover.classList.add('closed-popout');
    isPopoverOpen = false;
  }
}

popoverClose.onclick = () => {
  arrow.style.transform = "none";
  popover.classList.remove('active-popout');
  popover.classList.add('closed-popout');
}
