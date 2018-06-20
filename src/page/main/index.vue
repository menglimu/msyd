<template>
  <div>
    首页
    <mlbtn>按钮</mlbtn>
  </div>
</template>

<script>
import mlbtn from "@common/btn"
export default {
  name: "index",
  components: {mlbtn},
  props: {},
  data () {
    return {
    }
  },

  created() {
    this.$http.post("msg").then(res => {
      console.log(res)
    })
  },

  mounted() {},

  methods: {},

  computed: {},
  activated() {},
}
</script>

<style lang='scss' scoped>
  
</style>