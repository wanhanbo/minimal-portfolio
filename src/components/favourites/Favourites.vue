<template>
    <div class="fade-in">
        <div class="firefly" v-for="i in 15" :key="i"></div>
        <ul>
           <li class="fav">
                <div class="heading">
                    <div class="title">Movies</div>
                    <div class="seeAll" @click="see('movies')">see all</div>
                </div>
                <div class="content">
                    <div class="card" v-for="(item, ind) in randomMovies" :key="ind">
                        <v-lazy-image :src="getImage(item.backdrop_path)" class="image" />
                        <span class="title">{{item.title}}</span>
                    </div>
                </div>
            </li>
            <li class="fav">
                <div class="heading">
                    <div class="title">TV/Web Shows</div>
                    <div class="seeAll" @click="see('tv')">see all</div>
                </div>
                <div class="content">
                    <div class="card" v-for="(item, ind) in randomTvs" :key="ind">
                        <img :src="getImage(item.backdrop_path)" class="image">
                        <span class="title">{{item.name}}</span>
                    </div>
                </div>
            </li>
            <!-- <li class="fav">
                <div class="heading">
                    <div class="title">Books</div>
                    <div class="seeAll" @click="see(books)">see all</div>
                </div>
                <div class="content">
                    <div class="card" v-for="(item, ind) in content[2].best" :key="ind">
                        <img :src="getImage(item.thumb)" class="image">
                        <span class="title">{{item.name}}</span>
                    </div>
                </div>
            </li> -->
        </ul>
    </div>
</template>

<script src="./favourites.js"></script>

<style lang="scss" scoped>
@import '../../assets/css/design.scss';
@import '../../assets/css/firefly.scss';
@import './favourites.scss';
</style>