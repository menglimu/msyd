<style lang="scss" scoped>
   .list-no-info{
        padding: 0.8rem 0 0.3rem;
        display: block;
        img{
            display: block;
            width: 1.65rem;
            margin: 0 auto;
        }
        .text{
            font-size: 0.3rem;
            padding-top: 0.2rem;
            text-align: center;
            color: #888;
        }
   }
</style>

<template>
    <div class="list-no-info">
        <img src="~@assets/images/no-info.png">
        <div class="text">{{text}}</div>
    </div>
</template>

<script>
// 入参 text: 要展示的文字
// import msvideo from '@/components/video/video'
export default {
  components: { 

  },
    
  data(){
    return{
                
    }
  },
  props: {
    text:{
      type: null,
      default: '暂无相关信息'
    }
  },
  created(){
           
  },
    
  mounted(){

  },
    
  computed: {
            
  },
    
  methods: {

  },
}
</script>