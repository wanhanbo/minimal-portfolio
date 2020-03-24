<template>
    <div>
        <Header :headerList=headerList />
        <div class="fav">
            <div class="heading">
                <div class="title">Movies</div>
                <div class="seeAll" @click="see('Movies')">see all</div>
            </div>
            <div class="content">
                <div class="card">1</div>
                <div class="card">1</div>
                <div class="card">1</div>
                <div class="card">1</div>
            </div>
        </div>
        <div class="fav">
            <div class="heading">
                <div class="title">TVs</div>
                <div class="seeAll" @click="see('Tvs')">see all</div>
            </div>
            <div class="content">
                <div class="card">1</div>
                <div class="card">1</div>
                <div class="card">1</div>
                <div class="card">1</div>
            </div>
        </div>
        <div class="fav">
            <div class="heading">
                <div class="title">Books</div>
                <div class="seeAll" @click="see('Books')">see all</div>
            </div>
            <div class="content">
                <div class="card">1</div>
                <div class="card">1</div>
                <div class="card">1</div>
                <div class="card">1</div>
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
            headerList: ['Work', 'Favourites', 'Awards']
        }
    },
    methods: {
        see (fav) {
            console.log(fav)
            this.$router.push({name: 'Fav'+fav})
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
            }
        }
    }
</style>