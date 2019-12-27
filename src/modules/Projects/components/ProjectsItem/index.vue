<template>
  <el-col :span="8">
    <el-card
      class="card"
      :body-style="{ padding: '0px' }"
    >
      <!-- <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      > -->
      <img
        class="image"
        src="https://fakeimg.pl/400x150/"
      >
      <div class="card-infos">
        <h3>{{ project.name }}</h3>
        <div>
          <el-button
            type="text"
            class="button"
            @click="accessProject()"
          >
            Access Project
          </el-button>
        </div>
        <div class="delete-project">
          <icon
            name="trash"
            :size="1.2"
            color="#000"
            @click.native="removeProject"
          />
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Icon from '@/modules/Common/components/Icon'

export default {
  name: 'ProjectsItem',
  components: {
    Icon
  },
  // data () {
  //   return {
  //     title: 'MY Project item'
  //   }
  // },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['deleteProject']),
    ...mapMutations({
      setCurrentProjectId: 'SET_CURRENT_PROJECT_ID'
    }),
    accessProject () {
      const projectSlug = this.project.name.toLowerCase().replace(' ', '-')

      this.setCurrentProjectId(this.project._id)
      this.$router.push({ path: `/${this.user._id}/${projectSlug}` })
    },
    async removeProject () {
      this.$alert('Voulez-vous supprimer ce project ?', this.project.name, {
        confirmButtonText: 'OK'
      }).then(async (value) => {
        if (value === 'confirm') {
          const res = await this.deleteProject(this.project._id)

          if (res.success) {
            this.$notify({
              type: 'success',
              message: `Project ${this.project.name} has been deleted`
            })
          }
        }
      }).catch((err) => {
        console.error('err ===> ', err)
      })
    }
  }
}
</script>

<style src="./ProjectsItem.scss" scoped lang='scss'></style>
