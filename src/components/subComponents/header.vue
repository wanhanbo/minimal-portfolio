<template>
    <div class="header">
        <div class="left" @click="goTo(0)"><span>{{ headerList[0]}}</span></div>
        <div class="center" @click="goTo(1)"><span>{{ headerList[1]}}</span></div>
        <div class="right" @click="goTo(2)"><span>{{ headerList[2]}}</span></div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        headerList: Array
    },
    data () {
        return {

        }
    },
    methods: {
        goTo(page) {
            this.$router.push({name: this.headerList[page]})
        }
    }
}
</script>
<style lang="scss" scoped>
    .header {
        display: grid;
        grid-template-columns: 38% 25% 37%;
        align-items: center;
        span {
            cursor:pointer;
        }
        .left {
            text-align: right !important;
        }
        .center {
            font-size: 3em;
            font-weight: 600;
            color: #6bbd8c;
        }
        .right {
            text-align: left !important;
        }
    }
</style>