import AuthActions from './Auth/AuthActions'
import AuthMutations from './Auth/AuthMutations'

import ProjectsActions from './Projects/ProjectsActions'
import ProjectsMutations from './Projects/ProjectsMutations'

import SidebatActions from './Sidebar/SidebarActions'
import SidebarMutations from './Sidebar/SidebarMutations'

import CommonActions from './Common/CommonActions'
import PageActions from './Page/PageActions'
import ProjectsActions from './Projects/ProjectsActions'
import SideBarActions from './Sidebar/SidebarActions'

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

export default {
  actions,
  mutations
}

