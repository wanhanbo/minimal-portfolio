import Header from '../../subComponents/header';
import { TMDB } from '../../portfolio.js';
import Axios from 'axios';
export default {
    name: 'Favourites',
    components: {
        Header
    },
    data () {
        return {
            movies: [],
            randomMovies: [],
            tvs: [],
            randomTvs: []
        }
    },
    mounted () {
        this.getMovies();
    },
    created () {},
    methods: {
        see (id) {
            // console.log(fav)
            this.$router.push({name: 'FavouriteList', params: {kind: id}});
        },
        getImage (path) {
            // return require('../../assets/images/' + path);
            return 'https://image.tmdb.org/t/p/w300'+path;
        },
        getRandom(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        },
        generateRandomContent (content) {
            let rand = this.getRandom(0, content.length - 4);
            return content.slice(rand, rand+3);
        },
        async getMovies () {
            let account_id = atob(TMDB.TMDB_ACCOUNT_ID);
            let api_key = atob(TMDB.TMDB_API_KEY);
            let session_id = atob(TMDB.TMDB_SESSION_ID);

            let resp = await Axios.get(`https://api.themoviedb.org/3/account/${account_id}/favorite/movies?api_key=${api_key}&session_id=${session_id}`);
            this.movies = resp.data.results
            this.randomMovies = this.movies.filter(movie => movie.backdrop_path != null );
            this.randomMovies = this.generateRandomContent(this.randomMovies);

            resp = await Axios.get(`https://api.themoviedb.org/3/account/${account_id}/favorite/tv?api_key=${api_key}&session_id=${session_id}`);
            this.tvs = resp.data.results
            this.randomTvs = this.tvs.filter(tv => tv.backdrop_path != null );
            this.randomTvs = this.generateRandomContent(this.randomTvs);
        }
    }
}