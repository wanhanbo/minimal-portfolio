<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/subComponents/header'
export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
@import url('~/assets/fonts/Poppins/Poppins-Regular.ttf');
html, body {
  font-family: 'Poppins', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  position: fixed;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  background: black;
}

</style>
