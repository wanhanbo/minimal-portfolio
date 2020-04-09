<template>
    <div class="icons">
        <ul>
            <li>
                <a :href="socialDetails.linkedin.link" target="blank"><i class="fab fa-linkedin"></i></a>
            </li>
            <li>
                <a :href="socialDetails.github.link" target="blank"><i class="fab fa-github"></i></a>
            </li>
            <li>
                <a :href="socialDetails.quora.link" target="blank"><i class="fab fa-quora"></i></a>
            </li>
            <li>
                <a :href="socialDetails.instagram.link" target="blank"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
                <a :href="socialDetails.facebook.link" target="blank"><i class="fab fa-facebook"></i></a>
            </li>
        </ul>
    </div>
</template>
<script>
import { social } from '../portfolio.js';
export default {
    name: 'Social',
    data () {
        return {
            socialDetails: []
        }
    },
    created () {
        this.socialDetails = social;
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.icons {
    ul {
        list-style-type: none;
        position: absolute;
        left: 1%;
        top: 25%;
    }
}
i, svg {
    color: white !important;
    font-size: 3em;
    margin: 15% 2%;
    cursor: pointer;
}
@media only screen and (max-device-width: 1199px) {
    .icons {
        ul {
            position: absolute;
            top: 90%;
            width: 80%;
            li {
                display: inline;
            }
        }
    }
    i, svg {
        font-size: 2em;
    }
}
@media only screen and (max-device-height: 812px) and (max-device-width: 375px){
  .icons {
        ul {
            top: 85%;
        }
    }
}

@media only screen and (max-device-height: 667px) and (max-device-width: 375px) {
    .icons {
        ul {
            top: 95%;
        }
    }
}
</style>