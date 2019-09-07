
let handleOutsideClick

export default {
  bind (el, binding, vnode) {
    handleOutsideClick = (e) => {
      const { level, handler, excluded } = binding.value

      const elem = level === 'parent' ? el.parentNode
        : level === 'child' ? el.childNodes[0]
          : el

      const isExcluded = excluded
        .some((className) => e.target.classList.contains(className))

      if (!elem.contains(e.target) && !isExcluded) {
        vnode.context[handler]()
      }
    }

    document.addEventListener('click', handleOutsideClick)
  },
  unbind () {
    document.removeEventListener('click', handleOutsideClick)
  }
}
