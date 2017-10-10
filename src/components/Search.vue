<template lang="pug">
  .column
    .input-box
      p Busca tus canciones o artistas favoritos
      input.input(placeholder="Escribir...", type="text",  v-on:keyup.enter="search", v-model="searchQuery")
      p
        small(v-show="showSearchMessage") {{ searchMessage }}
    .column.list-music
      ul
        template(v-for="t in tracks")
          pv-track(:track = "t", :key= "t.id", v-on:select="setSelectedTrack", v-bind:class="{'is-active': t.id === selectedTrack}")
</template>

<script>
  import trackService from '../services/track'
  import PvTrack from './Track.vue'
  export default {
    components: { PvTrack },
    data () {
      return {
        tracks: [],
        searchQuery: '',
        showSearchMessage: false,
        selectedTrack: ''
      }
    },
    methods: {
      search () {
        this.showSearchMessage = true
        if (!this.searchQuery) { return }
        trackService.search(this.searchQuery)
          .then(res => {
            this.tracks = res.tracks.items
            this.$emit('search', this.tracks)
          })
      },
      setSelectedTrack (id) {
        this.selectedTrack = id
      }
    },
    computed: {
      searchMessage () {
        return `Encontrados: ${this.tracks.length}`
      }
    }
  }
</script>
<style lang="scss">
.column{
  padding: 0;
}
input[type=text]::placeholder { opacity: .1; }
.input-box {
    position: relative;
    background-color: #282828;
    padding-top:20px;
    padding-left: 2em;
}


input[type=text]:focus{
  border-bottom: none !important;
  box-shadow: none !important;
}

input[type=text]{
    caret-color: #1db954;
    line-height: 1.6em;
    box-sizing: border-box;
    width: 100%;
    background-color: transparent;
    border: none !important;
    color: #fff;
    font-weight: 700;
    font-size: 2.3rem !important;
    line-height: 1.6;
}
.list-music ul{
  padding: 10px 0px;

}

.content{
  width: 100%;
}

</style>
