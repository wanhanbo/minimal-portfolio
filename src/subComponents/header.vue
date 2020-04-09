<template>
    <div class="header">
        <div class="logo" @click="goTo('Home')">
            <span class="highlight">&lt;</span><span class="logoText">{{content.logoText}}</span><span class="highlight">/&gt;</span>
        </div>
        <div class="menu">
            <ul>
                <li @click="goTo('Work')" :class="{active: isWork}">
                    <div class="item">
                        {{content.work}}<span class="lightHighlight">/&gt; </span>
                    </div>
                </li>
                <li @click="goTo('Awards')" :class="{active: isAwards}">
                    <div class="item">
                        {{content.awards}}<span class="lightHighlight">/&gt; </span>
                    </div>
                </li>
                <li @click="goTo('Favourites')" :class="{active: isFavourites}">
                    <div class="item">
                        {{content.favourites}}<span class="lightHighlight">/&gt; </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { header } from '../portfolio.js';
export default {
    name: 'Header',
    props: {
        
    },
    data () {
        return {
            currentPage: '',
            content: {}
        }
    },
    created () {
        this.content = header;
    },
    methods: {
        goTo(page) {
            this.currentPage = page
            this.$router.push({name: page})
        }
    },
    computed: {
        isWork: function () {
            return this.currentPage == 'Work'
        },
        isAwards: function () {
            return this.currentPage == 'Awards'
        },
        isFavourites: function () {
            return this.currentPage == 'Favourites'
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/design.scss';
@import '../assets/css/firefly.scss';
    .header {
        display: grid;
        @media only screen and (max-device-width: 1199px) {
            grid-template-columns: 25% 75%;
        }
        grid-template-columns: 30% 70%;
        align-items: center;
        .logo {
            @media only screen and (max-device-width: 1199px) {
                margin-left: 4%;
                font-size: 20px;
            }
            margin-left: 8%;
            text-align: left;
            font-size: 2em;
            font-weight: 600;
            cursor: pointer;
            .logoText {
                font-family: 'VT323-Regular';
                text-transform: uppercase;
                font-size: 1.8em;
            }
        }
        .menu {
            width: 100%;
            ul {
                list-style: none;
                text-align: right;
                li {
                    color: $lightGray;
                    display: inline;
                    @media only screen and (max-device-width: 1199px) {
                        font-size: 12px;
                    }
                    font-size: 1.4em;
                    margin: 1%;
                    cursor: pointer;
                }
            }
            .item {
                display: inline;
                transition: color 0.1s ease-in;
                &:hover {
                    color: $white !important;
                }
            }
            .active {
                display: inline;
                color: $white !important;
            }
        }
        .highlight {
            color: $purple;
            font-weight: 600;
        }
        .lightHighlight {
            color: $purpleXLight;
        }
    }
</style>