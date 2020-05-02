<template>
    <div class="fav fade-in" ref="container">
        <div class="firefly" v-for="i in 15" :key="i"></div>
        <div class="heading">
            <div>
                <span @click="goToFav">
                    <i class="fas fa-arrow-left" id="back"></i>
                </span>
            </div>
            <div class="title">favourite {{ category }}</div>
        </div>
        <div class="content">
            <div class="card" v-for="(item, index) in list" :key="index">
                <v-lazy-image :src="getImage(item.poster_path)" class="image" />
                <div class="title" v-if="category === 'movies'">{{item.title}}</div>
                <div class="title" v-if="category === 'tv'">{{item.name}}</div>
            </div>
        </div>
        <div class="pagination">
            <span :class="{button: true, prev: true, hide: hidePrev}" @click="goBack">prev</span>
            <span :class="{button: true, next: true, hide: hideNext}" @click="goNext">next</span>
        </div>
    </div>
</template>

<script src="./favouriteList.js"></script>

<style lang="scss" scoped>
@import '../../../assets/css/design.scss';
@import '../../../assets/css/firefly.scss';
@import './favouriteList.scss';
</style>