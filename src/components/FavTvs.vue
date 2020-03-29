<template>
    <div class="fav">
        <div class="firefly" v-for="i in 15"></div>
        <div class="heading">
            <div class="title">Favourite TV Shows/Web Series</div>
        </div>
        <div class="content">
            <div class="card" v-for="(tv, index) in allTvs" :key="index">
                <img :src="getImage(tv.pic)" class="image">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FavTvs',
    data () {
        return {
            allTvs: [
                {
                    name: '13 Reasons Why',
                    pic: '13reasons.png'
                },
                {
                    name: 'The Big Bang Theory',
                    pic: 'bbt.png'
                },
                {
                    name: 'TVF Cubicles',
                    pic: 'cubicles.png'
                },
                {
                    name: 'Flames',
                    pic: 'flames.png'
                },
                {
                    name: 'Friends',
                    pic: 'friends.png'
                },
                {
                    name: "I'm Mature",
                    pic: 'immature.png'
                },
                {
                    name: 'Kota Factory',
                    pic: 'kotaFactory.png'
                },
                {
                    name: 'Money Heist',
                    pic: 'moneyHeist.png'
                },
                {
                    name: 'Operation MBBS',
                    pic: 'opMBBS.png'
                },
                {
                    name: 'TVF Pitchers',
                    pic: 'pitchers.png'
                },
                {
                    name: 'Silicon Valley',
                    pic: 'silicon.png'
                },
                {
                    name: 'TVF Tripling',
                    pic: 'tripling.png'
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
            .filter {
                justify-self: right;
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