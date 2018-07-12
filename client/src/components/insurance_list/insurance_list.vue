<template>
    <div>
        <div class="box-title">
            <span class="text">手机买车险 保单寄到家</span>
        </div>
        <div class="insurance-list">
            <div class="insurance-item">
                <div class="title">机动车损失险</div>
                <div class="content">
                    <div class="left">
                        <p>用于赔偿自己车辆的损失</p>
                        <P>[推荐]95%，适合2年的新车、5年内的新车、经常开车、经常去异地的车主</P>
                    </div>
                    <div class="right">
                        <div class="radio-icon active">
                            <Icon type="checkmark"></Icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="insurance-item">
                <div class="title">机动车第三者责任保险</div>
                <div class="content">
                    <div class="left">
                        <p>用于赔偿对他人造成的财产损失</p>
                        <P>[推荐]99%，适合的新手、新车、经常开车</P>
                    </div>
                    <div class="right">
                        <div class="radio-icon active">
                            <Icon type="checkmark"></Icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="insurance-item">
                <div class="title">车上人员责任(司机)</div>
                <div class="content">
                    <div class="left">
                        <p>年内本车乘客（非驾驶员）的人身伤亡费用，适合经常载人的车主</p>
                    </div>
                    <div class="right">
                        <div class="radio-icon active">
                            <Icon type="checkmark"></Icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="insurance-item">
                <div class="title">车上人员责任(乘客)</div>
                <div class="content">
                    <div class="left">
                        <p>年内本车乘客（非驾驶员）的人身伤亡费用，适合经常载人的车主</p>
                    </div>
                    <div class="right">
                        <div class="radio-icon active">
                            <Icon type="checkmark"></Icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="insurance-item">
                <div class="title">玻璃单独破碎险</div>
                <div class="content">
                    <div class="left">
                        <p>用于赔偿非抗力对玻璃造成的损失，适合经常走高速，上下班开车的车主</p>
                    </div>
                    <div class="right">
                        <div class="radio-icon">
                            <Icon type="checkmark"></Icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="insurance-item">
                <div class="title">机动车盗抢险</div>
                <div class="content">
                    <div class="left">
                        <p>用于赔付车辆被盗损失</p>
                        <p>适合无固定停车位、3年以下新车、豪车；户外活动多的车主</p>
                    </div>
                    <div class="right">
                        <div class="radio-icon active">
                            <Icon type="checkmark"></Icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="insurance-item">
                <div class="title">自燃损失险</div>
                <div class="content">
                    <div class="left">
                        <p>车的自身原因起火造成的车辆本身的损失</p>
                        <p>适合无固定停车位、新车、偶尔开车、上下班开车的车主</p>
                    </div>
                    <div class="right">
                        <div class="radio-icon active">
                            <Icon type="checkmark"></Icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="insurance-item">
                <div class="title">发动机特别损失险（涉水险）</div>
                <div class="content">
                    <div class="left">
                        <p>因水淹或涉水行驶造成发动机损坏的费用，适合易积水地区（如北京）、户外活动多的车主</p>
                    </div>
                    <div class="right">
                        <div class="radio-icon">
                            <Icon type="checkmark"></Icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="insurance-item">
                <div class="title">不计免赔险</div>
                <div class="content">
                    <div class="left">
                        <p>事故发生后自己不再承担损失</p>
                        <p>[推荐]90%,建议全部购买</p>
                    </div>
                    <div class="right">
                        <div class="radio-icon">
                            <Icon type="checkmark"></Icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="insurance-item">
                <div class="title">无法找到第三方特约险</div>
                <div class="content">
                    <div class="left">
                        <p>事故发生后如果找不到另一责任人，未投保此险种的需要自行承担30%绝对赔额，投保后则由保险公司全部承担</p>
                        <p>[推荐]65%,适合经常把车辆停在公共停车场的车主</p>
                    </div>
                    <div class="right">
                        <div class="radio-icon">
                            <Icon type="checkmark"></Icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-title">
            <span class="text">交强险和车船税</span>
        </div>
        <div class="insurance-list">
            <div class="insurance-item">
                <div class="content">
                    <div class="left">
                        <p>交强险：国家规定的强制保险</p>
                        <P>车船险：以排量为收取标准的国家税收</P>
                    </div>
                    <div class="right">
                        <div class="radio-icon">
                            <Icon type="checkmark"></Icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="listen">
            <div class="liability" @click="select_m">
                <div class="check">
                    <Icon v-show="select_mianze" type="checkmark-round"></Icon>
                </div>
                <p class="text">我已阅读并同意趣享车服</p>
                <span @click="mianze_modal">免责申明</span>
            </div>  
            <div class="liability" @click="select_h">
                <div class="check">
                    <Icon v-show="select_hezuo" type="checkmark-round"></Icon>
                </div>
                <p class="text">我已阅读并同意趣享车服</p>
                <span @click="hezuo_modal">合作协议</span>
            </div>
        </div>
        <div class="bottom-button">
            获取报价
        </div>
        <Modal
            v-model="mianze_show"
            title="免责声明">
            <p>免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明</p>
            <div slot="footer">
            </div>
        </Modal>
        <Modal
            v-model="hezuo_show"
            title="合作协议">
            <p>合作协议合作协议合作协议合作协议合作协议合作协议</p>
            <div slot="footer">
            </div>
        </Modal>
    </div>
</template>

<script>
import { Icon, Modal } from 'iview'

export default {
  name: 'insurance_list',
  data () {
    return {
        mianze_show: false,
        hezuo_show: false,
        select_mianze: false,
        select_hezuo: false
    }
  },
  mounted() {

  },
  methods: {
    mianze_modal() {
        this.mianze_show = true
    },
    hezuo_modal() {
        this.hezuo_show = true
    },
    select_h() {
        this.select_hezuo = !this.select_hezuo
    },
    select_m() {
        this.select_mianze = !this.select_mianze
    }
  },
  components: {
      Icon,
      Modal
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .box-title
        display flex
        justify-content center
        align-items center
        margin-top 20px
        height 40px
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
    .insurance-list
        padding 0 20px
        text-align left
        .insurance-item
            padding 20px 6px
            border-bottom 1px solid #eeeeee
            .title 
                font-size 15px 
                color #1b1b1b
                line-height 24px
                font-weight 600
            .content
                display flex
                .left 
                    flex 1
                    p 
                        line-height 24px
                        font-size 14px 
                        color #494949
                .right
                    display flex 
                    align-items center
                    .radio-icon
                        margin-left 20px
                        height 30px
                        width 30px
                        line-height 30px
                        color #b9b9b9
                        border-radius 15px
                        text-align center
                        border 1px solid #b9b9b9
                        &.active 
                            color #fd8b32
                            border 1px solid #fd8b32
    .listen
        margin 30px 16px 
        text-align left
        font-size 10px
        color #494949
        .liability
            margin-bottom 10px
            display flex
            justify-content center
            align-items center
            .check
                width 12px 
                height 12px
                margin 0 2px
                border 1px solid #494949
            span 
                color #fa9634
                text-decoration underline
    .bottom-button
        margin 40px auto
        width 200px
        height 40px
        line-height 40px
        border-radius 20px  
        font-size 14px
        color #ffffff  
        background #fb9533  
</style>