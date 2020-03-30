<template>
    <div>
        <div class="firefly" v-for="i in 15"></div>
        <div class="podium">
            <div ></div>
            <div class="stand">
                <div class="rank">1st</div>
                <div class="event">IBM Hackathon 2017</div>
                <div class="product">Jarvis Captioniser</div>
            </div>
            <div></div>
            <div class="stand" id="row2_1">
                <div class="rank">2nd</div>
                <div class="event">Jaano India Hackathon</div>
                <div class="product">Jaano India Chatbot</div>
            </div>
            <div></div>
            <div class="stand" id="row2_2">
                <div class="rank">3rd</div>
                <div class="event">IBM ML Hackathon</div>
                <div class="product">Apna Anaaj</div>
            </div>
            <div class="stand">
                <div class="rank">1st</div>
                <div class="event">Short Film</div>
                <div class="product">Alarm</div>
            </div>
            <div class="stand">
                <div class="rank">1st</div>
                <div class="event">District Merit</div>
                <div class="product">CBSE 2015</div>
            </div>
            <div class="stand">
                <div class="rank">2rd</div>
                <div class="event">District Merit</div>
                <div class="product">RBSE 2013</div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './subComponents/header'
export default {
    name: 'Awards',
    components: {
        Header
    },
    data () {
        return {
            headerList: ['Work', 'Awards', 'Favourites']
        }
    }
}
</script>
<style lang="scss" scoped>
@import './css/design.scss';
@import './css/firefly.scss';
    .podium {
        margin: 10% 25%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, minmax(120px, 1fr));
        @media only screen and (max-device-width: 1199px) {
            margin: 10% 10%;
            grid-template-rows: repeat(3, 25vh);
        }
        .stand {
            border-radius: 1px;
            -webkit-box-shadow: 0px 0px 5px 2px $purpleXLight;
            -moz-box-shadow: 0px 0px 5px 2px $purpleXLight;
            box-shadow: 0px 0px 5px 2px $purpleXLight;
            background: $white;
            width: 100%;
            .rank {
                font-size: 2em;
                margin-top: 4%;
                font-weight: 600;
                color: $purple;
                @media only screen and (max-device-width: 1199px) {
                    font-size: 24px;
                    margin-top: 15%;
                }
            }
            .event {
                margin-top: 10%;
                padding: 1%;
                font-size: 1.1em;
                color: $black;
                @media only screen and (max-device-width: 1199px) {
                    font-size: 10px;
                    margin-top: 23%;
                }
            }
            .product {
                font-size: 1em;
                color: $gray;
                @media only screen and (max-device-width: 1199px) {
                    font-size: 8px;
                    width: 100%;
                }
            }
        }
        #row2_1 {
            position: relative;
            left: 50%;
        }
        #row2_2 {
            position: relative;
            left: -50%;
            @media only screen and (max-device-width: 1199px) {
                left: -47%;
            }
        }
    }
</style>