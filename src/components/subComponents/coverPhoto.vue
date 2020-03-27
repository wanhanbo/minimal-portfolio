<template>
    <div class="cover">
        <img class="coverPhoto" src="../../assets/images/Rahul.png">
        <div class="strip"></div> 
    </div>
</template>

<script>
export default {
  name: 'coverPhoto',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style scoped lang="scss">
    .cover {
        z-index: 1;
        position: relative;
        margin: 20% 5%;
        .coverPhoto {
          width: 90%;
          position: relative;
          left: 50%;
          z-index: 1;
          border-radius: 4px;
          -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
          -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
          box-shadow: 5px 5px 5px 0px #6bbd8c;
          }
        .strip {
          z-index: 1;
          position: absolute;
          top: 15%;
          left: 120%;
          width: 40%;
          height: 2%;
          background-color: #BD8567;
        }
    }
</style>
