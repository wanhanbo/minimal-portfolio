<template>
  <div class="fade-in">
    <div class="firefly" v-for="i in 15" :key="i"></div>
    <ul class="container">
      <li id="container__cover">
        <v-lazy-image :src="getImage(content.coverImage)" class="coverImage" />
      </li>
      <li id="container__about">
        <ul class="intro">
          <li id="main">
            <div class="block"></div>
            <div class="title">
            <div class="hi">{{ content.welcomeText }}</div>
              <div class="sign">
                <span class='fast-flicker'>{{content.neonText[0]}}</span>{{content.neonText[1]}} <span class='flicker'>{{content.neonText[2]}}</span>{{content.neonText[3]}}
              </div>
            </div>
          </li>
          <li id="skills">
            <span class="bioText" v-html="content.skillsPrefix"></span>
            <div class="wordSwipe">
              <ul class="flip4">
                <li v-for="(skill, index) in content.skills" :key="index">{{skill}}</li>
              </ul>
            </div>
          </li>
          <li id="description">
            <div class="guide">{{content.bio}}</div>
          </li>
          <li id="resume">
            <BuzzerButton :link="content.buttons.resume.link" :placeholder="content.buttons.resume.placeholder" target="blank"/>
          </li>
        </ul>
      </li>
      <li id="container__social">
        <Social/>
      </li>
    </ul>   
  </div>
</template>

<script src="./home.js"></script>

<style scoped lang="scss">
  @import '../../assets/css/design.scss';
  @import '../../assets/css/firefly.scss';
  @import './home.scss';
  @import '../../assets/css/animations/neonText.scss';
  @import '../../assets/css/animations/wordSwipe.scss';
  @import '../../assets/css/animations/barBlock.scss';
</style>
