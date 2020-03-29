<template>
    <div class="fav">
        <div class="firefly" v-for="i in 15"></div>
        <div class="heading">
            <div class="title">Favourite Books</div>
        </div>
        <div class="content">
            <div class="card" v-for="(book, index) in allBooks" :key="index">
                <img :src="getImage(book.pic)" class="image">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FavBooks',
    data () {
        return {
            allBooks: [
                {
                    name: 'Shoe Dog: Phil Knight',
                    pic: 'shoeDog.png'
                },
                {
                    name: 'Crushing It: Gary Vaynerchuk',
                    pic: 'crushingIt.png'
                },
                {
                    name: 'Think & Grow Rich: Napoleon Hill',
                    pic: 'thinkAndGrowRich.png'
                },
                {
                    name: 'Rich Dad Poor Dad: Robert Kiyosaki',
                    pic: 'richDadPoorDad.png'
                },
                {
                    name: 'One Day In December',
                    pic: 'oneDayInDecember.png'
                }
            ]
        }
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
            grid-template-columns: repeat(2, 1fr);
            .title {
                font-size: 2em;
                text-align: left;
                font-weight: 600;
                justify-self: left;
            }
        }
        .content {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-column-gap: 5%;
            grid-row-gap: 5%;
            margin: 2%;
            .card {
                height: 250px;
                border-radius: 4px;
                -webkit-box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
                -moz-box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
                box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
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