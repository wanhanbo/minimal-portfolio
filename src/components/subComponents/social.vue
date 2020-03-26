<template>
    <div class="icons">
        <div class="icon"><img class="iconImg" src="../../assets/icons/facebook.png" alt=""></div>
        <div class="icon"><img class="iconImg" src="../../assets/icons/instagram.png" alt=""></div>
        <div class="icon"><img class="iconImg" src="../../assets/icons/quora.png" alt=""></div>
        <div class="icon"><img class="iconImg" src="../../assets/icons/linkedin-logo.png" alt=""></div>
        <div class="icon"><img class="iconImg" src="../../assets/icons/github-image.png" alt=""></div>
    </div>
</template>
<script>
export default {
    name: 'Social'
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