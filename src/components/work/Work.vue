<template>
    <div>
        <div class="firefly" v-for="i in 15" :key="i"></div>
        <div :v-if="display(content.internships.data)">
            <div class="heading">{{ content.internships.heading }}</div>
            <ul>
                <li v-for="(intern, index) in content.internships.data" :key="index">
                    <Internship :details="intern"/>
                </li>
            </ul>
        </div>
        <div :v-if="display(content.projects.data)">
            <div class="heading">{{content.projects.heading}}</div>
            <div class="open-source">
                <div v-for="(project, index) in content.projects.data" :key="index">
                    <OpenSourceCard :project="project"/>
                </div>
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
    </div>
</template>
<script src="./work.js"></script>
<style lang="scss" scoped>
@import '../../assets/css/design.scss';
@import '../../assets/css/glitch.scss';
@import '../../assets/css/firefly.scss';
@import './work.scss';
</style>