<template>
    <div class="fav">
        <div class="firefly" v-for="i in 15" :key="i"></div>
        <div class="heading">
            <div>
                <span @click="goBack()">
                    <i class="fas fa-arrow-left" id="back"></i>
                </span>
            </div>
            <div class="title">{{ content.heading }}</div>
        </div>
        <div class="content">
            <div class="card" v-for="(item, index) in content.list" :key="index">
                <img :src="getImage(item.thumb)" class="image">
            </div>
        </div>
    </div>
</template>

<script src="./favouriteList.js"></script>

<style lang="scss" scoped>
@import '../../../assets/css/design.scss';
@import '../../../assets/css/firefly.scss';
@import './favouriteList.scss';
</style>