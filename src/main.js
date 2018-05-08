// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import firebase from 'firebase'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'

Vue.config.productionTip = false

let app;
Vue.use(ElementUI);
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDcXfwOJaMJL158t4D6q_CmOsnhaguig5w",
  authDomain: "vue-testing-5c86d.firebaseapp.com",
  databaseURL: "https://vue-testing-5c86d.firebaseio.com",
  projectId: "vue-testing-5c86d",
  storageBucket: "vue-testing-5c86d.appspot.com",
  messagingSenderId: "271889400939"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user){
  if(!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
