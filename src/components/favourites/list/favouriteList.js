import { favourites } from '../../../portfolio.js'
export default {
    name: 'FavouriteList',
    data () {
        return {
            content: {}
        }
    },
    created () {
        var kind = this.$route.params.kind;
        this.content = favourites.filter(function(fav){
            return fav.id == kind
        })[0];
    },
    methods: {
        getImage (path) {
            return require('../../../assets/images/' + path);
        },
        goBack () {
            this.$router.push({name: 'Favourites'});
        }
    }
}