import Vue from 'vue'
import VueResource from 'vue-resource'
import LoadScript from 'vue-plugin-load-script';
// import router from './router'
import VFacebookLogin from "vue-facebook-login-component";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import BImg from 'bootstrap-vue/es/components/image/img'
import App from './App.vue'

library.add(faCoffee)
library.add(faPlay)
library.add(faStop)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component("v-facebook-login", VFacebookLogin);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('b-img', BImg);
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(LoadScript);

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    //Event between GameViwe and Scoreboard, App
    scoreStatus(run){
      this.$emit('changeStatus', run);
    },

    //Event between Scoreboard and App
    feedbackStatus(status){
      this.$emit('feedback', status);
    },

    //Event between Header and App
    openLoginModal(login){
      this.$emit('openModal', login);
    },

    //Event between Auth and App
    closeLoginModal(){
      this.$emit('closeModal');
    },

    //Event between Auth and Header
    enableLogout(){
      this.$emit('logout');
    },

    //Event -> ScoreViewModal and App, GameView, ScoreView
    refreshGame(){
      this.$emit('refresh');
    },

    //Event update View
    loginUpdateApp(status){
      this.$emit('loginStatus', status);
    },

    updateDatabase(){
      this.$emit('updateDatabase');
    },

    updateLeaderboard(status){
      this.$emit('updateLeaderboard', status);
    },

    updateFacebookData(status, name, email){
      this.$emit('update', status, name, email);
    }

  }
});

new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')
