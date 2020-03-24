import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Work from '@/components/Work'
import Awards from '@/components/Awards'
import Favourites from '@/components/Favourites'
import FavBooks from '@/components/FavBooks'
import FavTvs from '@/components/FavTvs'
import FavMovies from '@/components/FavMovies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/awards',
      name: 'Awards',
      component: Awards
    },
    {
      path: '/favourites',
      name: 'Favourites',
      component: Favourites
    },
    {
      path: '/favourites/movies',
      name: 'FavMovies',
      component: FavMovies
    },
    {
      path: '/favourites/tv',
      name: 'FavTvs',
      component: FavTvs
    },
    {
      path: '/favourites/books',
      name: 'FavBooks',
      component: FavBooks
    }
  ]
})
