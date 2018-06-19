<template>
  <div>
    首页
  </div>
</template>

<script>
//import component from "@/"
export default {
  name: "index",
  components: {},
  props: {},
  data () {
    return {
    }
  },

  created() {
    this.$http.get("msg").then(res => {
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