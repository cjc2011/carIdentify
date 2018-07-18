<template>
  <div class="home">
    <div class="box-title">
      <span class="text">手机买车险 保单寄到家</span>
    </div>
    <div class="box-contaier">
      <div class="step-wrapper">
        <div class="step-item">
          <img src="./step_1.png" alt="步骤1" />
          <p>提交信息</p>
        </div>
        <div class="step-item">
          <img src="./step_2.png" alt="步骤2" />
          <p>获取报价</p>
        </div>
        <div class="step-item">
          <img src="./step_3.png" alt="步骤3" />
          <p>支付订单</p>
        </div>
        <div class="step-item">
          <img src="./step_4.png" alt="步骤4" />
          <p>保单邮寄</p>
        </div>
      </div>
    </div>
    <div class="box-contaier">
      <img class="banner" src="./banner_img.png" alt="图片">
    </div>
    <div class="box-title">
      <span>选险种 哪里不懂点哪里</span>
    </div>
    <div class="insurance-list">
      <div class="insurance-col">
        <div class="insurance-items" :class="{'active': currentIndex == 0}" data-index=0 @click="select_info(0)">
          <img src="./img1.png" alt="车辆损失险">
          <p class="text">车辆损失险</p>
        </div>
        <div class="insurance-items" :class="{'active': currentIndex == 1}" data-index=1 @click="select_info(1)">
          <img src="./img2.png" alt="第三者责任险">
          <p class="text">第三者责任险</p>
        </div>
        <div class="insurance-items" :class="{'active': currentIndex == 2}" data-index=2 @click="select_info(2)">
          <img src="./img3.png" alt="全车盗抢险">
          <p class="text">全车盗抢险</p>
        </div>
      </div> 
      <div class="insurance-info" v-if="currentIndex == 0 || currentIndex == 1 || currentIndex == 2">
        <div class="title">
          <span class="name">{{insurances[currentIndex].name}}</span>
          <span class="text">{{insurances[currentIndex].name_text}}</span>
        </div>
        <div class="scope">
          <span class="name">{{insurances[currentIndex].scope}}</span>
          <span class="text">{{insurances[currentIndex].scope_text}}</span>
        </div>
        <div class="people">
          <span class="name">{{insurances[currentIndex].people}}</span>
          <span class="text">{{insurances[currentIndex].people_text}}</span>
        </div>
      </div>
      <div class="split-line"></div>
      <div class="insurance-col">
        <div class="insurance-items"  :class="{'active': currentIndex == 3}" data-index=3 @click="select_info(3)">
          <img src="./list-1.png" alt="司机责任险">
          <p class="text">司机责任险</p>
        </div>
        <div class="insurance-items"  :class="{'active': currentIndex == 4}" data-index=4 @click="select_info(4)">
          <img src="./list-2.png" alt="玻璃单独破碎险">
          <p class="text">玻璃单独破碎险</p>
        </div>
        <div class="insurance-items"  :class="{'active': currentIndex == 5}" data-index=5 @click="select_info(5)">
          <img src="./list-3.png" alt="车身划痕险">
          <p class="text">车身划痕险</p>
        </div>
      </div> 
      <div class="insurance-info" v-if="currentIndex == 3 || currentIndex == 4 || currentIndex == 5">
        <div class="title">
          <span class="name">{{insurances[currentIndex].name}}</span>
          <span class="text">{{insurances[currentIndex].name_text}}</span>
        </div>
        <div class="scope">
          <span class="name">{{insurances[currentIndex].scope}}</span>
          <span class="text">{{insurances[currentIndex].scope_text}}</span>
        </div>
        <div class="people">
          <span class="name">{{insurances[currentIndex].people}}</span>
          <span class="text">{{insurances[currentIndex].people_text}}</span>
        </div>
      </div>
      <div class="split-line"></div>
      <div class="insurance-col">
        <div class="insurance-items"  :class="{'active': currentIndex == 6}" data-index=6 @click="select_info(6)">
          <img src="./list-4.png" alt="乘客责任险">
          <p class="text">乘客责任险</p>
        </div>
        <div class="insurance-items"  :class="{'active': currentIndex == 7}" data-index=7 @click="select_info(7)">
          <img src="./list-5.png" alt="自燃损失险">
          <p class="text">自燃损失险</p>
        </div>
        <div class="insurance-items"  :class="{'active': currentIndex == 8}" data-index=8 @click="select_info(8)">
          <img src="./list-6.png" alt="发动机涉水险">
          <p class="text">发动机涉水险</p>
        </div>
      </div>
      <div class="insurance-info" v-if="currentIndex == 6 || currentIndex == 7 || currentIndex == 8">
        <div class="title">
          <span class="name">{{insurances[currentIndex].name}}</span>
          <span class="text">{{insurances[currentIndex].name_text}}</span>
        </div>
        <div class="scope">
          <span class="name">{{insurances[currentIndex].scope}}</span>
          <span class="text">{{insurances[currentIndex].scope_text}}</span>
        </div>
        <div class="people">
          <span class="name">{{insurances[currentIndex].people}}</span>
          <span class="text">{{insurances[currentIndex].people_text}}</span>
        </div>
      </div>
      <div class="split-line"></div>
      <div class="insurance-col">
        <div class="insurance-items one"  :class="{'active': currentIndex == 9}" data-index=9 @click="select_info(9)">
          <img class="center" src="./list-7.png" alt="自燃损失险">
          <p class="text">不计免赔</p>
        </div>
      </div>
      <div class="insurance-info" v-if="currentIndex == 9">
        <div class="title">
          <span class="name">{{insurances[currentIndex].name}}</span>
          <span class="text">{{insurances[currentIndex].name_text}}</span>
        </div>
        <div class="scope">
          <span class="name">{{insurances[currentIndex].scope}}</span>
          <span class="text">{{insurances[currentIndex].scope_text}}</span>
        </div>
        <div class="people">
          <span class="name">{{insurances[currentIndex].people}}</span>
          <span class="text">{{insurances[currentIndex].people_text}}</span>
        </div>
      </div>
      <div class="split-line"></div>
      <div class="bottom-button">
        <a class="button" href="tel:1770101182">电话咨询</a>
        <a class="button" @click="get_price">获取报价</a>
      </div>
    </div>
    <div class="box-title">
      <span>常见问题</span>
    </div>
    <div class="QA-list">
      <div class="title">1、趣享车服能够提供哪些险种报价？</div>
      <div class="text">您目前可以在趣享车服选择交强险、车船税和所有商业险，由保险公司直接承担。</div>
      <div class="title">2、哪些车辆可以在网上投保</div>
      <div class="text">支持9座以下（含9座）个人非营业客车（即家庭自用车）报价；</div>
      <div class="title">3、被保人姓名可以填写公司名称吗？</div>
      <div class="text">不可以。目前只提供9座以下（含9座）非营业家庭乘用车的网上报价，被保人必须填写个人。</div>
      <div class="title">4、网上填写的信息会保密码？</div>
      <div class="text">趣享车服有非常严格的保密制度，网上登记的信息仅用于我司为您提供车险报价或售后服务；</div>
      <div class="title">5、车牌是外地牌照，可以网上投保吗？</div>
      <div class="text">可以的，目前可以通过趣享车服进行异地投保；</div>
      <div class="title">6、网上可以提前多长时间购买车险？</div>
      <div class="text">趣享车服可以提前90天为您的车辆进行车险报价、投保</div>
      <div class="title">7、明天车险到期，今天可以购买吗？</div>
      <div class="text">可以的，当天在网上投保，保险生效日可以选择第二天</div>
      <div class="title">8、投保完成后如何拿到车险保单？送单免费吗？</div>
      <div class="text">投保成功后，您的保单最快2天免费邮寄到您的指定地址；</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      insurances: [
        {
          name: '车辆损失险',
          name_text: '95%的车主投保',
          scope: '赔偿范围',
          scope_text: '赔偿因为碰撞或意外导致自己车辆受损的情况',
          people: '适用人群',
          people_text: '所有车主'
        },
        {
          name: '第三者责任险',
          name_text: '99%的车主投保',
          scope: '赔偿范围',
          scope_text: '赔偿其他人的车或人的人身伤亡或财产损失',
          people: '适用人群',
          people_text: '所有车主'
        },
        {
          name: '全车盗抢险',
          name_text: '52%的车主投保',
          scope: '赔偿范围',
          scope_text: '赔偿因为被偷，抢劫，被抢夺造成车辆丢失或全车',
          people: '适用人群',
          people_text: '适合价值较高或容易丢失的车辆'
        },
        {
          name: '司机责任险',
          name_text: '72%的车主投保',
          scope: '赔偿范围',
          scope_text: '赔偿司机人身伤亡的损失',
          people: '适用人群',
          people_text: '适合新手或经常借车别人的车主'
        },
        {
          name: '玻璃单独破碎险',
          name_text: '35%的车主投保',
          scope: '赔偿范围',
          scope_text: '赔偿意外造成挡风玻璃破碎的损失，不包括车灯和车镜',
          people: '适用人群',
          people_text: '适合经常走高速或停放区域治安不好的车辆'
        },
        {
          name: '车身划痕险',
          name_text: '95%的车主投保',
          scope: '赔偿范围',
          scope_text: '赔偿因为意外造成车身被尖锐物品划伤的损失',
          people: '适用人群',
          people_text: '适合新车'
        },
        {
          name: '乘客责任险',
          name_text: '63%的车主投保',
          scope: '赔偿范围',
          scope_text: '赔偿车内乘客人身伤亡的损失',
          people: '适用人群',
          people_text: '适合经常载有其他人的车主'
        },
        {
          name: '自燃损失险',
          name_text: '30%的车主投保',
          scope: '赔偿范围',
          scope_text: '赔偿因为天气太热或线路老化造成突然起火的损失',
          people: '适用人群',
          people_text: '适合三年以上的车'
        },
        {
          name: '发动机涉水险',
          name_text: '95%的车主投保',
          scope: '赔偿范围',
          scope_text: '赔偿因为下暴雨或其他导致发动机进水的损失',
          people: '适用人群',
          people_text: '适合多雨及内涝地区的车辆'
        },
        {
          name: '不计免赔',
          name_text: '90%的车主投保',
          scope: '赔偿范围',
          scope_text: '把原本需要车主赔偿的部分转嫁给保险公司赔偿',
          people: '适用人群',
          people_text: '适合买了主险的车主'
        }
      ],
      currentIndex: null
    }
  },
  methods: {
    get_price() {
      this.$router.push({ path: 'upload' })
    },
    select_info(index) {
      if (this.currentIndex == null || (this.currentIndex > -1 && this.currentIndex !== index)) {
        this.currentIndex =  index
      }else if(this.currentIndex == index){
        this.currentIndex = null
      }
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.home 
  max-width 800px
  margin 0 auto 
.box-title
  display flex
  justify-content center
  align-items center
  height 40px
  margin-bottom 10px
  font-weight 600 
  color #1e1e1e
  &:before,
  &:after 
    content " "
    display block
    margin 0 10px
    width 16px 
    height 2px 
    background #f7a13e
.box-contaier 
  border-bottom 5px solid #f5f4fa    
.step-wrapper
  padding 10px   
  display flex 
  justify-content center
  align-items center
  .step-item 
    position relative
    flex 1
    &:after 
      content ' '
      position absolute 
      right 0
      top 20%
      width 10px 
      height 14px
      background-image url('./arrow.png')
      background-position center 
      background-repeat no-repeat
      background-size contain
    &:last-child
      &:after 
        background none   
    img 
      width 60px 
    p 
      margin-top 15px
      font-size 14px
      color #9d9d9d  
.banner 
  width 60% 
  margin 10px auto 
.insurance-list
  padding 0 10px
  border-bottom 5px solid #f5f4fa 
  .insurance-col  
    display flex
    margin-top 12px
    justify-content center
    .insurance-items
      position relative
      &.active:before 
        content ''
        position absolute
        bottom -7px
        left 50%
        width 14px
        height 14px 
        margin-left -7px
        border 2px solid #ff8c31 
        transform: rotate(46deg);
        background: #fff;
        border-bottom: 0;
        border-right: 0;

      &:after
        content ''
        position absolute
        height 40px
        width 2px
        right 2px
        top 10px
        background #b9b9b9 
      &:last-child 
        &:after 
          background none 
          width 0   
      img 
        max-width 100%
        width 90%
      p.text 
        text-align center
        font-size  12px 
        line-height 40px
        color #4b4b4b 
  .img-wrapper
    text-align center
    border-bottom 1px solid #eeeeee
    img 
      width 140px  
  .split-line 
    border-bottom 1px solid #eeeeee    
.QA-list
  padding 0 10px 20px 
  text-align left
  font-size 14px 
  .title 
    margin 10px 0
    color #000000
    font-weight 600 
  .text 
    line-height 22px  
.insurance-info
  padding 10px 10px 5px 
  text-align left
  font-size 13px
  line-height 24px
  border-top 2px solid #ff8c31   
  .title .name
    margin-right 4px
    font-size 14px 
    font-weight 600
    color #1a1a1a   
  .scope .name,
  .people .name 
    color #f2c069  
  .text 
    font-size 13px
    color #bfbfbf  
.bottom-button
  position relative 
  padding 25px 0
  display flex 
  justify-content space-around
  width 100%
  .button 
    text-align center
    width 120px
    height 36px
    line-height 36px
    border-radius 36px 
    font-size 16px
    color #ffffff  
    background #fb9533
.one 
  width 30%    
  margin 0 auto
</style>
