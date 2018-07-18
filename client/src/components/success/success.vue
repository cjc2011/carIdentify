<template>
    <div class="success">
      <div class="success-image">
          <img src="./s-image.png" alt="image">
          <p>获取报价成功</p>
      </div>
      <p class="content-text">
          尊敬的客户您好，您的车险目前正在查询，稍后我们这边会有专业的客服跟您来核实，点击
          <a href="/">转跳回到首页</a>
      </p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        methods: {
            back_home() {
                this.$router.go(-3)
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .success-image 
        padding 80px 0 0 0
        img 
            width 130px
        p 
            font-size 16px
            line-height 24px
    .content-text 
        margin 24px
        line-height 22px 
        font-size 16px    
        a 
            color #fa9634
            text-decoration underline     
</style>