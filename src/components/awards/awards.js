import Header from '../../subComponents/header';
import { awards } from '../../portfolio.js';
import AchievementCard from '../../subComponents/achievementCard';
export default {
    name: 'Awards',
    components: {
        Header,
        AchievementCard
    },
    data () {
        return {
            content: []
        }
    },
    created () {
        this.content = awards;
    }
}