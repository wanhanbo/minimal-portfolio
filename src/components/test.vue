<template>
    <div >
        
    </div>
</template>
<script>
export default {
    name: 'Test',
    props: {
    },
    components: {},
    data () {
        return {
            
        }
    },
    created () {
    },
    methods: {
        getImage (path) {
            return require('../assets/images/certificates/' + path);
        },
    },
    computed: {}
}
</script>
<style lang="scss" scoped>
@import './css/design.scss';
</style>