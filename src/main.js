// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { github } from './portfolio.js';
import VLazyImage from "v-lazy-image";

Vue.component('v-lazy-image', VLazyImage);

const getHeaders = () => {
  const headers = {};
  const token = atob(github.auth_token);
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
 };

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://api.github.com/graphql',
  fetch,
  headers: getHeaders()
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})


dom.watch()

library.add(fas)
library.add(fab)
Vue.use(VueApollo)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  components: { App },
  template: '<App/>'
})
