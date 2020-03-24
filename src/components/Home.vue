<template>
  <div>
    <div class="firefly" v-for="i in 15"></div>
      <section class="container">
        <!-- <CoverPhoto /> -->
        <!-- <Social /> -->
        <!-- <div class="resumeButton">Resume</div> -->
        <div class="intro">
          <div class="sign">
            <span class="fast-flicker">r</span>ahul <span class="flicker">j</span>ain
          </div>
          <div class="bio">
            I design & develop web apps
          </div>
        </div>
        <div>
          <img class="cover" src="../assets/images/Rahul.png">
        </div>
        <!-- <div class="box">
          <div class="block"></div>
            <div class="heading">
              
              </div>
        </div>
        <div class="bioBlock"></div>
            <div class="subHeading">{{ bioText }}</div> -->
        <!-- <Menu /> -->
    </section>
  </div>
</template>

<script>
import CoverPhoto from './subComponents/coverPhoto'
import Menu from './subComponents/menu'
import Social from './subComponents/social'
export default {
  name: 'Home',
  components: {
    CoverPhoto,
    Menu,
    Social
  },
  data () {
    return {
      title: 'RAHUL JAIN',
      bioText: 'I develop webapps'
    }
  }
}
</script>
<style scoped lang="scss">
  @import './css/design.scss';
  @import './css/home.scss';
  @import './css/firefly.scss'
</style>
