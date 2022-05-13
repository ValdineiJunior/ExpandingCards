const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removActiveClasses()
    panel.classList.add('active')
  })
})

function removActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
