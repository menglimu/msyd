<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
    }
  },
  created() {
    this.messageBox.confirm(123,{
      title: "弹窗头部名称"
    })
  },
  methods: {}
}
</script>

<style lang="scss">
@import "./style/style.scss";

</style>
