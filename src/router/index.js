import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sell from '@/components/Sell'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Hello from '@/components/Hello'
import FirstComponent from '@/components/FirstComponent'
import ShowName from '@/components/ShowName'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      // "*" redirects every "non existent path" to a "login path"
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/sell',
      name: 'Sell',
      component: Sell,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/firstcomponent',
      name: 'FirstComponent',
      component: FirstComponent,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/:name',
      name: 'ShowName',
      component: ShowName,
      meta: { 
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if(!requiresAuth && currentUser) next('hello')
  else next()
})

export default router