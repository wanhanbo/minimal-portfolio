<template>
<div ontouchstart="">
  <div class="button">
    <a :href="link" :target="target">{{placeholder}}</a>
</div>
</div>


</template>
<script>
export default {
    name: 'BuzzerButton',
    props: {
        link: String,
        placeholder: String,
        target: String
    },
    components: {
    },
    data () {
        return {
        }
    },
    created () {
    },
    methods: {
    },
    computed: {}
}
</script>
<style lang="scss" scoped>
@import '../assets/css/design.scss';
body{
  text-align:center;
}

.button{
  position:relative;
  display:inline-block;
  margin:20px;
}

.button a{
  color:white;
  font-family: 'Poppins';
  font-weight:bold;
  font-size:18px;
  @media only screen and (max-device-width: 1199px) {
      font-size: 14px;
  }
  text-align: center;
  text-decoration:none;
  background-color: $purpleXLight;
  display:block;
  position:relative;
  padding:10px 30px;
  
  -webkit-tap-highlight-color: $gray;
  text-shadow: 0px 1px 0px $gray;
  filter: dropshadow(color=$gray, offx=0px, offy=1px);
  
  -webkit-box-shadow:inset 0 1px 0 $neonWhite, 0 10px 0 $purple;
  -moz-box-shadow:inset 0 1px 0 $neonWhite, 0 10px 0 $purple;
  box-shadow:inset 0 1px 0 $neonWhite, 0 10px 0 $purple;
  
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.button a:active{
  top:10px;
  background-color:$purple;
  
  -webkit-box-shadow:inset 0 1px 0 $neonWhite, inset 0 -3px 0 $purple;
  -moz-box-shadow:inset 0 1px 0 $neonWhite, inset 0 -3pxpx 0 $purple;
  box-shadow:inset 0 1px 0 $neonWhite, inset 0 -3px 0 $purple;
}

.button:after{
  content:"";
  height:100%;
  width:100%;
  padding:4px;
  position: absolute;
  bottom:-15px;
  left:-4px;
  z-index:-1;
  background-color:$gray;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
</style>