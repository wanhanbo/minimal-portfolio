<template>
    <div class="icons">
        <ul>
            <li>
                <a :href="socialDetails.linkedin" target="blank"><i class="fab fa-linkedin"></i></a>
            </li>
            <li>
                <a :href="socialDetails.github" target="blank"><i class="fab fa-github"></i></a>
            </li>
            <li>
                <a :href="socialDetails.quora" target="blank"><i class="fab fa-quora"></i></a>
            </li>
            <li>
                <a :href="socialDetails.instagram" target="blank"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
                <a :href="socialDetails.facebook" target="blank"><i class="fab fa-facebook"></i></a>
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
        padding: 0;
        list-style-type: none;
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
            li {
                display: inline;
            }
        }
    }
    i, svg {
        font-size: 2em;
    }
}
</style>