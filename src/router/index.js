import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Work from '@/components/Work'
import Awards from '@/components/Awards'
import Favourites from '@/components/Favourites'
import FavBooks from '@/components/FavBooks'
import FavTvs from '@/components/FavTvs'
import FavMovies from '@/components/FavMovies'
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
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
      meta: {
        title: 'Work: RJ'
      }
    },
    {
      path: '/awards',
      name: 'Awards',
      component: Awards,
      meta: {
        title: 'Awards: RJ'
      }
    },
    {
      path: '/favourites',
      name: 'Favourites',
      component: Favourites,
      meta: {
        title: 'Favourites: RJ'
      }
    },
    {
      path: '/favourites/movies',
      name: 'FavMovies',
      component: FavMovies,
      meta: {
        title: 'Fav Movies'
      }
    },
    {
      path: '/favourites/tv',
      name: 'FavTvs',
      component: FavTvs,
      meta: {
        title: 'Fav TVs'
      }
    },
    {
      path: '/favourites/books',
      name: 'FavBooks',
      component: FavBooks,
      meta: {
        title: 'Fav Books'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router;
