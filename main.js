function main () {
  const navbarMenuButtonElement = document.querySelector('.navbar-item--menu-button')

  navbarMenuButtonElement.addEventListener('click', function () {
    var target = navbarMenuButtonElement.dataset.target
    var targetElement = document.getElementById(target)

    navbarMenuButtonElement.classList.toggle('is-active')
    targetElement.classList.toggle('is-active')
  })
}

document.addEventListener('DOMContentLoaded', main)
