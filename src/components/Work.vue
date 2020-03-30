<template>
    <div>
        <div class="firefly" v-for="i in 15"></div>
        <div class="row">
                <div class="col" v-for="project in projects" :key="project">
                    <Card :cardDetails="project"/>
                </div>
        </div>
    </div>
</template>
<script>
import Header from './subComponents/header';
import Card from './subComponents/card';
export default {
    name: 'Work',
    components: {
        Header,
        Card
    },
    data () {
        return {
            projects: [
                {
                    title: 'Blibli Game Voucher',
                    about: 'Game Voucher UI/UX Enhancements for Blibli.com serving millions of Indonesian Customers',
                    tech: 'Vuejs, SCSS',
                    pic: 'blibliGameVoucher.png',
                    repo: 'https://www.blibli.com/digital/p/voucher-game'
                },
                {
                    title: 'Genie Aid',
                    about: 'Wireframe & UI Design freelance project for a LA based client',
                    tech: 'Adobe Xd',
                    pic: 'genieAid.png',
                    repo: '#'
                },
                {
                    title: 'Apna Anaaj',
                    about: 'Crop Price prediction app based on rainfall, MSP datasets',
                    tech: 'ML, Python, Javascript',
                    pic: 'ApnaAnaaj.png',
                    repo: 'https://github.com/rahuldkjain/Crop_Prediction'
                },
                {
                    title: 'Jaano India Chatbot',
                    about: 'AI enabled chatbot for huge Indian Statistical data',
                    tech: 'NLP, Python',
                    pic: 'JaanoIndia.png',
                    repo: 'https://github.com/jainsomya972/jaano-india-chatbot'
                },
                {
                    title: 'Alarm Short Film',
                    about: 'Short film based on an engineering student common situation',
                    tech: 'Adobe Premiere Pro, After Effects',
                    pic: 'alarm.png',
                    repo: 'https://www.youtube.com/watch?v=9O3tj0kcKY0'
                },
                {
                    title: 'Science Animations',
                    about: 'User interacting animations of physics experiments to understand the depth of physics',
                    tech: 'Three.js, CSS',
                    pic: 'scienceAnimation.png',
                    repo: 'https://github.com/rahuldkjain/Three.js-Animations'
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
        @media only screen and (min-device-width: 1200px) {
            grid-template-columns: 50% 50%;   
        }
        margin: 1%;
        .col {
            margin: 20% 25%;
            @media only screen and (max-device-width: 1199px) {
                margin: 10% 6%; 
            }
        }
    }
</style>