
let handleOutsideClick

export default {
  bind (el, binding, vnode) {
    handleOutsideClick = (e) => {
      const { className } = binding.value
      if (!el.contains(e.target)) {
        console.log('=============> CONTAINS <================')
        el.classList.remove(className)
      } else {
        console.log('=============> NOOO CLASS <================')
        el.classList.add(className)
        console.log('el ===> ', el)
      }
    }

    document.addEventListener('click', handleOutsideClick)
  },
  unbind () {
    document.removeEventListener('click', handleOutsideClick)
  }
}
