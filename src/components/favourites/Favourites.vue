<template>
    <div>
        <div class="firefly" v-for="i in 15" :key="i"></div>
        <ul>
           <li class="fav" v-for="fav in content" :key="fav.id">
                <div class="heading">
                    <div class="title">{{ fav.kind }}</div>
                    <div class="seeAll" @click="see(fav.id)">see all</div>
                </div>
                <div class="content">
                    <div class="card" v-for="(item, ind) in fav.best" :key="ind">
                        <img :src="getImage(item.thumb)" class="image">
                    </div>
                </div>
            </li> 
        </ul>
        <!-- <div class="fav" v-for="fav in content" :key="fav.id">
            <div class="heading">
                <div class="title">{{ fav.kind }}</div>
                <div class="seeAll" @click="see(fav.id)">see all</div>
            </div>
            <div class="content">
                <div class="card" v-for="(item, ind) in fav.best" :key="ind">
                    <img :src="getImage(item.thumb)" class="image">
                </div>
            </div>
        </div> -->
    </div>
</template>

<script src="./favourites.js"></script>

<style lang="scss" scoped>
@import '../../assets/css/design.scss';
@import '../../assets/css/firefly.scss';
@import './favourites.scss';
</style>