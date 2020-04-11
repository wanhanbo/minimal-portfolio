import Header from '../../subComponents/header';
import { favourites } from '../../portfolio.js';
export default {
    name: 'Favourites',
    components: {
        Header
    },
    data () {
        return {
            movies: [],
            tvs: [],
            books: [],
            content: []
        }
    },
    mounted () {
    },
    created () {
        this.content = favourites;
    },
    methods: {
        see (id) {
            // console.log(fav)
            this.$router.push({path: `/favourites/${id}`})
        },
        getImage (path) {
            return require('../../assets/images/' + path);
        }
    }
}