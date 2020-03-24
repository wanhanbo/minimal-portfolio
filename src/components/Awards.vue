<template>
    <div>
        <Header :headerList=headerList />
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
    .podium {
        margin: 10% 25%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, minmax(120px, 1fr));
        .stand {
            border-radius: 4px;
            -webkit-box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
            -moz-box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
            box-shadow: 0px 0px 5px 0px rgba(107,189,140,1);
            .rank {
                font-size: 2em;
                margin-top: 4%;
                font-weight: 600;
                color: brown;
            }
            .event {
                margin-top: 10%;
                padding: 1%;
                font-size: 1.1em;
            }
            .product {
                font-size: 1em;
            }
        }
        #row2_1 {
            position: relative;
            left: 50%;
        }
        #row2_2 {
            position: relative;
            left: -50%;
        }
    }
</style>