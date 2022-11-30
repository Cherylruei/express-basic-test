const navPage = document.querySelector('.nav-page')
const navItem = document.querySelector('.nav-item')
navItem.addEventListener('click', switchPage)

function switchPage(event) {
  event.preventDefault()
  const target = event.target
  navItem.classList.remove('checked')
  if (target.classList.contains('nav-item')) {
    target.classList.add('checked')
  }
}