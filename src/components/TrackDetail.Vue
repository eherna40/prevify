<template lang="pug">
  <transition name="slide-fade">
  .column.detail(v-bind:class="[ isLoaded ? 'is-5' : 'is-1' ]", v-if="track && track.id")
    .hero.is-medium
      .hero-head.has-text-centered
        .background-img(:style="'background-image: url(' + background  + ') !important'")
        .is-flex.wrapper
          figure()
            img.image.is-96x96.has-text-centered(:src="track.album.images[0].url")
          p.title {{track.name}}
          p
            small {{track.artists[0].name}}
          p 
            small Rate: {{ track.popularity}}%
      .hero-body
        button.button(v-on:click="play")
          i.material-icons {{playPause}}
        audio(id="audio",controls, :src="track.preview_url" class="is-hidden")
  </transition>
</template>
<script>
  export default{
    data () {
      return {
        track: {},
        background: '',
        isPlaying: false,
        audio: '',
        playPause: 'play_arrow',
        isLoaded: false
      }
    },
    created () {
      this.$bus.$on('set-track', (track) => {
        this.track = track
        this.background = track.album.images[0].url
        console.log(this.track)
      })
    },
    mounted () {
      this.isLoaded = true
    },
    methods: {
      play () {
        this.audio = document.getElementById('audio')
        if (this.isPlaying) {
          this.playPause = 'play_arrow'
          this.audio.pause()
          this.isPlaying = false
          console.log('play')
        } else {
          this.playPause = 'pause'
          this.audio.play()
          this.isPlaying = true
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .detail{
    height: 100vh;
    transition: 1s all linear;
    transition: all 1s linear;

  }
  .column{
    flex-grow: 0;
  }
  .hero{
    width: 100%
  }
  .hero-head{
    height: 60vh;
    position: relative;
    overflow: hidden;
  }
  .hero-head figure{
    margin-bottom: 10px;
  }
  .background-img{
    top: 0;
    left: 0;
    filter: blur(38px);
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    z-index: -1;
    opacity: .5;
    transition: .2s linear all;
  }
  .wrapper{
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: white;
    z-index: 2;
    flex-direction: column;
  }
  .wrapper p.title{
    margin: 0;
    color:white;
  }
  .hero-body{
    position: relative;
    margin: 0 auto;
  }
  .hero-body .button{
    position: absolute;
    top: -10px;
    text-align: center;
    left: -41px;
    display: flex;
    padding: 5px 80% 5px 80%;
    border-radius: 30px;
    background: #1db954;
    border: 0;
    color: white;
  }
  .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
