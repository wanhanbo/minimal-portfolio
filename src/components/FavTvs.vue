<template>
    <div class="fav">
        <div class="firefly" v-for="i in 15"></div>
        <div class="heading">
            <div class="title">Favourite TV Shows/Web Series</div>
        </div>
        <div class="content">
            <div class="card" v-for="(tv, index) in allTvs" :key="index">
                <img :src="getImage(tv.thumb)" class="image">
            </div>
        </div>
    </div>
</template>
<script>
import { favourites } from '../portfolio.js'
export default {
    name: 'FavTvs',
    data () {
        return {
            allTvs: []
        }
    },
    created () {
        this.allTvs = favourites.tv;
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
@import './css/firefly.scss';
    .fav {
        margin: 3% 5% 2% 5%;
        .heading {
            display: grid;
            .title {
                font-size: 2em;
                text-align: center;
                font-weight: 600;
                @media only screen and (max-device-width: 1199px) {
                    font-size: 1.3em;
                    text-align: center;
                    width: 100%;
                    margin: 2% 2% 10% 2%;
                }
            }
            .filter {
                justify-self: right;
            }
        }
        .content {
            display: grid;
            @media only screen and (min-device-width: 1200px) {
                grid-template-columns: repeat(4, 1fr);
                grid-column-gap: 5%;
                grid-row-gap: 5%;
                margin: 2%;
            }
            .card {
                border-radius: 1px;
                height: 40vh;
                @media only screen and (max-device-width: 1199px) {
                    margin: 10% 5%;
                    overflow: scroll;
                    height: 65vh;
                }
                .strip {
                    width: 60%;
                    height: 10px;
                    background: brown;
                    position: relative;
                    top: 60%;
                    right: 10%;
                }
                .title {
                        position: relative;
                        top: 60%;
                        right: 47%;
                        display: grid;
                        justify-items: end;
                        align-items: end;
                        text-align: left;
                        font-size: 1.3em;
                }
            }
        }
    }
</style>