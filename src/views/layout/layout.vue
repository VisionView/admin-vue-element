<template>
  <el-container>
    <home-aside :collapse="Collapse"/>
    <el-container>
      <el-header>
        <div class="el-icon-s-fold aside-menu" :class="Active" @click="menuClick"></div>
        <div class="head-center">
          <home-bread />
        </div>
        <home-user class="user"/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HomeAside from './components/aside'
import HomeBread from './components/bread'
import HomeUser from './components/user'
export default {
  name: 'Layout',
  components: {
    HomeAside,
    HomeBread,
    HomeUser
  },
  data () {
    return {
      Collapse: false,
      isActive: false
    }
  },
  methods: {
    menuClick () {
      this.Collapse = !this.Collapse
      this.isActive = !this.isActive
    }
  },
  computed: {
    Active () {
      return this.isActive ? 'rotateGo' : 'rotateBack'
    }
  }
}
</script>
<style lang="stylus">
@import '~css/base.styl'
.el-header
  display flex
  .aside-menu
    width 40px
    font-size 32px
    line-height 40px
    margin 5px 5px 5px 0
    cursor pointer
    text-align center
  .head-center
    flex 1
  .user
    width 60px
    margin-right 20px
.rotateGo
  rotateA()
.rotateBack
  rotateB()
</style>
