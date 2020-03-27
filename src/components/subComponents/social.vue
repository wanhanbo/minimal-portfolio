<template>
    <div class="icons">
        <div class="icon" v-for="link in links">
            <a :href="link.url" target="blank"><img class="iconImg" :src="getImage(link)"></a>
        </div>
        <!-- <div class="icon"><a :href="links.quora"><img class="iconImg" src="../../assets/icons/quora.png"></a></div>
        <div class="icon"><a :href="links.linkedin"><img class="iconImg" src="../../assets/icons/linkedin-logo.png"></a></div>
        <div class="icon"><a :href="links.github"><img class="iconImg" src="../../assets/icons/github-image.png"></a></div>
        <div class="icon"><a :href="links.fb" target="blank"><img class="iconImg" src="../../assets/icons/facebook.png"></a></div> -->
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
        margin-left: 10%;
        top: 25%;
        display: grid;
        grid-template-rows: repeat(5, 20%);
        grid-row-gap: 2%;
        .icon {
            .iconImg {
                width: 10%;
                cursor: pointer;
            } 
        }
    }
</style>