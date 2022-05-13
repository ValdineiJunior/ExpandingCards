// const panels recebe todos os elementos com classe panel.
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  // adciona a escuta de click em todos elementos de panels
  panel.addEventListener('click', () => {
    // chama a função removeActiveClases
    removeActiveClasses()
    // adciona a classe active ao elemento clicado
    panel.classList.add('active')
  })
})

// remove a classe active de todos elementos da const panels
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
