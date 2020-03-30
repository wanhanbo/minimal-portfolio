<template>
    <div class="icons">
        <div class="icon" v-for="link in links">
            <a :href="link.url" target="blank"><img class="iconImg" :src="getImage(link)"></a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Social',
    data () {
        return {
            links: [
                {
                    url: 'https://www.linkedin.com/in/rahuldkjain/',
                    source: 'linkedin-logo'
                },
                {
                    url: 'https://github.com/rahuldkjain',
                    source: 'github-image'
                },
                {
                    url: 'https://www.quora.com/profile/Rahul-Jain-1489',
                    source: 'quora'
                },
                {
                    url: 'https://instagram.com/rahul_dk_jain',
                    source: 'instagram'
                },
                {
                    url: 'https://www.facebook.com/rahuljain997',
                    source: 'facebook'
                }
            ]
        }
    },
    methods: {
        getImage (link) {
            return require('../../assets/icons/' + link['source'] + '.png');
        }
    }
}
</script>
<style lang="scss" scoped>
    .icons {
        position: relative;
        text-align: left;
        top: 25%;
        display: grid;
        margin-left: 10%;
        @media only screen and (max-device-width: 1199px) {
            // margin-left: 30%;
            grid-template-columns: repeat(5, 20%);
            position: absolute;
            top: 85%;
            margin: 10%;
        }
        @media only screen and (min-device-width: 1200px) {
            grid-template-rows: repeat(5, 20%);
            grid-row-gap: 2%;
        }
        .icon {
            .iconImg {
                @media only screen and (max-device-width: 1199px) {
                    width: 70%;
                }
                width: 10%;
                cursor: pointer;
            } 
        }
    }
</style>