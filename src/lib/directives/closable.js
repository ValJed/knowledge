
let handleOutsideClick

export default {
  bind (el, binding, vnode) {
    handleOutsideClick = (e) => {
      const { className, level } = binding.value

      const elem = level === 'parent' ? el.parentNode
        : level === 'child' ? el.childNodes[0]
          : el

      if (!elem.contains(e.target)) {
        console.log('elem ===> ', elem)
        console.log('e.target ===> ', e.target)
        elem.classList.remove(className)
      }
      // else {
      //   elem.classList.add(className)
      // }
    }

    document.addEventListener('click', handleOutsideClick)
  },
  unbind () {
    document.removeEventListener('click', handleOutsideClick)
  }
}
