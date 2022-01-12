import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'


Vue.use(VueI18n) // 通过插件的形式挂载

const i18n = new VueI18n({
  locale: 'en',    // 语言标识
  messages: {
    // en:{
    //   loginTxt: 'login',
    //   change: 'change'
    // },
    // zh:{
    //   loginTxt: '登录',
    //   change: '切换'
    // }
    'zh': require('./common/lang/zh'),   
    'en': require('./common/lang/en')    
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
