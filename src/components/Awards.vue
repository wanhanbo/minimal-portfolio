<template>
    <div>
        <div class="firefly" v-for="i in 15"></div>
        <div class="container">
            <div class="card" v-for="(achievement, index) in achievements" :key="index">
                <AchievementCard :achievement="achievement" />
            </div>
        </div>
    </div>
</template>
<script>
import Header from './subComponents/header';
import { achievements } from '../portfolio.js';
import AchievementCard from './subComponents/achievementCard';
export default {
    name: 'Awards',
    components: {
        Header,
        AchievementCard
    },
    data () {
        return {
            achievements: []
        }
    },
    created () {
        this.achievements = achievements;
    }
}
</script>
<style lang="scss" scoped>
@import './css/design.scss';
@import './css/firefly.scss';
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    margin: 2%;
    .card {
        margin: 10% 0%;
        margin-left: 20%;
    }
}
@media only screen and (max-device-width: 1199px){
    .container {
        grid-template-columns: 100%;
    }
}
</style>