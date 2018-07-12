import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Upload from '@/components/upload/upload'
import InsuranceList from '@/components/insurance_list/insurance_list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },{
      path: '/insurance_list',
      name: 'insurance_list',
      component: InsuranceList
    }
  ]
})
