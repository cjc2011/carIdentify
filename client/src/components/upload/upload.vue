<template>
    <div class="car-upload">
        <div class="upload-wrapper">
            <div class="upload-item">
                <Upload  
                    action="/idcard_identify"
                    :on-success="idCardSuccess"
                    :on-error="uploadError"
                    :before-upload="BeforeLoad"
                    :show-upload-list="false">
                    <div class="content">
                        <div class="img-wrapper">
                            <img src="./upload.png" alt="上传图片">
                        </div>
                        <p>上传身份证</p>
                    </div>    
                </Upload>
            </div>
            <div class="upload-item">
                <Upload  
                    action="/drivi_identify"
                    :on-success="driviSuccess"
                    :on-error="uploadError"
                    :before-upload="BeforeLoad"
                    :show-upload-list="false">
                    <div class="content">
                        <div class="img-wrapper">
                            <img src="./upload.png" alt="上传图片">
                        </div>
                        <p>上传驾驶证</p>
                    </div>
                </Upload>
            </div>
            <div class="upload-item">
                <Upload  
                    action="/vehicle_identify"
                    :on-success="vehicleSuccess"
                    :on-error="uploadError"
                    :before-upload="BeforeLoad"
                    :show-upload-list="false">
                    <div class="content">
                        <div class="img-wrapper">
                            <img src="./upload.png" alt="上传图片">
                        </div>
                        <p>上传行驶证</p>
                    </div>
                </Upload>
            </div>
        </div>
        <div class="box-title">
            <span class="text">选择渠道</span>
        </div> 
        <div class="channel-wrapper">
            <Select v-model="selectchannel" v-if="channels.length">
                <Option v-for="(item, index) in channels" :value="item.qdname" :key="index">{{ item.qdname }}</Option>
            </Select>  
        </div>
        <div class="box-title">
            <span class="text">身份证信息</span>
        </div>  
        <div class="msg-list">
            <div class="msg-item">
                <div class="name">姓名：</div>
                <div class="value">{{idCardName}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">性别：</div>
                <div class="value">{{sex}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">身份证号：</div>
                <div class="value">{{idCard}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">民族：</div>
                <div class="value">{{minzu}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">出生日期：</div>
                <div class="value">{{shengri}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">住址：</div>
                <div class="value">{{address}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">电话：</div>
                <div class="value">
                    <input type="tel" v-model="phone">
                </div>
            </div>
        </div>
        <div class="box-title">
            <span class="text">驾驶证信息</span>
        </div>  
        <div class="msg-list">
            <div class="msg-item">
                <div class="name">姓名：</div>
                <div class="value">{{userName}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">性别：</div>
                <div class="value">{{jsex}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">国籍：</div>
                <div class="value">{{jguoji}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">住址：</div>
                <div class="value">{{jzhuzhi}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">出生日期：</div>
                <div class="value">{{jcsrq}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">领证日期：</div>
                <div class="value">{{jlzrq}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">准驾车型：</div>
                <div class="value">{{useType}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">有效期：</div>
                <div class="value">{{driviStartTime}}</div>
            </div>
        </div>
        <div class="box-title">
            <span class="text">行驶证信息</span>
        </div>  
        <div class="msg-list">
            <div class="msg-item">
                <div class="name">车牌号码：</div>
                <div class="value">{{carNum}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">车辆类型：</div>
                <div class="value">{{carType}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">所有人：</div>
                <div class="value">{{carUser}}</div>
            </div>
            <div class="msg-item">
                <div class="name">使用性质：</div>
                <div class="value">{{carNature}}</div>
            </div>
            <div class="msg-item">
                <div class="name">品牌型号：</div>
                <div class="value">{{carBrand}}</div>
            </div>
            <div class="msg-item">
                <div class="name">识别代码：</div>
                <div class="value">{{carCode}}</div>
            </div>
            <div class="msg-item">
                <div class="name">发动机号码：</div>
                <div class="value">{{vehicleNum}}</div>
            </div>
            <div class="msg-item">
                <div class="name">注册日期：</div>
                <div class="value">{{vehicledate}}</div>
            </div>
            <div class="msg-item">
                <div class="name">发证日期：</div>
                <div class="value">{{carTime}}</div>
            </div>
            <div class="msg-item">
                <div class="name">住址：</div>
                <div class="value">{{xzhuzhi}}</div>
            </div>
        </div>
        <div class="next-button" @click="next">
            下一步
        </div>
        <div class="loading-mask" v-show="loadingShow"></div>
        <div class="loading-container" v-show="loadingShow">
            <loading :title="loadingText"></loading>
        </div> 
        
    </div>
</template>

<script>
import { Upload, RadioGroup, Radio, Icon, Select, Option  } from 'iview';
import axios from 'axios';
import Loading from '../../components/loading/loading.vue';

export default {
  name: 'upload',
  data () {
    return {
      channels: [],
      channelId: '',
      selectchannel: '',
      idCardName: '',           //身份证名称
      sex: '',                  //性别
      minzu: '',                //民族
      shengri: '',              //生日
      idCard: '',               //身份证号    
      address: '',              //身份证住址
      phone: '',                //电话

      userName: '',             //驾驶证姓名
      jsex: '',                 //驾驶证性别
      jguoji: '',               //驾驶证国籍
      jzhuzhi: '',              //驾驶证住址
      jcsrq: '',                //驾驶证生日
      jlzrq: '',                //驾驶证领证日期
      useType: '',              //准驾车型  
      driviStartTime: '',       //有效日期 

      vehicleNum: '',           //发动机号
      vehicledate: '',          //注册日期
      carBrand: '',             //车辆品牌
      carType: '',              //车辆类型
      carCode: '',              //车辆识别代码
      carUser: '',              //所有人
      carNum:'',                //车牌号
      carNature: '',            //使用性质
      carTime: '',              //发证日期
      xzhuzhi: '',              //行驶证住址
      idCardUploaded: false,
      driviUploaded: false,
      vehicleUploaded: false,
      idCardImage: '',
      driviImage: '',
      vehicleImage: '',
      loadingText: '图片识别中',
      loadingShow: false
    }
  },
  beforeMount() { 
    axios.get('/channel').then( res => {
        this.channels = res.data.data
    })
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    idCardSuccess(res,file) {
      if (res.image_status == 'normal') {
        var idCard = res.words_result
        this.idCardName = idCard['姓名']['words']
        this.idCard = idCard['公民身份号码']['words']
        this.address = idCard['住址']['words']
        this.minzu = idCard['民族']['words']
        this.shengri = idCard['出生']['words']
        this.sex = idCard['性别']['words']
        this.idCardImage = res.imagePath
        this.idCardUploaded = true
      } else if (res.image_status == 'other_type_card') {
        this.$Message.error('图片类型错误'); 
      } else {
        this.$Message.error('请刷新后尝试');  
      }
      
      this.loadingShow = false
    },
    driviSuccess(res, file) {
      if (!res.error_code) {
        var drivi = res.words_result
        this.useType = drivi['准驾车型']['words']
        this.driviStartTime = drivi['有效期限']['words']
        this.userName = drivi['姓名']['words']
        this.jsex = drivi['性别']['words']
        this.jguoji = drivi['国籍']['words']
        this.jzhuzhi = drivi['住址']['words']
        this.jcsrq = drivi['出生日期']['words']
        this.jlzrq = drivi['初次领证日期']['words']
        this.driviImage = res.imagePath
        this.driviUploaded = true
      }  else {
        this.$Message.error('出错了，请刷新后尝试');    
      }
      this.loadingShow = false
    },
    vehicleSuccess(res, file) {
      if (!res.error_code) {
        var vehivle = res.words_result
        this.vehicleNum = vehivle['发动机号码']['words']        //发动机号
        this.vehicledate = vehivle['注册日期']['words']        //注册日期
        this.carBrand = vehivle['品牌型号']['words']           //车辆品牌
        this.carType = vehivle['车辆类型']['words']            //车辆类型
        this.carCode = vehivle['车辆识别代号']['words']           //车辆识别代码
        this.carUser = vehivle['所有人']['words']            //所有人
        this.carNum = vehivle['号牌号码']['words']             //号牌号码
        this.carNature = vehivle['使用性质']['words']           //使用性质
        this.carTime = vehivle['发证日期']['words']             //发证日期
        this.xzhuzhi = vehivle['住址']['words']
        this.vehicleImage = res.imagePath
        this.vehicleUploaded = true
      }  else {
        this.$Message.error('出错了，请刷新后尝试'); 
      }
      this.loadingShow = false
    },
    uploadError(error) {
      this.loadingShow = false  
      this.$Message.error('上传失败请重试');
    },
    BeforeLoad(file){
      this.loadingShow = true
    },
    next() {
        var that = this
        this.channels.map(function(item, index){
            if (item.qdname == that.selectchannel) {
                that.channelId = item.id
            }
        })
        localStorage.setItem('carData', JSON.stringify(this._data))
        if (!this.idCardUploaded || !this.driviUploaded || !this.vehicleUploaded || !this.phone || !this.selectchannel) {
            this.$Message.error('请补全资料');
            return
        }
        // this.$store.commit('setCarData', this._data)
        this.$router.push({ path: 'insurance_list' })
    }
  },
  components: {
    Upload,
    Loading,
    RadioGroup,
    Radio,
    Icon,
    Select, 
    Option
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
    .car-upload 
        max-width 800px 
        margin 0 auto
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
    .upload-wrapper
        display flex 
        align-items center
        justify-content space-between
        padding 10px 10px
        border-bottom 5px solid #f5f4fa
        .img-wrapper
            height 70px
            line-height 70px
            border 1px solid #eeeeee
            img 
                max-width 50%
                vertical-align middle
        p 
            font-size 14px
            line-height 34px
            color #2b2b2b
    .msg-list
        padding 0 20px
        text-align left
        .msg-item
            display flex 
            padding 21px 6px 11px
            font-size 14px 
            border-bottom 1px solid #eeeeee
            input
                width 100%
                color #848484
        .name 
            margin-right 4px
            color #222222
        .value 
            flex 1
            color #848484   
    .next-button
        margin 40px auto
        width 200px
        height 40px
        line-height 40px
        border-radius 20px  
        font-size 14px
        color #ffffff  
        background #fb9533     

    .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)  
    .loading-mask
        position fixed
        top 0
        bottom 0
        width 100%
        background rgba(0,0,0,0.7)
    .channel-wrapper
        padding 20px 0 
        margin 0 20px
        border-bottom 1px solid #eee
    .ivu-select-selection-focused, .ivu-select-selection:hover
        border-color #fd8b32 !important
    .ivu-radio-checked .ivu-radio-inner,
    .ivu-radio-checked:hover .ivu-radio-inner
        border-color #fd8b32 !important  
        &:after
            background-color  #fd8b32 !important  
    .ivu-radio-checked:hover .ivu-radio-inner    
        border-color #fd8b32 !important    
    .ivu-radio-focus,
    .ivu-select-visible .ivu-select-selection 
        box-shadow 0 0 0 2px rgba(253, 139, 50, 0.3)  !important   
    .ivu-select-item-selected.ivu-select-item-focus
        background #fd8b32    
</style>