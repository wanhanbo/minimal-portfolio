<template>
    <div class="cardContainer">
        <div :class="{cover: true}">
            <v-lazy-image class="certi" :src="getImage(details.thumb)" />
        </div>
        <div :class="{box: true}">
            <div class="title">
                {{details.title}}
                <div class="strip"></div>
            </div>
            <div class="tech">
                <span class="tag" v-for="(tool, index) in details.outcome" :key="index">{{tool}} </span>
            </div>
            <div class="experience">
                {{details.about}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'InternshipCard',
    props: {
        details: Object
    },
    components: {},
    data () {
        return {
        }
    },
    created () {
    },
    methods: {
        getImage (path) {
            return require('../assets/images/certificates/' + path);
        },
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/design.scss';
.cardContainer {
    text-align: center;
    margin: 1%;
    .cover {
        height: 75vh;
        overflow: hidden;
        align-self: end;
        justify-self: end;
        .certi {
            width: 70%;
        }
    }
    .box {
        width: 70%;
        text-align: right;
        padding-top: 10%;
        .title {
            font-size: 1.5em;
            font-weight: 600;
            .strip {
                background: $purple;
                z-index: 1;
                height: 2vh;
                width: 130%;
                position: relative;
                right: 30%;
            }
        }
        .tech {
            width: 100%;
            line-height: 2.5;
            font-size: 12px;
            text-align: right;
            margin: 5% 0% 10% 0%;
            .tag {
                background: white;
                color: black;
                padding: 1%;
                margin: 1% 2% 1% 0%;
            }
        }
        .experience {
            font-size: 1em;
            font-weight: 500;
        }
    }
}
@media only screen and (min-device-width: 1200px){
    .cardContainer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}
@media only screen and (max-device-width: 1199px){
    .cardContainer {
        .cover {
            height: 45vh;
        }
        .box {
            .title {
                font-size: 1.2em;
                .strip {
                    width: 160%;
                    right: 0%;
                    left: 33%;
                    transform: rotateZ(90deg);
                    bottom: 0%;
                    top: 104%;
                }
            }
            .tech {
                margin: 1% 0% 2% 0%;
            }
            .experience {
                font-size: 0.8em;
            }
        }
    }
}
</style>