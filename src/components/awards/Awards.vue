<template>
    <div class="fade-in">
        <div class="firefly" v-for="i in 15" :key="i"></div>
        <div class="container">
            <div class="card" v-for="(achievement, index) in content" :key="index">
                <AchievementCard :achievement="achievement" />
            </div>
        </div>
    </div>
</template>

<script src="./awards.js"></script>

<style lang="scss" scoped>
@import '../../assets/css/design.scss';
@import '../../assets/css/firefly.scss';
@import './awards.scss';
</style>