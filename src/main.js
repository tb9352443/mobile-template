import Vue from 'vue'
import App from './App.vue'
// import MintUi from 'mint-ui'
// import 'mint-ui/lib/style.css'
import './style/font/iconfont.css'
import './style/index.css'
// import VueI18n from 'vuex-i18n'
// Vue.use(VueI18n) // 通过插件的形式挂载，通过全局方法 Vue.use() 使用插件
// const i18n = new VueI18n({
//     locale: 'zh', // 语言标识 //this.$i18n.locale // 通过切换locale的值来实现语言切换
//     messages: {
//         'zh': require('./VueI18n/language-zh'), //
//         'en': require('./VueI18n/language-en')
//     }
// })
import { Swiper } from 'vux'

Vue.component('swiper', Swiper)
import router from './router'
Vue.config.productionTip = false
    // Vue.use(MintUi)
new Vue({
    router,
    // i18n,
    render: h => h(App),
}).$mount('#app')