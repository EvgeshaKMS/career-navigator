const contacts = document.getElementById('contactsPopover');

export const openContacts = () => {
    contacts.classList.add('open');
}

export const closeContacts = () => {
    contacts.classList.remove('open');
}