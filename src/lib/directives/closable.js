
let handleOutsideClick

export default {
  bind (el, binding, vnode) {
    handleOutsideClick = (e) => {
      const { className } = binding.value
      if (!el.contains(e.target)) {
        el.classList.remove(className)
      } else {
        el.classList.add(className)
      }
    }

    document.addEventListener('click', handleOutsideClick)
  },
  unbind () {
    document.removeEventListener('click', handleOutsideClick)
  }
}
