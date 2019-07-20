const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/one',
      component: one
    },
    {
      path: '/two',
      component: two
    }
  ]
})