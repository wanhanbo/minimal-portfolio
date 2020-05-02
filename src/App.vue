<template>
  <div id="app">
    <div ref="loader" id="loader">
      <semipolar-spinner :animation-duration="2000" :size="65" color="#5918df"/>
    </div>
    <div ref="portfolio">
      <Header/>
      <router-view/>
    </div>
  </div>
</template>
<script>
import Header from './subComponents/header';
import { SemipolarSpinner  } from 'epic-spinners';
export default {
  name: 'App',
  components: {
    Header,
    SemipolarSpinner
  },
  mounted () {
    this.$refs.portfolio.style.display = 'none';
    setTimeout(() => {
      this.$refs.loader.style.display = 'none'; 
      this.$refs.portfolio.style.display = ''; 
      }, 2100);
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
@font-face {
   font-family: 'Poppins';
   src: url('./assets/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
}
@font-face {
    font-family: 'Clip';
    src: url('./assets/fonts/Clip.ttf') format('truetype');
}
@font-face {
    font-family: 'VT323-Regular';
    src: url('./assets/fonts/VT323-Regular.ttf') format('truetype');
}
@font-face {
    font-family: 'Audiowide';
    src: url('./assets/fonts/Audiowide-Regular.ttf') format('truetype');
}
@import './assets/css/animations/fadeIn.scss';
html, body {
  font-family: 'Poppins', sans-serif;
}
#app {
  text-align: center;
  color: white;
  position: fixed;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  background: black;
  overflow: auto;
  scroll-behavior: smooth;
}

#loader {
  position: fixed;
  top: 50%;
  left: 50%;
}
@media only screen and (max-device-width: 1199px) {
  #loader {
    top: 45%;
    left: 45%;
  }
}

.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0px);
}
</style>
