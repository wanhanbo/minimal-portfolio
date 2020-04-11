import Header from '../../subComponents/header';
import Social from '../../subComponents/social';
import BuzzerButton from '../../subComponents/buzzerButton';
import { home } from '../../portfolio.js';
export default {
  name: 'Home',
  components: {
    Header,
    Social,
    BuzzerButton
  },
  mounted () {
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
  },
  computed: {
    isMobile () {
      return (((window.innerWidth > 0) ? window.innerWidth : screen.width) < 1200) ? true : false;
    }
  }
}