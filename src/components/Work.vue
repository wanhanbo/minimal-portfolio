<template>
    <div>
        <div class="firefly" v-for="i in 15"></div>
        <span class="heading">Internships</span>
        <ul>
            <li v-for="(intern, index) in internships" :key="index">
                <Internship :details="intern"/>
            </li>
        </ul>
        <div class="heading">Open Source Projects</div>
        <div class="open-source">
            <div v-for="(project, index) in projects" :key="index">
                <!-- <Card :cardDetails="project"/> -->
                <OpenSourceCard :project="project"/>
            </div>
        </div>
        <a :href="social.github.link" target="blank"><button class="btn">show more</button></a>
        
        <br>
        <div class="heading">Miscellaneous Projects</div>
        <div class="misc-projects">
            <div v-for="(project, index) in misc_projects" :key="index">
                <Card :cardDetails="project"/>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './subComponents/header';
import Card from './subComponents/card';
import Internship from './subComponents/InternshipCard'
import OpenSourceCard from './subComponents/openSourceCard';
import { work, social } from '../portfolio.js'
export default {
    name: 'Work',
    components: {
        Header,
        Card,
        Internship,
        OpenSourceCard
    },
    created () {
        this.internships = work.internship;
        this.projects = work.projects;
        this.misc_projects = work.misc_projects;
        this.social = social;
    },
    data () {
        return {
            internships: [],
            projects: [],
            social: {},
            misc_projects: []
        }
    },
    methods: {
        getImage (path) {
            return require('../assets/images/' + path);
        }
    },
    computed: {
        isMobile () {
            return (((window.innerWidth > 0) ? window.innerWidth : screen.width) < 1200) ? true : false;
        }
    }
}
</script>
<style lang="scss" scoped>
@import './css/design.scss';
@import './css/glitch.scss';
@import './css/firefly.scss';
.btn {
    color: black;
    background: white;
    font-size: 1em;
    cursor: pointer;
    padding: 0.5% 1%;
    margin: 1%;
}
.heading {
    font-size: 2em;
    color: $purple;
    margin: 3%;
}

ul {
    list-style-type: none;
    li {
        margin: 2% 0% 10% 0%;
    }
}
.open-source, .misc-projects {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    justify-items: center;
    align-items: center;
}
@media only screen and (min-device-width: 1200px){
    
}
@media only screen and (max-device-width: 1199px){
    ul {
        li {
            margin: 2% 0% 15% 0%;
        }
    }
    .open-source {
        grid-template-columns: 100%;
        margin: 0% 5%;
    }
    .misc-projects {
        grid-template-columns: 100%;
        margin: 0% 5%;
    }
}
</style>