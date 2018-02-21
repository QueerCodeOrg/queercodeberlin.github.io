function handleMenu () {
  const navbarMenuElement = document.querySelector('.navbar-menu')
  const navbarMenuButtonElement = document.querySelector('.navbar-item--menu-button')

  // hide menu button
  navbarMenuElement.classList.remove('is-active')

  // toggle menu when pressing menu button
  navbarMenuButtonElement.addEventListener('click', function () {
    navbarMenuButtonElement.classList.toggle('is-active')
    navbarMenuElement.classList.toggle('is-active')
  })
}

function domContentHasLoaded () {
  handleMenu()
}

document.addEventListener('DOMContentLoaded', domContentHasLoaded)
