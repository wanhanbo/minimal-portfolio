<template>
    <div>
        <Header :headerList=headerList />
        <div class="row">
            <div class="col">
                <div class="title">Blibli Game Voucher UX Enhancements</div>
                <div class="strip"></div>
            </div>
            <div class="col">
                <div class="title">Blibli Game Voucher UX Enhancements</div>
                <div class="strip"></div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="title">Blibli Game Voucher UX Enhancements</div>
                <div class="strip"></div>
            </div>
            <div class="col">
                <div class="title">Blibli Game Voucher UX Enhancements</div>
                <div class="strip"></div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './subComponents/header'
export default {
    name: 'Work',
    components: {
        Header
    },
    data () {
        return {
            headerList: ['Awards', 'Work', 'Favourites']
        }
    }
}
</script>
<style lang="scss" scoped>
    .row {
        display: grid;
        grid-template-columns: 50% 50%;
        margin: 15% 1%;
        .col {
            margin: 2% 30%;
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
                right: 40%;
            }
            .title {
                position: relative;
                top: 60%;
                right: 41%;
                display: grid;
                justify-items: end;
                align-items: end;
                text-align: left;
                font-size: 1.3em;
            }
        }
    }
</style>