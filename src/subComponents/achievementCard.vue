<template>
    <div class="box">
        <v-lazy-image :src="getImage(achievement.certificate)" v-if="achievement.certificate" />
        <i class="fas fa-medal medal" v-if="!achievement.certificate"></i>
        <div>
            <div class="rank">{{achievement.rank}}</div>
            <div class="event">{{achievement.event}}</div>
            <div class="org">{{achievement.org}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AchievementCard',
    props: {
        achievement: Object
    },
    components: {},
    data () {
        return {
            
        }
    },
    created () {
       
    },
    methods: {
        getImage (path) {
            return require('../assets/images/certificates/' + path);
        },
    },
    computed: {}
}
</script>
<style lang="scss" scoped>
@import '../assets/css/design.scss';
.box {
    width: 80%;
    height: 60vh;
    overflow: hidden;
    background: white;
    color: black;
    .medal {
        width: 520px;
        text-align: center;
        font-size: 10em;
        padding: 40px 0px 60px 0px;
        position: relative;
        right: 13%;
    }
    img {
        width: 100%;
    }
    .rank {
        font-size: 1.2em;
        font-weight: 600;
    }
    .event {
        font-size: 1.1em;
        color: $black;
    }
    .org {
        font-size: 0.8em;
        color: $gray;
    }
}
@media only screen and (max-device-width: 1199px){
    .box {
        height: 40vh;
        .medal {
            width: 289px;
            font-size: 3em;
        }
    }
}
</style>