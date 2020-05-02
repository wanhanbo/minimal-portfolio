import Header from '../../subComponents/header';
import Card from '../../subComponents/card';
import Internship from '../../subComponents/InternshipCard'
import OpenSourceCard from '../../subComponents/openSourceCard';
import BuzzerButton from '../../subComponents/buzzerButton';
import { work } from '../../portfolio.js'
import { Sample } from '../../queries/sample.js';
export default {
    name: 'Work',
    apollo: {
        user: Sample
    },
    components: {
        Header,
        Card,
        Internship,
        OpenSourceCard,
        BuzzerButton
    },
    created () {
        this.content = work;
    },
    watch: {
        user: function(oldVal, newVal) {
            this.githubProjects = this.getProjects();
        }
    },
    data () {
        return {
            content: {},
            user: [],
            githubProjects: []
        }
    },
    methods: {
        getImage (path) {
            return require('../../assets/images/' + path);
        },
        display (content) {
            if (content.length > 0) {
                return true
            }
            return false
        },
        getProjects () {
            let repositories = JSON.parse(JSON.stringify(this.user)).pinnedItems.edges;
            let projects = [];
            repositories.forEach(repo => {
                let details = {
                    projectName: repo.node.name,
                    projectDescription: repo.node.description,
                    forkCount: repo.node.forkCount,
                    starCount: repo.node.stargazers.totalCount,
                    projectLink: repo.node.url,
                    projectSize: repo.node.diskUsage,
                    language: JSON.parse(JSON.stringify(repo.node.primaryLanguage))
                }
                projects = [...projects, details]
            });
            return projects;
        }
    },
    computed: {
    }
}