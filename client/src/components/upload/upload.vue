<template>
    <div>
        <div class="upload-wrapper">
            <div class="upload-item">
                <Upload  
                    action="/idcard_identify"
                    :on-success="idCardSuccess"
                    :on-error="idCardError"
                    :before-upload="idCardBeforeLoad"
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
                    :on-error="driviError"
                    :before-upload="driviBeforeLoad"
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
                    :on-error="vehicleError"
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
                <div class="name">身份证：</div>
                <div class="value">{{idCard}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">住址：</div>
                <div class="value">{{address}}</div> 
            </div>
            <div class="msg-item">
                <div class="name">电话：</div>
                <div class="value">{{phone}}</div>
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
        </div>
        <div class="bottom-button">
            下一步
        </div>
    </div>
</template>

<script>
import { Upload } from 'iview'
import axios from 'axios';

export default {
  name: 'upload',
  data () {
    return {
      test: {
        idcar: '123456'
      },
      idCardName: '',
      sex: '',
      idCard: '',
      address: '',         
      phone: '',
      userName: '',
      useType: '',            //准驾车型  
      driviStartTime: '',     //有效日期 
      vehicleNum: '',         //发动机号
      vehicledate: '',        //注册日期
      carBrand: '',           //车辆品牌
      carType: '',            //车辆类型
      carCode: '',            //车辆识别代码
      carUser: '',            //所有人
      carNum:'',              //车牌号
      carNature: '',          //使用性质
      carTime: '',             //发证日期
      idCardUploaded: false,
      driviUploaded: false,
      vehicleUploaded: false,
      idCardImage: '',
      driviImage: ''
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    idCardSuccess(res,file) {
      var idCard = res.words_result
      this.idCardName = idCard['姓名']['words']
      this.idCard = idCard['公民身份号码']['words']
      this.address = idCard['住址']['words']
      this.sex = idCard['性别']['words']
      this.idCardUploaded = true
    },
    driviSuccess(res, file) {
      var drivi = res.words_result
      this.useType = drivi['准驾车型']['words'] 
      this.driviStartTime = drivi['至']['words']
      this.userName = drivi['姓名']['words']
    },
    vehicleSuccess(res, file) {
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
    },
    idCardError(error) {
      this.$Message.error('上传失败请重试');
    },
    driviError(error) {
      this.$Message.error('上传失败请重试');
    },
    vehicleError(error) {
      this.$Message.error('上传失败请重试');
    },
    idCardBeforeLoad(file) {
      var that = this
      let filereader = new FileReader();
      filereader.readAsDataURL(file);
      filereader.onload = function(ev) {
        that.idCardImage = ev.target.result
      }
    },
    driviBeforeLoad(file){
      var that = this
      let filereader = new FileReader();
      filereader.readAsDataURL(file);
      filereader.onload = function(ev) {
        that.driviImage = ev.target.result
      }
    }
  },
  components: {
    Upload
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
        .name 
            margin-right 4px
            color #222222
        .value 
            flex 1
            color #848484   
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