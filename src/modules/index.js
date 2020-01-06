import AuthActions from './Auth/AuthActions'
import AuthMutations from './Auth/AuthMutations'

import ProjectsActions from './Projects/ProjectsActions'
import ProjectsMutations from './Projects/ProjectsMutations'
import ProjectsGetters from './Projects/ProjectsGetters'
import SidebarGetters from './Sidebar/SidebarGetters'

import SidebarActions from './Sidebar/SidebarActions'
import SidebarMutations from './Sidebar/SidebarMutations'

// import CommonActions from './Common/CommonActions'
// import PageActions from './Page/PageActions'

const actions = {
  ...AuthActions,
  ...ProjectsActions,
  ...SidebarActions
}

const mutations = {
  ...AuthMutations,
  ...ProjectsMutations,
  ...SidebarMutations
}

const getters = {
  ...ProjectsGetters,
  ...SidebarGetters
}

export {
  actions,
  mutations,
  getters
}
