<template>
    <div>
        <div class="firefly" v-for="i in 15"></div>
        <div class="row">
                <div class="col" v-for="(project, index) in projects" :key="index">
                    <img class="projectImage" :src="getImage(project.pic)" >
                    <div class="strip"></div>
                    <div class="text">
                        <div class="title" :title="project.title">{{project.title}}</div>
                        <!-- <div class="about">{{project.about}}</div>
                        <div class="tags">
                            <span v-for="tag in project.tech" :key="tag">{{tag}} </span>
                        </div> -->
                    </div>
                </div> 
            <!-- <div class="col">
                <div class="title">Blibli Game Voucher UX Enhancements</div>
                <div class="strip"></div>
            </div>
            <div class="col">
                <div class="title">Blibli Game Voucher UX Enhancements</div>
                <div class="strip"></div>
            </div> -->
        </div>
    </div>
</template>
<script>
import Header from './subComponents/header'
export default {
    name: 'Work',
    components: {
        Header
    },
    data () {
        return {
            projects: [
                {
                    title: 'Blibli',
                    about: 'Game Voucher UI/UX Enhancements for Blibli.com serving millions of Indonesian Customers',
                    tech: ['Vuejs', 'SCSS'],
                    pic: 'blibliGameVoucher.png'
                },
                {
                    title: 'Genie Aid',
                    about: 'Wireframe & UI Design freelance project for a LA based client',
                    tech: ['Adobe Xd'],
                    pic: 'genieAid.png'
                },
                {
                    title: 'Apna Anaaj',
                    about: 'Crop Price prediction app based on rainfall, MSP datasets',
                    tech: ['ML', 'Python', 'Javascript'],
                    pic: 'ApnaAnaaj.png'
                },
                {
                    title: 'Jaano India Chatbot',
                    about: 'AI enabled chatbot for huge Indian Statistical data',
                    tech: ['NLP', 'Python'],
                    pic: 'JaanoIndia.png'
                },
                {
                    title: 'Alarm',
                    about: 'Short film based on an engineering student common situation',
                    tech: ['Adobe Premiere Pro', 'After Effects'],
                    pic: 'alarm.png'
                },
                {
                    title: 'Science Animations',
                    about: 'User interacting animations of physics experiments to understand the depth of physics',
                    tech: ['Three.js', 'CSS'],
                    pic: 'scienceAnimation.png'
                }
            ]
        }
    },
    methods: {
        getImage (path) {
            return require('../assets/images/' + path);
        }
    }
}
</script>
<style lang="scss" scoped>
@import './css/design.scss';
@import './css/glitch.scss';
@import './css/firefly.scss';
    .row {
        display: grid;
        grid-template-columns: 50% 50%;
        margin: 1%;
        .col {
            margin: 20% 25%;
            .projectImage {
                max-height: 100%;
                display: block;
                width: 100%;
            }
            .strip {
                width: 60%;
                height: 10px;
                background: $purple;
                position: relative;
                right: 40%;
                bottom: 10%;
            }
            .text {
                text-align: left;
                padding: 1%;
                position: relative;
                right: 40%;
                width: 45%;
                bottom: 30%;
                .title {
                    margin: 1% 0%;
                    text-align: left;
                    font-size: 2em;
                }
                .about {
                    margin: 1% 0%;
                }
                .tags {
                    margin: 1% 0%;
                }
            }
        }
    }
</style>