import Header from '../../subComponents/header';
import Card from '../../subComponents/card';
import Internship from '../../subComponents/InternshipCard'
import OpenSourceCard from '../../subComponents/openSourceCard';
import BuzzerButton from '../../subComponents/buzzerButton';
import { work } from '../../portfolio.js'
export default {
    name: 'Work',
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
    data () {
        return {
            content: {}
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
        }
    },
    computed: {
        isMobile () {
            return (((window.innerWidth > 0) ? window.innerWidth : screen.width) < 1200) ? true : false;
        }
    }
}