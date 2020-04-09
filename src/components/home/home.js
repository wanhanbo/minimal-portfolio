import Header from '../../subComponents/header';
import Social from '../../subComponents/social';
import { home } from '../../portfolio.js';
import { SemipolarSpinner  } from 'epic-spinners';
export default {
  name: 'Home',
  components: {
    Header,
    Social,
    SemipolarSpinner
  },
  mounted () {
    this.$refs.homepage.style.display = 'none';
    setTimeout(() => {
      this.$refs.loader.style.display = 'none'; 
      this.$refs.homepage.style.display = ''; 
      }, 2100);
  },
  created () {
    this.content = home;
  },
  data () {
    return {
      content: {}
    }
  },
  methods: {
    getImage(path) {
      return require('../../assets/images/'+path);
    }
  }
}