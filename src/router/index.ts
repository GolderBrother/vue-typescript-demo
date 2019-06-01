import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestVuexClass from '@/components/TestVuexClass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/testVuexClass',
      name: 'TestVuexClass',
      component: TestVuexClass
    }
  ]
})
