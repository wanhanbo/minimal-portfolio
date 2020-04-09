<template>
  <div>
    <div ref="loader" id="loader">
      <semipolar-spinner
        :animation-duration="2000"
        :size="65"
        color="#5918df"
      />
    </div>
    <transition name="bounce">
      <div ref="homepage">
        <div class="firefly" v-for="i in 15" :key="i"></div>
        <section class="container">
          <div class="left">
            <Social />
            <div>
              <img class="cover" :src="getImage('Rahul.png')">
            </div>
          </div>
          <div class="right">
            <div class="intro">
              <div class="block"></div>
              <div class="title">
                <div class="hi">{{ content.welcomeText }}</div>
                <div class="sign">
                  <span class='fast-flicker'>{{content.neonText[0]}}</span>{{content.neonText[1]}} <span class='flicker'>{{content.neonText[2]}}</span>{{content.neonText[3]}}
                </div>
              </div>
              <div class="bio">
                <span class="bioText" v-html="content.skillsPrefix"></span>
                <div class="wordSwipe">
                  <ul class="flip4">
                    <li v-for="(skill, index) in content.skills" :key="index">{{skill}}</li>
                  </ul>
                </div>
                <div class="guide">{{content.bio}}</div>
              </div>
            </div>
            <a :href="content.buttons.resume.link" target="blank" download>
              <div class="resumeButton">{{content.buttons.resume.placeholder}}</div>
            </a>
          </div>
        </section>
      </div>
    </transition>
  </div>
</template>

<script src="./home.js"></script>

<style scoped lang="scss">
  @import '../../assets/css/design.scss';
  @import '../../assets/css/firefly.scss';
  @import './home.scss';
</style>
