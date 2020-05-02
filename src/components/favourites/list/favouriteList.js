import Axios from 'axios';
import { TMDB } from '../../../portfolio.js';
export default {
    name: 'FavouriteList',
    data () {
        return {
            category: '',
            list: [],
            currentPage: 1,
            totalPages: 1
        }
    },
    mounted () {
        this.getMovies(this.currentPage);
    },
    created () {
        this.category = this.$route.params.kind;
    },
    methods: {
        getImage (path) {
            return 'https://image.tmdb.org/t/p/w185'+path;
        },
        goToFav () {
            this.$router.push({name: 'Favourites'});
        },
        async getMovies (page) {
            let account_id = atob(TMDB.TMDB_ACCOUNT_ID);
            let api_key = atob(TMDB.TMDB_API_KEY);
            let session_id = atob(TMDB.TMDB_SESSION_ID);
            let resp = await Axios.get(`https://api.themoviedb.org/3/account/${account_id}/favorite/${this.category}?api_key=${api_key}&session_id=${session_id}&page=${page}`);
            this.totalPages = resp.data.total_pages;
            this.list = resp.data.results;
        },
        goBack () {
            this.scrollToTop();
            this.currentPage -= 1
            this.getMovies(this.currentPage)
        },
        goNext () {
            this.scrollToTop();
            this.currentPage += 1
            this.getMovies(this.currentPage)
        },
        scrollToTop () {
            this.$refs.container.scrollIntoView();
        }
    },
    computed: {
        hidePrev (){
            return !(this.currentPage > 1)
        },
        hideNext () {
            return !(this.totalPages > this.currentPage)
        }
    }
}