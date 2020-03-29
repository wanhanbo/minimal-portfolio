<template>
  <div>
    <div class="firefly" v-for="i in 15"></div>
      <section class="container">
        <div class="left">
          <Social />
          <div>
            <img class="cover" src="../assets/images/Rahul.png">
          </div>
        </div>
        <div class="right">
          <div class="intro">
            <div class="block"></div>
            <div class="title">
              <div class="hi">Hi, I am </div>
              <div class="sign">
                <span class="fast-flicker">r</span>ahul <span class="flicker">j</span>ain
              </div>
            </div>
            <div class="bio">
              <span>I <i>design</i> & develop </span>
              <div class="wordSwipe">
                <ul class="flip4">
                  <li>web apps</li>
                  <li>websites</li>
                  <li>ui/ux</li>
                  <li>animations</li>
                </ul>
              </div>
            </div>
          </div>
          <a href="../assets/files/" download="ResumeRahulJain.pdf">
            <div class="resumeButton">Resume</div>
          </a>
        </div>
    </section>
  </div>
</template>

<script>
import Header from './subComponents/header'
import Menu from './subComponents/menu'
import Social from './subComponents/social'
export default {
  name: 'Home',
  components: {
    Header,
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
