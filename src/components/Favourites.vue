<template>
    <div>
        <div class="fav">
            <div class="heading">
                <div class="title">Movies</div>
                <div class="seeAll" @click="see('Movies')">see all</div>
            </div>
            <div class="content">
                <div class="card" v-for="(movie, index) in movies" :key="index">
                    <img :src="getImage(movie.thumb)" class="image">
                </div>
            </div>
        </div>
        <div class="fav">
            <div class="heading">
                <div class="title">TVs</div>
                <div class="seeAll" @click="see('Tvs')">see all</div>
            </div>
            <div class="content">
                <div class="card" v-for="(tv, index) in tvs" :key="index">
                    <img :src="getImage(tv.thumb)" class="image">
                </div>
            </div>
        </div>
        <div class="fav">
            <div class="heading">
                <div class="title">Books</div>
                <div class="seeAll" @click="see('Books')">see all</div>
            </div>
            <div class="content">
                <div class="card" v-for="(book, index) in books" :key="index">
                    <img :src="getImage(book.thumb)" class="image">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './subComponents/header';
import { favourites } from '../portfolio.js';
export default {
    name: 'Favourites',
    components: {
        Header
    },
    data () {
        return {
            movies: [],
            tvs: [],
            books: []
        }
    },
    created () {

        this.movies = favourites.best4Movies;
        this.tvs = favourites.best4Tv;
        this.books = favourites.best4Books;
        
    },
    methods: {
        see (fav) {
            console.log(fav)
            this.$router.push({name: 'Fav'+fav})
        },
        getImage (path) {
            return require('../assets/images/' + path);
        }
    }
}
</script>
<style lang="scss" scoped>
    .fav {
        margin: 1% 5%;
        .heading {
            display: grid;
            grid-template-columns: 50% 50%;
            .title {
                font-size: 1.2em;
                text-align: left;
                font-weight: 600;
            }
            .seeAll {
                text-align: right;
                font-size: 0.8em;
                color: grey;
                cursor: pointer;
                align-self: center;
            }
        }
        .content {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-column-gap: 3%;
            margin: 2% 0%;
            @media only screen and (max-device-width: 1199px) {
                overflow: scroll;
            }
            .card {
                width: 100%;
                border-radius: 4px;
                height: 120px;
                .image {}
            }
        }
    }
</style>