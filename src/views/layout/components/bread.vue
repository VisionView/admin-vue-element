<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item,index) in breadList" :key='index' :to="{path: item.path}">{{item.meta.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  name: 'HomeBread',
  data () {
    return {
      breadList: []
    }
  },
  methods: {
    morenRouter () {
      // 将第一个排除，slice(start,end),end可选：slice() 方法可从已有的数组中返回选定的元素
      this.breadList = this.$route.matched.slice(1)
      console.log(this.breadList)
    }
  },
  mounted () {
    this.morenRouter()
  },
  watch: {
    $route () {
      this.morenRouter()
    }
  }
}
</script>
<style lang="stylus">
.el-breadcrumb
  line-height 50px
</style>
