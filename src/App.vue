<template lang="pug">
  #app
    menu-lateral
    .row
      .columns
        search(v-on:search = "loadList")
        track-detail(class="is-flex")
</template>

<script>
  import MenuLateral from './components/layout/MenuLateral.vue'
  import Search from './components/Search.vue'
  import TrackDetail from './components/TrackDetail.vue'
  
  export default {
    components: { MenuLateral, Search, TrackDetail },
    name: 'app',
    data () {
      return {
        showDetail: true,
        tracks: []
      }
    },
    methods: {
      loadList (tracks) {
        this.tracks = tracks
      }
    }
  }
</script>

<style lang="scss">
@import './src/scss/main.scss';
  .columns{
    margin-left: 90px;
    flex-direction: row;
  }
</style>
