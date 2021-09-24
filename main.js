
// mobile toggle menu with click event created 

const mobileBth = document.querySelector('.mobile-toggle')
const links = document.querySelector('.nav-links');
mobileBth.addEventListener('click', () => {
  links.classList.toggle('active');
})



