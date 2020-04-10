;(() => {
  const accordionEl = document.getElementsByClassName('accordion-header')

  function openAccordion({ classList }, { style, scrollHeight }) {
    classList.add('is-active')
    style.maxHeight = `${scrollHeight}px`
  }

  function closeAccordion({ classList }, { style }) {
    classList.remove('is-active')
    style.maxHeight = null
  }

  if (accordionEl.length > 0) {
    accordionEl.forEach((el) => {
      const parent = el.parentNode
      const panel = el.nextElementSibling
      parent.classList.contains('is-active') && openAccordion(parent, panel)
      el.addEventListener('click', () => {
        parent.classList.contains('is-active')
          ? closeAccordion(parent, panel)
          : openAccordion(parent, panel)
      })
    })
  }
})()
