<template>
  <el-dropdown trigger="click">
    <div>
      <img src="https://raw.githubusercontent.com/VisionView/lib/master/img/user.jpg" class="user-img">
      <i class="el-icon-caret-bottom el-icon--right dropdown-icon"></i>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native='navToHome'>首 页</el-dropdown-item>
      <el-dropdown-item @click.native="teaLogout">注 销</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    // 退出登录
    teaLogout () {
      this.$confirm('是否要退出登录?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(res => {
        alert('已退出')
      }).catch(err => {
        console.log(err)
        // this.$message('已取消')
      })
    },
    // 回首页
    navToHome () {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-dropdown
  width 80px
  cursor pointer
  .user-img
    float left
    height 36px
    width 36px
    margin 7px 0
    border-radius 50%
  .dropdown-icon
    display inline-block
</style>
