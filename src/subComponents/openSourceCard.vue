<template>
    <div class="cardContainer">
        <a :href="project.projectLink" target="blank">
            <span class="projectTitle">
                <img src="../assets/icons/repo.svg" />
                <a :href="project.source" target="blank"><div class="repo">{{user}}/{{project.projectName}}</div></a>
            </span>
            <div class="description">{{project.projectDescription}}</div>
            <div class="metaProject">
                <div class="language" :style="{'color': project.language.color + '!important'}">
                    <i class="fas fa-circle"></i> 
                    <span style="color: black">{{project.language.name}}</span>
                </div>
                &emsp;
                <div class="counts">
                    <img src="../assets/icons/repo-forked.svg" />{{project.forkCount}}
                    <img src="../assets/icons/star.svg" />{{project.starCount}}
                </div>
            </div>
        </a>
    </div>
</template>
<script>
import { github } from '../portfolio.js';
export default {
    name: 'OpenSourceCard',
    props: {
        project: Object
    },
    components: {},
    data () {
        return {
            user: ''
        }
    },
    created () {
        this.user = github.username;
    },
    methods: {
        getImage (path) {
            return require('../assets/images/certificates/' + path);
        },
    },
    computed: {}
}
</script>
<style lang="scss" scoped>
@import '../assets/css/design.scss';
.cardContainer {
    a {
        color: inherit;
        text-decoration: none;
    }
    text-align: left;
    width: 400px;
    background: white;
    color: black;
    padding: 5%;
    margin: 10% 0%;
    border-radius: 4px;
    cursor: pointer;
    .projectTitle {
        display: inline-flex;
        width: 100%;
        .repo {
            font-size: 1.2em;
            font-weight: 600;
            margin-left: 5%;
            width: 100%;
        }
    }
    .description {
        font-size: 0.9em;
        color: $gray;
        font-size: 0.9em;
        line-height: 1.3em;
        max-height: 4em;
        overflow: hidden;
    }
    .metaProject {
        display: inline-flex;
        width: 100%;
        margin-top: 2%;
        .language {
            width: 50%;
            display: flex;
            align-items: center;
            svg {
                font-size: 10px;
                margin-right: 2%;
            }
        }
        .counts {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: right;
            padding-right: 2%;
            img {
                padding: 0 2%;
            }
        }
    }
    svg {
        margin: 0 2%;
    }
}
@media only screen and (max-device-width: 1199px){
    .cardContainer {
        width: 300px;
        .projectTitle {
            .repo {
                font-size: 1em;
                font-weight: 600;
            }
        }
        .metaProject {
            .language {
                font-size: 10px;
                svg {
                    font-size: 0.5em;
                }
            }
        }
        .description {
            font-size: 0.6em;
        }
    }
}
</style>