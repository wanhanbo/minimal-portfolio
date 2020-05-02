import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Work from '@/components/work/Work'
import Awards from '@/components/awards/Awards'
import Favourites from '@/components/favourites/Favourites'
import FavouriteList from '@/components/favourites/list/FavouriteList'
import Test from '@/components/test'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'RJ Portfolio'
      }
    },
    {
      path: '/#test',
      name: 'Test',
      component: Test
    },
    {
      path: '/#work',
      name: 'Work',
      component: Work,
      meta: {
        title: 'Work: RJ'
      }
    },
    {
      path: '/#awards',
      name: 'Awards',
      component: Awards,
      meta: {
        title: 'Awards: RJ'
      }
    },
    {
      path: '/#favourites',
      name: 'Favourites',
      component: Favourites,
      meta: {
        title: 'Favourites: RJ'
      }
    },
    {
      path: '/#favourites/:kind',
      name: 'FavouriteList',
      component: FavouriteList,
      meta: {
        title: 'Favourites'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router;
