import AuthActions from './Auth/AuthActions'
import AuthMutations from './Auth/AuthMutations'

import ProjectsActions from './Projects/ProjectsActions'
import ProjectsMutations from './Projects/ProjectsMutations'
import ProjectsGetters from './Projects/ProjectsGetters'

import SidebatActions from './Sidebar/SidebarActions'
import SidebarMutations from './Sidebar/SidebarMutations'

// import CommonActions from './Common/CommonActions'
// import PageActions from './Page/PageActions'

const actions = {
  ...AuthActions,
  ...ProjectsActions,
  ...SidebatActions
}

const mutations = {
  ...AuthMutations,
  ...ProjectsMutations,
  ...SidebarMutations
}

const getters = {
  ...ProjectsGetters
}

export {
  actions,
  mutations,
  getters
}
