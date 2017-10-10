<template lang="pug">
  li.media.is-flex(v-if="track.preview_url !== null")
    i.material-icons.play(:data-id="track.id", v-on:click="selectTrack") play_arrow
    figure.media-left
      p.image.is-48x48 
        img(:src="track.album.images[2].url" class="circle")
    .content
      span.title {{track.name}}
      p
        small(v-for="artist in track.artists") {{ artist.name }}, 
    .media-right.is-right
      p 3:14
</template>
<script>
  export default{
    props: {
      track: { type: Object, required: true }
    },
    methods: {
      selectTrack () {
        this.$emit('select', this.track.id)
        this.$bus.$emit('set-track', this.track)
      }
    }
  }
</script>
<style lang="scss" scoped>

.media{
  padding: 10px 20px;
  border-top:0 !important;
  color: hsla(0,0%,100%,.6);
  cursor:initial;
}
.content{
  width: 100%;
}
.content span.title{
  margin-bottom: 0;
  font-size: 1.2em;
  line-height: 0;
  color: white;
  font-weight: 100;
}
li.media:hover{
  background-color: rgba(0,0,0,.3);
}
li.media.is-active i,
li.media.is-active span{
  color: #1db954;
  transition: .3s color linear;

}
i.play{
  line-height: 2;
  margin-right: 20px;
  cursor: pointer;
}
</style>
