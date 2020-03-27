<template>
    <div>
        <div class="fav">
            <div class="heading">
                <div class="title">Movies</div>
                <div class="seeAll" @click="see('Movies')">see all</div>
            </div>
            <div class="content">
                <div class="card" v-for="(movie, index) in movies" :key="index">
                    <img :src="getImage(movie.pic)" class="image">
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
                    <img :src="getImage(tv.pic)" class="image">
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
                    <img :src="getImage(book.pic)" class="image">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './subComponents/header'
export default {
    name: 'Favourites',
    components: {
        Header
    },
    data () {
        return {
            movies: [
                {
                    name: 'The Terminal',
                    pic: 'theTerminalSmall.png'
                },
                {
                    name: 'Parasite',
                    pic: 'parasiteSmall.png'
                },
                {
                    name: 'Zindagi Na Milegi Dobara',
                    pic: 'znmdSmall.png'
                },
                {
                    name: 'Yes Man',
                    pic: 'yesManSmall.png'
                }
            ],
            tvs: [
                {
                    name: 'Silicon Valley',
                    pic: 'siliconValleySmall.png'
                },
                {
                    name: 'Money Heist',
                    pic: 'moneyHeistSmall.png'
                },
                {
                    name: 'TVF Pitchers',
                    pic: 'pitchersSmall.png'
                },
                {
                    name: 'Friends',
                    pic: 'friendsSmall.png'
                }
            ],
            books: [
                {
                    name: 'Shoe Dog: Phil Knight',
                    pic: 'shoeDogSmall.png'
                },
                {
                    name: 'Crushing It: Gary Vaynerchuk',
                    pic: 'crushingItSmall.png'
                },
                {
                    name: 'Think & Grow Rich: Napoleon Hill',
                    pic: 'thinkAndGrowRichSmall.png'
                },
                {
                    name: 'Rich Dad Poor Dad: Robert Kiyosaki',
                    pic: 'richDadPoorDadSmall.png'
                }
            ]
        }
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
                font-size: 0.6em;
                color: grey;
                cursor: pointer;
            }
        }
        .content {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-column-gap: 3%;
            margin: 2% 0%;
            .card {
                width: 100%;
                border-radius: 4px;
                -webkit-box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
                -moz-box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
                box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
                height: 120px;
                .image {}
            }
        }
    }
</style>