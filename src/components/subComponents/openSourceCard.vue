<template>
    <div class="cardContainer">
        <a :href="project.source" target="blank"><div class="repo">{{project.repo}}</div></a>
        <div class="description">{{project.about}}</div>
        <span class="language"><i class="fas fa-circle"></i> {{project.language}}</span>
        &emsp;
        <span>
            <i class="fas fa-code-branch"></i>{{project.forkCount}}
            <i class="fas fa-star"></i>{{project.starCount}}
        </span>
    </div>
</template>
<script>
export default {
    name: 'OpenSourceCard',
    props: {
        project: Object
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
            return require('../../assets/images/certificates/' + path);
        },
    },
    computed: {}
}
</script>
<style lang="scss" scoped>
@import '../css/design.scss';
.cardContainer {
    a {
        color: inherit;
        text-decoration: none;
    }
    text-align: left;
    width: 400px;
    background: white;
    color: black;
    padding: 2%;
    margin: 4% 0%;
    .repo {
        font-size: 1.2em;
        font-weight: 600;
    }
    .language {
        svg {
            font-size: 10px;
            color: yellow;
        }
    }
    .description {
        font-size: 0.9em;
        color: $gray;
    }
    svg {
        margin: 0 2%;
    }
}
@media only screen and (max-device-width: 1199px){
    .cardContainer {
        width: 300px;
        .repo {
            font-size: 1em;
            font-weight: 600;
        }
        .language {
            font-size: 10px;
            svg {
                font-size: 0.5em;
            }
        }
        .description {
            font-size: 0.6em;
        }
    }
}
</style>