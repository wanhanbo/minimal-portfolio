<template>
<div class="fade-in">
        <div class="firefly" v-for="i in 15" :key="i"></div>
        <div :v-if="display(content.internships.data)">
            <div class="heading">{{ content.internships.heading }}</div>
            <ul>
                <li v-for="(intern, index) in content.internships.data" :key="index">
                    <Internship :details="intern"/>
                </li>
            </ul>
        </div>
        <div :v-if="display(githubProjects)">
            <div class="heading">{{content.projects.heading}}</div>
            <div class="open-source">
                <OpenSourceCard :project="project" v-for="(project, index) in githubProjects" :key="index" />
            </div>
            <BuzzerButton :link="content.projects.buttons.showMore.link" 
            target="blank" :placeholder="content.projects.buttons.showMore.placeholder"/>
        </div>
        
        <div :v-if="display(content.misc_projects.data)">
            <div class="heading">{{content.misc_projects.heading}}</div>
            <div class="misc-projects">
                <div v-for="(project, index) in content.misc_projects.data" :key="index">
                    <Card :cardDetails="project"/>
                </div>
            </div>
        </div>
        <iframe width="350" height="420" class="xdAnimation"
        src="https://xd.adobe.com/embed/3d8bc126-770d-466a-43a3-8b5d6a54acef-4bba/?fullscreen" frameborder="0">
        </iframe>
        <div>Doordarshan and Chill Animation</div>
    </div>
</template>
<script src="./work.js"></script>
<style lang="scss" scoped>
@import '../../assets/css/design.scss';
@import '../../assets/css/glitch.scss';
@import '../../assets/css/firefly.scss';
@import './work.scss';
</style>