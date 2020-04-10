;(() => {
  const modals = document.getElementsByClassName('modal')
  const modalTriggers = document.getElementsByClassName('modal-trigger')

  function openModal(el) {
    if (el) {
      document.body.classList.add('modal-is-active')
      el.classList.add('is-active')
    }
  }

  function closeModals() {
    document.body.classList.remove('modal-is-active')
    for (let i = 0; i < modals.length; i++) {
      modals[i].classList.remove('is-active')
    }
  }

  if (modals.length > 0 && modalTriggers.length > 0) {
    for (let modalTrigger of modalTriggers) {
      let modal = document.getElementById(
        modalTrigger.getAttribute('aria-controls')
      )
      if (modal) {
        // Modal video
        if (modalTrigger.hasAttribute('data-video')) {
          if (modal.querySelector('iframe') !== null) {
            modal
              .querySelector('iframe')
              .setAttribute('src', modalTrigger.getAttribute('data-video'))
          } else if (modal.querySelector('video') !== null) {
            modal
              .querySelector('video')
              .setAttribute('src', modalTrigger.getAttribute('data-video'))
          }
        }
        modalTrigger.addEventListener('click', (e) => {
          e.preventDefault()
          if (modalTrigger.hasAttribute('aria-controls')) {
            openModal(modal)
          }
        })
      }
    }
  }

  document.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('modal') ||
      e.target.classList.contains('modal-close-trigger')
    ) {
      e.preventDefault()
      closeModals()
    }
  })

  document.addEventListener('keydown', (event) => {
    const e = event || window.event
    if (e.keyCode === 27) {
      closeModals()
    }
  })
})()
