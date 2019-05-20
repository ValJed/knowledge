
let handleOutsideClick

export default {
  bind (el, binding, vnode) {
    handleOutsideClick = (e) => {
      const { className } = binding.value
      if (!el.contains(e.target)) {
        console.log('=============> remove <================')
        el.classList.remove(className)
      } else {
        console.log('=============> add <================')
        el.classList.add(className)
      }
    }

    document.addEventListener('click', handleOutsideClick)
  },
  unbind () {
    document.removeEventListener('click', handleOutsideClick)
  }
}
